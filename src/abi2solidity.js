import fs from 'fs';

function getInOrOut(inputs) {
  let out = '';
  for (let i = 0; i < inputs.length; i += 1) {
    out += inputs[i].type;
    if (inputs[i].name) {
      out += ` ${inputs[i].name}`;
    }
    if (i !== inputs.length - 1) {
      out += ', ';
    }
  }
  return out;
}

function getMethodInterface(method) {
  const out = [];
  // Type
  // Interfaces limitation: https://solidity.readthedocs.io/en/v0.4.24/contracts.html#interfaces
  if (method.type !== 'function') {
    return null;
  }
  out.push(method.type);
  // Name
  if (method.name) {
    out.push(method.name);
  }
  // Inputs
  out.push('(');
  out.push(getInOrOut(method.inputs));
  out.push(')');
  // Functions in ABI are either public or external and there is no difference in the ABI
  out.push('external');
  // State mutability
  if (method.stateMutability === 'pure') {
    out.push('pure');
  } else if (method.stateMutability === 'view') {
    out.push('view');
  } else if (method.stateMutability === 'pure') {
    out.push('pure');
  }
  // Payable
  if (method.payable) {
    out.push('payable');
  }
  // Outputs
  if (method.outputs && method.outputs.length > 0) {
    out.push('returns');
    out.push('(');
    out.push(getInOrOut(method.outputs));
    out.push(')');
  }
  return out.join(' ');
}

function ABI2Solidity(abi) {
  const HEADER = 'interface GeneratedInterface {\n';
  const FOOTER = '}\n';
  const jsonABI = JSON.parse(abi);
  let out = HEADER;
  for (let i = 0; i < jsonABI.length; i += 1) {
    const method = jsonABI[i];
    const methodString = getMethodInterface(method);
    if (methodString) {
      out += `  ${getMethodInterface(method)};\n`;
    }
  }
  return out + FOOTER;
}

export function ABI2SolidityFiles(input, output) {
  fs.readFile(input, { encoding: 'utf8' }, (err, abi) => {
    if (err) {
      console.error(err);
      return;
    }
    const solidity = ABI2Solidity(abi);
    if (output === '') {
      // default to stdout
      console.log('------------ Solidity interface:');
      console.log(solidity);
    } else {
      fs.writeFile(output, solidity, (err2) => {
        if (err2) console.error(err2);
      });
    }
  });
}

export default ABI2Solidity;
