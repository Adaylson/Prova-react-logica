import { useState } from "react"
import './index.scss'


export default function Prova1(){
    const [mes, setMes] = useState('')
    const [dia, setDia] = useState(1)
    const [resp, setResp] = useState('')

    function Libras(){
        if(dia <= 0 || dia > 31){
            setResp('Dia invalido')
        }
        else if(!mes || mes === 'Selecione'){
            setResp('Insira o mes')
        }          
        else if(mes === 'Setembro' && dia>=23|| mes === 'Outubro' && dia<=22 ){
            setResp('Seu signo é de libras')
        }
        else{
            setResp('Você não é de Libras')
        }
    }

    return(
        <main className="a">
            <div>
                <div className="b">
                    <h3> Libras ?? </h3>
                    <select value={mes} onChange={e => setMes(e.target.value)}>
                        <option>Selecione</option>
                        <option>Janeiro</option>
                        <option>fevereiro</option>
                        <option>Março</option>
                        <option>Abril</option>
                        <option>Maio</option>
                        <option>Junho</option>
                        <option>Julho</option>
                        <option>Agosto</option>
                        <option>Setembro</option>
                        <option>Outubro</option>
                        <option>Novembro</option>
                        <option>Dezembro</option>
                    </select>
                    <input type='number' placeholder="dia de nascimento"  value={dia} onChange={e => setDia(Number(e.target.value))} />

                    <button onClick={Libras}> Verificar </button>

                    <div className="ab">
                        {resp}
                    </div>
                </div>
            </div>
        </main>
    )
}