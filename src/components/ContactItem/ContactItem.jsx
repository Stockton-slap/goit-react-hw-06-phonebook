const ContactItem = ({ contact }) => {
  const { name, number } = contact;

  return (
    <li>
      {name} {number}
    </li>
  );
};

export default ContactItem;
