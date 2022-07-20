import commander from 'commander';
import { version } from '../package.json';
import { ABI2SolidityFiles } from './abi2solidity';

function main() {
  commander
    .version(version)
    .option('-i, --input <file>', 'JSON ABI Input file', '')
    .option('-o, --output <file>', 'Solidity output file', '')
    .option('-e, --header <string>', 'Set the header', '')
    .option('-n, --interface-name <string>', 'Set the interface name', 'GeneratedInterface')
    .parse(process.argv);

  const options = commander.opts();

  const input = options.input === '' ? process.stdin.fd : options.input;
  const output = options.output === '' ? process.stdout.fd : options.output;

  ABI2SolidityFiles(input, output, options.header, options.interfaceName);
}

main();
