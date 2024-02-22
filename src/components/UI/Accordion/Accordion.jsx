import { useState } from 'react';

import {
  StyledAccordion,
  StyledAccordionHeader,
  StyledAccordionBody,
  AccordionLink,
} from './Accordion.styled';

import Icon from '../Icon/Icon';

const Accordion = ({ title, items, showIcons = true, onCategoryChange }) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  return (
    <StyledAccordion>
      <StyledAccordionHeader
        onClick={toggleAccordion}
        $isAccordionOpen={isAccordionOpen}
      >
        {title}
        <Icon id="chevron-down" onClick={toggleAccordion} />
      </StyledAccordionHeader>
      {isAccordionOpen && (
        <StyledAccordionBody>
          {items.map((item, index) => (
            <AccordionLink
              to={item.link}
              key={index}
              className="accordion-item"
              onClick={() => {
                onCategoryChange(item.category, item.title);
              }}
            >
              {showIcons && <Icon className="catalog-icon" id={item.icon} />}
              {item.title}
            </AccordionLink>
          ))}
        </StyledAccordionBody>
      )}
    </StyledAccordion>
  );
};

export default Accordion;
