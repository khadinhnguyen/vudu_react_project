import {Link} from "react-router-dom";
import {Container, Nav, Navbar, NavbarBrand, NavDropdown} from 'react-bootstrap';
import {SearchInput} from "evergreen-ui";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import './Header.css';


export default function Header(){

    return (             
                
            <div className="header-container">
                <Container>
                    <Navbar variant="dark">
                        <NavbarBrand>VUDU</NavbarBrand>
                        <Nav >
                            <Nav.Link as={Link} to="#">Movies</Nav.Link>
                            <Nav.Link as={Link} to="#">TV</Nav.Link>                              
                        </Nav>
                        <Navbar.Toggle/>

                        <Navbar.Collapse className="justify-content-end">
                        <Nav>
                            <NavDropdown title="Redeem" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to="#">Digital Copy</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="#">VUDU Code</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Sign In" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to="#">Sign-In</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="#">Create Account</NavDropdown.Item>
                            </NavDropdown>
                            
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