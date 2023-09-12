const hre = require("hardhat");

async function main() {
  const DiamToken = await hre.ethers.getContractFactory("DiamToken");
  const diamToken = await DiamToken.deploy(100000000, 50);

  await diamToken.deployed();

  console.log("Diam Token deployed: ", diamToken.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
