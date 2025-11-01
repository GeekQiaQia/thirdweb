// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "forge-std/Script.sol";
import {LW3Punks} from "../src/LW3Punks.sol";

contract DeployLW3Punks is Script {
    function run() external {
        string memory baseURI = "https://ipfs.io/ipfs/bimi4xx62lmc3tu53e/";

        vm.startBroadcast();
        LW3Punks lw3 = new LW3Punks(baseURI);
        vm.stopBroadcast();

        // prevent warnings about unused variable
        lw3;
    }
}