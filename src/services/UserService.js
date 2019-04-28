import Axios from 'axios'
const axios = Axios.create({
    withCredentials: true
})

export default {
    getUser,
    getUsers
}
var user = {
    name: "Ochoa Hyde",
    coins: 100,
    moves: []
}

async function getUser() {
    const currUser = await user
    return currUser
}

async function getUsers() {
    const URL_BASE = 'https://my-project-3071b.firebaseio.com/'
    const users = await axios.get(`${URL_BASE}`)
    return users.data;
}
