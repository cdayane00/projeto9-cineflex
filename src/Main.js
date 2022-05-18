import React from 'react';
import Footer from './Footer';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Main(){
    const {idFilme} = useParams();
    const [filme, setFilme] = useState([]);
    useEffect(() => {
        const requisicao = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`);
        requisicao.then((response) => {
            console.log(response)
            setFilme(response.data);
            
        });
        
    },[]);
    return(
        <div>
            <header>
            <div className='topo'>
                <h1>CINEFLEX</h1>
            </div>
            <h3 className='selecionar'>Selecione o horário</h3>
            </header>

            <ul>
                {filme.map(filmeId =>   <div className='listaSessoes'> 
                                            <p>{filmeId.days.weekday - filmeId.days.date}</p> 
                                            <div className='hora'>12:00</div>
                                            <div className='hora'>19:00</div> 

                                        </div>)}
                {/* lista de dias */}
                
            </ul>
            <Footer />

        </div>
        
            
            


        
    )
}