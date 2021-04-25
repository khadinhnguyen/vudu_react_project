import {Carousel, Container} from 'react-bootstrap';

export default function Hero(){
    const heroImgs = ['h1.png','h2.png','h3.png','h4.png','h5.png','h6.png','h7.png','h8.png']

    return(
        <div className="mt-57">
        <Container className="pg-max-width">
            <Carousel>
                {heroImgs.map(item=>(
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={`./img/hero/${item}`}
                        alt="First slide"
                    />
                </Carousel.Item>
                ))};
            </Carousel>
        </Container>
        </div>
    )
}