"use client";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useAppsApi } from "@/hooks/useAppsApi";
import { AppCard } from "./AppCard";
import { AppCardSkeleton } from "@/skeleton/AppCardSkeleton";

export function AppGrid() {
  const { fetchApps, isLoading } = useAppsApi();
  const apps = useSelector((state: RootState) => state.apps.apps);
  const filters = useSelector((state: RootState) => state.apps.filters);

  useEffect(() => {
    fetchApps({
      name: filters.searchQuery,
      is_active: filters.isActive === "all" ? undefined : filters.isActive,
      sort_by: filters.sortBy,
      sort_direction: filters.sortDirection,
    });
  }, [fetchApps, filters]);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(3)].map((_, i) => (
          <AppCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (apps.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 max-w-md mx-auto">
          <h3 className="text-xl font-semibold text-white mb-2" style={{ fontFamily: 'var(--font-merriweather)' }}>
            No Apps Found
          </h3>
          <p className="text-white/70" style={{ fontFamily: 'var(--font-inter)' }}>
            No applications match your current filters. Try adjusting your search criteria.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {apps.map((app, index) => (
        <div 
          key={app.id} 
          className="animate-fade-slide-up"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <AppCard app={app} />
        </div>
      ))}
    </div>
  );
}
