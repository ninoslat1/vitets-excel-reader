import { useState } from 'react';
import { DataTable } from './components/DataTable';
import { DragAndDrop } from './components/DragAndDrop';
import { columns } from './components/table/columns';
import './index.css';
import { TTransaction } from './type';
import { handleFileUpload } from './utils/FileUpload';

function App() {
  const [tableData, setTableData] = useState<TTransaction[]>([]);

  const handleUpload = (file: File) => {
    handleFileUpload(file, setTableData); // Call the imported function and pass the file and setTableData
  };

  return (
    <div className='px-5'>
      <DragAndDrop handleFileUpload={handleUpload} />
      <DataTable columns={columns} data={tableData} />
    </div>
  );
}

export default App;