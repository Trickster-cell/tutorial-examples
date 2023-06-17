const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Temp Contract", function () {
  // it("should set Chainlink values", async function () {
  //   const [owner] = await ethers.getSigners();

  //   const verifierContract = "Temp";
  //   const verifierName = "ERC20zkAirdrop";
  //   const verifierSymbol = "zkERC20";

  //   const spongePoseidonLib = "0x12d8C87A61dAa6DD31d8196187cFa37d1C647153";
  //   const poseidon6Lib = "0xb588b8f07012Dc958aa90EFc7d3CF943057F17d7";

  //   console.log("Signers object", owner.address);
  //   const ERC20Verifier = await ethers.getContractFactory(verifierContract, {
  //     libraries: {
  //       SpongePoseidon: spongePoseidonLib,
  //       PoseidonUnit6L: poseidon6Lib,
  //     },
  //   });

  //   const erc20Verifier = await ERC20Verifier.deploy(
  //     verifierName,
  //     verifierSymbol
  //   );

  //   await erc20Verifier.deployed();
  //   const oracle = await erc20Verifier.getOracle();
  //   await oracle.toString();

  //   expect(oracle).to.equal("0x40193c8518BB267228Fc409a613bDbD8eC5a97b3");
  // }).timeout(60000);

  it("should call an API", async function () {
    const [owner] = await ethers.getSigners();

    // const verifierContract = "Temp";
    // const verifierName = "ERCzkAirDrop";
    // const verifierSymbol = "zkERC20";

    // const spongePoseidonLib = "0x12d8C87A61dAa6DD31d8196187cFa37d1C647153";
    // const poseidon6Lib = "0xb588b8f07012Dc958aa90EFc7d3CF943057F17d7";

    console.log("Signers object", owner.address);

    // const ERC20Verifier = await ethers.getContractFactory(verifierContract, {
    //   libraries: {
    //     SpongePoseidon: spongePoseidonLib,
    //     PoseidonUnit6L: poseidon6Lib,
    //   },
    // });

    // const erc20Verifier = await ERC20Verifier.deploy(
    //   verifierName,
    //   verifierSymbol
    // );

    // await erc20Verifier.deployed();

    // const schemaBigInt = "74977327600848231385663280181476307657";

    // const schemaClaimPathKey =
    //   "20376033832371109177683048456014525905119173674985843915445634726167450989630";

    // const requestId = 1;

    // const query = {
    //   schema: schemaBigInt,
    //   claimPathKey: schemaClaimPathKey,
    //   operator: Operators.LT, // operator
    //   value: [20040101, ...new Array(63).fill(0).map((i) => 0)], // for operators 1-3 only the first value matters
    // };

    const ERC20VerifierAddress = "0x23304E0a94bf82b639b470079c56df78A79a5159";

    let erc20Verifier = await ethers.getContractAt(
      "TempErcVerif",
      ERC20VerifierAddress
    );

    // const validatorAddress = "0xF2D4Eeb4d455fb673104902282Ce68B9ce4Ac450";

    // await erc20Verifier.setZKPRequest(
    //   requestId,
    //   validatorAddress,
    //   query.schema,
    //   query.claimPathKey,
    //   query.operator,
    //   query.value
    // );

    const val = await erc20Verifier.ans();

    expect(val).to.equal(100);



  });
});
