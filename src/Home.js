import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";


export default function Home({setInit}){
    const [filmes, setFilmes] = useState([]);
    useEffect(() => {
        const requisicao = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        requisicao.then((response) => {
            setFilmes(response.data);
            
        });
        
    },[]);

    return(
        <div>
            <div className='topo'>
                <h1>CINEFLEX</h1>
            </div>
            <h3 className='selecionar'>Selecione o filme</h3>
            {/* lista de filmes */}
            <div className='listaFilmes'>
                {filmes.map(filme => <img onClick={()=>setInit(true)} key={`filme ${filme.id}`} src={filme.posterURL}/>)}
            </div>
        </div>
    )
}