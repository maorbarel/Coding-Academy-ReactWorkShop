import React, { Component } from 'react';
import BitcoinService from '../services/BitcoinService';
import Chart from '../components/Chart'
import { throws } from 'assert';

export default class StatisticPage extends Component {
    state = {
        marketPrices: {
            title: 'Market Prices',
            stats: []
        },
        confirmedTransactions: {
            title: 'Confirmed Transactions',
            stats: []
        }
    }
    componentDidMount() {
        BitcoinService.getMarketPrice().then(marketPrice => {
            const marketPrices = marketPrice.map(price => price.y)
            this.setState({
                marketPrices: {
                    title: 'Market Prices',
                    stats: marketPrices
                },
            })
        })
        BitcoinService.getConfirmedTransactions().then(confirmedTransaction => {
            const confirmedTransactions = confirmedTransaction.map(transaction => transaction.y)
            this.setState({
                confirmedTransactions: {
                    title: 'Confirmed Transactions',
                    stats: confirmedTransactions
                }
            })
        })
    }
    render() {
        return (
            <section className="StatisticPage">
                <div className="StatisticPage-container">
                    <h1>im StatisticPage</h1>
                    <Chart statistics={this.state.marketPrices} />
                    <Chart statistics={this.state.confirmedTransactions} />
                </div>
            </section>
        );
    }
}

