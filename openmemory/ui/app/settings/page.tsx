"use client";

import { useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SaveIcon, RotateCcw } from "lucide-react"
import { FormView } from "@/components/form-view"
import { JsonEditor } from "@/components/json-editor"
import { useConfig } from "@/hooks/useConfig"
import { useSelector } from "react-redux"
import { RootState } from "@/store/store"
import { useToast } from "@/components/ui/use-toast"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

export default function SettingsPage() {
  const { toast } = useToast()
  const configState = useSelector((state: RootState) => state.config)
  const [settings, setSettings] = useState({
    openmemory: configState.openmemory || {
      custom_instructions: null
    },
    mem0: configState.mem0
  })
  const [viewMode, setViewMode] = useState<"form" | "json">("form")
  const { fetchConfig, saveConfig, resetConfig, isLoading, error } = useConfig()

  useEffect(() => {
    // Load config from API on component mount
    const loadConfig = async () => {
      try {
        await fetchConfig()
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to load configuration",
          variant: "destructive",
        })
      }
    }
    
    loadConfig()
  }, [])

  // Update local state when redux state changes
  useEffect(() => {
    setSettings(prev => ({
      ...prev,
      openmemory: configState.openmemory || { custom_instructions: null },
      mem0: configState.mem0
    }))
  }, [configState.openmemory, configState.mem0])

  const handleSave = async () => {
    try {
      await saveConfig({ 
        openmemory: settings.openmemory,
        mem0: settings.mem0 
      })
      toast({
        title: "Settings saved",
        description: "Your configuration has been updated successfully.",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save configuration",
        variant: "destructive",
      })
    }
  }

  const handleReset = async () => {
    try {
      await resetConfig()
      toast({
        title: "Settings reset",
        description: "Configuration has been reset to default values.",
      })
      await fetchConfig()
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to reset configuration",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="min-h-screen">
      {/* Content overlay with backdrop blur */}
      <div className="relative z-10">
        <div className="container mx-auto py-10 px-6 max-w-4xl">
          {/* Page Header */}
          <div className="mb-8 text-center animate-fade-slide-down">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 text-shadow-lg" style={{ fontFamily: 'var(--font-merriweather)' }}>
              Configuration
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-inter)' }}>
              Customize your Echo AI memory system. Configure LLM providers, embedding models, and memory management settings.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center mb-8 animate-fade-slide-down animation-delay-300">
            <div className="flex space-x-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button 
                    variant="outline" 
                    className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105" 
                    disabled={isLoading}
                  >
                    <RotateCcw className="mr-2 h-4 w-4" />
                    Reset Defaults
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent className="bg-white/95 backdrop-blur-sm border border-white/20">
                  <AlertDialogHeader>
                    <AlertDialogTitle className="text-[#1C2F72]">Reset Configuration?</AlertDialogTitle>
                    <AlertDialogDescription className="text-[#333333]">
                      This will reset all settings to the system defaults. Any custom configuration will be lost.
                      API keys will be set to use environment variables.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel className="border-[#1C8BF1] text-[#1C8BF1] hover:bg-[#E1EAF9]">Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleReset} className="bg-[#F26B22] hover:bg-[#25997F] text-white">
                      Reset
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
              
              <Button 
                onClick={handleSave} 
                className="bg-[#FFC930] hover:bg-[#F26B22] text-[#1C2F72] font-semibold transition-all duration-300 hover:scale-105" 
                disabled={isLoading}
              >
                <SaveIcon className="mr-2 h-4 w-4" />
                {isLoading ? "Saving..." : "Save Configuration"}
              </Button>
            </div>
          </div>

          {/* Settings Tabs */}
          <div className="animate-fade-slide-down animation-delay-600">
            <Tabs value={viewMode} onValueChange={(value) => setViewMode(value as "form" | "json")} className="w-full">
              <div className="mb-8 flex justify-center">
                <TabsList className="bg-white/10 backdrop-blur-sm border border-white/20 p-1 rounded-xl">
                  <TabsTrigger 
                    value="form" 
                    className="text-white data-[state=active]:bg-white/20 data-[state=active]:text-white rounded-lg px-6 py-2"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    Form View
                  </TabsTrigger>
                  <TabsTrigger 
                    value="json" 
                    className="text-white data-[state=active]:bg-white/20 data-[state=active]:text-white rounded-lg px-6 py-2"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    JSON Editor
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="form">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                  <FormView settings={settings} onChange={setSettings} />
                </div>
              </TabsContent>

              <TabsContent value="json">
                <Card className="bg-white/10 backdrop-blur-sm border border-white/20">
                  <CardHeader>
                    <CardTitle className="text-white" style={{ fontFamily: 'var(--font-merriweather)' }}>
                      JSON Configuration
                    </CardTitle>
                    <CardDescription className="text-white/80" style={{ fontFamily: 'var(--font-inter)' }}>
                      Edit the entire configuration directly as JSON
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <JsonEditor value={settings} onChange={setSettings} />
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
