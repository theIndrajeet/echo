import {
  Edit,
  MoreHorizontal,
  Trash2,
  Pause,
  Archive,
  Play,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";
import { useMemoriesApi } from "@/hooks/useMemoriesApi";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import {
  selectMemory,
  deselectMemory,
  selectAllMemories,
  clearSelection,
} from "@/store/memoriesSlice";
import SourceApp from "@/components/shared/source-app";
import { HiMiniRectangleStack } from "react-icons/hi2";
import { PiSwatches } from "react-icons/pi";
import { GoPackage } from "react-icons/go";
import { CiCalendar } from "react-icons/ci";
import { useRouter } from "next/navigation";
import Categories from "@/components/shared/categories";
import { useUI } from "@/hooks/useUI";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { formatDate } from "@/lib/helpers";

export function MemoryTable() {
  const { toast } = useToast();
  const router = useRouter();
  const dispatch = useDispatch();
  const selectedMemoryIds = useSelector(
    (state: RootState) => state.memories.selectedMemoryIds
  );
  const memories = useSelector((state: RootState) => state.memories.memories);

  const { deleteMemories, updateMemoryState, isLoading } = useMemoriesApi();

  const handleDeleteMemory = (id: string) => {
    deleteMemories([id]);
  };

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      dispatch(selectAllMemories());
    } else {
      dispatch(clearSelection());
    }
  };

  const handleSelectMemory = (id: string, checked: boolean) => {
    if (checked) {
      dispatch(selectMemory(id));
    } else {
      dispatch(deselectMemory(id));
    }
  };
  const { handleOpenUpdateMemoryDialog } = useUI();

  const handleEditMemory = (memory_id: string, memory_content: string) => {
    handleOpenUpdateMemoryDialog(memory_id, memory_content);
  };

  const handleUpdateMemoryState = async (id: string, newState: string) => {
    try {
      await updateMemoryState([id], newState);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update memory state",
        variant: "destructive",
      });
    }
  };

  const isAllSelected =
    memories.length > 0 && selectedMemoryIds.length === memories.length;
  const isPartiallySelected =
    selectedMemoryIds.length > 0 && selectedMemoryIds.length < memories.length;

  const handleMemoryClick = (id: string) => {
    router.push(`/memory/${id}`);
  };

  return (
    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-white/10 backdrop-blur-sm hover:bg-white/15 border-white/20">
            <TableHead className="w-[50px] pl-4 text-white">
              <Checkbox
                className="data-[state=checked]:border-white border-white/40 data-[state=checked]:bg-white/20"
                checked={isAllSelected}
                data-state={
                  isPartiallySelected
                    ? "indeterminate"
                    : isAllSelected
                    ? "checked"
                    : "unchecked"
                }
                onCheckedChange={handleSelectAll}
              />
            </TableHead>
            <TableHead className="border-white/20 text-white font-semibold" style={{ fontFamily: 'var(--font-inter)' }}>
              <div className="flex items-center min-w-[600px]">
                <HiMiniRectangleStack className="mr-2 text-[#FFC930]" />
                Memory
              </div>
            </TableHead>
            <TableHead className="border-white/20 text-white font-semibold" style={{ fontFamily: 'var(--font-inter)' }}>
              <div className="flex items-center">
                <PiSwatches className="mr-2 text-[#25997F]" size={15} />
                Categories
              </div>
            </TableHead>
            <TableHead className="w-[140px] border-white/20 text-white font-semibold" style={{ fontFamily: 'var(--font-inter)' }}>
              <div className="flex items-center">
                <GoPackage className="mr-2 text-[#F26B22]" />
                Source App
              </div>
            </TableHead>
            <TableHead className="w-[140px] border-white/20 text-white font-semibold" style={{ fontFamily: 'var(--font-inter)' }}>
              <div className="flex items-center w-full justify-center">
                <CiCalendar className="mr-2 text-[#1C8BF1]" size={16} />
                Created On
              </div>
            </TableHead>
            <TableHead className="text-right border-white/20 flex justify-center text-white">
              <div className="flex items-center justify-end">
                <MoreHorizontal className="h-4 w-4 mr-2" />
              </div>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {memories.map((memory, index) => (
            <TableRow
              key={memory.id}
              className={`hover:bg-white/15 transition-all duration-300 border-white/10 ${
                memory.state === "paused" || memory.state === "archived"
                  ? "text-white/60"
                  : "text-white"
              } ${isLoading ? "animate-pulse opacity-50" : ""} ${
                index % 2 === 0 ? "bg-white/5" : "bg-transparent"
              }`}
            >
              <TableCell className="pl-4">
                <Checkbox
                  className="data-[state=checked]:border-white border-white/40 data-[state=checked]:bg-white/20"
                  checked={selectedMemoryIds.includes(memory.id)}
                  onCheckedChange={(checked) =>
                    handleSelectMemory(memory.id, checked as boolean)
                  }
                />
              </TableCell>
              <TableCell>
                {memory.state === "paused" || memory.state === "archived" ? (
                  <TooltipProvider>
                    <Tooltip delayDuration={0}>
                      <TooltipTrigger asChild>
                        <div
                          onClick={() => handleMemoryClick(memory.id)}
                          className={`font-medium cursor-pointer transition-all duration-300 hover:text-[#FFC930] ${
                            memory.state === "paused" ||
                            memory.state === "archived"
                              ? "text-white/50"
                              : "text-white"
                          }`}
                          style={{ fontFamily: 'var(--font-inter)' }}
                        >
                          {memory.memory}
                        </div>
                      </TooltipTrigger>
                      <TooltipContent className="bg-white/90 backdrop-blur-sm border border-white/20">
                        <p className="text-[#1C2F72]">
                          This memory is{" "}
                          <span className="font-bold">
                            {memory.state === "paused" ? "paused" : "archived"}
                          </span>{" "}
                          and <span className="font-bold">disabled</span>.
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ) : (
                  <div
                    onClick={() => handleMemoryClick(memory.id)}
                    className="font-medium text-white cursor-pointer transition-all duration-300 hover:text-[#FFC930]"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    {memory.memory}
                  </div>
                )}
              </TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-1">
                  <Categories
                    categories={memory.categories}
                    isPaused={
                      memory.state === "paused" || memory.state === "archived"
                    }
                    concat={true}
                  />
                </div>
              </TableCell>
              <TableCell className="w-[140px] text-center">
                <SourceApp source={memory.app_name} />
              </TableCell>
              <TableCell className="w-[140px] text-center text-white/80" style={{ fontFamily: 'var(--font-inter)' }}>
                {formatDate(memory.created_at)}
              </TableCell>
              <TableCell className="text-right flex justify-center">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-8 w-8 text-white hover:bg-white/20 hover:text-[#FFC930] transition-all duration-300"
                    >
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="end"
                    className="bg-white/90 backdrop-blur-sm border border-white/20"
                  >
                    <DropdownMenuItem
                      className="cursor-pointer text-[#1C2F72] hover:bg-[#E1EAF9] focus:bg-[#E1EAF9]"
                      onClick={() => {
                        const newState =
                          memory.state === "active" ? "paused" : "active";
                        handleUpdateMemoryState(memory.id, newState);
                      }}
                    >
                      {memory?.state === "active" ? (
                        <>
                          <Pause className="mr-2 h-4 w-4" />
                          Pause
                        </>
                      ) : (
                        <>
                          <Play className="mr-2 h-4 w-4" />
                          Resume
                        </>
                      )}
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="cursor-pointer text-[#1C2F72] hover:bg-[#E1EAF9] focus:bg-[#E1EAF9]"
                      onClick={() => {
                        const newState =
                          memory.state === "active" ? "archived" : "active";
                        handleUpdateMemoryState(memory.id, newState);
                      }}
                    >
                      <Archive className="mr-2 h-4 w-4" />
                      {memory?.state !== "archived" ? (
                        <>Archive</>
                      ) : (
                        <>Unarchive</>
                      )}
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="cursor-pointer text-[#1C2F72] hover:bg-[#E1EAF9] focus:bg-[#E1EAF9]"
                      onClick={() => handleEditMemory(memory.id, memory.memory)}
                    >
                      <Edit className="mr-2 h-4 w-4" />
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuSeparator className="bg-white/20" />
                    <DropdownMenuItem
                      className="cursor-pointer text-[#F26B22] focus:text-[#F26B22] hover:bg-red-50 focus:bg-red-50"
                      onClick={() => handleDeleteMemory(memory.id)}
                    >
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
