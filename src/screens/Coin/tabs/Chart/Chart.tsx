import { useParams } from "react-router-dom";
import { skipToken } from "@reduxjs/toolkit/query";
import ReactApexChart from "react-apexcharts";

import { WrapperDiv } from "./style";
import { useGetCoinHistoryQuery } from "../../../../features/coins/coinsApi";

function Chart() {
  const { coinId } = useParams();
  const { data, isLoading, isError } = useGetCoinHistoryQuery(coinId ?? skipToken);

  if (!coinId) {
    return <WrapperDiv>Invalid access. Coin ID is missing.</WrapperDiv>;
  }

  if (isLoading) {
    return <WrapperDiv>Loading...</WrapperDiv>;
  }

  if (isError) {
    return <WrapperDiv>An error occurred. Please try again later.</WrapperDiv>;
  }

  if (!data) {
    return <WrapperDiv>Coin information not found.</WrapperDiv>;
  }

  return (
    <WrapperDiv>
      <ReactApexChart
        style={{ width: "100%" }}
        type="candlestick"
        series={[
          {
            name: "Price",
            data: data.map((price): { x: number; y: string[] } => ({
              x: price.time_close,
              y: [price.open, price.high, price.low, price.close],
            })),
          },
        ]}
        options={{
          chart: {
            height: 500,
            width: 500,
            toolbar: { show: false },
            background: "transparent",
          },
          theme: { mode: "light" },
          grid: {
            show: true,
          },
          xaxis: {
            axisTicks: { show: false },
            axisBorder: { show: false },
            labels: {
              show: true,
            },
            type: "datetime",
            categories: data.map((price) => price.time_close),
          },
          yaxis: {
            show: true,
          },
          tooltip: {
            y: {
              formatter: (value) => `$${value.toFixed(2)}`,
            },
          },
        }}
      />
    </WrapperDiv>
  );
}

export default Chart;
