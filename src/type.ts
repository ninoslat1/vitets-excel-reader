
// Deklarasi tipe data transaksi
export type TTransaction = {
    datetime: string
    site: string
    controller: string
    cardno: string
    staffno: string
    name: string
    status: "Valid Entry Access" | "Valid Exit Access"
    company: string,
    vehicleno: string
}