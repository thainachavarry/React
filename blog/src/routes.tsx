import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar"
import QuemSouEu from "./pages/navbar/quem-sou-eu"
import Contato from "./pages/navbar/contato"
import Projeto from "./pages/navbar/projetos"


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
