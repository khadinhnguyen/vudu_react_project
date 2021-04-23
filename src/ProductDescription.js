import {useState, useEffect} from 'react';
import { Container,Col, Row, Image } from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import axios from 'axios';

import SmallImgCard from './SmallImgCard';
import CardInfo from './CardInfo';
import './ProductDescription.css';

export default function ProductDescription(){
 
    const {productId} = useParams();
    const [movie, setMovie] = useState([]);
    

    const fetchMovies = () => {
        axios.get(`http://192.168.0.59:8080/movie/${productId}`)
        .then(res=>{ 
            setMovie(res.data);
        })
        .catch(err => console.log(err));
    }; 

    useEffect(()=>{
        fetchMovies();
    },[]); 

    return(
        <Container className="mt-57 pg-max-width">
            
            <div className="product-hero-background" style={{backgroundImage:`url(../img/movie/${movie.largePosterImg})`}}>
                <div>

               

            <Row>
                <Col lg={2}>
                    <div className="pt-3">
                     <SmallImgCard movie={movie}/>
                    </div>
                    
                </Col>
                <Col lg={4}>
                    <div className="pt-3">
                     <CardInfo movie={movie}/>
                    </div>
                    
                </Col>
 
            </Row>
            </div>
            </div>
        </Container>
    )



    
}