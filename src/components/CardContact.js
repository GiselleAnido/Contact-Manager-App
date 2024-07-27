import React from "react";
import  "../components/Style/CardContact.css"
import user from "../images/user.jpg"

const CardContact= (props)=> {
    const {id,name,email}=props.contact;
return(
    <div className="item">
        <img src={user} alt="user" />
    <div className="content">
        <div>{name}</div>
        <div>{email}</div>
    </div>
    <button className="deleteButton" onClick={()=>props.clickHandler(id)}>X</button>
</div>
)
}

export default CardContact;