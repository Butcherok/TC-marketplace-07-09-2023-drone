import { Suspense, useState } from 'react';
import {
  CategoryList,
  CategoryItem,
  Category,
  CharacteristicsBackground,
  Title,
  CharacteristicsList,
  CharacteristicsItem,
  CharacteristicsTitle,
  CharacteristicsValue,
  Description,
  BtnMore,
  FlexWrapper,
} from './Characteristics.styled';

import AllCharacteristics from './AllCharacteristics/AllCharacteristics';
import { Outlet } from 'react-router-dom';

const Characteristics = () => {
  const [open, setOpen] = useState(false);
  // const [active, setActive] = useState(false);

  function onOpen() {
    setOpen(true);
    document.body.style.overflow = 'hidden';
  }

  // function addActiveClass() {
  // setActive(active => !active);
  // if (active) {
  //   e.target.classList.add('is-active');
  // } else {
  // }
  // active ? e.currentTarget.classList.add('is-active') : 'none';
  // e.target.classList.toggle('is-active');
  // className={active ? 'is-active' : null}
  // }

  return (
    <>
      {window.innerWidth >= 1440 && (
        <CategoryList>
          <CategoryItem>
            <Category to="characteristics">Характеристики та опис</Category>
          </CategoryItem>

          <CategoryItem>
            <Category to="useful">Корисна інформація</Category>
          </CategoryItem>

          <CategoryItem>
            <Category to="payment">Оплата</Category>
          </CategoryItem>

          <CategoryItem>
            <Category to="delivery">Доставка</Category>
          </CategoryItem>

          <CategoryItem>
            <Category to="comments">Коментарі</Category>
          </CategoryItem>
        </CategoryList>
      )}

      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>

      <CharacteristicsBackground>
        <Title>Характеристики та опис</Title>
        <FlexWrapper>
          <CharacteristicsList>
            <CharacteristicsItem>
              <CharacteristicsTitle>Пульт управління</CharacteristicsTitle>
              <CharacteristicsValue>2,4 ГГц</CharacteristicsValue>
            </CharacteristicsItem>
            <CharacteristicsItem>
              <CharacteristicsTitle>
                Вхід (зарядний пристрій)
              </CharacteristicsTitle>
              <CharacteristicsValue>100-240 В / 50-60 Гц</CharacteristicsValue>
            </CharacteristicsItem>
            <CharacteristicsItem>
              <CharacteristicsTitle>Наявність камери</CharacteristicsTitle>
              <CharacteristicsValue>Так</CharacteristicsValue>
            </CharacteristicsItem>
            <CharacteristicsItem>
              <CharacteristicsTitle>
                Дальність передачі сигналу пульта
              </CharacteristicsTitle>
              <CharacteristicsValue>FCC：12 км</CharacteristicsValue>
            </CharacteristicsItem>
            <CharacteristicsItem>
              <CharacteristicsTitle>Розгорнуті розміри</CharacteristicsTitle>
              <CharacteristicsValue>250х250х55 мм</CharacteristicsValue>
            </CharacteristicsItem>
          </CharacteristicsList>

          <Description>
            Бюджетний дрон E88 pro – крута іграшка дітям і дорослим! Компактний
            квадрокоптер RC E88 Pro завдяки легкості управління відмінно підійде
            для розваг та перших запусків. Ця радіокерована іграшка по доступній
            ціні працює на щіткових двигунах, відрізняється базовим
            функціоналом, чудовою маневреністю та стильним зовнішнім виглядом. В
            комплекті з квадрокоптером йде злітно-посадковий майданчик у
            подарунок!
          </Description>
        </FlexWrapper>
        <BtnMore type="button" onClick={() => onOpen()}>
          Детальніше
        </BtnMore>
      </CharacteristicsBackground>

      {open === true && <AllCharacteristics open={open} setOpen={setOpen} />}
    </>
  );
};

export default Characteristics;
