
import { useState } from 'react';
import './App.css'

import ContactList from './Components/ContactList/ContactList';
import SearchBox from './Components/SearchBox/SearchBox';
import ContactForm from './Components/ContactForm/ContactForm';

function App() {
  const list = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const [contacts, setContacts] = useState(list);
  const [filter, setFilter] = useState('');
  
  const addContact = (newContact) => {
    setContacts((prevCont) => {
    return [...prevCont, newContact]
  })
}


  const visibleContacts = contacts.filter((cont) =>  cont.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAdd={addContact} />
        <SearchBox value={filter} onFilter={setFilter} />
        <ContactList list={visibleContacts} />
        
     </div>
    </>
  )
}

export default App
