import './index.scss';
import {Link} from 'react-router-dom'

export default function Home(){


    return(
        <main className='home'>
            <div className='Links'>
                <h1> Links </h1>

                <div className='lin'>
                    <Link to={'/prova1'}>Prova1</Link>
                    <Link to={'/prova2'}>Prova2</Link>
                    <Link to={'/prova3'}>Prova3</Link>
                    <Link to={'/prova4'}>Prova4</Link>
                    <Link to={'/prova5'}>Prova5</Link>
                    <Link to={'/prova6'}>Prova6</Link>
                    <Link to={'/prova7'}>Prova7</Link>
                    <Link to={'/prova8'}>Prova8</Link>
                </div>
            </div>
        </main>
    )
}