import { ColumnFiltersState, flexRender,  getCoreRowModel, getFilteredRowModel, getPaginationRowModel, useReactTable} from "@tanstack/react-table"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table"
import { IDataTableProps} from "@/interface"
import { useRef, useState } from "react"
import { filterOptions } from "../utils/options"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { utils, writeFile } from "xlsx"
import { ArrowLeftIcon, ArrowRightIcon, FilePlusIcon } from "@radix-ui/react-icons"
import { toast } from "react-toastify"

export function DataTable<TData, TValue>({
  columns,
  data, 
}: IDataTableProps<TData, TValue>) {

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
    if(data?.length !== 0){
      const ws = utils.json_to_sheet(dataTransaction.map(row => row.original))
      const wb = utils.book_new()
      const statusFilterValue = table.getColumn("status")?.getFilterValue() as string;
      const dateFilterValue = table.getColumn("datetime")?.getFilterValue() as string;
      const sheetName = `${statusFilterValue.replace(/\//g, "-")}-${dateFilterValue.replace(/\//g, "-")}-Sheet`;
      utils.book_append_sheet(wb, ws, `${sheetName}`)
      writeFile(wb, `${sheetName.replace(/\//g, "-")} Report.xlsx`)
    } else {
      toast.info("Tidak ada data yang bisa diimport")
    }
  }

  const BottomTableComponent = () => {
    return (
      <div className="block md:flex items-center justify-between text-xs md:text-base">
        <div className="flex justify-between md:gap-8 p-2.5">
          <p><b>Data</b>: {dataTransaction.length}</p>
          <p><b>Entry</b>: {dataTransaction.filter(cell => cell.getValue("status") === 'Valid Entry Access').length}</p>
          <p><b>Exit</b>: {dataTransaction.filter(cell => cell.getValue("status") === 'Valid Exit Access').length}</p>
        </div>
        <div className="flex justify-between md:gap-8 p-2.5">
          <Button
            size="sm"
            onClick={handleXLSImport}
            className="bg-slate-900 text-white hover:bg-green-800 text-xs md:text-base items-center"
          >
            Import to XLSX <FilePlusIcon className="h-2 w-2 md:h-4 md:w-4 mx-2"/>
          </Button>
          <Button
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="bg-slate-900 text-white text-xs md:text-base items-center"
          >
            <ArrowLeftIcon className="h-2 w-2 md:h-4 md:w-4 mx-2"/> Previous
          </Button>
          <Button
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="bg-slate-900 text-white text-xs md:text-base items-center"
          >
            Next <ArrowRightIcon className="h-2 w-2 md:h-4 md:w-4 mx-2"/>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center py-4">
        <select value={selectedValues} onChange={handleSelectChange} className="p-2.5 bg-slate-900 rounded-lg text-white mx-5 hover:bg-white hover:text-slate-900 hover:cursor-pointer">
        <optgroup label="Filter List">
          <option value={''}>--Pilih Filter--</option>
          {filterOptions.map((option) => (
            <option key={option.id} value={option.value}>{option.label}</option>
          ))}
          </optgroup>
        </select>
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
