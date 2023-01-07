require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi swallow food report rival outside pumpkin harvest light army gas'; 
let testAccounts = [
"0x53e3112035ab59809dcc227d23eb97b21959684828e305f4042e87df66483c75",
"0x272d97d79ad119e8137e32f4f9f705dd8d88cc42a38db5ff4743517f91a34acd",
"0xc5623ec18a2bdd9a8ec288552226886d679e4f50dbdc7eed2548a74a8ed7ebba",
"0x19a46f0af66846188b0f1d5a93d8b8b1bac26dc37c57c22da7928c431fb14a07",
"0x052b93974a8d6e10f243554102f0308e746796466e3c1ea24662a0fc598537e7",
"0x7699523cd6b86b86e76139111809cf239b9bd37688f559487d74ef15cdd8b6fe",
"0xbedcdd6835a11570371917acf06cee820a782d47421096f2a960d9d426be3d68",
"0xe98d1bead60a010ea24b0c3069b52dcebab9e59d75f6e255c4125ee97e94a187",
"0x9d99ba9d9d15d01f18bb44f50f2845ad6f53d075969c7022911a412513cf8748",
"0xfa150a5081f1361a21ea97df12283a5097db765e8a70eed4867c852413a56207"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


