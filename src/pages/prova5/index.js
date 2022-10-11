import './index.scss';
import { useState } from "react";

export default function Prova5() {
    const [tanque, setTanque] = useState(0);
    const [consumo, setConsumo] = useState(0);
    const [distancia, setDistancia] = useState(0);
    const [resp, setResp] = useState('');

    function Paradas() {
        let a = distancia / (tanque * consumo);
        setResp(Math.ceil(a));
    }

    return(
        <main className='pag5'>
            <div className='agrp1'>
                <div className='aa'>
                    <input type="number" value={tanque} onChange={e => setTanque(Number(e.target.value))} />
                    <input type="number" value={consumo} onChange={e => setConsumo(Number(e.target.value))} />
                    <input type="number" value={distancia} onChange={e => setDistancia(Number(e.target.value) )} />
                    <button onClick={Paradas}> Calcular </button>
                    <p> {resp} </p>
                </div>
            </div>
        </main>
    )
}