"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
} from "@tanstack/react-table";
import { useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import DataTablePagination from "@/components/pagination/Pagination";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  pageIndex?: number;
  pageCount?: number;
  setPageIndex?: (page: number) => void;
  skip?: number;
  pageLimit?: number;
  total?: number;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  pageIndex,
  pageCount,
  setPageIndex,
  skip = 0,
  pageLimit = 10,
  total = 0,
}: DataTableProps<TData, TValue>) {
  const [rowSelection, setRowSelection] = useState({});

  // eslint-disable-next-line
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onRowSelectionChange: setRowSelection,
    state: {
      rowSelection,
    },
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="overflow-hidden rounded border text-black/70">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      {pageIndex !== undefined && pageCount !== undefined && setPageIndex && (
        <div className="flex items-center space-x-2 py-4 px-5 justify-end min-[640px]:justify-between border-t">
          <div className="max-[640px]:hidden">
            <p>
              Showing {skip + 1}-{Math.min(skip + pageLimit, total)} from{" "}
              {total}
            </p>
          </div>

          <div className="space-x-2">
            <DataTablePagination
              pageIndex={pageIndex}
              pageCount={pageCount}
              setPageIndex={setPageIndex}
            />
          </div>
        </div>
      )}
    </div>
  );
}
