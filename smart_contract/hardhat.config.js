require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/vOmEC9iwkNuK_M01UYf_v_e904JnUbua',
      accounts: ['acb0aed1a582a20c3a4c3f6612c51dc73e577a1447f1b5e010ddf8db3e5ccba0'],
    },
  },
};