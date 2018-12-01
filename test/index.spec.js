import fs from 'fs';
import solc from 'solc';
import ABI2Solidity from '../src/abi2solidity';

function getTestFile(filename) {
  return fs.readFileSync(filename, 'utf8');
}

function compileAndGetABI(soliditySource) {
  const input = {
    'generated.sol': soliditySource,
  };
  const compiled = solc.compile({ sources: input }, 1);
  return compiled.contracts['generated.sol:GeneratedInterface'].interface;
}

function filterABI(stringAbi) {
  const abi = JSON.parse(stringAbi);
  return abi.filter(x => x.type === 'function');
}

describe('Check that empty ABI return empty interface', () => {
  it('returns empty interface', () => {
    expect(ABI2Solidity('[]')).toBe('interface GeneratedInterface {\n}\n');
  });
});

describe('Test 1 with expected output', () => {
  it('returns solidity test1', () => {
    expect(ABI2Solidity(getTestFile('test/test1-in.json'))).toBe(
      getTestFile('test/test1-out.solidity'),
    );
  });
});

describe('ABI -> Solidity -> ABI', () => {
  // Test all ABI files
  const testParams = ['test1', 'test2'];
  for (let i = 0; i < testParams.length; i += 1) {
    (function (testSpec) {
      it('generates solidity from ABI then compiles it back to ABI and compare', () => {
        const compiledAbi = compileAndGetABI(ABI2Solidity(getTestFile(`test/${testSpec}-in.json`)));
        expect(filterABI(getTestFile(`test/${testSpec}-in.json`))).toEqual(filterABI(compiledAbi));
      });
    }(testParams[i]));
  }
});
