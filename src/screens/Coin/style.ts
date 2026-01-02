import styled from "styled-components";

export const WrapperDiv = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.bgColor};
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
  color: ${(props) => props.theme.textColor};
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
  background-color: ${(props) => props.theme.cardColor};
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  padding: 15px;
`;

export const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.bgColor};
  padding: 10px 20px;
  border-radius: 10px;
`;

export const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.textColor};

  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
    color: ${(props) => props.theme.accentColor};
  }
`;

export const Description = styled.p`
  color: ${(props) => props.theme.subTextColor};
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
  background-color: ${(props) => props.theme.bgColor};
  padding: 7px 0px;
  border-radius: 10px;
  color: ${(props) => props.theme.textColor};
  a {
    display: block;
  }
`;
