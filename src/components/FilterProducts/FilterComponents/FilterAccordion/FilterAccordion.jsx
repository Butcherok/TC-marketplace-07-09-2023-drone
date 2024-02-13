import { useState } from 'react';

import {
  StyledFilterAccordion,
  StyledFilterAccordionHeader,
  StyledFilterAccordionBody,
  FilterAccordionItem,
} from './FilterAccordion.styled';

import Icon from '../../../UI/Icon/Icon';

const FilterAccordion = ({
  title,
  items,
  setSelectedFilters,
  selectedFilters,
}) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  const handleCheckboxChange = item => {
    console.log(selectedFilters);
    setSelectedFilters(prevFilters => {
      if (prevFilters.includes(item)) {
        return prevFilters.filter(filter => filter !== item);
      } else {
        return [item, ...prevFilters];
      }
    });
  };

  return (
    <StyledFilterAccordion>
      <StyledFilterAccordionHeader
        onClick={toggleAccordion}
        $isAccordionOpen={isAccordionOpen}
      >
        {title}
        <Icon id="chevron-down" onClick={toggleAccordion} />
      </StyledFilterAccordionHeader>
      {isAccordionOpen && (
        <StyledFilterAccordionBody>
          {items.map((item, index) => (
            <FilterAccordionItem key={index} className="accordion-item">
              <input
                type="checkbox"
                id={`item-${index}`}
                checked={selectedFilters.includes(item)}
                onChange={() => handleCheckboxChange(item)}
              />
              <span>{item}</span>
            </FilterAccordionItem>
          ))}
        </StyledFilterAccordionBody>
      )}
    </StyledFilterAccordion>
  );
};

export default FilterAccordion;
