import { useContext } from "react";
import { diasSelecionadosContext } from "../contexts/DiasSelecionados";
import {
  firstSelected,
  secondSelected,
  betweenFirstAndSecond,
} from "../utils/Styles";
import { dayNameIndex } from "../utils/WeekDaysIndex";
import WeekDays from "./WeekDays";
import FirstLineDays from "./FirstLineDays";
import NextLinesDays from "./NextLinesDays";
interface MonthState {
  name: string[];
  number: number;
}

interface DaysProps {
  year: number;
  month: MonthState;
}

const Days = ({ month, year }: DaysProps) => {
  const {
    primeiroDiaSelecionado,
    setPrimeiroDiaSelecionado,
    segundoDiaSelecionado,
    setSegundoDiaSelecionado,
  } = useContext(diasSelecionadosContext);

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
  const diasDoMesAtual = diasDoMes(month.number + 1, year);
  const diasDoMesAnterior = diasDoMes(month.number, year);
  const numeroDeDiasDoMesAnterior = dayNameIndex[weekdayFormated];
  const numeroDeLinhas =
    diasDoMesAtual + numeroDeDiasDoMesAnterior <= 35 ? 4 : 5;
  const handleDiasSelecionados = (
    dia: number,
    mes: number,
    nomeMes: string,
    ano: number
  ) => {
    const currentDay = new Date(`"${ano}-${mes + 1}-${dia}"`);
    const firstDay = new Date(
      `${primeiroDiaSelecionado?.ano}-${
        primeiroDiaSelecionado?.mes !== undefined
          ? primeiroDiaSelecionado?.mes + 1
          : undefined
      }-${primeiroDiaSelecionado?.dia}`
    );
    const secondDay = new Date(
      `${segundoDiaSelecionado?.ano}-${
        segundoDiaSelecionado?.mes !== undefined
          ? segundoDiaSelecionado?.mes + 1
          : undefined
      }-${segundoDiaSelecionado?.dia}`
    );
    console.log("currentDay", currentDay, currentDay.getTime());
    console.log("firstDay", firstDay, firstDay.getTime());
    console.log("secondDay", secondDay, secondDay.getTime());
    //Não da para comparar datas sem usar getTime ou algo assim usando ===
    if (currentDay.getTime() === firstDay.getTime()) {
      return setPrimeiroDiaSelecionado(null);
    } else if (currentDay.getTime() === secondDay.getTime()) {
      return setSegundoDiaSelecionado(null);
    }

    if (primeiroDiaSelecionado === null) {
      if (secondDay.getTime() < currentDay.getTime()) {
        const tempDia = segundoDiaSelecionado;
        setPrimeiroDiaSelecionado(tempDia);
        return setSegundoDiaSelecionado({ dia, mes, nomeMes, ano });
      }
      return setPrimeiroDiaSelecionado({ dia, mes, nomeMes, ano });
    }

    if (segundoDiaSelecionado === null && primeiroDiaSelecionado !== null) {
      if (firstDay.getTime() > currentDay.getTime()) {
        const tempDia = primeiroDiaSelecionado;
        setSegundoDiaSelecionado(tempDia);
        return setPrimeiroDiaSelecionado({ dia, mes, nomeMes, ano });
      }
      return setSegundoDiaSelecionado({ dia, mes, nomeMes, ano });
    }
    if (segundoDiaSelecionado !== null && primeiroDiaSelecionado !== null) {
      return (
        setPrimeiroDiaSelecionado({ dia, mes, nomeMes, ano }),
        setSegundoDiaSelecionado(null)
      );
    }
  };
  const handlePrimeiroSelecionado = (dia: number, mes: number, ano: number) => {
    if (
      primeiroDiaSelecionado?.dia === dia &&
      primeiroDiaSelecionado?.mes === mes &&
      primeiroDiaSelecionado?.ano === ano
    ) {
      return true;
    } else {
      return false;
    }
  };
  const handleSegundoSelecionado = (dia: number, mes: number, ano: number) => {
    if (
      segundoDiaSelecionado?.dia === dia &&
      segundoDiaSelecionado?.mes === mes &&
      segundoDiaSelecionado?.ano === ano
    ) {
      return true;
    } else {
      return false;
    }
  };
  const handleDiasEntrePrimeiroESegundo = (
    dia: number,
    mes: number,
    ano: number
  ) => {
    if (primeiroDiaSelecionado === null || segundoDiaSelecionado === null) {
      return;
    }

    const dataInicial = new Date(
      `${primeiroDiaSelecionado.ano}-${primeiroDiaSelecionado.mes + 1}-${
        primeiroDiaSelecionado.dia
      }`
    ).getTime();
    const dataFinal = new Date(
      `${segundoDiaSelecionado.ano}-${segundoDiaSelecionado.mes + 1}-${
        segundoDiaSelecionado.dia
      }`
    ).getTime();
    const dataAtual = new Date(`${ano}-${mes + 1}-${dia}`).getTime();

    if (dataAtual >= dataInicial && dataAtual <= dataFinal) {
      return true;
    } else {
      return false;
    }
  };

  const stylesPrimeiroSelecionado = firstSelected(segundoDiaSelecionado);
  const stylesSegundoSelecionado = secondSelected(primeiroDiaSelecionado);
  const stylesEntrePrimeiroESegundo = betweenFirstAndSecond();

  return (
    <table className="flex flex-col gap-1">
      <WeekDays />
      <tbody className="flex  w-[280px] flex-col gap-2 text-light-primary   dark:text-dark-primary">
        <FirstLineDays
          numeroDeDiasDoMesAnterior={numeroDeDiasDoMesAnterior}
          diasDoMesAnterior={diasDoMesAnterior}
          month={month}
          year={year}
          stylesEntrePrimeiroESegundo={stylesEntrePrimeiroESegundo}
          stylesPrimeiroSelecionado={stylesPrimeiroSelecionado}
          stylesSegundoSelecionado={stylesSegundoSelecionado}
          handlePrimeiroSelecionado={handlePrimeiroSelecionado}
          handleSegundoSelecionado={handleSegundoSelecionado}
          handleDiasEntrePrimeiroESegundo={handleDiasEntrePrimeiroESegundo}
          handleDiasSelecionados={handleDiasSelecionados}
        />
        <NextLinesDays
          numeroDeDiasDoMesAnterior={numeroDeDiasDoMesAnterior}
          month={month}
          year={year}
          stylesEntrePrimeiroESegundo={stylesEntrePrimeiroESegundo}
          stylesPrimeiroSelecionado={stylesPrimeiroSelecionado}
          stylesSegundoSelecionado={stylesSegundoSelecionado}
          diasDoMesAtual={diasDoMesAtual}
          numeroDeLinhas={numeroDeLinhas}
          handlePrimeiroSelecionado={handlePrimeiroSelecionado}
          handleSegundoSelecionado={handleSegundoSelecionado}
          handleDiasEntrePrimeiroESegundo={handleDiasEntrePrimeiroESegundo}
          handleDiasSelecionados={handleDiasSelecionados}
        />
      </tbody>
    </table>
  );
};

export default Days;
