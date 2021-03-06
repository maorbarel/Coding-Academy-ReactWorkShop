import React, { Component } from 'react';
import ContactService from '../services/ContactService'

export default class ContactDetailsPage extends Component {
    state = {
        currUser: {}
    }
    componentDidMount() {
        console.log('in dp')
        const { id } = this.props.match.params
        ContactService.getContactById(id).then(res => {
            this.setState({ currUser: res })
        })
    }
    render() {

        return (
            <section className="ContactDetailsPage">
                <div className="ContactDetailsPage-container">
                    <div className="ContactDetailsPage-img">
                        <img src="https://www.goldate.co.il/images/male.png" alt="" />
                    </div>
                    <div className="ContactDetailsPage-txt">
                        <h1>{this.state.currUser.name}</h1>
                        <h6>{this.state.currUser.phone}</h6>
                    </div>
                </div>
            </section>
        )
    }
}

