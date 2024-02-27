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

export type IConnectionForm = {
    server: string
    user: string
    password: string
    port: string
    database: string
  }