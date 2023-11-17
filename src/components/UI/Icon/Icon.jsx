import { StyledIcon } from './Icon.styled';
import Icons from '../../../assets/icons/sprite.svg';

const Icon = ({ id }) => {
  return (
    <StyledIcon>
      <use href={`${Icons}#icon-${id}`}></use>
    </StyledIcon>
  );
};

export default Icon;
