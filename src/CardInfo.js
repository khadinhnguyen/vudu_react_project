import {Link} from 'react-router-dom';
import {Container, Button} from 'react-bootstrap';


import './CardInfo.css';

export default function CardInfo({movie}){

    return(
        <div className="product-info d-flex flex-column text-light">
            <div className="movie-title">{movie.title}</div>
            <div class="left-align d-flex flex-row">{movie.category} | {movie.genre} |  
                    {Array(movie.rating).fill().map((_,i) => (
                        <p className="fs-6">🌟</p>
                    ))} 
                    | ({movie.numberOfStar})
            </div>
            <div className="movie-description overflow-auto">{movie.synopsis}</div>
        </div>
    )

}