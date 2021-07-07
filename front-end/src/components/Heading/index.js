import styled, { css } from "styled-components";

const BLACKLIST = ["children", "theme", "as"];

const fontSize = {
  h1: "3rem",
  h2: "1.75rem",
};

const styles = (props) => {
  const tmp = [];

  Object.keys(props)
    .filter((prop) => !BLACKLIST.includes(prop))
    .map((item) => ({
      fontSize: props.theme.fontSize[item],
      color: props.theme.color[item],
    }))
    .forEach((element) => {
      Object.keys(element).forEach((key) => {
        if (element[key]) {
          tmp.push({
            [key]: element[key],
          });
        }
      });
    });

  return css(...tmp);
};

export const Heading = styled.h1.attrs(({ level }) => ({
  as: `h${level || 1}`,
}))`
  ${(props) => styles(props)};
  margin: 0;
`;
