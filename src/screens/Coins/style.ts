import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const WrapperDiv = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const Title = styled.h2`
  font-size: 66px;
  font-weight: 600;
  padding-top: 30px;
  position: relative;
`;

export const CoinIcon = styled(FontAwesomeIcon)`
  color: rgb(240, 217, 9);
  position: absolute;
  right: 100%;
`;

export const CoinList = styled.ul`
  width: 30%;
  height: 75%;
  background-color: black;
`;
