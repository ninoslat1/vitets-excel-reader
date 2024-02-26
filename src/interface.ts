import { jsPDF } from 'jspdf'
import { UserOptions } from 'jspdf-autotable'
import { ColumnDef } from "@tanstack/react-table"

export interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
  }

export interface IHandleFileUpload {
  handleFileUpload : (file: File) => void
}

export interface jsPDFCustom extends jsPDF {
  autoTable: (options: UserOptions) => void
}