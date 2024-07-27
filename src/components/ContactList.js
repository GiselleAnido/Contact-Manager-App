import React from "react";
import CardContact from "./CardContact";
import "../components/Style/ContactList.css"

const ContactList = (props) => {
  console.log(props);

 const deleteContactHandler= (id)=>{
    props.getContactId(id)
  }

  const renderContactList = props.contacts.map((contact) => {
    return <CardContact className="cardContact" key={contact.id} contact={contact} clickHandler={deleteContactHandler}/>;
  });
  return <div className="contactListContainer">
    <h2>Contact List</h2>
    {renderContactList}</div>;
};

export default ContactList;
