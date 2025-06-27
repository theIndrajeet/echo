"use client";

import { useEffect } from "react";
import { MemoriesSection } from "@/app/memories/components/MemoriesSection";
import { MemoryFilters } from "@/app/memories/components/MemoryFilters";
import { useRouter, useSearchParams } from "next/navigation";
import "@/styles/animation.css";
import UpdateMemory from "@/components/shared/update-memory";
import { useUI } from "@/hooks/useUI";

export default function MemoriesPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { updateMemoryDialog, handleCloseUpdateMemoryDialog } = useUI();
  
  useEffect(() => {
    // Set default pagination values if not present in URL
    if (!searchParams.has("page") || !searchParams.has("size")) {
      const params = new URLSearchParams(searchParams.toString());
      if (!searchParams.has("page")) params.set("page", "1");
      if (!searchParams.has("size")) params.set("size", "10");
      router.push(`?${params.toString()}`);
    }
  }, []);

  return (
    <div className="min-h-screen">
      <UpdateMemory
        memoryId={updateMemoryDialog.memoryId || ""}
        memoryContent={updateMemoryDialog.memoryContent || ""}
        open={updateMemoryDialog.isOpen}
        onOpenChange={handleCloseUpdateMemoryDialog}
      />
      
      {/* Content overlay with backdrop blur */}
      <div className="relative z-10">
        <main className="py-8">
          <div className="container mx-auto px-6">
            {/* Page Header */}
            <div className="mb-8 text-center animate-fade-slide-down">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 text-shadow-lg" style={{ fontFamily: 'var(--font-merriweather)' }}>
                Memory Vault
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-inter)' }}>
                Explore and manage your AI's persistent memories. Each memory helps create more personalized experiences.
              </p>
            </div>

            {/* Filters Section */}
            <div className="mb-8 animate-fade-slide-down animation-delay-300">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                <MemoryFilters />
              </div>
            </div>

            {/* Memories Grid */}
            <div className="animate-fade-slide-down animation-delay-600">
              <MemoriesSection />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
