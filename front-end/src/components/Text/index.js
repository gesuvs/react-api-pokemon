import styled from "styled-components";
import {
  color,
  gridRow,
  gridColumn,
  padding,
  justifySelf,
} from "styled-system";

export const Text = styled.p`
  ${color};
  ${gridRow};
  ${gridColumn};
  ${padding};
  ${justifySelf};
  filter: ${(props) => props?.filter};
`;
