import { useState } from "react"


export default function Prova1(){
    const [mes, setMes] = useState('')
    const [dia, setDia] = useState(1)
    const [resp, setResp] = useState('')

    function Libras(){
        if(mes === 'setembro' && dia>=23|| mes === 'outubro' && dia<=22 ){
            setResp('Seu signo é de libras')
        }
        else{
            setResp('Você não é de Libras')
        }
    }

    return(
        <main>
            <div>
                <div>
                    <h3> Libras ?? </h3>
                    <input type='text' placeholder="mes de nascimento" value={mes} onChange={e => setMes(e.target.value)}/>
                    <input type='number' placeholder="dia de nascimento"  value={dia} onChange={e => setDia(Number(e.target.value))} />

                    <button onClick={Libras}> Verificar </button>

                    <div>
                        {resp}
                    </div>
                </div>
            </div>
        </main>
    )
}