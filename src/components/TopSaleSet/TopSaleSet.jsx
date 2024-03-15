import { SellerContainer } from 'components/Product/ProductComponents/SellerContainer/SellerContainer';
import { AddContainer } from '../Product/ProductComponents/AddContainer/AddContainer';
import { ResponseContainer } from '../Product/ProductComponents/ResponseContainer/ResponseContainer';
import { BuyContainer } from 'components/Product/ProductComponents/BuyContainer/BuyContainer';
import {
  ImgWrapper,
  SetTitle,
  StyledTopSaleSet,
  TopSaleSetContainer,
} from './TopSaleSet.styled';
import SetImg from './set.jpg';

const TopSaleSet = () => {
  return (
    <StyledTopSaleSet>
      <TopSaleSetContainer>
        <ImgWrapper>
          <img src={SetImg} alt="Top sale set" />
        </ImgWrapper>
        <div className='text'>
          <SetTitle>
            DJI FPV Combo Bundle - FPV Дрон UAV Quadcopter з 4K камерою + 128GB
            пам’яті + рюкзак + пульт управління
          </SetTitle>
          <div className="responsive-add">
            <ResponseContainer />
            <AddContainer />
          </div>
          <SellerContainer className="seller-container" />
          <BuyContainer
            classNameWrapper="buy-container"
            classNamePrices="prices"
          />
        </div>
      </TopSaleSetContainer>
    </StyledTopSaleSet>
  );
};

export default TopSaleSet;
