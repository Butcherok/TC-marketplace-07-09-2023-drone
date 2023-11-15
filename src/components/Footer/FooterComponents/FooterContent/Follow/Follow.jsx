import React from 'react';
import { Btn } from '../FooterContent.styled';
import {
  FollowContainer,
  FollowForm,
  FollowInput,
  FollowLabel,
  FollowSubmit,
  FollowSubmitText,
  FollowTitle,
} from './Follow.styled';

const Follow = () => {
  return (
    <FollowContainer>
      <FollowTitle>Підпишись на наші новини та отримай знижку</FollowTitle>
      <FollowForm>
        <FollowLabel>
          <FollowInput type="email" placeholder="example@email.com" />
        </FollowLabel>
        <FollowSubmit>
          <Btn variant='primary'>Підписатись</Btn>
          <FollowSubmitText>
            *На пошту прийде промокод на знижку в 10% на наступну покупку
          </FollowSubmitText>
        </FollowSubmit>
      </FollowForm>
    </FollowContainer>
  );
};

export default Follow;
