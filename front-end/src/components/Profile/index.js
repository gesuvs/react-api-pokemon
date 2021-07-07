import styled from "styled-components";
import { padding, alignItems, justifyContent, maxWidth } from "styled-system";

export const Profile = styled.section`
  box-sizing: border-box;
  display: flex;
  height: 500px;
  width: 500px;
  background: ${(props) => props.theme.color.primary};
  border-radius: 1rem;
  ${padding};
`;
