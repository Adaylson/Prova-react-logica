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
                </div>
            </div>
        </main>
    )
}