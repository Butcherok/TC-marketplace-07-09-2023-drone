import Accordion from '../../../UI/Accordion/Accordion';
import { StyledSellersMobile } from './SellersMobile.styled';

const SellersMobile = () => {
  const items = [
    {
      title: 'Довідка про продавців',
      link: '/sellers',
    },
    {
      title: 'Тарифи',
      link: '/tariffs',
    },
    {
      title: 'Як почати продавати?',
      link: '/how-to-start',
    },
    {
      title: 'Угода користувача',
      link: '/agreement',
    },
    {
      title: 'Стати продавцем',
      link: '/begin',
    },
  ];

  return (
    <StyledSellersMobile>
      <Accordion title="Продавцям" items={items} showIcons={false} />
    </StyledSellersMobile>
  );
};

export default SellersMobile;
