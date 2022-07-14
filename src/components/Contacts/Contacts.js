import './Contacts.module..css';
import React from 'react';

function Contacts ({listContacts, toFilter, currentFilter, toDelete}) {
    return (
        <div>
            <label>Find contacts by name
                <input
                    type="text"
                    name="filter"
                    value={currentFilter} 
                    onChange={toFilter}/>
            </label>
            <ul>
                { listContacts.map(contact => {
                    const { name, id , number} = contact;
                    return (<li key={id}>
                        <p>{name}: {number}</p>
                        <button  onClick={() => toDelete(id)}>Delete</button>
                    </li>)
                    })
                }
            </ul>
        </div>
    )
}

export default Contacts;