import {Link} from "react-router-dom";
import {Container} from "react-bootstrap";
import {SearchInput} from "evergreen-ui";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import './Header.css';


export default function Header(){

    return (     
        <Container>
            
            <div id="header-container">      
                <div className="header-wrapper">
                    <nav>
                        <ul>
                            <li className="header-menu-list">
                                <Link to="/">
                                    <img src="https://www.vudu.com/content/images/logo.svg" alt="Vudu logo" className="home-logo" />
                                </Link>
                            </li>
                            <li className="header-menu-list">                    
                                    <a href="/movie-list"><span className="text-warning">Movies</span></a>                           
                            </li>
                            <li className="header-menu-list">               
                                    <a href="/tv-list">TV</a>    
                            </li>
                            <li className="header-menu-list">                
                                    <a href="">Free</a>                   
                            </li>
                            <li className="header-menu-list">                  
                                    <a href="">My Vudu</a>                    
                            </li>
                        </ul>                               
                    </nav>


                    <div className="header-menu-list">
                        <Link to="">    
                            <SearchInput placeholder="Search Movie" width="100%"/>
                        </Link>
                    </div>

                    <nav>
                        <ul>
                            <li className="header-menu-list list-right">
                                <Link to="">
                                    <ShoppingCartIcon style={{fontSize: 25}} />
                                    <span>2</span>
                                </Link>

                            </li>
                            <li className="header-menu-list list-right">
                                <div className="dropdown">                                    
                                    <a className="dropbtn" href="/sign-in">
                                        Sign In
                                    </a>                                       
                                    <div className="dropdown-content">
                                        <a href="/sign-in">Sign In</a>
                                        <a href="/account-setup">Create Account</a>
                                    </div>
                                </div>  
                            </li>
                        </ul>
                    </nav>                    

                </div>   
            </div>
        </Container>

    
    )
}