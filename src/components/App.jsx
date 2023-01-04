import ContactForm from './ContactForm';
import Filter from './Filter';

const baseTitleStyles = {
  textAlign: 'center',
  margin: '0',
  padding: '30px 0',
};

export const App = () => {
  return (
    <div>
      <h1 style={baseTitleStyles}>Phonebook</h1>
      <ContactForm />

      <h2 style={baseTitleStyles}>Contacts</h2>
      <Filter />
    </div>
  );
};
