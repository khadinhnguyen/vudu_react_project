import {Container} from 'react-bootstrap'
import SmallImgCard from './SmallImgCard';

import './FeaturedSection.css';

export default function FeaturedSection({featuredTitle}){

    return (
        <div className='feature-section-container'>
            
            <Container>
            <h5>{featuredTitle}</h5>
                <SmallImgCard/>
            </Container>
        </div>

    )
}