import {  Link } from "react-router-dom";


const Navbar= () =>{
    return (
        <div>
            <li>
                <Link to='/quemSouEu'>
                    Quem sou eu
                </Link>
            </li>
            <li>
                <Link to='/contato'>
                    Contato
                </Link>
            </li>
            <li>
                <Link to='/projetos'>
                    Projeto
                </Link>
            </li>
        </div>
    );
}

export default Navbar;