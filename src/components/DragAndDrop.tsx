import { IHandleFileUpload } from '@/interface'
import { useState } from 'react'

export const DragAndDrop = ({ handleFileUpload }: IHandleFileUpload) => {
  const [isDragging, setIsDragging] = useState(false)

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

  const handleDragOver = (e:React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
  };

  const handleDrop = (e:React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
    const file = e.dataTransfer.files[0]

    if (
        file.type !== 'application/vnd.ms-excel' &&
        file.type !== 'text/csv' &&
        file.type !== 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      ) {
        alert('Only Excel/CSV files are supported.')
        return
      }

    handleFileUpload(file)
  };

  const handleOpenFileDialog = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.xls,.xlsx,.csv';
    input.onchange = (event: Event) => {
      const target = event.target as HTMLInputElement;
      const file = target.files?.[0];
      if (file) {
        if (
          file.type !== 'application/vnd.ms-excel' &&
          file.type !== 'text/csv' &&
          file.type !== 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        ) {
          alert('Only Excel/CSV files are supported.')
          return
        }
        handleFileUpload(file)
      }
    };
    input.click();
  }

  return (
    <div
      className={`drag-and-drop ${isDragging ? 'dragging' : ''}`}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <div className="drag-and-drop-content">
        <p>Drag and drop or <span onClick={handleOpenFileDialog} className='underline cursor-pointer hover:text-sky-500 duration-300'>upload</span> file here</p>
        <p>Only Excel/CSV files are supported</p>
      </div>
    </div>
  );
}
