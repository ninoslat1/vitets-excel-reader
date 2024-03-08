import { IBottomTable } from "@/lib/interface";
import { DailyTransaction, TSeries } from "@/lib/type";
import { useMemo } from "react";
import { AxisOptions } from "react-charts";

// Deklarasikan fungsi untuk menangani chart
export function handleChart<TData>({table, dataTransaction}:Partial<IBottomTable<TData>>) {

    // Deklarasikan variabel untuk menyimpan list nama kontroller
    const controllerNames: string[] = Array.from(table?.getAllColumns()?.map((column: any) => column.getFacetedUniqueValues())[2]).map((item: any) => item[0]);


    // Deklarasikan variabel sebagai data untuk pembuatan chart
    const data: TSeries[] = [
      {
        label: 'Data Statistik Gerbang',
        data: [],
      },
    ];
  
    // Melakukan mapping dari list nama kontroller dan mencari jumlah penggunaan kontroller sesuai filter
    controllerNames.forEach((name) => {
      const controllerCount: number | undefined = dataTransaction?.filter(cell => cell.getValue("controller") === name).length;
      data[0].data.push({
        controller: name,
        count: controllerCount,
      });
    });
  
    // Deklarasikan axis untuk nama kontroller
    const primaryAxis = useMemo(
      (): AxisOptions<DailyTransaction> => ({
        getValue: datum => datum.controller,
      }),
      []
    );
    
    // Deklarasikan axis untuk jumlah penggunaan kontroller
    const secondaryAxes = useMemo(
      (): AxisOptions<DailyTransaction>[] => [
        {
          getValue: datum => datum.count,
        },
      ],
      []
    );
    // Melakukan return objek dari data diatas
    return {
      data,
      primaryAxis,
      secondaryAxes,
    };
  }