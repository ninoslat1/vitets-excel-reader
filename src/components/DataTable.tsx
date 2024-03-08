import { ColumnFiltersState, flexRender,  getCoreRowModel, getFacetedUniqueValues, getFilteredRowModel, getPaginationRowModel, useReactTable} from "@tanstack/react-table"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table"
import { IDataTableProps} from "@/interface"
import { ChangeEvent, useRef, useState } from "react"
import { filterOptions } from "../utils/options"
import { Input } from "./ui/input"
import { BottomTable } from "./BottomTable"
import { handleSelectChange } from "@/utils/HandleFilterSelect"

export function DataTable<TData, TValue>({
  columns,
  data, 
}: IDataTableProps<TData, TValue>) {

  // Deklarasikan state filter kolom
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])

  // Deklarasikan state filter select
  const [selectedValues, setSelectedValues] = useState<string>("")

  // Deklarasikan referensi untuk komponen tabel
  const tableComponent = useRef<HTMLTableElement>(null)
  
  // Dekalarsikan variabel tabel untuk Tanstack Table
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    state: {
      columnFilters
    }
  })

  // Dekalarasikan variabel data baris transaksi yang telah disortir
  const dataTransaction = table.getFilteredRowModel().rows

  return (
    <div>
      <div className={`flex items-center py-4 ${table.getRowModel().rows?.length ? "" : "invisible"} `}>
        <select value={selectedValues} onChange={(e: ChangeEvent<HTMLSelectElement>) => handleSelectChange(e, setSelectedValues)} className="p-2.5 bg-slate-900 rounded-lg text-white mx-5 hover:bg-white hover:text-slate-900 hover:cursor-pointer">
        <optgroup label="Filter List">
          <option value={''}>--Pilih Filter--</option>
          {/* Pemetaan opsi filter yang ada pada option.ts*/}
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
                    // Styling className jika suatu sel pada tabel mengandung nilai Valid Entry atau Valid Exit
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
      <BottomTable data={data} dataTransaction={dataTransaction} table={table}/>
      </div>
  )
}
