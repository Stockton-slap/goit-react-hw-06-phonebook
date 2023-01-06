import {
  Form,
  ContactInfoLabel,
  ContactInfoValue,
  AddBtn,
} from './ContactForm.styled';

import Notiflix from 'notiflix';

import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import { getContacts } from 'redux/selectors';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const a = contacts.find(contact => contact.name === name);

    console.log(a);

    if (!a) {
      dispatch(addContact(name, number));

      setName('');
      setNumber('');
    } else {
      Notiflix.Notify.warning('There is ');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <ContactInfoLabel>
        Name
        <br />
        <ContactInfoValue
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </ContactInfoLabel>
      <br />
      <ContactInfoLabel>
        Number
        <br />
        <ContactInfoValue
          type="text"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
      </ContactInfoLabel>
      <br />
      <AddBtn type="submit">Add contact</AddBtn>
    </Form>
  );
};

export default ContactForm;
