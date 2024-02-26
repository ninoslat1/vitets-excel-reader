import { IHandleFileUpload } from '@/interface'
import { useRef, useState } from 'react'
import { SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, Sheet } from './ui/sheet'
import { handleDragOver } from '@/utils/DragAndDrop'
import { Button } from './ui/button'
import { FileIcon } from '@radix-ui/react-icons'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const DragAndDrop = ({ handleFileUpload }: IHandleFileUpload) => {
  const [isDragging, setIsDragging] = useState<boolean>(false)
  const dropZoneRef = useRef<HTMLDivElement>(null)
   
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
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

  const handleDragEnter = (e:React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  };

  const handleDragLeave = (e:React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  };

  const handleOpenFileDialog = () => {
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

  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <Button className='my-2 hover:bg-white hover:text-slate-900 duration-300 gap-2'>Upload File <FileIcon className='w-4 h-4'/></Button>
        </SheetTrigger>
        <SheetContent className='bg-white'>
          <SheetHeader>
            <SheetTitle className='flex items-center gap-2 py-2'>Upload File<FileIcon className='w-4 h-4'/></SheetTitle>
            <SheetDescription className='py-5'>Silahkan upload file transaksi yang Anda inginkan <b>(hanya menerima file berekstensi .xls/.xlsx/.csv)</b></SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div
            ref={dropZoneRef}
          className={`drag-and-drop ${isDragging ? 'dragging' : ''} bg-blue-500 font-bold text-sky-100 p-1 rounded-md text-center mx-auto h-64`}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
              <div className="drag-and-drop-content rounded-md border-dashed border-2 border-white h-full">
                <div className='flex flex-col justify-center items-center h-full px-2'>
                  <p>Drag and drop or <span onClick={handleOpenFileDialog} className='underline cursor-pointer hover:text-white duration-300'>upload</span> file here</p>
                  <p>Only Excel/CSV files are supported</p>
                </div>
              </div>
            </div>
          </div>  
        </SheetContent>
      </Sheet>
    </div>
   
  )
}
