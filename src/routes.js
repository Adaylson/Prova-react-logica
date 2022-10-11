import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Home from './pages/home/index.js'
import Prova1 from './pages/prova1/index.js';
import Prova2 from './pages/prova2/index.js';
import Prova3 from './pages/prova3/index.js';
import Prova4 from './pages/prova4/index.js';
import Prova5 from './pages/prova5/index.js';
import Prova6 from './pages/prova6/index.js';


export default function Index(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/prova1' element={<Prova1/>}/>
                <Route path='/prova2' element={<Prova2/>}/>
                <Route path='/prova3' element={<Prova3/>}/>
                <Route path='/prova4' element={<Prova3/>}/>
                <Route path='/prova5' element={<Prova3/>}/>
                <Route path='/prova6' element={<Prova3/>}/>
                <Route path='/' element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    )
}