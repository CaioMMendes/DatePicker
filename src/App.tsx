import { useState } from "react";
import "./App.css";
import Months from "./components/Months";
import Days from "./components/Days";
interface MonthState {
  name: string[];
  number: number;
}
function App() {
  const [calendar, setCalendar] = useState(true);
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState<MonthState>({
    name: new Date().toLocaleString("pt-BR", { month: "long" }).split(" "),
    number: new Date().getMonth(),
  });
  const [day, setDay] = useState(new Date().getDate());
  const date = new Date(Date.now());
  const handleShowCalendar = () => {
    setCalendar(!calendar);
  };
  // const teste = <input type="text" />;

  return (
    <div className=" container mt-36  flex  justify-center">
      <div
        id="datePicker"
        className="flex w-[344px] flex-col gap-6 rounded-[16px] bg-zinc-600 p-8"
      >
        <div
          id="monthSelector"
          className="flex  h-6 w-full  justify-between bg-blue-300 font-semibold"
        >
          <div
            className="flex h-6 w-6 cursor-pointer select-none items-center justify-center bg-slate-400 text-lg"
            onClick={
              !calendar
                ? () => {
                    setYear(year - 1);
                  }
                : () => {
                    if (month.name[0] === "janeiro") {
                      setYear(year - 1);
                    }
                    const monthName = new Date(
                      2023,
                      month.number - 1
                    ).toLocaleString("pt-br", { month: "long" });
                    console.log(month.name[0]);
                    setMonth({
                      ...month,
                      name: [monthName],
                      number: month.number - 1,
                    });
                    console.log(month.name[0]);
                  }
            }
          >
            <p> {"<"}</p>
          </div>
          {calendar ? (
            <div
              className="flex w-fit cursor-pointer items-center justify-center bg-orange-400 font-semibold"
              onClick={handleShowCalendar}
            >
              {month.name[0].charAt(0).toUpperCase() +
                month.name[0].slice(1).toLowerCase()}{" "}
              {year}
            </div>
          ) : (
            <div className="flex w-full items-center justify-center bg-orange-400 font-semibold">
              {year}
            </div>
          )}
          <div
            className="flex h-6 w-6  cursor-pointer select-none items-center justify-center bg-slate-400 text-lg font-semibold"
            onClick={
              !calendar
                ? () => {
                    setYear(year + 1);
                  }
                : () => {
                    if (month.name[0] === "dezembro") {
                      setYear(year + 1);
                    }
                    const monthName = new Date(
                      2022,
                      month.number + 1
                    ).toLocaleString("pt-br", { month: "long" });
                    setMonth({
                      ...month,
                      name: [monthName],
                      number: month.number + 1,
                    });
                    console.log(month.number);
                  }
            }
          >
            <p> {">"}</p>
          </div>
        </div>
        {calendar ? (
          <div id="calendar" className="h-[316px] w-full bg-red-300">
            <Days month={month} year={year} />
          </div>
        ) : (
          <div id="year" className="h-[208px] w-[280px] bg-green-400">
            <Months setCalendar={setCalendar} setMonth={setMonth} />
          </div>
        )}
      </div>
      <button onClick={handleShowCalendar}>Change</button>
      {year}
      <br />
      {day}
      <br />
      {/* {month} */}
    </div>
  );
}

export default App;
