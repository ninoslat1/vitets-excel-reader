import { useState } from 'react';
import { DataTable } from './components/DataTable';
import { DragAndDrop } from './components/DragAndDrop';
import { columns } from './components/table/columns';
import './index.css';
import { TTransaction } from './type';
import { read, utils } from 'xlsx';

function App() {
  const [tableData, setTableData] = useState<TTransaction[]>([]);

  const handleFileUpload = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target?.result as ArrayBuffer);
      const workbook = read(data, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const jsonData = utils.sheet_to_json(worksheet, { header: 1 });

      // Mapping data to TTransaction format
      const mappedData: TTransaction[] = jsonData.slice(1).map((row: any) => ({
        datetime: row[0],
        site: row[1],
        controller: row[2],
        cardno: row[3],
        staffno: row[4],
        name: row[5],
        status: row[6],
        company: row[7],
        vehicleno: row[8],
      }));

      setTableData(mappedData);
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <div className='px-5'>
      <DragAndDrop handleFileUpload={handleFileUpload} />
      <DataTable columns={columns} data={tableData} />
    </div>
  );
}

export default App;