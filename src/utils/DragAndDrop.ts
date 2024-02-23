import { useState } from "react";


export const handleDragEnter = (e:React.DragEvent<HTMLDivElement>) => {
    const setIsDragging = useState<boolean>(false)[1]
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  };

export const handleDragLeave = (e:React.DragEvent<HTMLDivElement>) => {
    const setIsDragging = useState<boolean>(true)[1]
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  };

export const handleDragOver = (e:React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
  };
  

