import { useParams } from "react-router-dom";
import { Overview, OverviewItem, WrapperDiv } from "./style";
import { useGetCoinTickersQuery } from "../../../../features/coins/coinsApi";
import { skipToken } from "@reduxjs/toolkit/query";

function Price() {
  const { coinId } = useParams();
  const { data, isLoading, isError } = useGetCoinTickersQuery(coinId ?? skipToken);

  if (!coinId) {
    return <WrapperDiv>Invalid access. Coin ID is missing.</WrapperDiv>;
  }

  if (isLoading) {
    return <WrapperDiv>Loading...</WrapperDiv>;
  }

  if (isError) {
    return <WrapperDiv>An error occurred. Please try again later.</WrapperDiv>;
  }

  if (!data?.quotes.USD.ath_price || !data.quotes.USD.ath_date) {
    return <WrapperDiv>Coin information not found.</WrapperDiv>;
  }
  const athDate = new Date(data.quotes.USD.ath_date).toLocaleString("en-US");

  return (
    <WrapperDiv>
      <Overview>
        <OverviewItem>
          <span>All Time High Price</span>
          <span>${data.quotes.USD.ath_price.toFixed(3)}</span>
        </OverviewItem>
        <OverviewItem>
          <span>All Time High Date</span>
          <span>{athDate}</span>
        </OverviewItem>
      </Overview>
    </WrapperDiv>
  );
}

export default Price;
