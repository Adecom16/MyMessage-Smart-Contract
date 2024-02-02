require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
};



const URL =
  "https://eth-sepolia.g.alchemy.com/v2/teS0W8W3d-kbFi9yX5bbRbXdjOMnEXXE";
const KEY = "your-private-key";
module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: URL,
      accounts: [`0x${KEY}`],
    },
  },
};
