import { Row } from "@tanstack/react-table"
import { toast } from "react-toastify"
import { utils, writeFile } from "xlsx"

// Deklarasikan fungsi untuk menangani impor file Excel
export function handleXLSImport<TData>(data: TData[], dataTransaction:Row<TData>[]) {
    if(data?.length !== 0){
        const ws = utils.json_to_sheet(dataTransaction.map(row => row.original))
        const wb = utils.book_new()
        const sheetName = `Sheet1`;
        utils.book_append_sheet(wb, ws, `${sheetName}`)
        writeFile(wb, `${sheetName} Report.xlsx`)
      } else {
        toast.info("Tidak ada data yang bisa diimport")
      }
  }