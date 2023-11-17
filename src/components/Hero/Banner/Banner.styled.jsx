import { Carousel } from 'react-bootstrap';
import styled from 'styled-components';

export const Slider = styled(Carousel)`
  .carousel-indicators {
    column-gap: 22px;
    align-items: center;
    bottom: 6.5%;
  }

  .carousel-indicators button {
    width: 10px;
    height: 10px;
    background-color: #f5f6fa;
    border: 1px solid #3385ff;
    border-radius: 50%;
    opacity: 1;    
  }

  .carousel-indicators button.active {
    background-color: #3385ff;
    // width: 14px;
    // height: 14px;
    transform: scale(1.2);
  }
`;
