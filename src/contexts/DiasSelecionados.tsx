import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
// export const periodContext = createContext({});

// interface IPeriodContext {
//   period: {
//     dayOne: string;
//     dayTwo: string;
//     month: string;
//     year: string;
//   };

//   setPeriod: (period: {
//     dayOne: string;
//     dayTwo: string;
//     month: string;
//     year: string;
//   }) => void;
// }
interface IDiasSelecionados {
  primeiroDiaSelecionado: {
    dia: number;
    mes: number;
    nomeMes: string;
    ano: number;
  } | null;
  setPrimeiroDiaSelecionado: Dispatch<SetStateAction<Dia | null>>;
  segundoDiaSelecionado: {
    dia: number;
    mes: number;
    nomeMes: string;
    ano: number;
  } | null;
  setSegundoDiaSelecionado: Dispatch<SetStateAction<Dia | null>>;
}
interface Dia {
  dia: number;
  mes: number;
  nomeMes: string;
  ano: number;
}

export const diasSelecionadosContext = createContext<IDiasSelecionados>({
  primeiroDiaSelecionado: null,

  setPrimeiroDiaSelecionado: () => undefined,
  segundoDiaSelecionado: null,
  setSegundoDiaSelecionado: () => undefined,
  // period: { dayOne: "", dayTwo: "", month: "", year: "" },
});

interface IDiasSelecionadosContext {
  children: ReactNode;
}

export const DiasSelecionadosProvider = ({
  children,
}: IDiasSelecionadosContext) => {
  // const [period, setPeriod] = useState({
  //   dayOne: "",
  //   dayTwo: "",
  //   month: "Jan",
  //   year: "2020",
  // });
  // const [period, setPeriod] = useState<{
  //   dayOne: string;
  //   dayTwo?: string;
  //   month: string;
  //   year: string;
  // }>({ dayOne: "", dayTwo: "", month: "", year: "" });
  const [primeiroDiaSelecionado, setPrimeiroDiaSelecionado] =
    useState<Dia | null>(null);
  const [segundoDiaSelecionado, setSegundoDiaSelecionado] =
    useState<Dia | null>(null);
  return (
    <diasSelecionadosContext.Provider
      value={{
        primeiroDiaSelecionado,
        setPrimeiroDiaSelecionado,
        segundoDiaSelecionado,
        setSegundoDiaSelecionado,
      }}
    >
      {children}
    </diasSelecionadosContext.Provider>
  );
};
