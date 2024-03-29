import { IBottomTable } from "@/lib/interface"
import { Button } from "./ui/button"
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { CheckIcon, EnterIcon, ExitIcon } from "@radix-ui/react-icons"
import { Chart } from 'react-charts'
import { handleChart } from "@/utils/HandleChart"


export function Insight<TData>({dataTransaction, table}:Partial<IBottomTable<TData>>) {

  // Mengambil data yang dibutuhkan untuk meng-generate chart
  const { data, primaryAxis, secondaryAxes } = handleChart({table, dataTransaction});  
      
  return (
    <div>
        <Dialog>
            <DialogTrigger asChild>
                <Button className="bg-slate-900 text-white">Lihat Statistik</Button>
            </DialogTrigger>
            <DialogContent className="w-full bg-white">
                <DialogHeader>
                <DialogTitle className="text-lg text-center">Statistik Transaksi Masuk/Keluar</DialogTitle>
                <p className="text-xs text-justify">Berikut ini adalah statistik dari jumlah transaksi masuk dan keluar</p>
                </DialogHeader>
                <div>
                    <div className="flex justify-between">
                    <div className="flex items-center">
                            <div className="bg-sky-500 p-1 m-2 rounded-lg">
                                <CheckIcon className="h-4 w-4 m-1 text-white"/>
                            </div>
                            <div className="block text-xs">
                                <p className="font-bold">Valid Transaction</p>
                                <p>{dataTransaction?.filter(cell => cell.getValue("status") === 'Valid Entry Access' || cell.getValue("status") === 'Valid Exit Access').length}</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="bg-green-500 p-1 m-2 rounded-lg">
                                <EnterIcon className="h-4 w-4 m-1 text-white"/>
                            </div>
                            <div className="block text-xs">
                                <p className="font-bold">Valid Entry</p>
                                <p>{dataTransaction?.filter(cell => cell.getValue("status") === 'Valid Entry Access').length}</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="bg-red-500 p-1 m-2 rounded-lg">
                                <ExitIcon className="h-4 w-4 m-1 text-white"/>
                            </div>
                            <div className="block text-xs">
                                <p className="font-bold">Valid Exit</p>
                                <p>{dataTransaction?.filter(cell => cell.getValue("status") === "Valid Exit Access").length}</p>
                            </div>
                        </div>
                    </div>
                    <div className="h-96 my-2">
                        <DialogHeader>
                            <DialogTitle className="text-lg text-center">Statistik Total Penggunaan Gerbang</DialogTitle>
                            <p className="text-xs text-justify">Berikut ini adalah statistik dari jumlah transaksi gerbang</p>
                        </DialogHeader>
                        <Chart
                            options={{
                                data,
                                primaryAxis,
                                secondaryAxes,
                            }}
                        />
                    </div>
                </div>
                <DialogFooter className="sm:justify-start py-5">
                <DialogClose asChild>
                    <Button type="button" className="bg-slate-900 text-white">
                    Close
                    </Button>
                </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    </div>
  )
}

export default Insight