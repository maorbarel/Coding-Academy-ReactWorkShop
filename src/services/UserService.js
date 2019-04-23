import Axios from 'axios'
const axios = Axios.create({
    withCredentials: true
})

export default {
    getUser,
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

