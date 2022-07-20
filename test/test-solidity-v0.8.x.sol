// SPDX-License-Identifier: MIT
pragma solidity >=0.1.0 <0.9.0;

interface GeneratedInterface {
  function auctionEnd (  ) external;
  function auctionEndTime (  ) external view returns ( uint256 );
  function beneficiary (  ) external view returns ( address );
  function bid (  ) external;
  function highestBid (  ) external view returns ( uint256 );
  function highestBidder (  ) external view returns ( address );
  function withdraw (  ) external returns ( bool );
}
