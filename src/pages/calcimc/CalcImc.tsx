import { useState, useEffect } from "react";

import Link from 'next/link';

import CompForm from "@/components/CompForm";
import TabelaImc from "@/components/TabelaImc";

export default function CalcImc() {
    const [peso, setPeso] = useState<number>(0);
    const [altura, setAltura] = useState<number>(0);
    const [imc, setImc] = useState<number>(0);

    function calcular() {
        let res = peso / (altura*altura)
        setImc(res)
    }

    return (
        <div className='flex flex-col border border-black w-[300px] gap-5'>
            <p className='w-full text-center bg-zinc-400 font-bold text-lg'>Calculo do IMC</p>
            <CompForm label='peso' state={peso} funcState={setPeso} />
            <CompForm label='altura' state={altura} funcState={setAltura} />
            <button className='bg-indigo-900 text-white mx-2 p-1 rounded-lg cursor-pointer' onClick={calcular}>Calcular</button>
            <Link className='bg-indigo-900 text-white mx-2 p-1 text-center rounded-lg cursor-pointer' href={{
                pathname: '/dadosimc/DadosImc',
                query: {
                    p_peso: peso,
                    p_altura: altura,
                    param_imc: imc
                }
            }}>Dados IMC</Link>
            <p className='bg-zinc-100 p-1'>Resultado: {imc.toFixed(1)}</p>
            <TabelaImc imc={imc} />
        </div>
    );
}