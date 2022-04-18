require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/RsLmQBls6srp3l2L1nz_lGMgpNrpIKcz',
      accounts: [ 'c0cfba6c43fde11b7c625ff874e4078f4ece42de39ac6d2abad542d9cc013ada' ]
    }
  }
}
