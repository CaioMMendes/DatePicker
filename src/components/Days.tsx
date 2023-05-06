import { useContext } from "react";
import { diasSelecionadosContext } from "../contexts/DiasSelecionados";
interface MonthState {
  name: string[];
  number: number;
}

interface DaysProps {
  year: number;
  month: MonthState;
}
interface IDayNameIndex {
  [key: string]: number;
}

const Days = ({ month, year }: DaysProps) => {
  const {
    primeiroDiaSelecionado,
    setPrimeiroDiaSelecionado,
    segundoDiaSelecionado,
    setSegundoDiaSelecionado,
  } = useContext(diasSelecionadosContext);
  const dayNameIndex: IDayNameIndex = {
    "Dom": 0,
    "Seg": 1,
    "Ter": 2,
    "Qua": 3,
    "Qui": 4,
    "Sex": 5,
    "Sáb": 6,
  };
  // const [primeiroDiaSelecionado, setPrimeiroDiaSelecionado] =
  //   useState<Dia | null>(null);
  // const [segundoDiaSelecionado, setSegundoDiaSelecionado] =
  //   useState<Dia | null>(null);
  const weekday = new Date(year, month.number)
    .toLocaleDateString("pt-br", {
      weekday: "short",
    })
    .replace(/\./g, "");

  const weekdayFormated =
    weekday.charAt(0).toUpperCase() + weekday.slice(1).toLowerCase();

  let count = 0;
  const diasDoMes = (mes: number, ano: number) => {
    return new Date(ano, mes, 0).getDate();
  };

  const diasDoMesAtual = diasDoMes(month.number + 1, year);
  //todo tem que ver o que acontece quando o mes atual é dezembro
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
    if (
      primeiroDiaSelecionado?.dia === dia &&
      primeiroDiaSelecionado?.mes === mes &&
      primeiroDiaSelecionado?.ano === ano
    ) {
      return setPrimeiroDiaSelecionado(null);
    }
    if (
      segundoDiaSelecionado?.dia === dia &&
      segundoDiaSelecionado?.mes === mes &&
      segundoDiaSelecionado?.ano === ano
    ) {
      return setSegundoDiaSelecionado(null);
    }
    if (primeiroDiaSelecionado === null) {
      if (segundoDiaSelecionado !== null) {
        if (
          (mes > segundoDiaSelecionado.mes &&
            ano > segundoDiaSelecionado.ano) ||
          ano > segundoDiaSelecionado.ano
        ) {
          const tempDia = segundoDiaSelecionado;
          setPrimeiroDiaSelecionado(tempDia);
          return setSegundoDiaSelecionado({ dia, mes, nomeMes, ano });
        }
        if (
          mes === segundoDiaSelecionado.mes &&
          ano === segundoDiaSelecionado.ano &&
          dia > segundoDiaSelecionado.dia
        ) {
          const tempDia = segundoDiaSelecionado;
          setPrimeiroDiaSelecionado(tempDia);
          return setSegundoDiaSelecionado({ dia, mes, nomeMes, ano });
        }
      }
      return setPrimeiroDiaSelecionado({ dia, mes, nomeMes, ano });
    }
    if (segundoDiaSelecionado === null && primeiroDiaSelecionado !== null) {
      if (
        (mes < primeiroDiaSelecionado.mes &&
          ano <= primeiroDiaSelecionado.ano) ||
        ano < primeiroDiaSelecionado.ano
      ) {
        const tempDia = primeiroDiaSelecionado;
        setSegundoDiaSelecionado(tempDia);
        return setPrimeiroDiaSelecionado({ dia, mes, nomeMes, ano });
      }
      if (
        mes === primeiroDiaSelecionado.mes &&
        ano === primeiroDiaSelecionado.ano &&
        dia < primeiroDiaSelecionado.dia
      ) {
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
    //Lógica para comparar se o dia esta dentro do limite sem usar o Date
    // if (ano > primeiroDiaSelecionado?.ano && ano < segundoDiaSelecionado?.ano) {
    //   return true;
    // }
    // if (
    //   ano === primeiroDiaSelecionado?.ano &&
    //   ano < segundoDiaSelecionado?.ano
    // ) {
    //   if (mes > primeiroDiaSelecionado?.mes) {
    //     return true;
    //   }
    //   if (mes === primeiroDiaSelecionado?.mes) {
    //     if (dia >= primeiroDiaSelecionado?.dia) {
    //       return true;
    //     } else {
    //       return false;
    //     }
    //   } else {
    //     return false;
    //   }
    // }
    // if (
    //   ano === segundoDiaSelecionado?.ano &&
    //   ano > primeiroDiaSelecionado?.ano
    // ) {
    //   if (mes < segundoDiaSelecionado?.mes) {
    //     return true;
    //   }
    //   if (mes === segundoDiaSelecionado?.mes) {
    //     if (dia <= segundoDiaSelecionado?.dia) {
    //       return true;
    //     } else {
    //       return false;
    //     }
    //   } else {
    //     return false;
    //   }
    // }

    // if (
    //   ano === primeiroDiaSelecionado?.ano &&
    //   ano === segundoDiaSelecionado?.ano
    // ) {
    //   if (
    //     mes > primeiroDiaSelecionado?.mes &&
    //     mes < segundoDiaSelecionado?.mes
    //   ) {
    //     return true;
    //   }
    //   if (
    //     mes === primeiroDiaSelecionado?.mes &&
    //     mes === segundoDiaSelecionado.mes
    //   ) {
    //     if (
    //       dia > primeiroDiaSelecionado?.dia &&
    //       dia < segundoDiaSelecionado?.dia
    //     ) {
    //       return true;
    //     }
    //   }

    //   if (
    //     mes !== segundoDiaSelecionado.mes &&
    //     mes === primeiroDiaSelecionado.mes
    //   ) {
    //     if (dia > primeiroDiaSelecionado.dia) {
    //       return true;
    //     } else {
    //       return false;
    //     }
    //   }

    //   if (
    //     mes === segundoDiaSelecionado.mes &&
    //     mes !== primeiroDiaSelecionado.mes
    //   ) {
    //     if (dia < segundoDiaSelecionado.dia) {
    //       return true;
    //     } else {
    //       return false;
    //     }
    //   }
    // }
  };
  const stylesPrimeiroSelecionado = `${
    segundoDiaSelecionado === null
      ? "rounded-lg"
      : "rounded-l-lg hover:rounded-l-lg"
  } relative  bg-slate-400 after:absolute after:bottom-[6px] after:h-1 after:w-1 after:rounded-full after:bg-white after:content-['']`;
  const stylesSegundoSelecionado = `${
    primeiroDiaSelecionado === null
      ? "rounded-lg"
      : "rounded-r-lg hover:rounded-r-lg hover:rounded-none"
  } relative    rounded-r-lg bg-slate-400 after:absolute after:bottom-[6px] after:h-1 after:w-1 after:rounded-full after:bg-white after:content-['']`;

  const stylesEntrePrimeiroESegundo =
    "hover:rounded-none relative bg-slate-400 ";
  return (
    <table className="flex flex-col gap-1">
      <thead className="flex w-full items-center justify-center">
        <tr className="flex w-full bg-green-400">
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
      <tbody className="h-280px] flex w-[280px] flex-col gap-2 bg-amber-600">
        {/* Primeira linha */}
        <tr className="flex items-center justify-center ">
          {Array.from({ length: numeroDeDiasDoMesAnterior }).map(
            (_, cellIndex) => {
              return (
                <td
                  className={`${
                    handlePrimeiroSelecionado(
                      diasDoMesAnterior -
                        (numeroDeDiasDoMesAnterior - (cellIndex + 1)),
                      month.number - 1,
                      year
                    ) && stylesPrimeiroSelecionado
                  } 
                   ${
                     handleSegundoSelecionado(
                       diasDoMesAnterior -
                         (numeroDeDiasDoMesAnterior - (cellIndex + 1)),
                       month.number - 1,
                       year
                     ) && stylesSegundoSelecionado
                   }   ${
                    handleDiasEntrePrimeiroESegundo(
                      diasDoMesAnterior -
                        (numeroDeDiasDoMesAnterior - (cellIndex + 1)),
                      month.number - 1,
                      year
                    ) && stylesEntrePrimeiroESegundo
                  } flex h-10 w-10 cursor-default  items-center justify-center  text-zinc-800 hover:rounded-lg `}
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
                  className={`${
                    handlePrimeiroSelecionado(
                      cellIndex + 1,
                      month.number,
                      year
                    ) && stylesPrimeiroSelecionado
                  } 
                   ${
                     handleSegundoSelecionado(
                       cellIndex + 1,
                       month.number,
                       year
                     ) && stylesSegundoSelecionado
                   } 
                   ${
                     handleDiasEntrePrimeiroESegundo(
                       cellIndex + 1,
                       month.number,
                       year
                     ) && stylesEntrePrimeiroESegundo
                   } 
                    flex h-10 w-10 cursor-pointer  items-center justify-center hover:rounded-lg  hover:bg-[#9f75da]`}
                  onClick={() => {
                    handleDiasSelecionados(
                      cellIndex + 1,
                      month.number,
                      month.name[0],
                      year
                    );
                  }}
                  key={cellIndex}
                >
                  {cellIndex + 1}
                </td>
              );
            }
          )}
        </tr>
        {/* 2-6 linhas */}
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
                    count > 0
                      ? `${
                          handleDiasEntrePrimeiroESegundo(
                            stringIndex <= diasDoMesAtual ? stringIndex : count,
                            month.number + 1,
                            year
                          ) && stylesEntrePrimeiroESegundo
                        }
                        ${
                          handleDiasEntrePrimeiroESegundo(
                            stringIndex <= diasDoMesAtual ? stringIndex : count,
                            month.number + 1,
                            year
                          ) && stylesEntrePrimeiroESegundo
                        }
                   ${
                     handleSegundoSelecionado(
                       stringIndex <= diasDoMesAtual ? stringIndex : count,
                       month.number + 1,
                       year
                     ) && stylesSegundoSelecionado
                   }  cursor-default text-zinc-800 hover:cursor-default `
                      : `${
                          handlePrimeiroSelecionado(
                            stringIndex <= diasDoMesAtual ? stringIndex : count,
                            month.number,
                            year
                          ) && stylesPrimeiroSelecionado
                        }  
                  
                    ${
                      handleDiasEntrePrimeiroESegundo(
                        stringIndex <= diasDoMesAtual ? stringIndex : count,
                        month.number,
                        year
                      ) && stylesEntrePrimeiroESegundo
                    }
                   ${
                     handleSegundoSelecionado(
                       stringIndex <= diasDoMesAtual ? stringIndex : count,
                       month.number,
                       year
                     ) && stylesSegundoSelecionado
                   } hover:rounded-lg  hover:bg-[#9f75da]`
                  }
                               
                    
                   
               
                   flex h-10 w-10 cursor-pointer  items-center justify-center `}
                  onClick={
                    count > 0
                      ? () => {
                          ("");
                        }
                      : () => {
                          handleDiasSelecionados(
                            stringIndex <= diasDoMesAtual ? stringIndex : count,
                            month.number,
                            month.name[0],
                            year
                          );
                        }
                  }
                  key={cellIndex}
                >
                  {stringIndex <= diasDoMesAtual ? stringIndex : count}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Days;
