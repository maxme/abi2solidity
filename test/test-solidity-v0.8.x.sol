interface GeneratedInterface {
  function auctionEnd (  ) external;
  function auctionEndTime (  ) external view returns ( uint256 );
  function beneficiary (  ) external view returns ( address );
  function bid (  ) external;
  function highestBid (  ) external view returns ( uint256 );
  function highestBidder (  ) external view returns ( address );
  function withdraw (  ) external returns ( bool );
}
