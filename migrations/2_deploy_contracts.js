
var CricketOracle = artifacts.require("CricketOracle");

module.exports = function(deployer) {
	deployer.deploy(CricketOracle);
};