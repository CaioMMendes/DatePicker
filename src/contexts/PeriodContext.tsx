import { createContext, useState, ReactNode } from "react";
// export const periodContext = createContext({});

interface IPeriodContext {
  period: {
    dayOne: string;
    dayTwo: string | undefined;
    month: string;
    year: string;
  };
  setPeriod: (period: {
    dayOne: string;
    dayTwo: string | undefined;
    month: string;
    year: string;
  }) => void;
}

export const periodContext = createContext<IPeriodContext>({
  period: { dayOne: "", dayTwo: "", month: "", year: "" },
  setPeriod: () => undefined,
});

interface IPeriodContextProvider {
  children: ReactNode;
}

export const PeriodContextProvider = ({ children }: IPeriodContextProvider) => {
  const [period, setPeriod] = useState({
    dayOne: "",
    dayTwo: "",
    month: "Jan",
    year: "2020",
  });

  return (
    <periodContext.Provider value={{ period, setPeriod }}>
      {children}
    </periodContext.Provider>
  );
};
