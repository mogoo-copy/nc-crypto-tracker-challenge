import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { CoinIcon, CoinList, Title, WrapperDiv } from "./style";

function Coins() {
  return (
    <WrapperDiv>
      <Title>
        <CoinIcon icon={faCoins} />
        Coins
      </Title>
      <CoinList></CoinList>
    </WrapperDiv>
  );
}

export default Coins;
