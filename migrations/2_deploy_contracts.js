const MultiSignatureWallet = artifacts.require("MultiSignatureWallet");
const SimpleStorage = artifacts.require("SimpleStorage");

module.exports = function (deployer, network, accounts) {
  
  deployer.deploy(SimpleStorage);
  const owners = [accounts[0], accounts[1]];
  deployer.deploy(MultiSignatureWallet, owners, 2);
};
