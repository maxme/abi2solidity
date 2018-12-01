#!/usr/bin/env node

import commander from 'commander';
import { version } from '../package.json';
import { ABI2SolidityFiles } from './abi2solidity';

function main() {
  commander
    .version(version)
    .option('-i, --input <file>', 'JSON ABI Input file', '')
    .option('-o, --output <file>', 'Solidity output file', '')
    .parse(process.argv);

  if (commander.input === '') {
    console.log('Using stdin to READ ABI');
    commander.input = process.stdin.fd;
  }

  if (commander.output === '') {
    console.log('Using stdout to write Solidity interface');
  }

  ABI2SolidityFiles(commander.input, commander.output);
}

main();
