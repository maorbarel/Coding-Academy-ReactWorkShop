import React, { Component } from 'react';
import UserService from '../services/UserService';
import BitcoinService from '../services/BitcoinService';

export default class HomePage extends Component {
    state = {
        user: {},
        rate: null
    }
    componentDidMount() {
        UserService.getUser().then(res => {
            this.setState({ user: res })
        })
        BitcoinService.getRate().then(res => {
            this.setState({ rate: res })
        })
    }

    render() {
        return (
            <section className="HomePage">
                <div className="HomePage-container">
                    <div className="HomePage-img">
                        <img src="https://www.goldate.co.il/images/male.png" alt="" />
                    </div>
                    <div className="HomePage-txt">
                        <h1>Hello {this.state.user.name}</h1>
                        <h6>Coins: {this.state.user.coins}</h6>
                        <h6>Rate: <span className="rate">{this.state.rate}</span> </h6>
                    </div>
                </div>
            </section>
        );
    }
}

