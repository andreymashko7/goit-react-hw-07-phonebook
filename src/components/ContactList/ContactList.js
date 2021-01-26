import './ContactList.css';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from '../../redux/phonebook-selectors';
import * as contactsOperations from '../../redux/phonebook-operations';
import { useEffect } from 'react';

export default function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const onDeleteContact = id => dispatch(contactsOperations.deleteContact(id));

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className="Contacts__item">
          <p className="Contacts__text">
            {name} : {number}
          </p>

          <button type="button" onClick={() => onDeleteContact(id)}>
            delete
          </button>
        </li>
      ))}
    </ul>
  );
}
