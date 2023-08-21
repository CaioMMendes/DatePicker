// import { periodContext } from "../contexts/PeriodContext";
import { Dispatch, SetStateAction } from "react";
import { monthsName } from "../utils/MonthsName";
interface MonthState {
  name: string[];
  number: number;
}
interface MonthsProps {
  setCalendar: Dispatch<SetStateAction<boolean>>;
  setMonth: Dispatch<SetStateAction<MonthState>>;
}

const Months = ({ setCalendar, setMonth }: MonthsProps) => {
  const months = monthsName;
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
                  className=" flex h-10 w-[82px] cursor-pointer items-center justify-center rounded-lg text-light-primary hover:bg-light-hover hover:text-light-text-selected dark:text-dark-primary dark:hover:bg-dark-hover"
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
