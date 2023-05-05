// import { periodContext } from "../contexts/PeriodContext";
import { useContext, Dispatch, SetStateAction } from "react";

interface MonthState {
  name: string[];
  number: number;
}
interface MonthsProps {
  setCalendar: Dispatch<SetStateAction<boolean>>;
  setMonth: Dispatch<SetStateAction<MonthState>>;
}
interface Months {
  abbreviation: string;
  name: string[];
  number: number;
}
const Months = ({ setCalendar, setMonth }: MonthsProps) => {
  const months: Months[] = [
    { abbreviation: "Jan", name: ["janeiro"], number: 0 },
    { abbreviation: "Fev", name: ["fevereiro"], number: 1 },
    { abbreviation: "Mar", name: ["março"], number: 2 },
    { abbreviation: "Abr", name: ["abril"], number: 3 },
    { abbreviation: "Mai", name: ["maio"], number: 4 },
    { abbreviation: "Jun", name: ["junho"], number: 5 },
    { abbreviation: "Jul", name: ["julho"], number: 6 },
    { abbreviation: "Ago", name: ["agosto"], number: 7 },
    { abbreviation: "Set", name: ["setembro"], number: 8 },
    { abbreviation: "Out", name: ["outubro"], number: 9 },
    { abbreviation: "Nov", name: ["novembro"], number: 10 },
    { abbreviation: "Dez", name: ["dezembro"], number: 11 },
  ];
  //   const { period } = useContext(periodContext);

  return (
    <table>
      <tbody className="flex flex-col gap-4">
        {Array.from({ length: 4 }).map((_, rowIndex) => (
          <tr
            key={rowIndex}
            className="flex items-center justify-center gap-[17px]"
          >
            {Array.from({ length: 3 }).map((_, cellIndex) => {
              const stringIndex = rowIndex * 3 + cellIndex;
              return (
                <td
                  className=" flex h-10 w-[82px] cursor-pointer items-center justify-center rounded-lg hover:bg-[#9f75da]"
                  onClick={() => {
                    setCalendar(true);
                    setMonth({
                      name: months[stringIndex].name,
                      number: months[stringIndex].number,
                    });
                  }}
                  key={cellIndex}
                >
                  {months[stringIndex].abbreviation}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Months;
