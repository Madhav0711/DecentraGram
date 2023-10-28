const Decentragram = artifacts.require("dgram");

module.exports = function(deployer) {
  deployer.deploy(Decentragram);
};