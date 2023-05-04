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
interface IDayNameIndex {
  [key: string]: number;
}
const Days = ({ month, year }: DaysProps) => {
  const dayNameIndex: IDayNameIndex = {
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

  const diasDoMes = (mes: number, ano: number) => {
    return new Date(ano, mes, 0).getDate();
  };
  const monthName = new Date(2023, 1).toLocaleString("pt-br", {
    month: "long",
  });
  console.log(monthName);
  const diasDoMesAtual = diasDoMes(month.number + 1, year);
  //todo tem que ver o que acontece quando o mes atual é dezembro
  const diasDoMesAnterior = diasDoMes(month.number, year);
  console.log(year);
  console.log(diasDoMes(13, 2024));
  console.log(month.number, month.name, diasDoMesAtual);
  console.log(month.number - 1, month.name, diasDoMesAnterior);
  console.log(diasDoMesAnterior);
  console.log(Object.entries(dayNameIndex));
  console.log(weekdayFormated);
  const numeroDeDiasDoMesAnterior = dayNameIndex[weekdayFormated];
  console.log(numeroDeDiasDoMesAnterior);
  const numeroDeLinhas =
    diasDoMesAtual + numeroDeDiasDoMesAnterior <= 35 ? 4 : 5;
  console.log(numeroDeLinhas);
  let count = 0;
  return (
    <table className="flex flex-col gap-1">
      <thead className="flex w-full items-center justify-center">
        <tr className="flex w-full bg-green-400">
          {Object.entries(dayNameIndex).map((days, index) => {
            return (
              <td
                key={index}
                className="flex h-8  w-10 items-center justify-center "
              >
                {days[0]}
              </td>
            );
          })}
        </tr>
      </thead>
      <tbody className="h-280px] flex w-[280px] flex-col gap-2 bg-amber-600">
        <tr className="flex items-center justify-center ">
          {Array.from({ length: numeroDeDiasDoMesAnterior }).map(
            (_, cellIndex) => {
              return (
                <td
                  className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg text-zinc-800 hover:bg-[#9f75da]"
                  onClick={() => {
                    ("");
                  }}
                  key={cellIndex}
                >
                  {diasDoMesAnterior -
                    (numeroDeDiasDoMesAnterior - (cellIndex + 1))}
                </td>
              );
            }
          )}
          {Array.from({ length: 7 - numeroDeDiasDoMesAnterior }).map(
            (_, cellIndex) => {
              return (
                <td
                  className=" flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg hover:bg-[#9f75da]"
                  onClick={() => {
                    ("");
                  }}
                  key={cellIndex}
                >
                  {cellIndex + 1}
                </td>
              );
            }
          )}
        </tr>
        {Array.from({ length: numeroDeLinhas }).map((_, rowIndex) => (
          <tr key={rowIndex} className="flex items-center justify-center ">
            {Array.from({ length: 7 }).map((_, cellIndex) => {
              const stringIndex =
                rowIndex * 7 + cellIndex + (8 - numeroDeDiasDoMesAnterior);
              if (stringIndex > diasDoMesAtual) {
                count++;
              }
              return (
                <td
                  className={`${
                    count > 0 ? "text-zinc-800" : ""
                  } flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg hover:bg-[#9f75da]`}
                  onClick={() => {
                    ("");
                  }}
                  key={cellIndex}
                >
                  {stringIndex <= diasDoMesAtual ? stringIndex : count}
                </td>
              );
            })}
          </tr>
        ))}
        {/* <tr className="flex items-center justify-center "> */}
        {/* {Array.from({ length: numeroDeDiasDoMesAnterior }).map(
            (_, cellIndex) => {
              return (
                <td
                  className=" flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg hover:bg-[#9f75da]"
                  onClick={() => {
                    ("");
                  }}
                  key={cellIndex}
                >
                  {diasDoMesAnterior -
                    (numeroDeDiasDoMesAnterior - (cellIndex + 1))}
                </td>
              );
            }
          )} */}
        {/* {Array.from({ length: 7 }).map((_, cellIndex) => {
            return (
              <td
                className=" flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg hover:bg-[#9f75da]"
                onClick={() => {
                  ("");
                }}
                key={cellIndex}
              >
                {cellIndex + 1}
              </td>
            );
          })}
        </tr> */}
      </tbody>
    </table>
  );
};

export default Days;
