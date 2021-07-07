import styled, { css } from "styled-components";

export const PaginationContainer = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
`;

export const PaginationItem = styled.li.attrs((props) => ({
  className: props.disabled && "disabled",
}))`
  user-select: none;
  height: 1.5rem;
  text-align: center;
  margin: auto 4px;
  color: white;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.01071em;
  border-radius: 50%;
  line-height: 1.43;
  font-size: 0.8rem;
  min-width: 1.5rem;
  flex-wrap: wrap;
  word-break: break-word;
  cursor: pointer;

  &:hover {
    background: pink;
    color: ${(props) => props.theme.color.primary};
  }

  ${(props) =>
    css({
      backgroundColor: props.selected && "pink",
      color: props.selected && props.theme.color.primary,
      "&.disabled": {
        pointerEvents: "none",
      },
    })}
`;
