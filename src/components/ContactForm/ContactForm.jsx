import {
  FormBox,
  ContactInfoLabel,
  ContactInfoValue,
  AddBtn,
} from './ContactForm.styled';

const ContactForm = () => {
  return (
    <FormBox>
      <ContactInfoLabel>
        Name
        <br />
        <ContactInfoValue />
      </ContactInfoLabel>
      <br />
      <ContactInfoLabel>
        Number
        <br />
        <ContactInfoValue />
      </ContactInfoLabel>
      <br />
      <AddBtn>Add contact</AddBtn>
    </FormBox>
  );
};

export default ContactForm;
