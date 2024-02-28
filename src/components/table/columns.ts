import { TTransaction } from "@/type"
import { ColumnDef } from "@tanstack/react-table"

// Deklarasikan variabel column untuk mendefinisikan kepala kolom dari Tanstack Table
export const columns: ColumnDef<TTransaction>[] = [
    {
        accessorKey: "datetime",
        header: "DateTime",
    },
    {
        accessorKey: "site",
        header: "Site",
    },
    {
        accessorKey: 'controller',
        header: "Controller"
    },
    {
        accessorKey: 'cardno',
        header: 'Card No',
    },
    {
        accessorKey: 'staffno',
        header: 'Staff No'
    },
    {
        accessorKey: 'name',
        header: 'Name',
    },
    {
        accessorKey: 'status',
        header: 'Transaction',
    },
    {
        accessorKey: 'company',
        header: 'Company'
    },
    {
        accessorKey: 'vehicleno',
        header: 'Vehicle No'
    }
  ] 