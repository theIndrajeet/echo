import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight, Brain, Zap, Shield, Users, Sparkles, Database, Plug } from "lucide-react";
import { Install } from "@/components/dashboard/Install";

export default function HomePage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Futuristic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F26B22] via-[#25997F] to-[#1C2F72] animate-gradient-shift"></div>
      
      {/* Animated geometric patterns */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full animate-pulse-slow"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-white rounded-full animate-float"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 border border-white rounded-full animate-pulse-slow animation-delay-1000"></div>
        <div className="absolute bottom-40 right-40 w-20 h-20 border border-white rounded-full animate-float animation-delay-2000"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10 animate-grid-move"></div>
      </div>

      {/* Glowing orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-xl animate-orb-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[#FFC930]/20 rounded-full blur-xl animate-orb-float-reverse"></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-white/15 rounded-full blur-lg animate-orb-pulse"></div>
      </div>

      {/* Content overlay */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="px-6 py-20 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm border border-white/30">
              AI Memory Platform
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-shadow-lg animate-fade-slide-down" style={{ fontFamily: 'var(--font-merriweather)' }}>
              Your AI's Perfect Memory
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90 text-shadow animate-fade-slide-down animation-delay-300" style={{ fontFamily: 'var(--font-inter)' }}>
              Echo enhances AI assistants with intelligent, persistent memory. Create more personalized, 
              contextual AI experiences that remember user preferences and adapt over time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-slide-down animation-delay-600">
              <Link href="/memories">
                <Button size="lg" className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm px-8 py-3 text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/docs">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-3 text-lg transition-all duration-300 hover:scale-105">
                  Documentation
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="px-6 py-20 bg-black/30 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-shadow-lg" style={{ fontFamily: 'var(--font-merriweather)' }}>
                Connect with Your Favorite AI Tools
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto" style={{ fontFamily: 'var(--font-inter)' }}>
                Echo integrates seamlessly with Claude, Cursor, Windsurf, and 8+ more AI assistants through MCP protocol.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8">
              <Install />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-6 py-20 bg-black/20 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4 text-shadow-lg" style={{ fontFamily: 'var(--font-merriweather)' }}>
              Why Choose Echo?
            </h2>
            <p className="text-xl text-white/80 text-center mb-16 max-w-3xl mx-auto" style={{ fontFamily: 'var(--font-inter)' }}>
              Echo transforms how AI systems learn and remember, creating truly intelligent experiences.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white/10 border-white/20 hover:bg-white/15 transition-all duration-300 backdrop-blur-sm hover:scale-105 hover:shadow-2xl">
                <CardHeader>
                  <Brain className="h-12 w-12 text-[#FFC930] mb-4 animate-pulse-gentle" />
                  <CardTitle className="text-white" style={{ fontFamily: 'var(--font-merriweather)' }}>
                    Intelligent Memory
                  </CardTitle>
                  <CardDescription className="text-white/80" style={{ fontFamily: 'var(--font-inter)' }}>
                    Advanced memory management that learns from every interaction and builds contextual understanding.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-white/10 border-white/20 hover:bg-white/15 transition-all duration-300 backdrop-blur-sm hover:scale-105 hover:shadow-2xl">
                <CardHeader>
                  <Zap className="h-12 w-12 text-[#FFC930] mb-4 animate-pulse-gentle animation-delay-300" />
                  <CardTitle className="text-white" style={{ fontFamily: 'var(--font-merriweather)' }}>
                    Lightning Fast
                  </CardTitle>
                  <CardDescription className="text-white/80" style={{ fontFamily: 'var(--font-inter)' }}>
                    Retrieve relevant memories instantly with semantic search and optimized storage.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-white/10 border-white/20 hover:bg-white/15 transition-all duration-300 backdrop-blur-sm hover:scale-105 hover:shadow-2xl">
                <CardHeader>
                  <Shield className="h-12 w-12 text-[#FFC930] mb-4 animate-pulse-gentle animation-delay-600" />
                  <CardTitle className="text-white" style={{ fontFamily: 'var(--font-merriweather)' }}>
                    Privacy First
                  </CardTitle>
                  <CardDescription className="text-white/80" style={{ fontFamily: 'var(--font-inter)' }}>
                    Your data stays secure with enterprise-grade encryption and privacy controls.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16 text-shadow-lg" style={{ fontFamily: 'var(--font-merriweather)' }}>
              Perfect for Every Use Case
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-start space-x-4 bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <Users className="h-8 w-8 text-[#FFC930] mt-1 flex-shrink-0 animate-pulse-gentle" />
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-2" style={{ fontFamily: 'var(--font-merriweather)' }}>
                      Customer Support
                    </h3>
                    <p className="text-white/80" style={{ fontFamily: 'var(--font-inter)' }}>
                      Remember customer preferences, previous issues, and conversation history for personalized support experiences.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <Sparkles className="h-8 w-8 text-[#FFC930] mt-1 flex-shrink-0 animate-pulse-gentle animation-delay-300" />
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-2" style={{ fontFamily: 'var(--font-merriweather)' }}>
                      Personal Assistants
                    </h3>
                    <p className="text-white/80" style={{ fontFamily: 'var(--font-inter)' }}>
                      Build AI assistants that learn user habits, preferences, and context for truly personalized interactions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <Database className="h-8 w-8 text-[#FFC930] mt-1 flex-shrink-0 animate-pulse-gentle animation-delay-600" />
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-2" style={{ fontFamily: 'var(--font-merriweather)' }}>
                      Enterprise AI
                    </h3>
                    <p className="text-white/80" style={{ fontFamily: 'var(--font-inter)' }}>
                      Scale AI applications with persistent memory across teams, projects, and organizational knowledge.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white/20 to-white/10 rounded-2xl p-8 backdrop-blur-sm border border-white/20">
                <h3 className="text-3xl font-bold mb-6 text-white" style={{ fontFamily: 'var(--font-merriweather)' }}>
                  Ready to Transform Your AI?
                </h3>
                <p className="text-lg mb-8 text-white/90" style={{ fontFamily: 'var(--font-inter)' }}>
                  Join thousands of developers building smarter AI applications with Echo's memory platform.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#FFC930] rounded-full animate-pulse"></div>
                    <span className="text-white/90" style={{ fontFamily: 'var(--font-inter)' }}>Easy integration with any AI model</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#FFC930] rounded-full animate-pulse animation-delay-300"></div>
                    <span className="text-white/90" style={{ fontFamily: 'var(--font-inter)' }}>Scalable from prototype to production</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#FFC930] rounded-full animate-pulse animation-delay-600"></div>
                    <span className="text-white/90" style={{ fontFamily: 'var(--font-inter)' }}>Comprehensive API documentation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 py-20 bg-black/30 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white text-shadow-lg" style={{ fontFamily: 'var(--font-merriweather)' }}>
              Start Building Smarter AI Today
            </h2>
            <p className="text-xl mb-8 text-white/90" style={{ fontFamily: 'var(--font-inter)' }}>
              Echo makes it easy to add persistent memory to any AI application. Get started in minutes.
            </p>
            <Link href="/memories">
              <Button size="lg" className="bg-[#FFC930] hover:bg-[#F26B22] text-[#1C2F72] px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-110 hover:shadow-2xl">
                Create Your First Memory <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
