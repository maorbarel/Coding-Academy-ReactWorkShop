import React, { Component } from 'react';
import ContactService from '../services/ContactService'
import ContactList from '../components/ContactList';
import ContactFilter from '../components/ContactFilter'
import bitcoingLogo from '../assets/images/bitcoinlogo.png';

export default class ContactPage extends Component {
    state = {
        contacts: [],
        filter: { term: '' }
    }
    async componentDidMount() {
        let contacts = await ContactService.getContacts(this.state.filter)
        this.setState({ contacts: contacts })
    }

    onFilter = async (event) => {
        await this.setState({ filter: { term: event.target.value } })
        const contacts = await ContactService.getContacts(this.state.filter)
        this.setState({ contacts: contacts })
    }
    render() {
        return (
            <section className="ContactPage">
                <img className="ContactPage-img" src={bitcoingLogo} alt="" />
                <ContactFilter filter={(event) => this.onFilter(event)} />
                <ContactList contacts={this.state.contacts} />
            </section>
        );
    }
}

