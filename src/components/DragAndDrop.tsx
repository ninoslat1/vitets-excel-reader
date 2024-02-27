import { IHandleFileUpload } from '@/interface'
import { useRef, useState } from 'react'
import { SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, Sheet } from './ui/sheet'
import { handleDragEnter, handleDragLeave, handleDragOver, handleDrop, handleOpenFileDialog } from '@/utils/HandleDragAndDrop'
import { Button } from './ui/button'
import { FileIcon } from '@radix-ui/react-icons'
import 'react-toastify/dist/ReactToastify.css'

export const DragAndDrop = ({ handleFileUpload }: IHandleFileUpload) => {
  const [isDragging, setIsDragging] = useState<boolean>(false)
  const dropZoneRef = useRef<HTMLDivElement>(null)
   
  return (
    <div className='flex justify-between'>
      <Sheet>
        <SheetTrigger asChild>
          <Button className='my-2 mx-5 hover:bg-white hover:text-slate-900 duration-300 gap-2'>Upload File <FileIcon className='w-4 h-4'/></Button>
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
          onDragEnter={handleDragEnter(setIsDragging)}
          onDragLeave={handleDragLeave(setIsDragging)}
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, dropZoneRef, handleFileUpload)}
        >
              <div className="drag-and-drop-content rounded-md border-dashed border-2 border-white h-full">
                <div className='flex flex-col justify-center items-center h-full px-2'>
                  <p>Silahkan seret atau <span onClick={() => handleOpenFileDialog(dropZoneRef, handleFileUpload)} className='underline cursor-pointer hover:text-white duration-300'>upload</span> file transaksi disini</p>
                </div>
              </div>
            </div>
          </div>  
        </SheetContent>
      </Sheet>
    </div>
   
  )
}
