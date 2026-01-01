import styled from "styled-components";

export const WrapperDiv = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StatusMessage = styled(WrapperDiv)`
  justify-content: center;
`;

export const Title = styled.h2`
  font-size: 35px;
  font-weight: 600;
  padding-top: 30px;
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
`;
export const WrapperCoinDiv = styled.div`
  margin-top: 30px;
  width: 500px;
  background-color: black;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

export const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: blue;
  padding: 10px 20px;
  border-radius: 10px;
`;

export const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;

  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;

export const Description = styled.p`
  color: white;
  margin: 20px 0px;
`;

export const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 25px 0px;
  gap: 10px;
`;

export const Tab = styled.span`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 7px 0px;
  border-radius: 10px;
  color: white;
  a {
    display: block;
  }
`;
