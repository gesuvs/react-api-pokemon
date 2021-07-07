import styled, { css } from "styled-components";
import { padding, alignItems, justifyContent } from "styled-system";

export const Header = styled.header`
  box-sizing: border-box;
  background: ${(props) => props.theme?.color.primary};
  min-height: 4rem;
  ${padding};
  ${(props) =>
    css({
      display: props?.flex && "flex",
      justifyContent: props?.contentCenter && "center",
      alignItems: props?.itemCenter && "center",
    })}
`;
