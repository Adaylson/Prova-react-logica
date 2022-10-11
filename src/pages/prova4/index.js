import { useState, useTransition } from "react"
import './index.scss'

export default function Salario(){

   const [salario, setSalario]= useState(0);
   const [bonus,setBonus]= useState(0);
   const [desc,setDesc]= useState(0);
   const [resposta, setResposta]= useState(0);

   function calcular(){

    let a = salario * bonus /100;
    let b = salario + a - desc;
    setResposta(`Seu salario liquido e  ${b}`);
   }


    return(
        <main className="page-salario">
                        <section>
                        <h1>Calcular Salario Liquido</h1>

            <div>
                <h3>Digite seu Salario</h3>
                <input type='text' value={salario} onChange={e => setSalario(Number(e.target.value))}     />
            </div>

            <div>
                <h3>Digite seu Bonus</h3>
                <input type='text' value={bonus} onChange={e => setBonus(Number(e.target.value))}     />
            </div>

            <div>
                <h3>Digite seu Desconto</h3>
                <input type='text' value={desc} onChange={e => setDesc(Number(e.target.value))}     />
            </div>

            <div>

                {resposta}
            
            </div>
            <div>
            <button  onClick={calcular} >Calcular</button>
</div>


            </section>
            


        </main>
    )
}