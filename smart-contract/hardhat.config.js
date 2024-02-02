require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
};



const URL =
  "https://eth-sepolia.g.alchemy.com/v2/teS0W8W3d-kbFi9yX5bbRbXdjOMnEXXE";
const KEY = "9533782f0e391620dfb80bae7007204543096ef332c05d46528a6fb79fd7a536";
module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: URL,
      accounts: [`0x${KEY}`],
    },
  },
};
