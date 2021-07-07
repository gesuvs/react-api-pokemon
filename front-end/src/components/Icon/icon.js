import styled, { css } from "styled-components";

export const Icon = styled.span.attrs((props) => ({
  className: `material-icons ${props.disabled && "disabled"}`,
}))`
  user-select: none;
  cursor: pointer;
  ${() =>
    css({
      "&.disabled": {
        pointerEvents: "none",
      },
    })}
`;
