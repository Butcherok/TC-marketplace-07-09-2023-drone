import {
  Background,
  Title,
  ViewAllBtn,
  CommentList,
  CommentItem,
  FlexConrainer,
  FlexConrainer2,
  FlexConrainer3,
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
      <FlexConrainer2>
        <Title>Останні коментарі</Title>
        <ViewAllBtn>Переглянути всі</ViewAllBtn>
      </FlexConrainer2>

      <CommentList>
        <CommentItem>
          <FlexConrainer3>
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
          </FlexConrainer3>

          <div>
            <CommentText>
              Після року користування Мавіком 3, я можу сміливо сказати, що це -
              вражаючий дрон з високою продуктивністю. Його неймовірна
              стабільність допомагає ...
              <DetailBtn>детальніше</DetailBtn>
            </CommentText>
          </div>
        </CommentItem>

        <CommentItem>
          <FlexConrainer3>
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
          </FlexConrainer3>

          <CommentText>
            безумовно потужний дрон, але він не надто легко керується для
            початківців. Рекомендую відвідати навчальні курси перед
            користуванням
          </CommentText>
        </CommentItem>

        <CommentItem>
          <FlexConrainer3>
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
          </FlexConrainer3>

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
