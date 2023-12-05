import Accordion from "../../../UI/Accordion/Accordion";

import { StyledCallbackMobile } from "./CallbackMobile.styled";

const CallBackMobile = () => {
  const items = [
    {
      title: 'Найчастіші запитання',
      link: '/faq',
    },
    {
      title: 'Підтримка',
      link: '/support',
    },
    {
      title: `Зв'язатися з нами`,
      link: '/contact-us',
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
    <StyledCallbackMobile>
      <Accordion title={`Зворотній зв'язок`} items={items} showIcons={false} />
    </StyledCallbackMobile>
  );
};

export default CallBackMobile;