import { useState } from 'react';

import './index.scss';


export default function Prova11(){
    const [base, setBase] = useState(0);
    const [altura, setAltura] = useState(0);
    const [resp, setResp] = useState([]);

    function mapear(){
        let b = []

        let a = 0
        let c = ''
        let d = 0
        let e = ''
        for(a; a < base; a++){   
            b[a] = "Amem"
        }
        for(d; d < altura; d++){
            c = document.write(`<p> ${b} </p>`) ;

        }

        setResp(c)
    }

    return(
        <main>
            <div>
                <div>
                    <input value={base} onChange={e => setBase(Number(e.target.value))} />
                    <input value={altura} onChange={e => setAltura(Number(e.target.value))} />
                    <button onClick={mapear}> Calcular </button>
                    <p>{resp} <br/></p>

                </div>
            </div>
        </main>
    )
}