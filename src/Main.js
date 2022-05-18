import React from 'react';
import Footer from './Footer';
export default function Main(){
    return(
        <div>

            <header>
            <div className='topo'>
                <h1>CINEFLEX</h1>
            </div>
            <h3 className='selecionar'>Selecione o horário</h3>
            </header>

            <ul>
                {/* lista de dias */}
                <div className='listaSessoes'>
                    <p>Quinta-feira - 24/06/2021</p>
                    <div className='hora'>15:00</div>
                    <div className='hora'>19:00</div> 
                </div>
                <div className='listaSessoes'>
                    <p>Quinta-feira - 24/06/2021</p>
                    <div className='hora'>15:00</div>
                    <div className='hora'>19:00</div> 
                </div>
                <div className='listaSessoes'>
                    <p>Quinta-feira - 24/06/2021</p>
                    <div className='hora'>15:00</div>
                    <div className='hora'>19:00</div> 
                </div>
                <div className='listaSessoes'>
                    <p>Quinta-feira - 24/06/2021</p>
                    <div className='hora'>15:00</div>
                    <div className='hora'>19:00</div> 
                </div>
                <div className='listaSessoes'>
                    <p>Quinta-feira - 24/06/2021</p>
                    <div className='hora'>15:00</div>
                    <div className='hora'>19:00</div> 
                </div>
            </ul>
            <Footer />

        </div>
        
            
            


        
    )
}