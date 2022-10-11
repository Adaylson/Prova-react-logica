import { useState } from "react"

import './index.scss'



export default function Temperatura(){
    
    const [temp,setTemp]= useState(0);
    const [resp,setResp]= useState('');

    function SituacaoFebre(){

        if(temp>=41){
            setResp('Hipertemia')
        }

        else if(temp>=39.6&&temp<41){
            setResp('febre alta')
        }

        else if (temp>=37.6&&temp<39.6){
            setResp('febre ')
        }

        else if (temp>=36&&temp<37.6){
            setResp('normal')
        }
        else if(temp<36){
            setResp('hiportermia')
        }
    }

    return(
        
        <main className="page-salario">
            <section>
            <h1>Funçao situaçao febre</h1>
            <div>
                <h3>Temperatura</h3>
                <input type='number' value={temp} onChange={e => setTemp(Number(e.target.value))} />
            </div>

            <div className="p">
            {resp}
            </div>
            <button onClick={SituacaoFebre} >Verificar</button>
           
            

            </section>
            
        </main>
    )
}