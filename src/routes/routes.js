import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Load from '../pages/load';
import Intro from '../pages/introduction';


export default function Router(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Load/>}/>

                <Route path='/teste' element={<Intro/>}/>
            </Routes>
        </BrowserRouter>
    );
}