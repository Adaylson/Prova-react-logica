import { useState } from 'react';
import './index.scss';


export default function Prova10(){

    const [qtd,setQtd]=useState(0)
    const[resp,setResp]=useState([])

    function desenharLinha(){
        let c
        for(let cont =1; cont <= qtd;cont++){
         c= document.write(`<p> * </p>`);
        }
        setResp(c)
    }

    return(
        <main>
            <input value={qtd}  onChange={e => setQtd(Number(e.target.value))} />
            <button onClick={desenharLinha}>v</button>
            <p>{resp}</p>

        </main>
    )
}