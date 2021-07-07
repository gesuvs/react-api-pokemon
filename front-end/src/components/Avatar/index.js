import styled from "styled-components";

export const AvatarWrapper = styled.span.attrs(({ name }) => ({
  children: name,
}))`
  display: flex;
  width: 80px;
  height: 80px;
  padding: 5px;
  border-radius: 50%;
  background: pink;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: bold;
`;
