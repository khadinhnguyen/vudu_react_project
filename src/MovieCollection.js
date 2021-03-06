import {Container, Row, Col, Spinner} from 'react-bootstrap'
import useSWR from 'swr';

import SmallImgCard from './SmallImgCard';
import './MovieCollection.css';

export default function FeaturedSection({Title,Group,Value}){

    const {data:movies,error} = useSWR(`https://khadinhnguyen-springboot-vudu.herokuapp.com/movie-list-${Group}/${Value}`);

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
            <h5>{Title}</h5>
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