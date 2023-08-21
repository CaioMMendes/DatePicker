import { useContext, useState } from "react";
import "./App.css";
import Days from "./components/Days";
import Months from "./components/Months";
import Switch from "./components/Switch";
import Years from "./components/Years";
import { diasSelecionadosContext } from "./contexts/DiasSelecionados";
import { monthsName } from "./utils/MonthsName";
interface MonthState {
  name: string[];
  number: number;
}
interface IMonthNameIndex {
  [key: string]: number;
}
function App() {
  const {
    primeiroDiaSelecionado,

    segundoDiaSelecionado,
  } = useContext(diasSelecionadosContext);

  const [darkMode, setDarkMode] = useState<string | boolean | null>(
    localStorage.getItem("darkMode") === "false"
      ? localStorage.getItem("darkMode")
      : "true"
  );
  const handleDarkMode = () => {
    if (darkMode === "true") {
      setDarkMode("false");
      localStorage.setItem("darkMode", "false");
    } else {
      setDarkMode("true");
      localStorage.setItem("darkMode", "true");
    }
  };

  const [calendar, setCalendar] = useState(true);
  const [showYear, setShowYear] = useState(false);
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState<MonthState>({
    name: new Date().toLocaleString("pt-BR", { month: "long" }).split(" "),
    number: new Date().getMonth(),
  });
  const monthNameIndex: IMonthNameIndex = {
    "janeiro": 0,
    "fevereiro": 1,
    "março": 2,
    "abril": 3,
    "maio": 4,
    "junho": 5,
    "julho": 6,
    "agosto": 7,
    "setembro": 8,
    "outubro": 9,
    "novembro": 10,
    "dezembro": 11,
  };
  // const monthsNames = monthsName;

  const handleShowCalendar = () => {
    setCalendar(!calendar);
  };

  return (
    <div className={`${darkMode === "true" ? "dark" : ""}`}>
      <div
        className={` bg- flex h-screen w-screen flex-col items-center justify-center gap-1 bg-light dark:bg-dark`}
      >
        <div className="flex items-center justify-center">
          <Switch handleDarkMode={handleDarkMode} />
        </div>
        <div
          id="datePicker"
          className="flex w-[344px] flex-col gap-6 rounded-[16px] bg-calendar-light p-8 shadow-lg  dark:bg-calendar-dark"
        >
          <div
            id="monthSelector"
            className="flex  h-6 w-full  justify-between  bg-calendar-light font-semibold
dark:bg-calendar-dark"
          >
            <div
              className="flex h-6 w-6 cursor-pointer select-none items-center justify-center text-lg text-light-primary dark:text-dark-primary"
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
                      setMonth({
                        ...month,
                        name: [monthName],

                        number: monthNameIndex[monthName],
                      });
                    }
              }
            >
              <p> {"<"}</p>
            </div>
            {calendar ? (
              <div
                className="flex w-fit cursor-pointer items-center justify-center font-semibold text-light-primary dark:text-dark-primary"
                onClick={handleShowCalendar}
              >
                {month.name[0].charAt(0).toUpperCase() +
                  month.name[0].slice(1).toLowerCase()}{" "}
                {year}
              </div>
            ) : (
              <div
                className="flex w-14 cursor-pointer items-center justify-center font-semibold text-light-primary  dark:text-dark-primary"
                onClick={() => {
                  setShowYear(true);
                }}
              >
                {year}
              </div>
            )}
            <div
              className="flex h-6 w-6  cursor-pointer select-none items-center justify-center text-lg font-semibold text-light-primary dark:text-dark-primary"
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
                        number: monthNameIndex[monthName],
                      });
                    }
              }
            >
              <p> {">"}</p>
            </div>
          </div>
          {calendar ? (
            <div id="calendar" className="w-full ">
              <Days month={month} year={year} />
            </div>
          ) : showYear ? (
            <Years setShowYear={setShowYear} year={year} setYear={setYear} />
          ) : (
            <div id="year" className="h-[208px] w-[280px] ">
              <Months setCalendar={setCalendar} setMonth={setMonth} />
            </div>
          )}
          <div
            id="datePicked"
            className={`${
              primeiroDiaSelecionado === null && segundoDiaSelecionado === null
                ? "hidden"
                : ""
            } `}
          >
            <p className="font-medium text-light-primary dark:text-dark-primary">
              Período:
            </p>
            <div className="flex flex-col items-center justify-center  ">
              <p
                className={`${
                  primeiroDiaSelecionado
                    ? "text-base text-light-primary dark:text-dark-primary"
                    : "hidden"
                } font-medium`}
              >
                {/* {primeiroDiaSelecionado &&
                  `${primeiroDiaSelecionado?.dia} ${
                    monthsNames[primeiroDiaSelecionado?.mes]?.abbreviation
                  }
              ${" de "}
              ${primeiroDiaSelecionado?.ano}`} */}
                {primeiroDiaSelecionado?.dia} {primeiroDiaSelecionado?.nomeMes}
                {" de "}
                {primeiroDiaSelecionado?.ano}
                {segundoDiaSelecionado && " a  "}
              </p>

              <p
                className={`${
                  segundoDiaSelecionado
                    ? "text-light-primary dark:text-dark-primary"
                    : "hidden"
                } flex  font-medium`}
              >
                {" "}
                {segundoDiaSelecionado?.dia} {segundoDiaSelecionado?.nomeMes}
                {" de "}
                {segundoDiaSelecionado?.ano}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
