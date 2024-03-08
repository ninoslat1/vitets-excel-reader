import { IBottomTable } from "@/interface";
import { DailyTransaction, TSeries } from "@/type";
import { useMemo } from "react";
import { AxisOptions } from "react-charts";

// Deklarasikan fungsi untuk menangani chart
export function handleChart<TData>({table, dataTransaction}:Partial<IBottomTable<TData>>) {
    const controllerNames: string[] = Array.from(table?.getAllColumns()?.map((column: any) => column.getFacetedUniqueValues())[2]).map((item: any) => item[0]);
  
    const data: TSeries[] = [
      {
        label: 'Data Statistik Gerbang',
        data: [],
      },
    ];
  
    controllerNames.forEach((name) => {
      const controllerCount: number | undefined = dataTransaction?.filter(cell => cell.getValue("controller") === name).length;
      data[0].data.push({
        controller: name,
        count: controllerCount,
      });
    });
  
    const primaryAxis = useMemo(
      (): AxisOptions<DailyTransaction> => ({
        getValue: datum => datum.controller,
      }),
      []
    );
  
    const secondaryAxes = useMemo(
      (): AxisOptions<DailyTransaction>[] => [
        {
          getValue: datum => datum.count,
        },
      ],
      []
    );
  
    return {
      data,
      primaryAxis,
      secondaryAxes,
    };
  }