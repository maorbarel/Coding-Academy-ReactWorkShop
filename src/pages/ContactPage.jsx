import React, { Component } from 'react';
import ContactService from '../services/ContactService'
import ContactList from '../components/ContactList';
import ContactFilter from '../components/ContactFilter'

export default class ContactPage extends Component {
    state = {
        contacts: [],
        filter: {
            term: ''
        }
    }
    // mounted:
    componentDidMount() {
        ContactService.getContacts(this.state.filter).then(res => {
            this.setState({ contacts: res })
        })
    }
    // methods:
    onFilter = (event) => {
        this.setState({
            filter: {
                term: event.target.value
            }
        })
        ContactService.getContacts(this.state.filter).then(res => {
            this.setState({ contacts: res })
        })
    }
    render() {
        return (
            <section className="ContactPage">
                <ContactFilter filter={(event) => this.onFilter(event)} />
                <ContactList contacts={this.state.contacts} />
            </section>
        );
    }
}

