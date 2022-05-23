import Main from './Main';
import Home from './Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Reserva from './Reserva';
import Reservas from './Reservas';
import Sucesso from './Sucesso';


export default function App() {
    const [orderData, setOrderData] = useState("")
    const [returnButton, setReturnButton] = useState("button-off")
    
    const [init, setInit] = useState(false);
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={!init ? <Home setInit={setInit} setReturnButton={returnButton}/> : <Main />} />
                <Route path="/sessoes/:idFilme" element={<Main />}/>
                <Route path="/assentos/:idSessao" element={<Reservas ingresso={orderData} setIngresso={setOrderData} setVoltar={setReturnButton}/>}></Route>
                <Route path="/sucesso" element={<Sucesso orderData={orderData} setOrderData={setOrderData}/>}></Route>
            </Routes> 
        </BrowserRouter>
        
    );
}