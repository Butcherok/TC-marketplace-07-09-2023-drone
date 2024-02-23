import {
  Background,
  Title,
  ViewAllBtn,
  CommentList,
  CommentItem,
  FlexConrainer,
  LogoBackground,
  Logo,
  UserName,
  StarList,
  StarItem,
  Star,
  CommentResponse,
  CommentText,
  DetailBtn,
  AddCommentBtn,
} from './Comments.styled';

import icon from '../../../../assets/icons/sprite.svg';

const Comments = () => {
  return (
    <Background>
      <Title>Останні коментарі</Title>
      <ViewAllBtn>Переглянути всі</ViewAllBtn>
      <CommentList>
        <CommentItem>
          <FlexConrainer>
            <LogoBackground>
              <Logo>
                <use href={`${icon}#icon-drones`}></use>
              </Logo>
            </LogoBackground>

            <div>
              <UserName>Max</UserName>

              <StarList>
                <StarItem>
                  <Star>
                    <use href={`${icon}#icon-star`}></use>
                  </Star>
                </StarItem>
                <StarItem>
                  <Star>
                    <use href={`${icon}#icon-star`}></use>
                  </Star>
                </StarItem>
                <StarItem>
                  <Star>
                    <use href={`${icon}#icon-star`}></use>
                  </Star>
                </StarItem>
                <StarItem>
                  <Star>
                    <use href={`${icon}#icon-star`}></use>
                  </Star>
                </StarItem>
                <StarItem>
                  <Star>
                    <use href={`${icon}#icon-star`}></use>
                  </Star>
                </StarItem>
              </StarList>
            </div>
          </FlexConrainer>
          <CommentResponse>2 відповіді</CommentResponse>
          <CommentText>
            Після року користування Мавіком 3, я можу сміливо сказати, що це -
            вражаючий дрон з високою продуктивністю. Його неймовірна
            стабільність допомагає ...
          </CommentText>
          <DetailBtn>детальніше</DetailBtn>
        </CommentItem>

        <CommentItem>
          <FlexConrainer>
            <LogoBackground>
              <Logo>
                <use href={`${icon}#icon-drones`}></use>
              </Logo>
            </LogoBackground>

            <div>
              <UserName>Vlad</UserName>

              <StarList>
                <StarItem>
                  <Star>
                    <use href={`${icon}#icon-star`}></use>
                  </Star>
                </StarItem>
                <StarItem>
                  <Star>
                    <use href={`${icon}#icon-star`}></use>
                  </Star>
                </StarItem>
                <StarItem>
                  <Star>
                    <use href={`${icon}#icon-star`}></use>
                  </Star>
                </StarItem>
                <StarItem>
                  <Star>
                    <use href={`${icon}#icon-star`}></use>
                  </Star>
                </StarItem>
                <StarItem>
                  <Star>
                    <use href={`${icon}#icon-star`}></use>
                  </Star>
                </StarItem>
              </StarList>
            </div>
          </FlexConrainer>
          <CommentResponse>2 відповіді</CommentResponse>
          <CommentText>
            безумовно потужний дрон, але він не надто легко керується для
            початківців. Рекомендую відвідати навчальні курси перед
            користуванням
          </CommentText>
        </CommentItem>

        <CommentItem>
          <FlexConrainer>
            <LogoBackground>
              <Logo>
                <use href={`${icon}#icon-drones`}></use>
              </Logo>
            </LogoBackground>

            <div>
              <UserName>Volodymyr</UserName>

              <StarList>
                <StarItem>
                  <Star>
                    <use href={`${icon}#icon-star`}></use>
                  </Star>
                </StarItem>
                <StarItem>
                  <Star>
                    <use href={`${icon}#icon-star`}></use>
                  </Star>
                </StarItem>
                <StarItem>
                  <Star>
                    <use href={`${icon}#icon-star`}></use>
                  </Star>
                </StarItem>
                <StarItem>
                  <Star>
                    <use href={`${icon}#icon-star`}></use>
                  </Star>
                </StarItem>
                <StarItem>
                  <Star>
                    <use href={`${icon}#icon-star`}></use>
                  </Star>
                </StarItem>
              </StarList>
            </div>
          </FlexConrainer>
          <CommentResponse>1 відповідь</CommentResponse>
          <CommentText>
            Батареї тримають заряд досить довго, але їхній запас потужності міг
            би бути більшим. Я все ще задоволений дроном, але додаткові батареї
            були б корисними
          </CommentText>
        </CommentItem>
      </CommentList>
      <AddCommentBtn>Додати коментар</AddCommentBtn>
    </Background>
  );
};

export default Comments;
