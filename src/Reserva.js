import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Reserva(){
    const {idFilme} = useParams();
    const [filme, setFilme] = useState([]);
    const [dias, setDias] = useState([]);

    useEffect(() => {
        const requisicao = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idFilme}/seats`);
        requisicao.then((response) => {
            setDias(response.data.days);
            setFilme(response.data)
            console.log(response.data.days)
        });
    },[]);

    return(
        <div>
            <div className='topo'>
                <h1>CINEFLEX</h1>
            </div>
            <h3 className='selecionar'>Selecione o(s) assento(s)</h3>
            <div className='assento'> 
                <div>01</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>   
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>   
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>   
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>   
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>   
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>   
                <div>1</div>
                <div>1</div>      
            </div>
            <div className='rodapeAssento'>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className='rodapeAssento'>
                <p>Selecionado</p>
                <p>Disponível</p>
                <p>Indisponível</p>
            </div>
            
        </div>

    );
}