import { Container, List } from './ContactList.styled';

import ContactItem from 'components/ContactItem';

import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { getFilter } from 'redux/selectors';
import { useMemo } from 'react';

const ContactList = () => {
  const contacts = useSelector(getContacts);

  const filter = useSelector(getFilter);

  const filteredContacts = useMemo(
    () =>
      contacts.filter(({ name }) => {
        const normalizedFilter = name
          .toLowerCase()
          .includes(filter.trim().toLowerCase());

        return normalizedFilter;
      }),
    [contacts, filter]
  );

  return (
    <Container>
      <List>
        {filteredContacts.map(contact => (
          <ContactItem contact={contact} key={contact.id} />
        ))}
      </List>
    </Container>
  );
};

export default ContactList;
