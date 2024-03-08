import { TTransaction } from "@/type"
import { read, utils } from "xlsx"
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// Deklarasi fungsi untuk menangani proses upload file dan sortir data
export const handleFileUpload = (file: File, setTableData: (data: TTransaction[]) => void) => {

    // Dekalrasi alert saat file sedang proses upload
    toast.info('Sedang upload')

    // Variabel untuk membaca file
    const reader = new FileReader()

    //Saat reader sedang membaca file
    reader.onload = (e) => {

      // Deklarasikan kebutuhan file Excel menggunakan paket XLSX
      const data = new Uint8Array(e.target?.result as ArrayBuffer)
      const workbook = read(data, { type: 'array' })
      const sheetName = workbook.SheetNames[0]
      const worksheet = workbook.Sheets[sheetName]
      const jsonData: string[][] = utils.sheet_to_json(worksheet, { header: 1 })
  
      // Pemetaan data ke format tipe TTransaction
      const mappedData: TTransaction[] = []

      // Deklarasikan variabel nomor kartu dan nama kontroller sebagai variabel syarat
      let previousCardNo: string | undefined
      let previousController: string | undefined
      
      // Pengulangan untuk melakukan input data Excel ke tabel data Tanstack Table
      for (let i = 1; i < jsonData.length; i++) {
        const row = jsonData[i]
        const cardNo = row[3]
        const controller = row[2]
        const status: "Valid Entry Access" | "Valid Exit Access" | "Card Expired" =
        row[6] === "Valid Entry Access" || row[6] === "Valid Exit Access"
          ? row[6]
          : "Card Expired";
        
        // Jika nomor kartu sesudahnya tidak sama dengan nomor kartu sebelumnya, simpan data ke pemetaan data
        if (cardNo !== previousCardNo) {
          mappedData.push({
            datetime: new Intl.DateTimeFormat('en-US').format(new Date(Date.UTC(1899, 12, parseFloat(row[0]) - 1))),
            site: row[1],
            controller,
            cardno: cardNo,
            staffno: row[4],
            name: row[5],
            status,
            company: row[7],
            vehicleno: row[8],
          })
        // Jika nomor kartu sesudahnya sama dengan nomor kartu sebelumnya, namun memiliki nama kontroller yang berbeda, simpan data ke pemetaan data
        } else if (cardNo === previousCardNo && controller !== previousController) {
          mappedData.push({
            datetime: new Intl.DateTimeFormat('en-US').format(new Date(Date.UTC(1899, 12, parseFloat(row[0]) - 1))),
            site: row[1],
            controller,
            cardno: cardNo,
            staffno: row[4],
            name: row[5],
            status,
            company: row[7],
            vehicleno: row[8],
          })
        } else {
        // Jika nomor kartu dan nama kontrollernya sama, jangan simpan data ke pemetaan data
        }
        
        // Melakukan pengaturan ulang variabel nomor kartu dan nama kontroller untuk data selanjutnya
        previousCardNo = cardNo
        previousController = controller
      }
      
      // Mengatur tabel data Tanstack table dengan data yang sudah disortir
      setTableData(mappedData)
      toast.info('Proses upload selesai')
    }
  
    // Jalankan fungsi membaca file dari reader
    reader.readAsArrayBuffer(file)
  }
  