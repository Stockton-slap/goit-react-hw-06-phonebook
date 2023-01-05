import { Item, DeleteBtn } from './ContactItem.styled';

import { deleteContact } from 'redux/contactsSlice';
import { useDispatch } from 'react-redux';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const { name, number, id } = contact;

  const handleClick = e => {
    dispatch(deleteContact(id));
  };

  return (
    <Item>
      {name}: {number}
      <DeleteBtn type="button" onClick={handleClick}>
        Delete
      </DeleteBtn>
    </Item>
  );
};

export default ContactItem;
