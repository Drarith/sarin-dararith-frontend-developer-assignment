import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function ProductTableSkeleton() {
  return (
    <div className="overflow-hidden rounded border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="">
              <Skeleton className="h-4 w-4" />
            </TableHead>
            <TableHead>
              <Skeleton className="h-4 " />
            </TableHead>
            <TableHead>
              <Skeleton className="h-4 " />
            </TableHead>
            <TableHead>
              <Skeleton className="h-4 " />
            </TableHead>
            <TableHead>
              <Skeleton className="h-4 " />
            </TableHead>
            <TableHead>
              <Skeleton className="h-4 " />
            </TableHead>
            <TableHead>
              <Skeleton className="h-4 " />
            </TableHead>
            <TableHead>
              <Skeleton className="h-4 " />
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: 10 }).map((_, i) => (
            <TableRow key={i}>
              <TableCell>
                <Skeleton className="h-4 w-4" />
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-4">
                  <Skeleton className="h-10 w-10 rounded-md" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 " />
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <Skeleton className="h-4 " />
              </TableCell>
              <TableCell>
                <Skeleton className="h-4 " />
              </TableCell>
              <TableCell>
                <Skeleton className="h-4 " />
              </TableCell>
              <TableCell>
                <Skeleton className="h-4 " />
              </TableCell>
              <TableCell>
                <Skeleton className="h-4 " />
              </TableCell>
              <TableCell>
                <Skeleton className="h-8 w-8 rounded-md" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex items-center space-x-2 py-4 px-5 justify-between border-t">
        <Skeleton className="h-4" />
        <div className="flex space-x-2">
          <Skeleton className="h-8 w-8" />
          <Skeleton className="h-8 w-8" />
        </div>
      </div>
    </div>
  );
}
