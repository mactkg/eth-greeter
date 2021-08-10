const GreeterContract = artifacts.require("Greeter");

module.exports = deployer => {
    deployer.deploy(GreeterContract);
}