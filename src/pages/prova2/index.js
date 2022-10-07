import { useState } from "react"





import './index.scss'
export default function Açai(){
     

    const [qtdpeq, setQtdpeq]= useState(0)
    const [qtdMed, setQmed]= useState(0)
    const [qtdGrand, setGrand]= useState(0)
    const [qtddes, setQdesc]= useState(0)
    const [resp , setResp] = useState(0)


    function Calcular(){
        let x = (qtdpeq*13.50) + (qtdMed*15.00 )+ (qtdGrand * 17.50);
        let y = x*(qtddes/100);
        let z = x - y;
        setResp(z)
    }

   
 

    return(
        <section className="page-menu">
            
            <div>
            <h1>Total de venda Açai</h1>
                 <h2>Quantidade Açai Pequeno</h2>
                <input     type='number'   value={qtdpeq}  onChange={e => setQtdpeq(Number(e.target.value)) } />
                <h2>Quantidade Açai Media</h2>
                <input     type='number'   value={qtdMed}  onChange={e => setQmed(Number(e.target.value)) } />
                <h2>Quantidade Açai Grande</h2>
                <input     type='number'   value={qtdGrand}  onChange={e => setGrand(Number(e.target.value)) } />
                <h2>Cupom de Desconto</h2>
                <input     type='number'   value={qtddes}  onChange={e => setQdesc(Number(e.target.value)) } />
                <div>{resp}</div>

                <button onClick={Calcular}>Somar</button>

            </div>

        </section>
    )
}