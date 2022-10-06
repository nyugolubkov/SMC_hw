require("@nomicfoundation/hardhat-toolbox");

require("dotenv").config();

const privateKey = process.env.GOERLI_PRIVATE_KEY;
const endpoint = process.env.URL;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: endpoint,
      accounts: [privateKey]
    }
  }
};
