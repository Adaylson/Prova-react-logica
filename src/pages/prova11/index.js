import { useState } from 'react';

import './index.scss';


export default function Prova11(){
    const [base, setBase] = useState(0);
    const [altura, setAltura] = useState(0);
    const [resp, setResp] = useState([]);

    function mapear(){
        document.write("<h1> AAAAA<br />AAAA </h1>")
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