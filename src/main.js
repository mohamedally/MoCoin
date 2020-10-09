const { BlockChain, Transaction } = require("./blockChain")
const EC = require("elliptic").ec
const ec = new EC("secp256k1")

const myKey = ec.keyFromPrivate(
  "3eebb4c363e8099bc559eddf869da3bb73179b1f97d93d11e7c34ee1fb0dad1b"
)

const myWalletAddress = myKey.getPublic("hex")

let moCoin = new BlockChain()

const tx1 = new Transaction(myWalletAddress, "public key goes here", 10)
tx1.signTransaction(myKey)
moCoin.addTransaction(tx1)

console.log("\n Starting the miner")
moCoin.minePendingTransactions(myWalletAddress)

console.log("Balance of mo is ", moCoin.getBalanceOfAddress(myWalletAddress))

console.log("\n Starting the miner")
moCoin.minePendingTransactions(myWalletAddress)

console.log("Balance of mo is ", moCoin.getBalanceOfAddress(myWalletAddress))

console.log(moCoin.isChainValid())
