import { Dispatch, DragEvent, RefObject, SetStateAction } from "react"
import { toast } from 'react-toastify'

// Deklarasikan fungsi untuk menangani event masuk zona drag and drop
export const handleDragOver = (e:DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
  };

// Deklarasikan fungsi untuk menangani event masuk zona drag and drop dan state sedang tidak drag
export const handleDragEnter = (setIsDragging: Dispatch<SetStateAction<boolean>>) => (
    e: DragEvent<HTMLDivElement>
  ) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }

// Deklarasikan fungsi untuk menangani event keluar zona drag and drop dan state sedang drag 
export const handleDragLeave = (setIsDragging: Dispatch<SetStateAction<boolean>>) => (
    e: DragEvent<HTMLDivElement>
  ) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  }
  
// Deklarasikan fungsi untuk menangani event drop file di zona drag and drop
export const handleDrop = (e: DragEvent<HTMLDivElement>, dropZoneRef: RefObject<HTMLDivElement>, handleFileUpload: (file: File) => void) => {
    e.preventDefault()
    e.stopPropagation()
    dropZoneRef.current?.classList.remove('dragging')
    const file = e.dataTransfer.files[0]

    if (
      file.type !== 'application/vnd.ms-excel' &&
      file.type !== 'text/csv' &&
      file.type !== 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    ) {
      dropZoneRef.current?.classList.add('bg-red-500')

      setTimeout(() => {
        dropZoneRef.current?.classList.remove('bg-red-500')
      }, 1000)
      toast.error('Only Excel/CSV files are supported.')
      return
    }

    handleFileUpload(file)
  }

// Deklarasikan fungsi untuk menangani event upload file
export const handleOpenFileDialog = (dropZoneRef: RefObject<HTMLDivElement>, handleFileUpload: (file: File) => void) => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = '.xls,.xlsx,.csv'
    input.onchange = (event: Event) => {
      const target = event.target as HTMLInputElement
      const file = target.files?.[0]
      if (file) {
        // Jika file ada, maka cek tipe filenya
        if (
          file.type !== 'application/vnd.ms-excel' &&
          file.type !== 'text/csv' &&
          file.type !== 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        ) {
          // Fika file tidak bisa dibuka dengan Excel, maka ubah zonanya menjadi warna merah
          dropZoneRef.current?.classList.add('bg-red-500')

          // Timeout ketika file yang didrop/diupload bukan Excel
          setTimeout(() => {
            dropZoneRef.current?.classList.remove('bg-red-500')
          }, 1000)
          toast.error('Only Excel/CSV files are supported.')
          return
        }
        // Jika file valid, maka file akan ditangani proses uploadnya
        handleFileUpload(file)
      }
    }
    input.click()
  }