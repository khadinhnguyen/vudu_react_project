import {Link} from "react-router-dom";
import {Container, Nav, Navbar, NavbarBrand, NavDropdown} from 'react-bootstrap';
import {SearchInput} from "evergreen-ui";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import './Header.css';
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";


export default function Header(){
    const[{basket,user}, dispatch] = useStateValue();

    const handleAuthentication = () =>{
        if(user){
            auth.signOut();
            dispatch({
                type: 'EMPTY_BASKET',
            })
        }
    }

    return (             
            // to use spacing from boothstrap my-5
            <div className="header-container"> 
                <Container className="pg-max-width">
                    <Navbar variant="dark">
                        <NavbarBrand as={Link} to="/">VUDU</NavbarBrand>
                        <Nav >
                            <Nav.Link as={Link} to="/product/movie-list">Movies</Nav.Link>
                            <Nav.Link as={Link} to="/product/tv-list">TV</Nav.Link>                              
                        </Nav>
                        <Navbar.Toggle/>

                        <Navbar.Collapse className="justify-content-end">
                        <Nav>
                            <NavDropdown title="Redeem" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to="#">Digital Copy</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="#">VUDU Code</NavDropdown.Item>
                            </NavDropdown>
                            {/* {!user && '/login'} : means only redirect to /login if no user */}
                            <Nav.Link as={Link} onClick={handleAuthentication} to={!user && '/user/sign-in'}>
                                {user? 'Sign Out':'Sign In'}
                            </Nav.Link>       
                            <Nav.Link as={Link} to={'/user/check-out'}>
                                <ShoppingCartIcon />
                                <span>{basket?.length}</span>
                            </Nav.Link>                        
                        </Nav>
                        <Nav>
                            <SearchInput placeholder="Search Movie" width="100%"/>
                        </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Container>
            </div>

    
    )
}