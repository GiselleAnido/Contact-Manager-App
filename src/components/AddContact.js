import React from "react";
import "../components/Style/AddContact.css"

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === ""){
      alert("All the fields are mandatory");
    return}
    this.props.addContactHandler(this.state)

    this.setState({name:"", email:""})
  };

  render() {
    return (
      <div className="addContactContainer">
        <h2>Add Contact</h2>

        <form onSubmit={this.add}>
          <div className="nameField">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="emailField">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
         <div className="buttonContainer"> <button type="submit" className="addButton">Add</button></div>
        </form>
        
      </div>
    );
  }
}

export default AddContact;
