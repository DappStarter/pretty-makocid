require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nasty fringe trophy name repeat mad hospital gloom enroll army genre'; 
let testAccounts = [
"0xe06c1d42929f819f140e02b7b4c4f2ed55e8d05151616618b9341acae29bbe81",
"0xb6d69362c2c113b1db2e7aa4d029bca0cfc62666ce26ac49b79cc7b242bde415",
"0x73fa094a81dc4b31fff66344fff7bf39fce90faff180eaf775e1602cdb0322eb",
"0x3026c3eb3842961faf93718252677f0cb0054ad3d55464ee5c50c7874e1d07cb",
"0x33fc52c1641e2c30e6e8ca0d30b059508eb2104c616a2eb64c56049f323fea8e",
"0xd04d2ef85af97b9b357ae42814de3a236b11c2771acd6fd75c532da53d4241ac",
"0xf7a43eb149bfc3aa1c7c0b4ca83654eb7bd9647ca9f7ca25902a66a8c0a03e9d",
"0xebb8f4eb2635a4cf649d7c54a17adcd0eaa6b08138736e4deb953075c59ca988",
"0xc191646398f61f0a45e89e325e9e8df6fe7f3cd7bf9bf66edec3ed87b638498d",
"0x7223b269910b5e2549aed94c7632acf44519876b445cc1c89755c7948e3b334a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
