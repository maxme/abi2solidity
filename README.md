# abi2solidity

Convert an ABI to a Solidity interface

## Install

```shell
$ npm install --save abi2solidity
# OR
$ yarn add abi2solidity
```

If you want to use the cli, you can install it globally:

```shell
$ npm install --global abi2solidity
# OR
$ yarn global add abi2solidity
```

## CLI Usage

```shell
$ abi2solidity -h
Usage: abi2solidity [options]

Options:
  -V, --version                  output the version number
  -i, --input <file>             JSON ABI Input file (default: "")
  -o, --output <file>            Solidity output file (default: "")
  -e, --header <string>          Set the header (default: "")
  -n, --interface-name <string>  Set the interface name (default: "GeneratedInterface")
  -h, --help                     display help for command

# Examples
$ abi2solidity -i abi.json -o export.sol
$ abi2solidity --header "" --interface-name McNulty < test/abi/SmolTest.abi
$ abi2solidity --header "" --interface-name McNulty < test/abi/SmolTest.abi
$ abi2solidity --header "`printf "// SPDX-License-Identifier: MIT\\npragma solidity >=0.1.0 <0.9.0;\n "`" --interface-name McNulty < test/abi/SmolTest.abi
```

## Code Usage

```js
import ABI2solidity from "abi2solidity";

const ABI = `
[
  {
    "constant": false,
    "inputs": [],
    "name": "f",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }
]
`;

const solidity = ABI2solidity(ABI);
console.log(solidity);
// Will print out:
// interface GeneratedInterface {
//   function f (  ) external returns ( uint256 );
// }
```

Alternative usage with files:

```js
import { ABI2solidityFiles } from "abi2solidity";

ABI2solidityFiles(inputFileABI, outputFileSolidity);
```

# Development

Run tests

```shell
$ yarn test
```

# License

MIT
