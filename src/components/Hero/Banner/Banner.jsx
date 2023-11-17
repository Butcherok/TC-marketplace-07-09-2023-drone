import {
  CarouselItem,
  Image,
} from 'react-bootstrap';

import { Slider } from './Banner.styled';
import Slide1 from '../../../assets/BattleBorn.jpg';

const Banner = () => {
  const items = [
    { src: Slide1, alt: 'Slide 1' },
    { src: Slide1, alt: 'Slide 2' },
    { src: Slide1, alt: 'Slide 3' },
    { src: Slide1, alt: 'Slide 4' },
  ];

  
  return (
    <Slider indicators={true} controls={false} interval={6000}>
      {items.map((item, index) => (
        <CarouselItem key={index}>
          <Image className="d-block w-100" src={item.src} alt={item.alt} />
        </CarouselItem>
      ))}
    </Slider>
  );
};

export default Banner;
