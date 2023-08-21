import { dayNameIndex } from "../utils/WeekDaysIndex";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const WeekDays: any = () => {
  return (
    <thead className="flex w-full items-center justify-center">
      <tr className="flex w-full text-light-primary dark:text-dark-primary">
        {Object.entries(dayNameIndex).map((days, index) => {
          return (
            <td
              key={index}
              className="flex h-8  w-10 cursor-default items-center justify-center "
            >
              {days[0]}
            </td>
          );
        })}
      </tr>
    </thead>
  );
};

export default WeekDays;
