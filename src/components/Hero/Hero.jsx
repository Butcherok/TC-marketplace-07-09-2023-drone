import { StyledHero, HeroContainer } from './Hero.styled';
import Banner from './Banner/Banner';

const Hero = () => {
  return (
    <StyledHero>
      <HeroContainer>
          <Banner />
      </HeroContainer>
    </StyledHero>
  );
};

export default Hero;
