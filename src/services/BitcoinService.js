import Axios from 'axios';
const axios = Axios.create({
    withCredentials: false // should be true
})

export default {
    getRate,
    getConfirmedTransactions,
    getMarketPrice
}
async function getRate(coins) {
    const rate = await axios.get('https://blockchain.info/tobtc?currency=USD&value=1')
    return rate.data
}
async function getMarketPrice() {
    const marketPrice = await axios.get('https://api.blockchain.info/charts/market-price?format=json&cors=true')
    return marketPrice.data.values
}
async function getConfirmedTransactions() {
    const confirmedTransactions = await axios.get('https://api.blockchain.info/charts/n-transactions?format=json&cors=true')
    return confirmedTransactions.data.values
}
