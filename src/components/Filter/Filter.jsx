import { FilterWrapper, FilterLabel, FilterValue } from './Filter.styled';
import ContactList from 'components/ContactList';

const Filter = () => {
  return (
    <FilterWrapper>
      <FilterLabel>
        Find contacts by name
        <br />
        <FilterValue />
      </FilterLabel>
      <ContactList />
    </FilterWrapper>
  );
};

export default Filter;
