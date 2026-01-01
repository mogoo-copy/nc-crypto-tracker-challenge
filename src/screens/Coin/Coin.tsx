import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { skipToken } from "@reduxjs/toolkit/query";

import { useGetCoinInfoQuery, useGetCoinTickersQuery } from "../../features/coins/coinsApi";
import {
  CoinImg,
  Description,
  Overview,
  OverviewItem,
  StatusMessage,
  Tab,
  Tabs,
  Title,
  WrapperCoinDiv,
  WrapperDiv,
} from "./style";

function Coin() {
  const { coinId } = useParams();
  const { state } = useLocation();
  const {
    data: infoData,
    isLoading: infoLoading,
    isError: infoError,
  } = useGetCoinInfoQuery(coinId ?? skipToken);

  const {
    data: tickersData,
    isLoading: tickersLoading,
    isError: tickersError,
  } = useGetCoinTickersQuery(coinId ?? skipToken);

  const loading = infoLoading || tickersLoading;
  const apiError = infoError || tickersError;

  if (!coinId) {
    return <StatusMessage>Invalid access. Coin ID is missing.</StatusMessage>;
  }

  if (loading) {
    return <StatusMessage>Loading...</StatusMessage>;
  }

  if (apiError) {
    return <StatusMessage>An error occurred. Please try again later.</StatusMessage>;
  }

  if (!infoData || !tickersData) {
    return <StatusMessage>Coin information not found.</StatusMessage>;
  }

  return (
    <WrapperDiv>
      <Title>
        <CoinImg src={`https://static.coinpaprika.com/coin/${infoData.id}/logo.png`} />
        {state ? state : loading ? "Loading..." : infoData.name}
      </Title>
      <WrapperCoinDiv>
        <Overview>
          <OverviewItem>
            <span>Rank</span>
            <span>{infoData?.rank}</span>
          </OverviewItem>
          <OverviewItem>
            <span>Symbol</span>
            <span>${infoData?.symbol}</span>
          </OverviewItem>
          <OverviewItem>
            <span>Price</span>
            <span>{tickersData?.quotes.USD.price.toFixed(3)}</span>
          </OverviewItem>
        </Overview>
        <Description>{infoData.description}</Description>
        <Overview>
          <OverviewItem>
            <span>Total Supply</span>
            <span>{tickersData.total_supply}</span>
          </OverviewItem>
          <OverviewItem>
            <span>Max Supply</span>
            <span>{tickersData.max_supply}</span>
          </OverviewItem>
        </Overview>
        <Tabs>
          <Tab>
            <Link to={"chart"}>Chart</Link>
          </Tab>
          <Tab>
            <Link to={"price"}>Price</Link>
          </Tab>
        </Tabs>
      </WrapperCoinDiv>
      <Outlet />
    </WrapperDiv>
  );
}

export default Coin;
