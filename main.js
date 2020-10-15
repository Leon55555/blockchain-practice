const { Blockchain, Transaction } = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('5001c67775e9fde0da4bcac26823930e0e0a0afcc471b2eec6ae531792183c47');
const myWalletAddress = myKey.getPublic('hex');

let AimCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key of someone', 10);
tx1.signTransaction(myKey);
AimCoin.addTransaction(tx1);



console.log('\n Mining started again...');
AimCoin.minePendingTransactions(myWalletAddress);

console.log("\nLeon's balance is, ", AimCoin.getBalanceOfAddress(myWalletAddress));





