import { periodContext } from "../contexts/PeriodContext";
import { useContext, Dispatch, SetStateAction } from "react";
interface MonthState {
  name: string[];
  number: number;
}
// interface Months {
//     abbreviation: string;
//     name: string[];
//     number: number;
// }
interface DaysProps {
  year: number;
  month: MonthState;
}
const Days = ({ month, year }: DaysProps) => {
  const daysName = {
    "Dom": 0,
    "Seg": 1,
    "Ter": 2,
    "Qua": 3,
    "Qui": 4,
    "Sex": 5,
    "Sáb": 6,
  };
  console
    .log
    // new Date(2023, 5).toLocaleDateString("pt-br", { weekday: "short" })
    ();
  console.log(month, year);
  const weekday = new Date(year, month.number)
    .toLocaleDateString("pt-br", {
      weekday: "short",
    })
    .replace(/\./g, "");

  const weekdayFormated =
    weekday.charAt(0).toUpperCase() + weekday.slice(1).toLowerCase();

  const diasDoMes = (ano: number, mes: number) => {
    return new Date(ano, mes, 0).getDate();
  };
  console.log(diasDoMes(month.number, year));
  console.log(Object.entries(daysName));
  console.log(weekdayFormated);
  console.log(daysName[weekdayFormated]);
  return (
    <table className="flex flex-col gap-1">
      <thead className="flex w-full items-center justify-center">
        <tr className="flex w-full bg-green-400">
          {Object.entries(daysName).map((days, index) => {
            return (
              <td
                key={index}
                className="flex h-8 w-10 items-center justify-center"
              >
                {days[0]}
              </td>
            );
          })}
        </tr>
      </thead>
      <tbody className="h-280px] w-[280px] bg-amber-600">asda</tbody>
    </table>
  );
};

export default Days;
