import {Link} from 'react-router-dom';
import {Container, Button} from 'react-bootstrap';


import './CardInfo.css';

export default function CardInfo({movie}){

    return(

                        <div className="product-info d-flex flex-column text-light">
                            <div className="movie-title">{movie.title}</div>
                            <div class="left-align">{movie.category} | {movie.genre} | Rating: {movie.rating} | ({movie.numberOfStar})</div>
                            <div className="movie-description overflow-auto">{movie.synopsis}</div>

                            <Container>
                                <Button className="movie-button" as={Link} to={"#"}> Rent ${movie.rentalPrice}</Button>
                                <Button className="movie-button" as={Link} to={"#"}>Buy ${movie.purchasePrice} </Button>
                            </Container>
     
                            {/* <br/> */}
                            {/* {{#if admin}} */}
          
                                {/* <a href="/admin/updateMovieTv/{{movie.id}}">
                                    <button type="button" class="btn btn-secondary btn-md btn-block btn-danger">Edit (Admin Only)</button> 
                                </a>  */}
                                {/* <br> */}
                                      
                                {/* <form action="/admin/deleteMovieTv/{{movie.id}}?method=DELETE" method="POST">
                                    <button onclick="return confirm('Are you sure to delete this movie?');" type="submit" class="btn btn-secondary btn-md btn-block btn-danger">Delete (Admin Only)</button> 
                                </form>          */}
                           
                            {/* {{/if}} */}
                            {/* <br> */}
                            
                        

                        </div>
    )

}