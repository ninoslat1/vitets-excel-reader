import { Button } from "./ui/button"
import { ArrowLeftIcon, ArrowRightIcon, FilePlusIcon } from "@radix-ui/react-icons"
import { handleXLSImport } from "@/utils/HandleImport"
import { IBottomTable } from "@/lib/interface"
import {Insight} from "./Insight";

// Deklarasikan komponen bagian bawah tabel
export function BottomTable<TData>({data, dataTransaction, table}:IBottomTable<TData>){
    return (
      <div className="block md:flex items-center justify-between text-xs md:text-base">
        <div className={`flex justify-between md:gap-8 p-2.5 ${data?.length > 0 ? "" : "invisible"}`}>
          <Insight dataTransaction={dataTransaction} table={table}/>
        </div>
        <div className="flex justify-between md:gap-8 p-2.5">
          <Button
            size="sm"
            onClick={() => handleXLSImport(data, dataTransaction)}
            className={`bg-slate-900 text-white hover:bg-green-800 text-xs md:text-base items-center ${data?.length > 0  ? "" : "invisible"}`}
          >
            Impor ke Excel <FilePlusIcon className="h-2 w-2 md:h-4 md:w-4 mx-2"/>
          </Button>
          <Button
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="bg-slate-900 text-white text-xs md:text-base items-center"
          >
            <ArrowLeftIcon className="h-2 w-2 md:h-4 md:w-4 mx-2"/> Previous
          </Button>
          <Button
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="bg-slate-900 text-white text-xs md:text-base items-center"
          >
            Next <ArrowRightIcon className="h-2 w-2 md:h-4 md:w-4 mx-2"/>
          </Button>
        </div>
      </div>
    );
  }