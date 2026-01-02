import styled from "styled-components";

export const WrapperDiv = styled.div`
  width: 500px;
`;

export const Overview = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.cardColor};
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
