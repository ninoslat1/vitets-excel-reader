import { ColumnDef } from "@tanstack/react-table"

// Dekalrasikan interface untuk fungsi tabel data Tanstack Table
export interface IDataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
  }

// Dekalrasikan interface untuk fungsi upload file
export interface IHandleFileUpload {
  handleFileUpload : (file: File) => void
}


