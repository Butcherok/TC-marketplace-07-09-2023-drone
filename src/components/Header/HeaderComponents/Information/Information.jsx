import InfoMobile from '../InfoMobile/InfoMobile';
import SellersMobile from '../SellersMobile/SellersMobile';
import CallBackMobile from '../CallbackMobile/CallBackMobile';
import LegalMobile from '../LegalMobile/LegalMobile';

import { StyledInformation } from './Information.styled';

const Information = () => {
  return (
    <StyledInformation>
      <InfoMobile />
      <SellersMobile />
      <CallBackMobile />
      <LegalMobile />
    </StyledInformation>
  );
};

export default Information;
