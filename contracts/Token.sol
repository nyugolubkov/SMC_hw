//SPDX-License-Identifier: UNLICENSED

// Solidity files have to start with this pragma.
// It will be used by the Solidity compiler to validate its version.
pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {

    constructor(string memory tokenName, string memory tokenSymbol) ERC20(tokenName, tokenSymbol) {}

    event ValueChanged(uint oldValue, uint256 newValue);

    uint256 private count = 0;

    function increment() public {
        count += 1;
        emit ValueChanged(count - 1, count);
    }

    function getCount() public view returns (uint256) {
        return count;
    }
}