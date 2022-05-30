import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import QuemSouEu from "./pages/navbar/quem-sou-eu"
import Contato from "./pages/navbar/contato"
import Projeto from "./pages/navbar/projetos"
import { WhatsApp } from '@mui/icons-material';


function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<QuemSouEu />} path="/" exact = {true} /> {/* pesquisar dps */ }
                <Route path="/contato" element={<Contato />} />
                <Route path="/projetos" element={<Projeto />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;
