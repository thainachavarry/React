import {  Link } from "react-router-dom";
import {
    Nav,
    NavLink,
    NavMenu,
    ImgNav,
    MenuWrapper
    } from './NavbarElements';

    import imgNavBar from '../imgs/Logo.png'   
    import SearchIcon from '@mui/icons-material/Search';


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
            
                <SearchIcon>
                    <svg data-testid="SearchIcon"></svg>
                </SearchIcon>
            </Nav>
        </>
    );
}

export default Navbar;