import { IBottomTable } from "@/interface"
import { Button } from "./ui/button"
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { EnterIcon, ExitIcon } from "@radix-ui/react-icons";


export function Insight<TData>({dataTransaction, table}:Omit<IBottomTable<TData>, "data">) {
    const dataset: any = table.getAllColumns().map((column: any) => column.getFacetedUniqueValues())[2];
    const datasetArray = Array.from(dataset);
    
    const names = datasetArray.map((item: any) => item[0]);
    
    console.log(names);
    
  return (
    <div>
        <Dialog>
            <DialogTrigger asChild>
                <Button className="bg-slate-900 text-white">Lihat Statistik</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md bg-white">
                <DialogHeader>
                <DialogTitle className="text-xl">Statistik</DialogTitle>
                </DialogHeader>
                <div className="flex justify-between">
                    <div className="flex items-center">
                        <div className="bg-green-500 p-1 m-2 rounded-lg">
                            <EnterIcon className="h-4 w-4 m-1 text-white"/>
                        </div>
                        <div className="block text-xs">
                            <p className="font-bold">Valid Entry</p>
                            <p>{dataTransaction.filter(cell => cell.getValue("status") === 'Valid Entry Access').length}</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="bg-red-500 p-1 m-2 rounded-lg">
                            <ExitIcon className="h-4 w-4 m-1 text-white"/>
                        </div>
                        <div className="block text-xs">
                            <p className="font-bold">Valid Exit</p>
                            <p>{dataTransaction.filter(cell => cell.getValue("status") === "Valid Exit Access").length}</p>
                        </div>
                    </div>
                </div>
                <DialogFooter className="sm:justify-start">
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