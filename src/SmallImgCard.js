import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import axios from "axios";
import { Container, Row, Col, Card} from 'react-bootstrap';

export default function SmallingCard () {
    const [movies, setMovie] = useState([])

    const fetchMovies = () => {
        axios.get("http://localhost:8080/movie")
        .then(res=>{ 
            setMovie(res.data);
            console.log(res.data);
        })
        .catch(err => console.log(err));
    }; 

    useEffect(()=>{
        fetchMovies();
    },[]); 


    return (
            <>
                <Container>            
                    <Row>
                        {movies.map(result =>(
                            
                            <Col xs={12} md={8} lg={2} key={result.id}>
                                <Card as={Link} to={`/product/${result.id}`} >
                                <Card.Img variant="top" src={`./img/movie/${result.smallPosterImg}`} />                                    
                                </Card>
                            </Col>

                        ))};

                    </Row>
                </Container>

            </>
    );
}