import Accordion from '../../../UI/Accordion/Accordion';
import { StyledInfoMobile } from './InfoMobile.styled';

const InfoMobile = () => {
  const items = [
    {
      title: 'Про нас',
      link: 'about-us',
    },
    {
      title: 'Доставка і оплата',
      link: '/delivery',
    },
    {
      title: 'Повернення та обмін',
      link: '/returns',
    },
    {
      title: 'Контакти',
      link: '/contacts',
    },
    {
      title: 'Статті',
      link: '/articles',
    },
  ];

  return (
    <StyledInfoMobile>
      <Accordion title="Інформація" items={items} showIcons={false} />
    </StyledInfoMobile>
  );
};

export default InfoMobile;
