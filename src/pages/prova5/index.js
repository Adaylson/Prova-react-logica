import './index.scss';
import { useState } from "react";

export default function Prova5() {
    const [tanque, setTanque] = useState(0);
    const [consumo, setConsumo] = useState(0);
    const [distancia, setDistancia] = useState(0);
    const [resp, setResp] = useState('');

    return(
        <main>
            <div>
                <div>
                    <input type="number" onChange={e =>(setTanque(Number(e.target.value)))} />
                    <input type="number" onChange={e =>(setConsumo(Number(e.target.value)))} />
                    <input type="number" onChange={e =>(setDistancia(Number(e.target.value)))} />
                </div>
            </div>
        </main>
    )
}