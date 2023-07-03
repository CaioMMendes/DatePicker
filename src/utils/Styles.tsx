
interface IDay {
    dia: number;
    mes: number;
    ano: number;
    nomeMes: string;
}


export const firstSelected = (segundoDiaSelecionado: IDay | null) => {
    if (segundoDiaSelecionado === null) {
        return "rounded-lg relative  bg-slate-400 after:absolute after:bottom-[6px] after:h-1 after:w-1 after:rounded-full after:bg-white after:content-['']"
    } else {
        return "rounded-l-lg hover:rounded-l-lg relative  bg-slate-400 after:absolute after:bottom-[6px] after:h-1 after:w-1 after:rounded-full after:bg-white after:content-['']"
    }
}

export const secondSelected = (primeiroDiaSelecionado: IDay | null) => {
    if (primeiroDiaSelecionado === null) {
        return "rounded-lg relative    rounded-r-lg bg-slate-400 after:absolute after:bottom-[6px] after:h-1 after:w-1 after:rounded-full after:bg-white after:content-['']"
    } else {
        return "rounded-r-lg hover:rounded-r-lg hover:rounded-none relative    rounded-r-lg bg-slate-400 after:absolute after:bottom-[6px] after:h-1 after:w-1 after:rounded-full after:bg-white after:content-['']"
    }
}

export const betweenFirstAndSecond = () => {
    return "hover:rounded-none relative bg-slate-400 "
}


// const stylesPrimeiroSelecionado = `${segundoDiaSelecionado === null
//         ? "rounded-lg"
//         : "rounded-l-lg hover:rounded-l-lg"
//     } relative  bg-slate-400 after:absolute after:bottom-[6px] after:h-1 after:w-1 after:rounded-full after:bg-white after:content-['']`;
// const stylesSegundoSelecionado = `${primeiroDiaSelecionado === null
//         ? "rounded-lg"
//         : "rounded-r-lg hover:rounded-r-lg hover:rounded-none"
//     } relative    rounded-r-lg bg-slate-400 after:absolute after:bottom-[6px] after:h-1 after:w-1 after:rounded-full after:bg-white after:content-['']`;

// const stylesEntrePrimeiroESegundo =
//     "hover:rounded-none relative bg-slate-400 ";