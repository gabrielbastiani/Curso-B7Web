import React from "react";

import introconnection from '../images/introconnection.jpg'
import './ChatIntro.css';

export default () => {
    return (
        <div className="chatIntro">
            <img src={introconnection} alt="" />
            <h1>Mantenha se celuar conectado</h1>
            <h2>O WhatsApp conecta ao seu telefone para sincronizar suas mensagens. Para reduzir o uso de dados, conecte seu telefone a uma rede Ei-Fi.</h2>
        </div>
    )
}