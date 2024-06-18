import icon from '../../../assets/icons/sprite.svg';
import { Arrow, Background, NumberItem, NumberList } from './Pagination.styled';

const Pagination = () => {
  return (
    <Background>
      <button type="button">
        <Arrow>
          <use href={`${icon}#icon-chevron-left`}></use>
        </Arrow>
      </button>

      <NumberList>
        <NumberItem>1</NumberItem>
        <NumberItem>2</NumberItem>
        <NumberItem>3</NumberItem>
        <NumberItem>...</NumberItem>
        <NumberItem>4</NumberItem>
        <NumberItem>5</NumberItem>
        <NumberItem>6</NumberItem>
      </NumberList>

      <button type="button">
        <Arrow>
          <use href={`${icon}#icon-chevron-right`}></use>
        </Arrow>
      </button>
    </Background>
  );
};
export default Pagination;
