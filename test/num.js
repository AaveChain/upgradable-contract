const { expect } = require('chai');
 
let NUM1;
let NUM2;
 
describe('num2', function () {
  beforeEach(async function () {
    NUM2 = await ethers.getContractFactory("NUM2");
    num2= await NUM2.deploy();
    await num2.deployed();
  });
 
  // Test case
  it('retrieve returns a value previously stored', async function () {
    await NUM2.store(11);
    expect((await NUM2.retrieve()).toString()).to.equal(11);
  });
});


// const { expect } = require("chai");

// describe("NUM2 contract", function () {
//   it("Deployment should assign num to the owner", async function () {
//     const [owner] = await ethers.getSigners();

//     const NUM2 = await ethers.getContractFactory("NUM2");

//     const hardhatNUM2 = await num.deploy();

//     const num = await hardhatNUM2.get(owner.address);
//     expect(await hardhatNUM2.num()).to.equal(ownerBalance);
//   });
// });