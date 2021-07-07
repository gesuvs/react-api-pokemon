import styled from "styled-components";
import { padding, gridGap, margin} from "styled-system";


export const Grid = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props?.col};
  ${gridGap};
  ${padding};
  ${margin};
`;
