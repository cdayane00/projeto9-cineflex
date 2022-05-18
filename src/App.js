import Main from './Main';
import Home from './Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';

export default function App() {
    
    const [init, setInit] = useState(false);
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={!init ? <Home setInit={setInit}/> : <Main />} />
                <Route path="/sessoes/:idFilme" element={<Main />}/>
            </Routes> 
        </BrowserRouter>
        
    );
}