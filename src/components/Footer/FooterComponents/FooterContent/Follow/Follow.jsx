import React from 'react';
import { FollowContainer } from './Follow.styled';

const Follow = () => {
  return (
    <FollowContainer>
      <h4>Підпишись на наші новини та отримай знижку</h4>
      <form>
        <label>
          <input type="email" placeholder="E-mail" />
        </label>
        <button type="submit">Підписатися</button>
      </form>
    </FollowContainer>
  );
};

export default Follow;
