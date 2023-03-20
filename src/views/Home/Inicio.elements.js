import styled from '@emotion/styled'
import {CarouselItem} from 'reactstrap';
import {CarouselCaption} from 'reactstrap';

export const WraperCarousel = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    width: 100%;
    height: 100%;
    border-radius: 0 0 10px 10px;
    border-bottom: 5px solid #591D55;
    background-color: #591D55;
`;

/*Estilos del item del carrusel*/
export const CarouselItemStyled = styled(CarouselItem)`
    img{
        width: 98vw;
        height: 70vh;
        object-fit: cover;
        object-position: 50% 70%;
    }
`;

// texto en el carrusel
export const CaptionText = styled(CarouselCaption)`
    color: white; 
    text-shadow: black 0.3rem 0.3rem 0.4rem;
`;