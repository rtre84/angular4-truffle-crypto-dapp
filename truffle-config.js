const HDWalletProvider = require("truffle-hdwallet-provider");

// Test Ethereum Network (INFURAnet)
const infuraTestNet = "https://infuranet.infura.io/";
const ropstenTestNet = "https://ropsten.infura.io/";
const infuraAccessToken = process.env.INFURA_ACCESS_TOKEN;
const infuraMnemonic = process.env.INFURA_MNEMONIC;

// Allows us to use ES6 in our migrations and tests.
require('babel-register')

module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*' // Match any network id
    },
    ropsten: {
      provider: new HDWalletProvider(infuraMnemonic, ropstenTestNet + infuraAccessToken),
      network_id: "3",
      gas: 2900000,
      gasPrice: '0x4A817C800'
    }
  }
}
