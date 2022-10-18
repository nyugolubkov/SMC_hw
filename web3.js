const Web3 = require('web3')
var web3 = new Web3(new Web3.providers.HttpProvider("{https://eth-goerli.alchemyapi.io/v2/pYBXZgp7XEsNF0PYoE-F4giWojft7h2F}"));
const address = "";
const ABI = "";
web3.eth.getBalance().then(console.log) // проверяем
const myContract = new web3.eth.Contract(ABI, address)
myContract.methods.getCount().call().then(console.log)