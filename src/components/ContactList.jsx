import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom'


import ContactPreview from './ContactPreview'

const ContactList = (props) => props.contacts.map(contact => {
    return (
        <section className="ContactList">
            <ul>
                <li>
                    <Link to={`/contact/${contact._id}`}>
                        <ContactPreview
                            contact={contact}
                            key={contact._id} />
                    </Link>
                </li>
            </ul>
        </section>
    )
});
ContactList.propTypes = {
    contacts: PropTypes.arrayOf(Object).isRequired,
}
export default ContactList