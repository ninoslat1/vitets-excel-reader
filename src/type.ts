
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

export type DailyTransaction = {
    controller: string
    count: number | undefined
}

export type TSeries = {
    label: string
    data: DailyTransaction[]
}