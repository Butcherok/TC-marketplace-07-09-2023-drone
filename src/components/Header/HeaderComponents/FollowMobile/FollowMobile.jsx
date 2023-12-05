import { Button } from 'react-bootstrap';
import {
  StyledFollowMobile,
  FollowTitle,
  FollowForm,
  FollowLabel,
  FollowInput,
  FollowSubmit,
  FollowSubmitText,
} from './FollowMobile.styled';

const FollowMobile = () => {
  return (
    <StyledFollowMobile>
      <FollowTitle>Підпишись на наші новини та отримай знижку</FollowTitle>
      <FollowForm>
        <FollowLabel>
          <FollowInput type="email" placeholder="example@email.com" />
        </FollowLabel>
        <FollowSubmit>
          <Button className='subscribe-btn'>Підписатись</Button>
          <FollowSubmitText>
            *На пошту прийде промокод на знижку в 10% на наступну покупку
          </FollowSubmitText>
        </FollowSubmit>
      </FollowForm>
    </StyledFollowMobile>
  );
};

export default FollowMobile;
