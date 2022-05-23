import styled from 'styled-components';
import { useState} from 'react';

export default function Reserva({id, assento, disponivel, lugaresEscolhidos, setlugaresEscolhidos, numeroAssento, setnumeroAssento}){
    
    const [reserva,setReserva] = useState(false);

    function verifica(){
        if(disponivel ===false){
            alert("Assento indisponivel");
            return;
        }
        else{
            setReserva(!reserva);
            if(!reserva === true && !lugaresEscolhidos.includes(id)){
                setlugaresEscolhidos([...lugaresEscolhidos,id]);
                setnumeroAssento([...numeroAssento,id]);
            }
            if(!reserva === false && lugaresEscolhidos.includes(id)){
                setlugaresEscolhidos([...lugaresEscolhidos].filter((value)=> value != id));
                setnumeroAssento([...numeroAssento,assento].filter((value) => value != assento));
            }
        }
    }
    return(
        <ReservaAcento className="circle" disponivel={disponivel} reserva={reserva} onClick={verifica} borderColor={disponivel}>
            <p>{assento}</p>
        </ReservaAcento>
    )
}

    const ReservaAcento = styled.div`
        background-color: ${props => props.disponivel === true ? "#C3CFD9" : "#FBE192"};
        border: 1px solid ${props => props.disponivel === true ? "#808F9D" : "#F7C52B"};
        background-color: ${props => props.reserva === true ? "#8DD7CF" : ""};
    `;