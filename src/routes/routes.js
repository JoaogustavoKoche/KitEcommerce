import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Load from '../pages/Splash';
import Intro from '../pages/Welcome';
import Enter from '../pages/Authentication';


export default function Router(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Load/>}/>

                <Route path='/welcome' element={<Intro/>}/>

                <Route path='/auth' element={<Enter/>}/>
            </Routes>
        </BrowserRouter>
    );
}