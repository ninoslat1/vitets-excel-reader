import { Dispatch, DragEvent, RefObject, SetStateAction } from "react"
import { toast } from 'react-toastify'

export const handleDragOver = (e:DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
  };

  export const handleDragEnter = (setIsDragging: Dispatch<SetStateAction<boolean>>) => (
    e: DragEvent<HTMLDivElement>
  ) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }
  
  export const handleDragLeave = (setIsDragging: Dispatch<SetStateAction<boolean>>) => (
    e: DragEvent<HTMLDivElement>
  ) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  }
  

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

  export const handleOpenFileDialog = (dropZoneRef: RefObject<HTMLDivElement>, handleFileUpload: (file: File) => void) => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = '.xls,.xlsx,.csv'
    input.onchange = (event: Event) => {
      const target = event.target as HTMLInputElement
      const file = target.files?.[0]
      if (file) {
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
    }
    input.click()
  }