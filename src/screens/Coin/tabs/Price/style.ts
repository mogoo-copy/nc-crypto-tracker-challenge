import styled from "styled-components";

export const WrapperDiv = styled.div`
  width: 500px;
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

  span {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;
