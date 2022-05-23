import React from 'react';
import Footer from './Footer';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Sessao from './Sessao';
import styled from 'styled-components';

export default function Main(){
    const {idFilme} = useParams();
    const [filme, setFilme] = useState([]);
    const [dias, setDias] = useState([]);
    const [sessionData, setSessionData] = useState({})

    useEffect(() => {
        const requisicao = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`);
        requisicao.then((response) => {
            setDias(response.data.days);
            setFilme(response.data)
            console.log(response.data.days)
        });
    },[]);

    return(
        <>
             <div className='topo'>
                <h1>CINEFLEX</h1>
            </div>

            <SessaoScreen>
                <h1>Selecione o horário</h1>
                <div className='sessions'>
                    {dias.map(dia =>  <Sessao weekday={dia.weekday} date={dia.date} showtimes={dia.showtimes} setSessionData={setSessionData} /> )}
                        <div className='espaco'>

                        </div>
                </div>
                <Footer title={filme.title} source={filme.posterURL}/>
            </SessaoScreen>     
        </>
       
    )
}

const SessaoScreen = styled.div `

    h1 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        color: #293845;
        text-align: center;
        margin-top: 118px;
        margin-bottom: 34px;
    }
    p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        color: #293845;
        margin-bottom: 22px;
    }
    .sessions {
        margin-left: 24px;
    }
    .sessions__times {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 23px;
    }
    .session__time {
        width: 83px;
        height: 43px;
        background: #E8833A;
        border-radius: 3px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 8px 8px 0;
        cursor: pointer;
    }
    span {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        color: #FFFFFF;
        
    }
    * a {
        text-decoration: none;
    }
`