import { ChangeEvent, Dispatch, SetStateAction } from "react";

  // Dekalrasikan fungsi untuk menangani filter select
export const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>, setSelectedValues: Dispatch<SetStateAction<string>>) => {
      setSelectedValues("")
      const selectedOption = event.target.value;
      setSelectedValues(selectedOption);
    }