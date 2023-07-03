


export interface IProps {
    diasDoMesAnterior: number;
    handleDiasSelecionados: (
        dia: number,
        mes: number,
        nomeMes: string,
        ano: number,
    ) => void;
    handleSegundoSelecionado: (
        dia: number,
        mes: number,
        ano: number,
    ) => boolean;
    handlePrimeiroSelecionado: (
        dia: number,
        mes: number,
        ano: number,
    ) => boolean;
    handleDiasEntrePrimeiroESegundo: (
        dia: number,
        mes: number,
        ano: number,
    ) => boolean | undefined;
    numeroDeDiasDoMesAnterior: number;
    month: {
        name: string[];
        number: number
    };
    year: number;
    stylesEntrePrimeiroESegundo: string;
    stylesPrimeiroSelecionado: string;
    stylesSegundoSelecionado: string;

}





const FirstLineDays = ({ diasDoMesAnterior, handleDiasSelecionados, handleSegundoSelecionado, handlePrimeiroSelecionado, handleDiasEntrePrimeiroESegundo, numeroDeDiasDoMesAnterior, month, year, stylesEntrePrimeiroESegundo, stylesPrimeiroSelecionado, stylesSegundoSelecionado }: IProps) => {





    return (
        <tr className="flex items-center justify-center ">
            {Array.from({ length: numeroDeDiasDoMesAnterior }).map(
                (_, cellIndex) => {
                    return (
                        <td
                            className={`${handlePrimeiroSelecionado(
                                diasDoMesAnterior -
                                (numeroDeDiasDoMesAnterior - (cellIndex + 1)),
                                month.number === 0 ? 11 : month.number - 1,
                                month.number === 0 ? year - 1 : year
                            ) && stylesPrimeiroSelecionado
                                }
                   ${handleSegundoSelecionado(
                                    diasDoMesAnterior -
                                    (numeroDeDiasDoMesAnterior - (cellIndex + 1)),
                                    month.number === 0 ? 11 : month.number - 1,
                                    month.number === 0 ? year - 1 : year
                                ) && stylesSegundoSelecionado
                                }   ${handleDiasEntrePrimeiroESegundo(
                                    diasDoMesAnterior -
                                    (numeroDeDiasDoMesAnterior - (cellIndex + 1)),
                                    month.number === 0 ? 11 : month.number - 1,
                                    month.number === 0 ? year - 1 : year
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
                            className={`${handlePrimeiroSelecionado(
                                cellIndex + 1,
                                month.number,
                                year
                            ) && stylesPrimeiroSelecionado
                                }
                   ${handleSegundoSelecionado(
                                    cellIndex + 1,
                                    month.number,
                                    year
                                ) && stylesSegundoSelecionado
                                }
                   ${handleDiasEntrePrimeiroESegundo(
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
    )
}

export default FirstLineDays