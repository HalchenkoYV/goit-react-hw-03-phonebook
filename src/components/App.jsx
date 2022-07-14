import './App.css';
import React, { Component } from 'react';
import Container from './Container/Cotainer';
import Section from './Section/Section';
import AddContactBox from './AddContactBox/AddContact';
import Contacts from './Contacts/Contacts';
import shortid from 'shortid';

class App extends Component  {
  state = {
    contacts: [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }],
    filter:''
  }
  
  addContact = ({name , number}) => {
    const newContact = {
      id: shortid.generate(),
      name,
      number,
      
    };
 
    if (!this.state.contacts.find(contact => contact.name === name)) {
      this.setState({
        contacts: [...this.state.contacts, newContact]
      })
    }
    else {
        alert(`${name} is alredy in your phonebook`)
    } 
    
  }

  handleChangeFilter = (e) => {
    this.setState({
      filter : e.target.value
    })

  }

  deleteContact = id => {
    this.setState(state =>({
      contacts: state.contacts.filter(contact => contact.id !== id),
    }));
  }


  render() {
    const { contacts,filter,  } = this.state;
    const optimizedFilter = filter.toLocaleLowerCase();


    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(optimizedFilter),
    );


    return (
      <Container>
        <Section title='Phonebook'>
          <AddContactBox addContact={this.addContact}/>
        </Section>

        <Section title='Contacts'>
          <Contacts listContacts={visibleContacts} toFilter={this.handleChangeFilter} currentFilter={filter} toDelete={this.deleteContact}/>
        </Section>

      </Container>
   )
  }
};

export default App;