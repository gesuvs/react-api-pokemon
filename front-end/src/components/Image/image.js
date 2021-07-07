import styled from "styled-components";
import { gridRow, gridColumn } from "styled-system";

export const Image = styled.img`
  ${gridRow}
  ${gridColumn}
  filter: ${(props) => props?.filter}
`;
