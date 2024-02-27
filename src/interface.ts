import { ColumnDef } from "@tanstack/react-table"

export interface IDataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
  }

export interface IHandleFileUpload {
  handleFileUpload : (file: File) => void
}


