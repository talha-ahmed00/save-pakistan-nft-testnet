const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });

async function main() {
  const metadataURL = "ipfs://QmQyiq7dZq73yWN5jgP9xuc1nuSXZtYEgJBh8NebgTeg2j/";
 
  const SPnftContract = await ethers.getContractFactory("SavePakistan");

  const deployedSPnftContract = await SPnftContract.deploy(metadataURL);

  await deployedSPnftContract.deployed();

  console.log("SavePakistan contract Address:", deployedSPnftContract.address);
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });