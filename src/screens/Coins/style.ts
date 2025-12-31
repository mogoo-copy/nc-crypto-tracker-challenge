import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

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
  overflow-y: auto;
`;

export const LoaderDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: white;
`;

export const CoinItem = styled.li`
  width: 100%;
  min-height: 50px;
  border-radius: 15px;
  background-color: blue;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

export const LinkWrapper = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
`;

export const CoinContentWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const CoinImg = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
  position: absolute;
  right: 100%;
  top: 50%;
  transform: translateY(-50%);
`;
