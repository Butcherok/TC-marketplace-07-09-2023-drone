import FilterAccordion from '../FilterAccordion/FilterAccordion';
import { StyledFilterOptions } from './FilterOptions.styled';

const FilterOptions = ({ selectedFilters, setSelectedFilters}) => {
  const types = ['Аеророзвідка', 'FPV', 'Військові'];
  const manufacturers = ['Autel', 'DJI', 'BattleBorn'];
  const cameras = ['4K', '8K'];
  const test1 = ['ddd1', 'ggg1'];
  const test2 = ['ddd2', 'ggg2'];
  const test3 = ['ddd3', 'ggg3'];


  

  return (
    <StyledFilterOptions>
      <FilterAccordion
        title="Ціна"
        items={test1}
        setSelectedFilters={setSelectedFilters}
        selectedFilters={selectedFilters}
      />
      <FilterAccordion
        title="Тип"
        items={types}
        setSelectedFilters={setSelectedFilters}
        selectedFilters={selectedFilters}
      />
      <FilterAccordion
        title="Виробник"
        items={manufacturers}
        setSelectedFilters={setSelectedFilters}
        selectedFilters={selectedFilters}
      />
      <FilterAccordion
        title="Камера"
        items={cameras}
        setSelectedFilters={setSelectedFilters}
        selectedFilters={selectedFilters}
      />
      <FilterAccordion
        title="Особливості"
        items={test2}
        setSelectedFilters={setSelectedFilters}
        selectedFilters={selectedFilters}
      />
      <FilterAccordion
        title="Комплектація"
        items={test3}
        setSelectedFilters={setSelectedFilters}
        selectedFilters={selectedFilters}
      />
    </StyledFilterOptions>
  );
};

export default FilterOptions;
