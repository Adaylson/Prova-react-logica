import { useState } from 'react';
import './index.scss';


export default function Prova9(){
    const[inicio, setInicio]= useState(0)
    const[fim,setFim]=useState(0)
    const[resp,setResp]=useState([])

    function Contar(){
        let cont=inicio
        let r = 0
      while(cont<=fim){
        r = document.write(`<p> ${cont} </p>`)
           cont++
        
      } setResp(r)
    }

    return(
        
        <main>

            <input  value={inicio}  onChange={e => setInicio(Number(e.target.value))} />
            <input  value={fim}  onChange={e => setFim(Number(e.target.value))} />
            <button onClick={Contar}>cont</button>
             <p> {resp}</p> 

        </main>
    )
}