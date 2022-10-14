import { useState } from "react"
import './index.scss'




export default function Ingresso(){

    const[inteiras,setInteiras]= useState(0);
    const[meias,setMeias]=useState(0);
    const[dia,setDia]=useState('');
    const[nacional,setNacional]=useState(false)
    const[resp,setResp]=useState();

    function calcular(){


    
    let a = (inteiras*28.50)+(meias*14.25)
    setResp('TOTAL R$'+a)

    if(dia!='quarta'&& nacional==true){
        let a = (inteiras*5)+(meias*5)
        setResp('TOTAL R$'+a)
    }

    if(dia==='quarta'||dia==='Quarta'||dia==='quarta feira'){
        let a = (inteiras*14.25)+(meias*14.25)
        setResp('TOTAL R$'+a)
     }

    if(nacional===true && dia=='quarta'){
        let a = (inteiras*5)+(meias*5)
        setResp('TOTAL R$'+a)
    }


    }


    return(
        <main className="page-ingressos">

           <div className="c1">

            <h1>Calcular Ingresso</h1>

            <h3>Quantidade de inteiras</h3>
            <input type='number ' value={inteiras} onChange={e => setInteiras(Number(e.target.value))} />

            <h3>Quantidade de meias</h3>
            <input type='number ' value={meias} onChange={e => setMeias(Number(e.target.value))} />

            <h3>Informe o dia</h3>
            <input type="text" value={dia} onChange={e => setDia(e.target.value)}/>

            <h3>O filme e nacional?</h3>
            <input type="checkbox" checked={nacional}  onChange={e => setNacional(e.target.checked)}/>

            <button onClick={calcular}>calcular</button>
            {resp}

           </div>

           
        </main>
    )
}