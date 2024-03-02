import {
  AllCharacteristicsBackground,
  IconCrossBtn,
  IconCross,
  Title,
} from './AllCharacteristics.styled';
import UsefulInformation from './UsefulInformation/UsefulInformation';
import icon from '../../../assets/icons/sprite.svg';
import Comments from './Comments/Comments';
import DescriptionCharacteristics from './DescriptionCharacteristics/DescriptionCharacteristics';

const AllCharacteristics = ({ open, setOpen }) => {
  function onClose() {
    setOpen(false);
    document.body.style.overflow = 'auto';
  }

  return (
    <>
      <AllCharacteristicsBackground
        className={open ? 'modal-move-up' : 'modal-move-down'}
      >
        <IconCrossBtn type="button">
          <IconCross onClick={() => onClose()}>
            <use href={`${icon}#icon-cross`}></use>
          </IconCross>
        </IconCrossBtn>
        <Title>Характеристики та опис</Title>

        <DescriptionCharacteristics />

        <UsefulInformation />

        <Comments />
      </AllCharacteristicsBackground>
    </>
  );
};

export default AllCharacteristics;
