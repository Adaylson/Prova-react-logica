import { useState } from 'react';

import './index.scss';


export default function Prova11(){
    const [base, setBase] = useState(0);
    const [altura, setAltura] = useState(0);

    function mapear(){
        let b = []

        let a = 0
        let c = ''
        let d = 0
        
        
        for(a; a < base; a++){   
            b[a] = "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHprDrAzJFiVTT0rNM-q2xLL1TtWCE5UiHZg&usqp=CAU' />"
        }
        
        for(d; d < altura; d++){
            c = document.write(b) ;

        }
    }

    return(
        <main>
            <div>
                <div>
                    <input value={base} onChange={e => setBase(Number(e.target.value))} />
                    <input value={altura} onChange={e => setAltura(Number(e.target.value))} />
                    <button onClick={mapear}> Calcular </button>

                </div>
            </div>
        </main>
    )
}