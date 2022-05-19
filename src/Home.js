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

    function FilmeId({id,source}){
        return(
            <Link to={`/sessoes/${id}`}>
                <img onClick={()=>setInit(true)} key={`filme ${id}`} src={source}/>
            </Link>
        )
        
    }

    return(
        <div>
            <div className='topo'>
                <h1>CINEFLEX</h1>
            </div>
            <h3 className='selecionar'>Selecione o filme</h3>
            {/* lista de filmes */}
            <div className='listaFilmes'>
                {filmes.map(filme => <FilmeId id={filme.id} source={filme.posterURL}/>)}
            </div>
        </div>
    )
}