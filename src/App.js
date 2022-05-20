import Main from './Main';
import Home from './Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Reserva from './Reserva';


export default function App() {
    
    const [init, setInit] = useState(true);
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={!init ? <Home setInit={setInit}/> : <Reserva />} />
                <Route path="/sessoes/:idFilme" element={<Main />}/>
            </Routes> 
        </BrowserRouter>
        
    );
}