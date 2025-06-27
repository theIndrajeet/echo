import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight, Brain, Zap, Shield, Users, Sparkles, Database } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFFEF9] via-[#F9F5EE] to-[#E1EAF9]">
      {/* Hero Section */}
      <section className="px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-6 bg-[#1C8BF1] text-white hover:bg-[#1C2F72]">
            AI Memory Platform
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-[#1C2F72] mb-6" style={{ fontFamily: 'Merriweather, serif' }}>
            Your AI's Perfect Memory
          </h1>
          <p className="text-xl md:text-2xl text-[#333333] mb-8 max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Echo enhances AI assistants with intelligent, persistent memory. Create more personalized, 
            contextual AI experiences that remember user preferences and adapt over time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/memories">
              <Button size="lg" className="bg-[#1C8BF1] hover:bg-[#1C2F72] text-white px-8 py-3 text-lg">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/docs">
              <Button size="lg" variant="outline" className="border-[#1C8BF1] text-[#1C8BF1] hover:bg-[#E1EAF9] px-8 py-3 text-lg">
                Documentation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1C2F72] text-center mb-4" style={{ fontFamily: 'Merriweather, serif' }}>
            Why Choose Echo?
          </h2>
          <p className="text-xl text-[#333333] text-center mb-16 max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Echo transforms how AI systems learn and remember, creating truly intelligent experiences.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-[#E1EAF9] hover:shadow-lg transition-shadow">
              <CardHeader>
                <Brain className="h-12 w-12 text-[#1C8BF1] mb-4" />
                <CardTitle className="text-[#1C2F72]" style={{ fontFamily: 'Merriweather, serif' }}>
                  Intelligent Memory
                </CardTitle>
                <CardDescription style={{ fontFamily: 'Inter, sans-serif' }}>
                  Advanced memory management that learns from every interaction and builds contextual understanding.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-[#E1EAF9] hover:shadow-lg transition-shadow">
              <CardHeader>
                <Zap className="h-12 w-12 text-[#25997F] mb-4" />
                <CardTitle className="text-[#1C2F72]" style={{ fontFamily: 'Merriweather, serif' }}>
                  Lightning Fast
                </CardTitle>
                <CardDescription style={{ fontFamily: 'Inter, sans-serif' }}>
                  Retrieve relevant memories instantly with semantic search and optimized storage.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-[#E1EAF9] hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 text-[#F26B22] mb-4" />
                <CardTitle className="text-[#1C2F72]" style={{ fontFamily: 'Merriweather, serif' }}>
                  Privacy First
                </CardTitle>
                <CardDescription style={{ fontFamily: 'Inter, sans-serif' }}>
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
          <h2 className="text-4xl md:text-5xl font-bold text-[#1C2F72] text-center mb-16" style={{ fontFamily: 'Merriweather, serif' }}>
            Perfect for Every Use Case
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <Users className="h-8 w-8 text-[#1C8BF1] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-semibold text-[#1C2F72] mb-2" style={{ fontFamily: 'Merriweather, serif' }}>
                    Customer Support
                  </h3>
                  <p className="text-[#333333]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Remember customer preferences, previous issues, and conversation history for personalized support experiences.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Sparkles className="h-8 w-8 text-[#25997F] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-semibold text-[#1C2F72] mb-2" style={{ fontFamily: 'Merriweather, serif' }}>
                    Personal Assistants
                  </h3>
                  <p className="text-[#333333]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Build AI assistants that learn user habits, preferences, and context for truly personalized interactions.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Database className="h-8 w-8 text-[#F26B22] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-semibold text-[#1C2F72] mb-2" style={{ fontFamily: 'Merriweather, serif' }}>
                    Enterprise AI
                  </h3>
                  <p className="text-[#333333]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Scale AI applications with persistent memory across teams, projects, and organizational knowledge.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#1C8BF1] to-[#1C2F72] rounded-2xl p-8 text-white">
              <h3 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Merriweather, serif' }}>
                Ready to Transform Your AI?
              </h3>
              <p className="text-lg mb-8 opacity-90" style={{ fontFamily: 'Inter, sans-serif' }}>
                Join thousands of developers building smarter AI applications with Echo's memory platform.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#FFC930] rounded-full"></div>
                  <span style={{ fontFamily: 'Inter, sans-serif' }}>Easy integration with any AI model</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#FFC930] rounded-full"></div>
                  <span style={{ fontFamily: 'Inter, sans-serif' }}>Scalable from prototype to production</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#FFC930] rounded-full"></div>
                  <span style={{ fontFamily: 'Inter, sans-serif' }}>Comprehensive API documentation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-[#1C2F72] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Merriweather, serif' }}>
            Start Building Smarter AI Today
          </h2>
          <p className="text-xl mb-8 opacity-90" style={{ fontFamily: 'Inter, sans-serif' }}>
            Echo makes it easy to add persistent memory to any AI application. Get started in minutes.
          </p>
          <Link href="/memories">
            <Button size="lg" className="bg-[#FFC930] hover:bg-[#F26B22] text-[#1C2F72] px-8 py-3 text-lg font-semibold">
              Create Your First Memory <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
