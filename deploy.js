const HDwalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDwalletProvider('region range hold discover relief that consider thunder priority explain receive cactus',
    'https://rinkeby.infura.io/v3/7fae2aed999247a8935ebff226d3e03b'
);
const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log(accounts);
    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({
            data: bytecode,
            arguments: ['Hi there!']
        })
        .send({
            from: accounts[0],
            gas: '1000000'
        });
    console.log(result.options.address);
    provider.engine.stop();
}
deploy();