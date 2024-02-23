import {
  AllCharacteristicsBackground,
  IconCross,
  Title,
  AllCharacteristicsList,
  AllCharacteristicsItem,
  AllCharacteristicsTitle,
  AllCharacteristicsValue,
  Description,
  // FlexWrapper,
} from './AllCharacteristics.styled';
import UsefulInformation from './UsefulInformation/UsefulInformation';
import icon from '../../../assets/icons/sprite.svg';
import Comments from './Comments/Comments';

const AllCharacteristics = () => {
  return (
    <>
      <AllCharacteristicsBackground>
        <IconCross>
          <use href={`${icon}#icon-cross`}></use>
        </IconCross>
        <Title>Характеристики та опис</Title>
        <AllCharacteristicsList>
          <AllCharacteristicsItem>
            <AllCharacteristicsTitle>Пульт управління</AllCharacteristicsTitle>
            <AllCharacteristicsValue>2,4 ГГц</AllCharacteristicsValue>
          </AllCharacteristicsItem>
          <AllCharacteristicsItem>
            <AllCharacteristicsTitle>
              Вхід (зарядний пристрій)
            </AllCharacteristicsTitle>
            <AllCharacteristicsValue>
              100-240 В / 50-60 Гц
            </AllCharacteristicsValue>
          </AllCharacteristicsItem>
          <AllCharacteristicsItem>
            <AllCharacteristicsTitle>Наявність камери</AllCharacteristicsTitle>
            <AllCharacteristicsValue>Так</AllCharacteristicsValue>
          </AllCharacteristicsItem>
          <AllCharacteristicsItem>
            <AllCharacteristicsTitle>
              Дальність передачі сигналу пульта
            </AllCharacteristicsTitle>
            <AllCharacteristicsValue>FCC：12 км</AllCharacteristicsValue>
          </AllCharacteristicsItem>
          <AllCharacteristicsItem>
            <AllCharacteristicsTitle>
              Розгорнуті розміри
            </AllCharacteristicsTitle>
            <AllCharacteristicsValue>250х250х55 мм</AllCharacteristicsValue>
          </AllCharacteristicsItem>
        </AllCharacteristicsList>

        <Description>
          Бюджетний дрон E88 pro – крута іграшка дітям і дорослим! Компактний
          квадрокоптер RC E88 Pro завдяки легкості управління відмінно підійде
          для розваг та перших запусків. Ця радіокерована іграшка по доступній
          ціні працює на щіткових двигунах, відрізняється базовим функціоналом,
          чудовою маневреністю та стильним зовнішнім виглядом. В комплекті з
          квадрокоптером йде злітно-посадковий майданчик у подарунок!
          Особливості зйомки Дрон знімає на фронтальну 4K камеру, має
          регулювання кута нахилу, створює хороші фотографії та відеоролики в
          реальному часі. Нижня HD камера слугує оптичним датчиком для
          позиціонування в просторі і дозволяє насолоджуватися більш
          контрольованим польотом Хороша функціональність E88 PRO отримав
          барометр з функцією утримання висоти, що допомагає коптеру надійно
          зависати в повітрі, функцію повернення додому, автоматичний зліт та
          приземлення одним натисненням, режим без голови, декілька режимів
          швидкості і виконує фліпи на 360 градусів. Квадрик живить модульна
          акумуляторна батарея ємністю в 1800 мАг, що забезпечує до 15 хвилин
          польоту за ідеальних умов. Максимальна дистанція польоту становить до
          100 метрів. Великі можливості, компактний розмір та доступна ціна
          роблять E88 Pro ідеальним вибором для всіх, хто шукає бюджетний дрон
          високої якості. Цей квадрокоптер легко керувати, що робить його
          відмінним вибором як для новачків, так і для досвідчених користувачів.
          E88 Pro оснащений фронтальною 4K камерою, яка здатна робити чудові
          фотографії та відео в реальному часі. Ви зможете насолоджуватися
          високоякісними знімками та знімати захоплюючі відеоролики з висоти
          пташиного польоту. Камера також має регульований кут нахилу, що
          дозволяє отримувати найкращі ракурси. Цей дрон має багато корисних
          функцій, таких як утримання висоти, функція повернення додому,
          автоматичний зліт та приземлення одним натисканням, режим без голови
          та можливість виконувати фліпи на 360 градусів. З модульним
          акумулятором ємністю 1800 мАг, E88 Pro може летіти до 15 хвилин за
          одним зарядом. Завдяки цим функціям та доступній ціні, E88 Pro - це
          ідеальна іграшка для всієї родини, яка принесе безліч задоволення від
          польотів і зйомок з повітря.
        </Description>

        <UsefulInformation />

        <Comments />
      </AllCharacteristicsBackground>
    </>
  );
};

export default AllCharacteristics;
