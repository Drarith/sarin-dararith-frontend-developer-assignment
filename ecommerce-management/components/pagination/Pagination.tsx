"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import type { DataTablePaginationProps } from "@/types/ProductManagement";

export default function DataTablePagination({ pageIndex, pageCount, setPageIndex }: DataTablePaginationProps) {
  
  const start = Math.max(0, Math.min(pageIndex - 2, pageCount - 5));
  const end = Math.min(pageCount, start + 5);
  
  const visiblePages = Array.from({ length: end - start }, (_, i) => start + i);

  const showEllipsis = pageCount > 5 && end < pageCount;

  return (
    <Pagination className="justify-end">
      <PaginationContent className="gap-2">
        <PaginationItem>
          <PaginationPrevious 
            size="icon-sm" 
            onClick={() => pageIndex > 0 && setPageIndex(pageIndex - 1)}
            className="cursor-pointer border-none bg-my-primary/15 text-my-primary hover:bg-my-primary/40"
          />
        </PaginationItem>

        {visiblePages.map((i) => (
          <PaginationItem key={i}>
            <PaginationLink
              size="sm"
              isActive={pageIndex === i}
              onClick={() => setPageIndex(i)}
              className={`cursor-pointer border-none rounded-md ${
                pageIndex === i
                  ? "bg-my-primary text-white hover:bg-my-primary-dark hover:text-white"
                  : "bg-my-primary/15 text-my-primary hover:bg-my-primary/40"
              }`}
            >
              {i + 1}
            </PaginationLink>
          </PaginationItem>
        ))}

        {showEllipsis && (
           <PaginationItem>
             <PaginationEllipsis className="text-my-primary bg-my-primary/15 rounded-md h-8 w-8 flex items-end justify-center " />
           </PaginationItem>
        )}

        <PaginationItem>
          <PaginationNext 
            size="icon-sm" 
            onClick={() => pageIndex < pageCount - 1 && setPageIndex(pageIndex + 1)}
            className="cursor-pointer border-none bg-my-primary/15 text-my-primary hover:bg-my-primary/40"
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}