import {
  BtnMore,
  InfoBannerContainer,
  InfoBannerDescription,
  InfoBannerImg,
  InfoBannerText,
  InfoBannerTitle,
  StyledInfoBanner,
} from './InfoBanner.styled';
import BgDrone from './bg-infobanner.jpg';

const InfoBanner = () => {
  return (
    <StyledInfoBanner className="info-banner">
      <InfoBannerContainer>
        <InfoBannerImg>
          <img src={BgDrone} alt="Drone" />
        </InfoBannerImg>
        <InfoBannerText>
          <InfoBannerTitle>Завжди під рукою</InfoBannerTitle>
          <InfoBannerDescription>
            Документація, інструкції та відео з експлуатації до кожного дрона
            завжди в швидкому доступі
          </InfoBannerDescription>
          <BtnMore>Детальніше</BtnMore>
        </InfoBannerText>
      </InfoBannerContainer>
    </StyledInfoBanner>
  );
};

export default InfoBanner;
