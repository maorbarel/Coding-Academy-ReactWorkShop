import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ContactPreview from './ContactPreview'


export default class ContactList extends Component {
    render() {
        const contacts = this.props.contacts.map(contact =>
            (
                <li key={contact._id}>
                    <ContactPreview contact={contact} />
                </li>
            )
        )
        return (
            <section className="ContactList">
                <ul>
                    {contacts}
                </ul>
            </section>
        );
    }
}








