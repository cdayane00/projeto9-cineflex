import React from 'react';
import Footer from './Footer';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Main(){
    const {idFilme} = useParams();
    const [filme, setFilme] = useState([]);
    const [dias, setDias] = useState([]);

    useEffect(() => {
        const requisicao = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`);
        requisicao.then((response) => {
            setDias(response.data.days);
            setFilme(response.data)
            console.log(response.data.days)
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
                {dias.map(dia =>   <div className='listaSessoes'> 
                                            <p>{`${dia.weekday} - ${dia.date}`}</p> 
                                            <div className='hora'>{`${dia.showtimes[0].name}`}</div>
                                            <div className='hora'>{`${dia.showtimes[1].name}`}</div>
                                        </div>)}
                <div className='espaco'>

                </div>
                
            </ul>
            <Footer title={filme.title} source={filme.posterURL}/>

        </div>
        
            
            


        
    )
}