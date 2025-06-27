import type React from "react";
import { ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import { constants } from "@/components/shared/source-app";
import { App } from "@/store/appsSlice";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface AppCardProps {
  app: App;
}

export function AppCard({ app }: AppCardProps) {
  const router = useRouter();
  const appConfig =
    constants[app.name as keyof typeof constants] || constants.default;
  const isActive = app.is_active;

  return (
    <Card className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-3">
          <div className="relative z-10 rounded-full overflow-hidden bg-white/20 backdrop-blur-sm w-12 h-12 flex items-center justify-center flex-shrink-0 border border-white/20 group-hover:bg-white/30 transition-all duration-300">
            {appConfig.iconImage ? (
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center overflow-hidden">
                <Image
                  src={appConfig.iconImage}
                  alt={appConfig.name}
                  width={32}
                  height={32}
                />
              </div>
            ) : (
              <div className="w-8 h-8 flex items-center justify-center text-[#FFC930]">
                {appConfig.icon}
              </div>
            )}
          </div>
          <h2 className="text-xl font-semibold text-white group-hover:text-[#FFC930] transition-colors duration-300" style={{ fontFamily: 'var(--font-merriweather)' }}>
            {appConfig.name}
          </h2>
        </div>
      </CardHeader>
      
      <CardContent className="pb-4 my-1">
        <div className="grid grid-cols-1 gap-4">
          <div className="bg-white/5 rounded-lg p-3 border border-white/10">
            <p className="text-white/70 text-sm mb-1" style={{ fontFamily: 'var(--font-inter)' }}>
              Memories Created
            </p>
            <p className="text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-inter)' }}>
              {app.total_memories_created.toLocaleString()}
            </p>
          </div>
          <div className="bg-white/5 rounded-lg p-3 border border-white/10">
            <p className="text-white/70 text-sm mb-1" style={{ fontFamily: 'var(--font-inter)' }}>
              Memories Accessed
            </p>
            <p className="text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-inter)' }}>
              {app.total_memories_accessed.toLocaleString()}
            </p>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="border-t border-white/20 p-0 px-6 py-4 flex justify-between items-center">
        <div
          className={`${
            isActive
              ? "bg-[#25997F]/20 text-[#25997F] border border-[#25997F]/30"
              : "bg-[#F26B22]/20 text-[#F26B22] border border-[#F26B22]/30"
          } rounded-lg px-3 py-1.5 flex items-center text-sm font-medium backdrop-blur-sm`}
          style={{ fontFamily: 'var(--font-inter)' }}
        >
          <span className="h-2 w-2 my-auto mr-2 rounded-full inline-block bg-current animate-pulse"></span>
          {isActive ? "Active" : "Inactive"}
        </div>
        
        <button
          onClick={() => router.push(`/apps/${app.id}`)}
          className="border border-white/30 bg-white/10 backdrop-blur-sm flex items-center px-4 py-2 text-sm rounded-lg text-white hover:bg-white/20 hover:border-[#FFC930]/50 hover:text-[#FFC930] transition-all duration-300 font-medium"
          style={{ fontFamily: 'var(--font-inter)' }}
        >
          View Details 
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </CardFooter>
    </Card>
  );
}
