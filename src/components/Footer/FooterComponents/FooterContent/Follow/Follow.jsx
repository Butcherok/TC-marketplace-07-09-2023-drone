import React from 'react';
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
          <button type="submit">Підписатись</button>
          <FollowSubmitText>
            *На пошту прийде промокод на знижку в 10% на наступну покупку
          </FollowSubmitText>
        </FollowSubmit>
      </FollowForm>
    </FollowContainer>
  );
};

export default Follow;
