import styled from "styled-components";
import {
  display,
  flexDirection,
  width,
  height,
  justifyContent,
  alignItems,
  background,
  borderRadius,
  padding,
  position,
  bottom,
  flex,
  zIndex,
  flexWrap,
  margin
} from "styled-system";

export const Wrapper = styled.div`
  ${display};
  ${flex};
  ${flexDirection};
  ${justifyContent};
  ${alignItems};
  ${width};
  ${background};
  ${borderRadius};
  ${padding};
  ${height};
  ${position};
  ${bottom};
  ${zIndex};
  ${flexWrap};
  ${margin};
  transform: ${(props) => props?.transform};
  box-sizing: ${(props) => props?.boxSizing};
  gap: ${(props) => props?.gap};
`;
