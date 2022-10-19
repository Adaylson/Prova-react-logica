import { useState } from 'react';
import './index.scss';

import { Calcular } from '../../services/funcao12';


export default function Prova11(){
    const [alunos, setAlunos] = useState(0);
    const [limite, setLimite] = useState(0);
    const [mililitros,setMililitros] = useState(0);
    const [resp, setResp] = useState(0);

    function Calcularr() {
        setResp(Calcular(alunos, limite, mililitros))
    }

    return(
        <main>
            <input value={alunos}  onChange={e => setAlunos(Number(e.target.value))}/>
            <input value={limite}  onChange={e => setLimite(Number(e.target.value))}/>
            <input value={mililitros}  onChange={e => setMililitros(Number(e.target.value))}/>

            <button onClick={Calcularr}> Calcular </button>
            {resp}
        </main>
    )
}