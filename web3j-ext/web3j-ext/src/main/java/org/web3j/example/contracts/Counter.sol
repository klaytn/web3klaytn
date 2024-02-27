// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

contract Counter {
    uint256 public number;
    event SetNumber(uint256 number);

    constructor(uint256 initNumber) {
        number = initNumber;
    }

    function setNumber(uint256 newNumber) public {
        number = newNumber;
        emit SetNumber(number);
    }

    function increment() public {
        number++;
        emit SetNumber(number);
    }
}
