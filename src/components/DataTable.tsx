import { ColumnFiltersState, flexRender,  getCoreRowModel, getFilteredRowModel, getPaginationRowModel, useReactTable} from "@tanstack/react-table"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table"
import { DataTableProps} from "@/interface"
import { useRef, useState } from "react"
import { filterOptions } from "../utils/options"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import "jspdf-autotable"
import { utils, writeFile } from "xlsx"

export function DataTable<TData, TValue>({
  columns,
  data, 
}: DataTableProps<TData, TValue>) {

  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [selectedValues, setSelectedValues] = useState<string>("")
  const tableComponent = useRef<HTMLTableElement>(null)

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
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      columnFilters
    }
  })

  const dataTransaction = table.getFilteredRowModel().rows

  const handleXLSImport = () => {
    const datas = data?.length ? dataTransaction.map(row => row.original) : []
    const ws = utils.json_to_sheet(datas)
    const wb = utils.book_new()
    const statusFilterValue = table.getColumn("status")?.getFilterValue() as string;
    const dateFilterValue = table.getColumn("datetime")?.getFilterValue() as string;
    const sheetName = `${statusFilterValue.replace(/\//g, "-")}-${dateFilterValue.replace(/\//g, "-")}-Sheet`;
    utils.book_append_sheet(wb, ws, `${sheetName}`)
    writeFile(wb, `${sheetName.replace(/\//g, "-")} Report.xlsx`)
  }

  const BottomTableComponent = () => {
    return (
      <div className="flex items-center justify-between">
        <p><b>Total Data</b> : {dataTransaction.length}</p>
        <p><b>Total Entry</b> : {dataTransaction.filter(cell => cell.getValue("status") === 'Valid Entry Access').length}</p>
        <p><b>Total Exit</b> : {dataTransaction.filter(cell => cell.getValue("status") === 'Valid Exit Access').length}</p>
        <div className="space-x-2 py-4">
          <Button
            size="sm"
            onClick={handleXLSImport}
            className="bg-slate-900 text-white hover:bg-lime-400"
          >
            Import to XLSX
          </Button>
          <Button
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="bg-slate-900 text-white"
          >
            Previous
          </Button>
          <Button
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="bg-slate-900 text-white"
          >
            Next
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center py-4">
        <label>
        Filter:
        <select value={selectedValues} onChange={handleSelectChange} className="p-2.5 bg-slate-900 rounded-lg text-white mx-5 hover:bg-white hover:text-slate-900 hover:cursor-pointer">
        <optgroup label="Filter List">
          <option value={''}>--Pilih Filter--</option>
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
          onChange={(e) => table.getColumn(selectedValues.toString())?.setFilterValue(e.target.value)}
        />
      </div>
      <div className="rounded-md border">
        <Table ref={tableComponent}>
          <TableHeader className="bg-slate-900 text-white">
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
                  className="odd:bg-gray-100"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className={cell.getValue() === "Valid Entry Access" || cell.getValue() === "Valid Exit Access" ? "text-green-500 font-bold text-center" : ""}>
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
