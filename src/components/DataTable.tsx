import { ColumnFiltersState, VisibilityState, flexRender,  getCoreRowModel, getFilteredRowModel, getPaginationRowModel, useReactTable} from "@tanstack/react-table"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table"
import { DataTableProps } from "@/interface"
import { Button } from "./ui/button"
import { useState } from "react"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuCheckboxItem, DropdownMenuContent } from "./ui/dropdown-menu"
import { Input } from "./ui/input"
import { filterOptions } from "./options"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { Calendar } from "./ui/calendar"
import { id } from "date-fns/locale"

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {

  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [selectedValues, setSelectedValues] = useState<string>("")
  const [date, setDate] = useState<Date[] | undefined>()

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValues("")
    const selectedOption = event.target.value;
    setSelectedValues(selectedOption);
  }

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      columnVisibility,
      columnFilters
    }
  })

  const DropDownComponent = () => {
    return (
      <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter(
                (column) => column.getCanHide()
              )
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
    )
  }

  const BottomTableComponent = () => {
    return (
      <div className="flex items-center justify-between">
        <p>Total Data {table.getFilteredRowModel().rows.length}</p>
        <div className="space-x-2 py-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    );
  }

  const DateComponent = () => {
    return (
      <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-[280px] justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? (date.map((d) => format(d, "PPP")).join(", ")) : (<span>Pick a date</span>)}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="multiple"
                min={1}
                selected={date}
                onSelect={setDate}
                initialFocus
                className="max-w-sm placeholder:capitalize"
                locale={id}
              />
            </PopoverContent>
          </Popover>
    )
  }

  const RenderInputComponent = () => {
    if (selectedValues === 'datetime') {
      return (
        <div className="px-5">
          <DateComponent/>
          <Input
          placeholder={`Filter ${selectedValues}`}
          className="max-w-sm placeholder:capitalize"
          value={(table.getColumn(selectedValues.toString())?.getFilterValue() as string) ?? ""}
          onChange={(event) => table.getColumn(selectedValues.toString())?.setFilterValue(event.target.value)}
        />
        </div>
      )
    } else {
      return (
        <Input
          placeholder={`Filter ${selectedValues}`}
          className="max-w-sm placeholder:capitalize"
          value={(table.getColumn(selectedValues.toString())?.getFilterValue() as string) ?? ""}
          onChange={(event) => table.getColumn(selectedValues.toString())?.setFilterValue(event.target.value)}
        />
      );
    }
  };

  return (
    <div>
      <div className="flex items-center py-4">
        <label>
        Filter:
        <select value={selectedValues} onChange={handleSelectChange} className="px-5">
        <optgroup label="Filter List">
        <option value="">--Please choose an option--</option>
          {filterOptions.map((option) => (
            <option key={option.id} value={option.value}>{option.label}</option>
          ))}
          </optgroup>
        </select>
      </label>
      <Input
          placeholder={`Filter ${selectedValues}`}
          className="max-w-sm placeholder:capitalize"
          value={(table.getColumn(selectedValues.toString())?.getFilterValue() as string) ?? ""}
          onChange={(event) => table.getColumn(selectedValues.toString())?.setFilterValue(event.target.value)}
        />
        <DropDownComponent/>
      </div>
      <div className="rounded-md border">
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
                            header.getContext()
                          )}
                    </TableHead>
                  )
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
                  className="odd:bg-slate-100"
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
      </div>
      <BottomTableComponent/>
      </div>
  )
}
