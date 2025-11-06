// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {Script} from "forge-std/Script.sol";
import {RandomWinnerGame} from "../src/RandomWinnerGame.sol";

contract DeployRandomWinnerGame is Script {
    function run() external {
        vm.startBroadcast();
        RandomWinnerGame game = new RandomWinnerGame();
        vm.stopBroadcast();

        // prevent unused variable warning
        game;
    }
}