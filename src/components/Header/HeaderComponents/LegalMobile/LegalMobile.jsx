import Accordion from '../../../UI/Accordion/Accordion';

import { StyledLegalMobile } from './LegalMobile.styled';

const LegalMobile = () => {
  const items = [
    {
      title: 'Політика конфіденційності',
      link: '/legal',
    },
    {
      title: 'Офетра',
      link: '/offer',
    }
  ];

  return (
    <StyledLegalMobile>
      <Accordion title="Юридична інформація" items={items} showIcons={false} />
    </StyledLegalMobile>
  );
};

export default LegalMobile;
