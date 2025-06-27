"use client";

import { AppFilters } from "./components/AppFilters";
import { AppGrid } from "./components/AppGrid";
import "@/styles/animation.css";

export default function AppsPage() {
  return (
    <div className="min-h-screen">
      {/* Content overlay with backdrop blur */}
      <div className="relative z-10">
        <main className="py-8">
          <div className="container mx-auto px-6">
            {/* Page Header */}
            <div className="mb-8 text-center animate-fade-slide-down">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 text-shadow-lg" style={{ fontFamily: 'var(--font-merriweather)' }}>
                Connected Apps
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-inter)' }}>
                Manage applications that interact with your Echo memory system. Monitor usage and control access permissions.
              </p>
            </div>

            {/* Filters Section */}
            <div className="mb-8 animate-fade-slide-down animation-delay-300">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                <AppFilters />
              </div>
            </div>

            {/* Apps Grid */}
            <div className="animate-fade-slide-down animation-delay-600">
              <AppGrid />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
