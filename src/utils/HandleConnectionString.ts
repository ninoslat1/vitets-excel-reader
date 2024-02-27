import { IConnectionForm } from "@/type";
import { ChangeEvent, Dispatch, SetStateAction } from "react";


export const handleInputChange = (field: keyof IConnectionForm, setValue: Dispatch<SetStateAction<IConnectionForm>>) => (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setValue(value => ({
      ...value,
      [field]: val,
    }));
  }

export const handleSaveChanges = (value: IConnectionForm) => {
    // Simpan nilai-nilai ke dalam local storage
    localStorage.setItem('server', value.server)
    localStorage.setItem('user', value.user)
    localStorage.setItem('password', value.password)
    localStorage.setItem('port', value.port)
    localStorage.setItem('database', value.database)
  }