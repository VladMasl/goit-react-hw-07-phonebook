import { useSelector } from 'react-redux';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import s from '../components/App.module.css';

function App() {
  const contacts = useSelector(state => state.contacts.item);

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
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </>
      )}
    </div>
  );
}
export default App;
