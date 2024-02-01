import { useState } from 'react';
import {
  RadioButtonPresentation,
  RadioGroupPresentation,
  StyledPresentation,
} from './Presentation.styled';
import RadioButton from '../../../UI/Icon/Icon';

const Presentation = ({ onChangeDisplayMode }) => {
  const [radioValue, setRadioValue] = useState('grid');
  const radios = [{ value: 'grid' }, { value: 'list' }, ];

  const handleRadioChange = (value) => {
    setRadioValue(value);
    onChangeDisplayMode(value);
  };
  

  return (
    <StyledPresentation>
      <RadioGroupPresentation name="presentation" type="radio">
        {radios.map((radio, index) => (
          <RadioButtonPresentation
            key={index}
            className={radioValue === radio.value ? 'active' : ''}
            value={radio.value}
            checked={radioValue === radio.value}
            onClick={() => handleRadioChange(radio.value)}
          >
            <RadioButton id={radio.value} />
          </RadioButtonPresentation>
        ))}
        {/* <RadioButtonPresentation value='grid'>
          <RadioButton id="grid" />
        </RadioButtonPresentation>
        <RadioButtonPresentation value='list'>
          <RadioButton id="list" />
        </RadioButtonPresentation>
        <RadioButtonPresentation value='compact'>
          <RadioButton id="compact" />
        </RadioButtonPresentation> */}
      </RadioGroupPresentation>
    </StyledPresentation>
  );
};

export default Presentation;
