import { Carousel } from 'react-bootstrap';
import styled from 'styled-components';

export const Slider = styled(Carousel)`
  .carousel-indicators {
    column-gap: 22px;
    align-items: center;
    bottom: 6.5%;
  }

  .slide-image {
    border-radius: 5px;
  }

  .carousel-indicators {
    display: none;

    @media ${props => props.theme.media.bigMobile} {
      display: flex;
    }
  }

  .carousel-indicators button {
    width: 8px;
    height: 8px;
    background-color: #f5f6fa;
    border: 1px solid #3385ff;
    border-radius: 50%;
    opacity: 1;

    @media ${props => props.theme.media.desktop} {
      width: 10px;
      height: 10px;
    }
  }

  .carousel-indicators button.active {
    background-color: #3385ff;
    transform: scale(1.2);
  }
`;
