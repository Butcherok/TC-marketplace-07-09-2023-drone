import { StyledIcon } from './Icon.styled';
import Icons from '../../../assets/icons/sprite.svg';

const Icon = ({ id, onClick, active, className }) => {
  return (
    <StyledIcon onClick={onClick} active={active} className={className}>
      <use href={`${Icons}#icon-${id}`}></use>
    </StyledIcon>
  );
};

export default Icon;
