"use client";

import { Button } from "@/components/ui/button";
import { HiHome, HiMiniRectangleStack } from "react-icons/hi2";
import { RiApps2AddFill } from "react-icons/ri";
import { FiRefreshCcw } from "react-icons/fi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CreateMemoryDialog } from "@/app/memories/components/CreateMemoryDialog";
import { useMemoriesApi } from "@/hooks/useMemoriesApi";
import Image from "next/image";
import { useStats } from "@/hooks/useStats";
import { useAppsApi } from "@/hooks/useAppsApi";
import { Settings } from "lucide-react";
import { useConfig } from "@/hooks/useConfig";

export function Navbar() {
  const pathname = usePathname();

  const memoriesApi = useMemoriesApi();
  const appsApi = useAppsApi();
  const statsApi = useStats();
  const configApi = useConfig();

  // Define route matchers with typed parameter extraction
  const routeBasedFetchMapping: {
    match: RegExp;
    getFetchers: (params: Record<string, string>) => (() => Promise<any>)[];
  }[] = [
    {
      match: /^\/memory\/([^/]+)$/,
      getFetchers: ({ memory_id }) => [
        () => memoriesApi.fetchMemoryById(memory_id),
        () => memoriesApi.fetchAccessLogs(memory_id),
        () => memoriesApi.fetchRelatedMemories(memory_id),
      ],
    },
    {
      match: /^\/apps\/([^/]+)$/,
      getFetchers: ({ app_id }) => [
        () => appsApi.fetchAppMemories(app_id),
        () => appsApi.fetchAppAccessedMemories(app_id),
        () => appsApi.fetchAppDetails(app_id),
      ],
    },
    {
      match: /^\/memories$/,
      getFetchers: () => [memoriesApi.fetchMemories],
    },
    {
      match: /^\/apps$/,
      getFetchers: () => [appsApi.fetchApps],
    },
    {
      match: /^\/$/,
      getFetchers: () => [statsApi.fetchStats, memoriesApi.fetchMemories],
    },
    {
      match: /^\/homepage$/,
      getFetchers: () => [statsApi.fetchStats, memoriesApi.fetchMemories],
    },
    {
      match: /^\/settings$/,
      getFetchers: () => [configApi.fetchConfig],
    },
  ];

  const getFetchersForPath = (path: string) => {
    for (const route of routeBasedFetchMapping) {
      const match = path.match(route.match);
      if (match) {
        if (route.match.source.includes("memory")) {
          return route.getFetchers({ memory_id: match[1] });
        }
        if (route.match.source.includes("app")) {
          return route.getFetchers({ app_id: match[1] });
        }
        return route.getFetchers({});
      }
    }
    return [];
  };

  const handleRefresh = async () => {
    const fetchers = getFetchersForPath(pathname);
    await Promise.allSettled(fetchers.map((fn) => fn()));
  };

  const isActive = (href: string) => {
    if (href === "/homepage") return pathname === href || pathname === "/";
    if (href === "/") return pathname === href;
    return pathname.startsWith(href.substring(0, 5));
  };

  const activeClass = "bg-white/30 text-white border-white/40 shadow-lg backdrop-blur-sm";
  const inactiveClass = "text-white/80 hover:bg-white/20 hover:text-white border-white/20 backdrop-blur-sm";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/20 bg-white/10 backdrop-blur-md supports-[backdrop-filter]:bg-white/10">
      <div className="container flex h-16 items-center justify-between px-6">
        <Link href="/homepage" className="flex items-center gap-3 group">
          <div className="relative">
            <Image 
              src="/logo.svg" 
              alt="Echo" 
              width={32} 
              height={32} 
              className="transition-transform duration-300 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-[#FFC930]/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <span 
            className="text-2xl font-bold text-white group-hover:text-[#FFC930] transition-colors duration-300" 
            style={{ fontFamily: 'var(--font-merriweather)' }}
          >
            Echo
          </span>
        </Link>
        
        <div className="flex items-center gap-2">
          <Link href="/homepage">
            <Button
              variant="outline"
              size="sm"
              className={`flex items-center gap-2 border px-4 py-2 font-medium transition-all duration-300 hover:scale-105 ${
                isActive("/homepage") ? activeClass : inactiveClass
              }`}
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              <HiHome className="h-4 w-4" />
              Home
            </Button>
          </Link>
          <Link href="/memories">
            <Button
              variant="outline"
              size="sm"
              className={`flex items-center gap-2 border px-4 py-2 font-medium transition-all duration-300 hover:scale-105 ${
                isActive("/memories") ? activeClass : inactiveClass
              }`}
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              <HiMiniRectangleStack className="h-4 w-4" />
              Memories
            </Button>
          </Link>
          <Link href="/apps">
            <Button
              variant="outline"
              size="sm"
              className={`flex items-center gap-2 border px-4 py-2 font-medium transition-all duration-300 hover:scale-105 ${
                isActive("/apps") ? activeClass : inactiveClass
              }`}
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              <RiApps2AddFill className="h-4 w-4" />
              Apps
            </Button>
          </Link>
          <Link href="/settings">
            <Button
              variant="outline"
              size="sm"
              className={`flex items-center gap-2 border px-4 py-2 font-medium transition-all duration-300 hover:scale-105 ${
                isActive("/settings") ? activeClass : inactiveClass
              }`}
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              <Settings className="h-4 w-4" />
              Settings
            </Button>
          </Link>
        </div>
        
        <div className="flex items-center gap-3">
          <Button
            onClick={handleRefresh}
            variant="outline"
            size="sm"
            className="border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white hover:text-[#FFC930] transition-all duration-300 px-4 py-2 hover:scale-105 group"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            <FiRefreshCcw className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
            Refresh
          </Button>
          <CreateMemoryDialog />
        </div>
      </div>
    </header>
  );
}
