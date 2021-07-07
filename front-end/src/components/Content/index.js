import styled from "styled-components";
import {
  padding,
  alignItems,
  justifyContent,
  maxWidth,
  display,
  width
} from "styled-system";

export const Content = styled.section`
  ${padding};
  ${maxWidth};
  ${width};
  ${alignItems};
  ${justifyContent};
  ${display};
  margin: 0 auto;
`;
