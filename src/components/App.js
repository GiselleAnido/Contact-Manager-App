import React, { useState, useEffect } from "react";
import uuid from "uuid4"
import "./Style/App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";

  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    setContacts([...contacts,{id: uuid(), ...contact} ]);

  };
const removeContactHandler = (id)=> {
  const newContactList = contacts.filter((contact)=>{
    return contact.id !==id;
  })

  setContacts(newContactList)
}
  useEffect (()=>{
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY,(contacts)))
 if(retrieveContacts)setContacts(retrieveContacts)
  }, [])

  useEffect (()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts])


  return (
    <div>
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler} />
    </div>
  );
}

export default App;
