const HDwalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDwalletProvider('region range hold discover relief that consider thunder priority explain receive cactus',
    'https://rinkeby.infura.io/v3/7fae2aed999247a8935ebff226d3e03b'
);
const web3 = new Web3(provider);