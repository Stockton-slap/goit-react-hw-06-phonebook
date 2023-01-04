import { Wrapper, FilterLabel, FilterValue } from './Filter.styled';
import ContactList from 'components/ContactList';

const Filter = () => {
  return (
    <>
      <Wrapper>
        <FilterLabel>
          Find contacts by name
          <br />
          <FilterValue />
        </FilterLabel>
      </Wrapper>
      <ContactList />
    </>
  );
};

export default Filter;
