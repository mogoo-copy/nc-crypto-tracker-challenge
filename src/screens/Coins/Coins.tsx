import { faCoins } from "@fortawesome/free-solid-svg-icons";
import {
  CoinContentWrapper,
  CoinIcon,
  CoinImg,
  CoinItem,
  CoinList,
  LinkWrapper,
  LoaderDiv,
  Title,
  WrapperDiv,
} from "./style";
import { useGetCoinsQuery } from "../../features/coins/coinsApi";

function Coins() {
  const { data, isLoading } = useGetCoinsQuery();
  console.log(data, isLoading);

  return (
    <WrapperDiv>
      <Title>
        <CoinIcon icon={faCoins} />
        Coins
      </Title>
      <CoinList>
        {isLoading ? (
          <LoaderDiv>Loading...</LoaderDiv>
        ) : (
          data?.map((coin) => (
            <CoinItem key={coin.id}>
              <LinkWrapper to={`/${coin.id}`} state={coin.name}>
                <CoinContentWrapper>
                  <CoinImg src={`https://static.coinpaprika.com/coin/${coin.id}/logo.png`} />
                  {coin.name}
                </CoinContentWrapper>
              </LinkWrapper>
            </CoinItem>
          ))
        )}
      </CoinList>
    </WrapperDiv>
  );
}

export default Coins;
