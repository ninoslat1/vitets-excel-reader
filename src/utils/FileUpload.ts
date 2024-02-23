import { TTransaction } from "@/type";
import { read, utils } from "xlsx";

export const handleFileUpload = (file: File, setTableData: (data: TTransaction[]) => void) => {
    alert("Sedang upload");
  
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target?.result as ArrayBuffer);
      const workbook = read(data, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const jsonData: string[][] = utils.sheet_to_json(worksheet, { header: 1 });
  
      // Mapping data to TTransaction format
      const mappedData: TTransaction[] = [];
      let previousCardNo: string | undefined;
      let previousController: string | undefined;
  
      for (let i = 1; i < jsonData.length; i++) {
        const row = jsonData[i];
        const cardNo = row[3];
        const controller = row[2];
        const status: "Valid Entry Access" | "Valid Exit Access" =
          row[6] === "Valid Entry Access" || row[6] === "Valid Exit Access"
            ? row[6]
            : "Valid Entry Access";
  
        if (cardNo !== previousCardNo) {
          mappedData.push({
            datetime: new Date((parseFloat(row[0]) - 25569) * 86400 * 1000).toLocaleDateString().toString(),
            site: row[1],
            controller,
            cardno: cardNo,
            staffno: row[4],
            name: row[5],
            status,
            company: row[7],
            vehicleno: row[8],
          });
        } else if (cardNo === previousCardNo && controller !== previousController) {
          mappedData.push({
            datetime: new Date((parseFloat(row[0]) - 25569) * 86400 * 1000).toLocaleDateString().toString(),
            site: row[1],
            controller,
            cardno: cardNo,
            staffno: row[4],
            name: row[5],
            status,
            company: row[7],
            vehicleno: row[8],
          });
        } else {
          // ... handle other cases as needed ...
        }
  
        previousCardNo = cardNo;
        previousController = controller;
      }
  
      setTableData(mappedData);
      alert("Proses upload selesai");
    };
  
    reader.readAsArrayBuffer(file);
  };
  