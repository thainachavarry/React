import {  Link } from "react-router-dom";
import {
    Nav,
    NavLink,
    NavMenu,
    ImgNav,
    MenuWrapper,
    ContainerIcone,
    ariaLabel,
    } from './NavbarElements';

    import imgNavBar from '../imgs/Logo.png'   
    import SearchIcon from '@mui/icons-material/Search';
import TextField from "@mui/material/TextField/";
import { Input } from "@mui/material";


function Navbar() {
    return (
        <>
            <Nav>
                <MenuWrapper>
                    <NavLink to='/'>
                        <ImgNav src={imgNavBar}/>
                    </NavLink>

                    <NavMenu>
                        <NavLink to='/contato'>
                            Contato
                        </NavLink>

                        <NavLink to='/projetos'>
                            Projeto
                        </NavLink>
                    </NavMenu>
                </MenuWrapper>
            
                <ContainerIcone>            
                <SearchIcon>
                    <svg data-testid="SearchIcon" style={{marginRight: "85px"}}></svg>
                </SearchIcon>
                <Input placeholder="Pesquise" inputProps={ariaLabel} />
                </ContainerIcone>
                
                </Nav>
        </>
    );
}

export default Navbar;