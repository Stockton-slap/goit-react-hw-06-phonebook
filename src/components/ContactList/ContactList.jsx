import { Container, List } from './ContactList.styled';

import ContactItem from 'components/ContactItem';

import { useSelector } from 'react-redux';

import { getContacts } from 'redux/selectors';

const ContactList = () => {
  const contacts = useSelector(getContacts);

  return (
    <Container>
      <List>
        {contacts.map(contact => (
          <ContactItem contact={contact} key={contact.id} />
        ))}
      </List>
    </Container>
  );
};

export default ContactList;
