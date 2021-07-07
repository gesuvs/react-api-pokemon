import styled from "styled-components";

export const Input = styled.input`
  padding-inline-start: 1rem;
  padding-inline-end: 1rem;
  height: 2.5rem;
  outline: transparent solid 2px;
  border-width: 1px;
  appearance: none;
  width: ${(props) => props.width || "100%"};
  border-radius: 12px;
`;
