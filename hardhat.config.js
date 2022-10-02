require("@nomicfoundation/hardhat-toolbox");

const ALCHEMY_API_KEY = "pYBXZgp7XEsNF0PYoE-F4giWojft7h2F";
const GOERLI_PRIVATE_KEY = "b2301c675fac36e9dfd994879b48a1ec4cdf6481f4230f9b43eec0b1f41a867d";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY]
    }
  }
};
