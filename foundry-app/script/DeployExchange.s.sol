// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import "forge-std/Script.sol";
import {Exchange} from "../src/Exchange.sol";

contract DeployExchange is Script {
    function run() external {
        // Set the token address used by Exchange constructor
        address token = 0x54D51BCE6d5afbDA565Ae9a15fBB5d0a52ED5E78;

        vm.startBroadcast();
        Exchange exchange = new Exchange(token);
        vm.stopBroadcast();

        console2.log("Exchange deployed at", address(exchange));
    }
}