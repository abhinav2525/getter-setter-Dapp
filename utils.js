const Web3 = require('web3')

const web3 = new Web3 ('http://localhost:8545')

//console.log(web3)

const privateKey = '0x9a67f049221186cc20b539458e690af1d27893ffff67e65924419dd30eec481b'
const myAccount = web3.eth.accounts.wallet.add(privateKey)

//console.log(myAccount)

module.exports = {
    web3: web3,
    myAccount: myAccount
}