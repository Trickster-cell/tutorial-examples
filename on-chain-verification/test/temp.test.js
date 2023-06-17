const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Temp Contract", function () {

  it("should call an API", async function () {
    const [owner] = await ethers.getSigners();



    console.log("Signers object", owner.address);

  
    const ERC20VerifierAddress = "0xfd5B6545c824173B929611F8ed84b90dc5B2E60c";

    let erc20Verifier = await ethers.getContractAt(
      "TempErcVerif",
      ERC20VerifierAddress
    );

    const val = await erc20Verifier.ans();

    expect(val).to.equal(100);



  });
});
