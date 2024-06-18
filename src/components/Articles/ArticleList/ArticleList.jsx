import img from '../../../assets/blog-img.jpg';
import {
  BlogBackground,
  BlogImage,
  BlogItem,
  BlogList,
  BlogText,
  BlogTitle,
  BtnMore,
  IconMore,
  TextContainer,
} from './ArticleList.styled';
import icon from '../../../assets/icons/sprite.svg';

const ArticleList = () => {
  return (
    <BlogList>
      <BlogItem>
        <BlogBackground>
          <BlogImage src={img} alt="Drone" />

          <TextContainer>
            <BlogTitle>
              Заходи безпеки при експлуатації дронів класса S
            </BlogTitle>
            <BlogText>
              Пояснюємо правила, що застосовуються до безпілотників у Польщі. Ви
              дізнаєтесь про регуляторні нововведення, які були прийняті для
              захисту державних і приватних інтересів та сприяння розвитку
              безпілотників у різних галузях. Ознайомтеся із Законом про
              безпілотники 2024, де ви дізнаєтеся, як країни-члени EASA
              (включаючи Польщу) формують правила, щоб ефективно піклуватися про
              громадськість, забезпечуючи при цьому конфіденційність і
              дотримуючись прав людини.
            </BlogText>
            <BtnMore to=":id">
              Читати більше{' '}
              <IconMore>
                <use href={`${icon}#icon-chevron-right`}></use>
              </IconMore>
            </BtnMore>
          </TextContainer>
        </BlogBackground>
      </BlogItem>

      <BlogItem>
        <BlogBackground>
          <BlogImage src={img} alt="Drone" />

          <TextContainer>
            <BlogTitle>
              Заходи безпеки при експлуатації дронів класса S
            </BlogTitle>
            <BlogText>
              Пояснюємо правила, що застосовуються до безпілотників у Польщі. Ви
              дізнаєтесь про регуляторні нововведення, які були прийняті для
              захисту державних і приватних інтересів та сприяння розвитку
              безпілотників у різних галузях. Ознайомтеся із Законом про
              безпілотники 2024, де ви дізнаєтеся, як країни-члени EASA
              (включаючи Польщу) формують правила, щоб ефективно піклуватися про
              громадськість, забезпечуючи при цьому конфіденційність і
              дотримуючись прав людини.
            </BlogText>
            <BtnMore to=":id">
              Читати більше{' '}
              <IconMore>
                <use href={`${icon}#icon-chevron-right`}></use>
              </IconMore>
            </BtnMore>
          </TextContainer>
        </BlogBackground>
      </BlogItem>

      <BlogItem>
        <BlogBackground>
          <BlogImage src={img} alt="Drone" />

          <TextContainer>
            <BlogTitle>
              Заходи безпеки при експлуатації дронів класса S
            </BlogTitle>
            <BlogText>
              Пояснюємо правила, що застосовуються до безпілотників у Польщі. Ви
              дізнаєтесь про регуляторні нововведення, які були прийняті для
              захисту державних і приватних інтересів та сприяння розвитку
              безпілотників у різних галузях. Ознайомтеся із Законом про
              безпілотники 2024, де ви дізнаєтеся, як країни-члени EASA
              (включаючи Польщу) формують правила, щоб ефективно піклуватися про
              громадськість, забезпечуючи при цьому конфіденційність і
              дотримуючись прав людини.
            </BlogText>
            <BtnMore to=":id">
              Читати більше{' '}
              <IconMore>
                <use href={`${icon}#icon-chevron-right`}></use>
              </IconMore>
            </BtnMore>
          </TextContainer>
        </BlogBackground>
      </BlogItem>
    </BlogList>
  );
};

export default ArticleList;
