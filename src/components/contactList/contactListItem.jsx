import PropTypes from 'prop-types';

const ContactListItem = ({ contact, onDelete }) => (
  <li>
    {contact.name}: {contact.number}
    <button onClick={() => onDelete(contact.id)}>Delete</button>
  </li>
);

ContactListItem.propTypes = {
  contact: PropTypes.objectOf(PropTypes.string).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactListItem;
