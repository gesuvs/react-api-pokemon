import { Link } from "react-router-dom";
import { Header } from "../Header/header";
import { Content } from "../Content";
import { Heading } from "../Heading";
import { Navigation, ListItem, ListDefault } from "../Navigation/navigation";

export default function NavBarTop() {
  return (
    <Header flex itemCenter>
      <Content
        as="div"
        maxWidth="1080px"
        display="flex"
        alignItems="center"
        width="100%"
        justifyContent="space-between"
      >
        <Heading md white level="2">
          Pokedex
        </Heading>
        <Navigation>
          <ListDefault>
            <ListItem>Inicio</ListItem>
            <Link to="meus-pokemons">
              <ListItem>Meus pokemons</ListItem>
            </Link>
            <ListItem>Sair</ListItem>
          </ListDefault>
        </Navigation>
      </Content>
    </Header>
  );
}
