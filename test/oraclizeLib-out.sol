// SPDX-License-Identifier: MIT
pragma solidity >=0.1.0 <0.9.0;

interface GeneratedInterface {
  function oraclize_setCustomGasPrice ( uint256 gasPrice ) external;
  function oraclize_getPrice ( string memory datasource ) external view returns ( uint256 );
  function oraclize_query ( uint256 timestamp, string memory datasource, string memory arg, uint256 gaslimit ) external returns ( bytes32 id );
  function oraclize_query ( string memory datasource, string memory arg1, string memory arg2, uint256 gaslimit ) external returns ( bytes32 id );
  function oraclize_query ( string memory datasource, string memory arg1, string memory arg2 ) external returns ( bytes32 id );
  function oraclize (  ) external view returns ( OraclizeI );
  function parseInt ( string memory _a ) external pure returns ( uint256 );
  function proofType_NONE (  ) external pure returns ( bytes1 );
  function oraclize_query ( string memory datasource, string memory arg ) external returns ( bytes32 id );
  function oraclize_query ( uint256 timestamp, string memory datasource, string memory arg1, string memory arg2 ) external returns ( bytes32 id );
  function oraclize_query ( uint256 timestamp, string memory datasource, string memory arg1, string memory arg2, uint256 gaslimit ) external returns ( bytes32 id );
  function oraclize_query ( uint256 timestamp, string memory datasource, string memory arg ) external returns ( bytes32 id );
  function proofType_Native (  ) external pure returns ( bytes1 );
  function proofStorage_IPFS (  ) external pure returns ( bytes1 );
  function indexOf ( string memory _haystack, string memory _needle ) external pure returns ( int256 );
  function proofType_TLSNotary (  ) external pure returns ( bytes1 );
  function parseAddr ( string memory _a ) external pure returns ( address );
  function oraclize_getPrice ( string memory datasource, uint256 gaslimit ) external view returns ( uint256 );
  function oraclize_query ( string memory datasource, string memory arg, uint256 gaslimit ) external returns ( bytes32 id );
  function getCodeSize ( address _addr ) external view returns ( uint256 _size );
  function oraclize_cbAddress (  ) external view returns ( address );
  function parseInt ( string memory _a, uint256 _b ) external pure returns ( uint256 );
  function oraclize_setNetwork (  ) external view returns ( OraclizeAddrResolverI );
  function OAR (  ) external view returns ( OraclizeAddrResolverI );
  function proofType_Ledger (  ) external pure returns ( bytes1 );
  function oraclize_setProof ( bytes1 proofP ) external;
  function strCompare ( string memory _a, string memory _b ) external pure returns ( int256 );
  function proofType_Android (  ) external pure returns ( bytes1 );
}
