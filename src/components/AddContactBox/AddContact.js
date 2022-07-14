import './AddContact.module.css';
import React, { Component } from 'react';



class AddContactBox extends Component  {
  state = {
      name: '',
      number:''
    }
    
    handleChange = e => {
        const { name, value } = e.target
        console.log(e.target.name)
     this.setState({[name]:value});
    };


 handlSubmit = e => {
        e.preventDefault();
       
        this.props.addContact(this.state);

        this.setState({name: '',number:''});
    };

    render() {
        const { name, number } = this.state;

        return (
            <form onSubmit={this.handlSubmit} >
                <label>Name
                    <input
                        type="text"
                        name="name"
                        value={name}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        onChange={this.handleChange}/>
                </label>
                <label>Number
                    <input
                        type="tel"
                        name="number"
                        value={number}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        onChange={this.handleChange}/>
                </label>
                <button type='submit' >Add contact</button>
            </form>
   )
  }
};

export default AddContactBox;