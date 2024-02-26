import { useState } from 'react';
import { DataTable } from './components/DataTable';
import { DragAndDrop } from './components/DragAndDrop';
import { columns } from './components/table/columns';
import './index.css';
import { TTransaction } from './type';
import { handleFileUpload } from './utils/FileUpload';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [tableData, setTableData] = useState<TTransaction[]>([])

  const handleUpload = (file: File) => {
    handleFileUpload(file, setTableData)
  };

  return (
    <div className='px-5'>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={true} newestOnTop={true}/>
      <DragAndDrop handleFileUpload={handleUpload} />
      <DataTable columns={columns} data={tableData} />
    </div>
  );
}

export default App