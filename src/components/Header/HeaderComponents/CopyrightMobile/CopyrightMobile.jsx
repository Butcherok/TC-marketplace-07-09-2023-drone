import Contacts from "../../../Footer/FooterComponents/FooterCopyright/Contacts/Contacts";
import Socials from "../../../Footer/FooterComponents/FooterCopyright/Socials/Socials";

import { StyledCopyrightMobile } from "./CopyrightMobile.styled";

const CopyrightMobile = () => {
  return (
    <StyledCopyrightMobile>
      <Contacts />
      <Socials />
    </StyledCopyrightMobile>
  );
};

export default CopyrightMobile;