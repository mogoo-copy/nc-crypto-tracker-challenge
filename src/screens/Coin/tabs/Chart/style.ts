import styled from "styled-components";

export const WrapperDiv = styled.div`
  margin-top: 10px;
  height: 300px;
  width: 500px;
  background-color: ${(props) => props.theme.cardColor};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
`;
