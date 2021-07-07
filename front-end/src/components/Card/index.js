import styled from "styled-components";
import { margin, display, gridTemplateRows } from "styled-system";

export const Card = styled.div`
  box-sizing: border-box;
  break-inside: ${(props) => props.breakInside};
  border: 1px solid #44475a;
  border-radius: 1rem;
  padding: 0.5rem;
  margin-bottom: ${(props) => props.marginBotttom};
  cursor: pointer;
  ${margin};
  ${display};
  ${gridTemplateRows};

  &:hover {
    background: pink;
    p {
      color: ${(props) => props.theme.color.primary};
    }
  }
`;
