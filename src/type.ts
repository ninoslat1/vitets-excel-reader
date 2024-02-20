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

export type TCustomSelectProps = {
    value: string;
    onChange: (value: string) => void;
  };