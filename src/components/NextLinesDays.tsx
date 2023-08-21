import { IProps } from "./FirstLineDays";

interface NextLineProps extends Omit<IProps, "diasDoMesAnterior"> {
  diasDoMesAtual: number;
  numeroDeLinhas: 4 | 5;
}

const NextLinesDays = ({
  numeroDeLinhas,
  diasDoMesAtual,
  handleDiasSelecionados,
  handleSegundoSelecionado,
  handlePrimeiroSelecionado,
  handleDiasEntrePrimeiroESegundo,
  numeroDeDiasDoMesAnterior,
  month,
  year,
  stylesEntrePrimeiroESegundo,
  stylesPrimeiroSelecionado,
  stylesSegundoSelecionado,
}: NextLineProps) => {
  let count = 0;

  return (
    <>
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
                          month.number === 11 ? 0 : month.number + 1,
                          month.number === 11 ? year + 1 : year
                        ) && stylesEntrePrimeiroESegundo
                      }
                        ${
                          handlePrimeiroSelecionado(
                            stringIndex <= diasDoMesAtual ? stringIndex : count,
                            month.number === 11 ? 0 : month.number + 1,
                            month.number === 11 ? year + 1 : year
                          ) && stylesEntrePrimeiroESegundo
                        }
                   ${
                     handleSegundoSelecionado(
                       stringIndex <= diasDoMesAtual ? stringIndex : count,
                       month.number === 11 ? 0 : month.number + 1,
                       month.number === 11 ? year + 1 : year
                     ) && stylesSegundoSelecionado
                   }  cursor-default text-dark-ter
hover:cursor-default dark:text-light-secondary `
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
                   } hover:rounded-lg  hover:bg-light-hover hover:text-light-text-selected
dark:hover:bg-dark-hover`
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
    </>
  );
};

export default NextLinesDays;
