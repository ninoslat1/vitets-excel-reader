import { TTransaction } from "@/lib/type"
import { ColumnDef } from "@tanstack/react-table"

// Deklarasikan variabel column untuk mendefinisikan kepala kolom dari Tanstack Table
export const columns: ColumnDef<TTransaction>[] = [
    {
        accessorKey: "datetime",
        header: "Tanggal",
    },
    {
        accessorKey: "site",
        header: "Site",
    },
    {
        accessorKey: 'controller',
        header: "Nama Gerbang"
    },
    {
        accessorKey: 'cardno',
        header: 'Nomor Kartu',
    },
    {
        accessorKey: 'staffno',
        header: 'Nomor Staff'
    },
    {
        accessorKey: 'name',
        header: 'Nama Kartu',
    },
    {
        accessorKey: 'status',
        header: 'Status Transaksi',
    },
    {
        accessorKey: 'company',
        header: 'Perusahaan'
    },
    {
        accessorKey: 'vehicleno',
        header: 'Nomor Kendaraan'
    }
  ] 