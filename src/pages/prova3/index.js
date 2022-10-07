import { useState } from "react";
import './index.scss'




export default function Sorvato(){
    const [gramas,setGramas]= useState(0);
    const [resp, setResp]= useState(0);


    function Somarx(){
        let x = gramas * 3.50;
        if(gramas>=1000){
            x = gramas * 3.00
        }
        if(gramas==0){
            x='Preço invalido'
        }
          
        setResp(x)
    }

    return(
        <section className="page-gramas">
            <div>
            <h1>Calcular gramas</h1>
                <input     type='number'   value={gramas}  onChange={e => setGramas(Number(e.target.value)) } />
                <div>{resp}</div>
                <button onClick={Somarx}>Calcular</button>

            </div>
            
        </section>
    )
}