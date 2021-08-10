const GreeterContract = artifacts.require("Greeter");
let greeter;
beforeEach(async () => {
    greeter = await GreeterContract.deployed();
});

contract("Greeter", (accounts) => {
    it("has been deployed successfully", async () => {
        assert(greeter, "contract was not deployed");
    })

    describe("greet()", () => {
        it("returns 'Hello, World!'", async () => {
            const expected = "Hello, World!";
            const actual = await greeter.greet();
            assert.equal(actual, expected, "greeted with 'Hello, World!'");
        });
    });

    describe('owner()', () => {
        it('returns the address of the owner', async () => {
            const owner = await greeter.owner();
            assert(owner, "the current owner")
        });

        it('matches the address that originally deployed the contract', async() => {
            const owner = await greeter.owner();
            const expected = accounts[0];
            assert.equal(owner, expected, "matches address used to deploy contract");
        });
    });
});

contract("Greeter: update greeting", () => {
    describe('setGreeting(string)', () => {
        it('sets greeting to passed in string', async () => {
            const expected = "Hi there!";
            await greeter.setGreeting(expected);

            const actual = await greeter.greet();
            assert.equal(actual, expected, "greeting was not updated");
        
        });
    });
})