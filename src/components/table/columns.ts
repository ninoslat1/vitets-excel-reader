import { TTransaction } from "@/type";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<TTransaction>[] = [
    {
        accessorKey: "datetime",
        header: "Date & Time",
        cell: ({ row }) => {
          const datetime = new Date((parseFloat(row.getValue("datetime")) - 25569) * 86400 * 1000).toLocaleString();
          return datetime
        },
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