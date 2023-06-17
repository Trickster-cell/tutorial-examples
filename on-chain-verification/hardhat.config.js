require('@nomiclabs/hardhat-waffle');
require('dotenv').config();
require('@openzeppelin/hardhat-upgrades');
// require('./contracts/lib/GenesisUtils.sol');
// require('./contracts/lib/Poseidon.sol');
// require('D:/Downloads/Insynk_Studios/tutorial-examples/on-chain-verification/contracts/lib');

module.exports = {
  solidity: "0.8.17",
  networks: {
    mumbai: {
      chainId: 80001,
      url: "https://polygon-mumbai.g.alchemy.com/v2/w4AIt_PAy2IQs__FglG7kZ_V4wP3mM34",
      accounts: ["0x3ced1c4d8742ab794bef083c981c0a357766f29beb5ee9b32b61b3f85c33add4"],
    }
  }
};
