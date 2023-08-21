import { Dispatch, SetStateAction } from "react";

interface YearProps {
  setShowYear: Dispatch<SetStateAction<boolean>>;
  setYear: Dispatch<SetStateAction<number>>;
  year: number;
}
const Years = ({ setShowYear, year, setYear }: YearProps) => {
  return (
    <table>
      <tbody className="flex flex-col gap-4 text-light-primary  dark:text-dark-primary ">
        {Array.from({ length: 3 }).map((_, rowIndex) => (
          <tr
            key={rowIndex}
            className="flex items-center justify-center gap-[17px]"
          >
            {Array.from({ length: 3 }).map((_, cellIndex) => {
              const stringIndex = rowIndex * 3 + cellIndex;
              return (
                <td
                  className=" flex h-10 w-[82px] cursor-pointer items-center justify-center rounded-lg hover:bg-light-hover hover:text-light-text-selected
dark:hover:bg-dark-hover "
                  onClick={() => {
                    setYear(year + (stringIndex - 4));
                    setShowYear(false);
                  }}
                  key={cellIndex}
                >
                  {year + (stringIndex - 4)}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Years;
