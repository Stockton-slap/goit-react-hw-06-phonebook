import {
  FormBox,
  ContactInfoLabel,
  ContactInfoValue,
  AddBtn,
} from './ContactForm.styled';

import { useDispatch } from 'react-redux';

import { addContact, deleteContact } from 'redux/contactsSlice';

const ContactForm = () => {
    const dispatch = useDispatch();
    

    const handleChange = e => {

    }
    
  return (
    <FormBox>
      <ContactInfoLabel>
        Name
        <br />
        <ContactInfoValue value={} onChange={handleChange} />
      </ContactInfoLabel>
      <br />
      <ContactInfoLabel>
        Number
        <br />
        <ContactInfoValue value={} onChange={handleChange} />
      </ContactInfoLabel>
      <br />
      <AddBtn>Add contact</AddBtn>
    </FormBox>
  );
};

export default ContactForm;
