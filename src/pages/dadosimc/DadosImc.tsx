import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function DadosImc() {
    const [peso, setPeso] = useState<any>('');
    const [altura, setAltura] = useState<any>('');
    const [imc, setImc] = useState<any>('');
    const [nome, setNome] = useState<any>('');
    const [data, setData] = useState<any>('');


    const router = useRouter();

    const { p_peso, p_altura, param_imc } = router.query;

    useEffect(() => {
        setPeso(p_peso);
        setAltura(p_altura);
        setImc(param_imc);
        setData('2024-01-27')
    }, []);

    return (
        <div>
            <div>
                <div className='campoForm'>
                    <label>Nome:</label>
                    <input type='text' value={nome} onChange={(evt) => setNome(evt.target.value)} />
                </div>
                <div className='campoForm'>
                    <label>Peso:</label>
                    <input type='text' value={peso} readOnly />
                </div>
                <div className='campoForm'>
                    <label>Altura:</label>
                    <input type='text' value={altura} readOnly />
                </div>
                <div className='campoForm'>
                    <label>IMC:</label>
                    <input type='text' value={imc} readOnly />
                </div>
                <div className='campoForm'>
                    <label>Data:</label>
                    <input type='text' value={data} readOnly />
                </div>
                <div className='btnDados'>
                    <button>Gravar</button>
                </div>
            </div>
            <div className='grid'>
                <div className='gridLinhaTitulos'>
                    <div className='gridTitulos'>Nome</div>
                    <div className='gridTitulos'>Peso</div>
                    <div className='gridTitulos'>Altura</div>
                    <div className='gridTitulos'>IMC</div>
                    <div className='gridTitulos'>Data</div>
                </div>
                <div className='gridLinhaDados'>
                    <div className='gridLinhas'>
                        <div className='gridLinha'>Nome 1</div>
                        <div className='gridLinha'>Peso 1</div>
                        <div className='gridLinha'>Altura 1</div>
                        <div className='gridLinha'>IMC 1</div>
                        <div className='gridLinha'>Data 1</div>
                    </div>
                </div>
            </div>
        </div>
    );
}