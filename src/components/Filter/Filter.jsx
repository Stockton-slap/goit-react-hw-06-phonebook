import { Wrapper, FilterLabel, FilterValue } from './Filter.styled';

import ContactList from 'components/ContactList';

import { useDispatch } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { updateFilter } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const filter = useSelector(getFilter);

  const handleChange = e => {
    const { value } = e.target;

    dispatch(updateFilter(value));
  };

  return (
    <Wrapper>
      <FilterLabel>
        Find contacts by name
        <br />
        <FilterValue type="text" value={filter} onChange={handleChange} />
      </FilterLabel>
      <ContactList />
    </Wrapper>
  );
};

export default Filter;
