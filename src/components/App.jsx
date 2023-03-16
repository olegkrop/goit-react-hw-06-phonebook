// import { useState, useEffect } from 'react';
// import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
// import style from './App.module.css';

const containerStyles = {
  display: 'block',
  margin: '0 auto',
  width: '400px',
};

const App = () => {
  const { items: contacts } = useSelector(store => {
    return store.contacts;
  });

  const contactsLength = contacts.length;

  return (
    <div style={containerStyles}>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      {contactsLength > 0 ? (
        <>
          <Filter />
          <ContactList />
        </>
      ) : (
        'no contacts'
      )}
    </div>
  );
};

export default App;

// const App = () => {
//   const [contacts, setContacts] = useState([
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ]);

//   const [filter, setFilter] = useState('');

//   useEffect(() => {
//     const contacts = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(contacts);

//     if (parsedContacts) {
//       setContacts(parsedContacts);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('contacts', JSON.stringify(contacts));
//   }, [contacts]);

//   const handleAddContact = data => {
//     const existingContactsNames = contacts.map(({ name }) =>
//       name.toLowerCase()
//     );
//     if (existingContactsNames.includes(data.name.toLowerCase())) {
//       alert(`${data.name} is already in contacts`);
//       return;
//     }

//     const contact = {
//       name: data.name,
//       number: data.number,
//       id: nanoid(),
//     };

//     setContacts(contacts => [contact, ...contacts]);
//   };

//   const changeFilter = e => {
//     setFilter(e.currentTarget.value);
//   };

//   const getVisibleContacts = () => {
//     const normalizedFilter = filter.toLowerCase();

//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   };

//   const deleteContact = deleteId => {
//     setContacts(contacts =>
//       contacts.filter(contact => {
//         return contact.id !== deleteId;
//       })
//     );
//   };

//   const visibleContacts = getVisibleContacts();
//   const containerStyles = {
//     display: 'block',
//     margin: '0 auto',
//     width: '400px',
//   };

//   const contactsLength = contacts.length;

//   return (
//     <div style={containerStyles}>
//       <ContactForm onSubmit={handleAddContact} />

//       {contactsLength > 0 ? (
//         <>
//           <Filter value={filter} onChange={changeFilter} />
//           <ContactList
//             contacts={visibleContacts}
//             deleteContact={deleteContact}
//           />
//         </>
//       ) : (
//         <>
//           <Filter value={filter} onChange={changeFilter} />
//           <p className={style.label}>No contacts</p>
//         </>
//       )}
//     </div>
//   );
// };

// export default App;
