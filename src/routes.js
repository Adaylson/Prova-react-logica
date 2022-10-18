import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Home from './pages/home/index.js'
import Prova1 from './pages/prova1/index.js';
import Prova2 from './pages/prova2/index.js';
import Prova3 from './pages/prova3/index.js';
import Prova4 from './pages/prova4/index.js';
import Prova5 from './pages/prova5/index.js';
import Prova6 from './pages/prova6/index.js';
import Prova7 from './pages/prova7/index.js';
import Prova8 from './pages/prova8/index.js';
import Prova9 from './pages/prova9/index.js';
import Prova10 from './pages/prova10/index.js';
import Prova11 from './pages/prova11/index.js';
import Prova12 from './pages/prova12/index.js';


export default function Index(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/prova1' element={<Prova1/>}/>
                <Route path='/prova2' element={<Prova2/>}/>
                <Route path='/prova3' element={<Prova3/>}/>
                <Route path='/prova4' element={<Prova4/>}/>
                <Route path='/prova5' element={<Prova5/>}/>
                <Route path='/prova6' element={<Prova6/>}/>
                <Route path='/prova7' element={<Prova7/>}/>
                <Route path='/prova8' element={<Prova8/>}/>
                <Route path='/prova9' element={<Prova9/>}/>
                <Route path='/prova10' element={<Prova10/>}/>
                <Route path='/prova11' element={<Prova11/>}/>
                <Route path='/prova12' element={<Prova12/>}/>
                <Route path='/' element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    )
}