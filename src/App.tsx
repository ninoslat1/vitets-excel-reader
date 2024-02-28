import { useState } from 'react';
import { DataTable } from './components/DataTable';
import { DragAndDrop } from './components/DragAndDrop';
import { columns } from './components/table/columns';
import './index.css';
import { TTransaction } from './type';
import { handleFileUpload } from './utils/HandleFileUpload';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  // Deklarasikan state untuk tabel data Tanstack Table mengikuti tipe TTransaction
  const [tableData, setTableData] = useState<TTransaction[]>([])

  return (
    <div className='px-5'>
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar={true} newestOnTop={true}/>
      <DragAndDrop handleFileUpload={(file: File) => handleFileUpload(file,setTableData)} />
      <DataTable columns={columns} data={tableData} />
    </div>
  );
}

export default App