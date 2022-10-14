import { useState } from 'react';
import './index.scss';


export default function Prova8(){
    const [ganhos,setGanhos] = useState(0)
    const [perdas,setPerdas] = useState(0)
    const [resp,setResp] = useState('')

    function Orcamento(){
        let a = ((ganhos - perdas)/ganhos)*100;
        let b = a - 100
        
        if(b < 20 ){
            setResp('Parabéns, está gerenciando bem seu orçamento !')
        }
        else if(a < 51 && a > 19){
            setResp('Muito bem, seus gastos não ultrapassam metade dos ganhos!')
        }
        else if(a < 80 && a > 50){
            setResp('Atenção, Melhor conter os gastos!')
        }
        else if(a < 19 && a > 0){
            setResp('Cuidado, seu orçamento esta comprometido!')
        }
        else if(a < 0){
            setResp('Orçamento comprometido! Hora de rever seus gastos')
        }
        else{
            setResp(a)
        }
    }

    function Orcamento1(){
        let a = ((ganhos - perdas)/ganhos)*100;
        
        if(a > 79){
            setResp('Parabéns, está gerenciando bem seu orçamento !')
        }
        else if(a < 79 && a > 50){
            setResp('Muito bem, seus gastos não ultrapassam metade dos ganhos!')
        }
        else if(a < 51 && a > 19){
            setResp('Atenção, Melhor conter os gastos!')
        }
        else if(a < 19 && a > 0){
            setResp('Cuidado, seu orçamento esta comprometido!')
        }
        else if(a < 0){
            setResp('Orçamento comprometido! Hora de rever seus gastos')
        }
        else{
            setResp(a)
        }
    }

    return(
        <main className='prova8'>
            <div className='card'>
                <input value={ganhos} onChange={e => setGanhos(Number(e.target.value))}/>
                <input value={perdas} onChange={e => setPerdas(Number(e.target.value))}/>

                <button onClick={Orcamento}> Verificar Orçamento </button>
                <button onClick={Orcamento1}> Verificar Orçamento1 </button>

                {resp}
            </div>
        </main>
    )
}