import {Container, Row, Col, Spinner} from 'react-bootstrap'
import useSWR from 'swr';

import SmallImgCard from './SmallImgCard';
import './FeaturedSection.css';

export default function FeaturedSection({featuredTitle,featuredBy}){

    const {data:movies,error} = useSWR(`http://localhost:8080/movie-list-feature/${featuredBy}`);

    if(error) {        
        console.log(error);
        return <h1>Error.....</h1>
    }

    if(!movies) {
        return (
            <Container>
                <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
                </Spinner>
            </Container>
        );
    }

    return (
        <div className='feature-section-container'>            
            <Container className="pg-max-width">
            <h5>{featuredTitle}</h5>
                <Row>
                    {movies.map(result =>(
                        <Col xs={4} md={3} lg={2} key={result.id}>
                            <SmallImgCard movie={result}/>
                        </Col>
                    ))};
                </Row>                
            </Container>
        </div>
    )
}