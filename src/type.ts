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

export type TAlert = {
    title: string
    message: string
}

export type TableData<T> = T[];
export type TableColumn<T> = keyof T;
export type ExportFileType = 'csv' | 'xlsx' | 'pdf';

export type ExportFileOptions<T> = {
  columns: (TableColumn<T> | TableColumn<TTransaction>)[],
  data: TableData<T>,
  fileType: ExportFileType,
  fileName: string,
};