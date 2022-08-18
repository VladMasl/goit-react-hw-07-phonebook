import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { getContacts } from 'redux/contacts/contactOperations';
import { getItems } from '../redux/contacts/contactsSelrctor';
import s from '../components/App.module.css';

function App() {
  const contacts = useSelector(getItems);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <div className={s.decor}>
      <h1>Phonebook📱</h1>
      <ContactForm />
      {contacts.length === 0 ? (
        <h2>
          You have no records☝
          <br />
          Enter the number and name☝
        </h2>
      ) : (
        <>
          <h2>Contacts: {contacts.length}</h2>
          <Filter />
          <ContactList />
        </>
      )}
    </div>
  );
}
export default App;
