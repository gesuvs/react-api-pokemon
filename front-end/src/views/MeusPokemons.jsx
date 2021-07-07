import { Content } from "../components/Content";
import { Heading } from "../components/Heading";
import { Wrapper } from "../components/Wrapper";
import { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { Image } from "../components/Image/image";
import { Text } from "../components/Text";
import { Input } from "../components/Input";

export default function MeusPokemons() {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonsFiltered, setPokemonsFiltered] = useState([]);

  useEffect(() => {
    const storage = localStorage.getItem("POKEMONS");
    if (storage) {
      setPokemons(JSON.parse(storage));
      setPokemonsFiltered(JSON.parse(storage));
    }
  }, []);

  const handleInput = (event) => {
    const inputValue = event.target.value;
    const filtered = pokemons.filter((pokekon) =>
      String(pokekon.name).includes(inputValue)
    );

    setPokemonsFiltered(filtered);
  };

  return (
    <Content as="main" maxWidth="900px" padding="2rem">
      <Heading white lg>
        Meus pokemons
      </Heading>

      <Wrapper>
        <Text color="white">Pesquise pelo nome dos seus pokemons</Text>
        <Input
          placeholder="Tente pesquisar por um de seus pokemons, busque pelo nome"
          onChange={handleInput}
        />
      </Wrapper>

      <Wrapper
        margin="1rem"
        background="#282a36"
        borderRadius="1rem"
        padding="2rem"
        width="100%"
        height="auto"
        display="flex"
        alignItems="center"
        justifyContent="center"
        boxSizing="border-box"
        flexWrap="wrap"
        gap="10rem"
      >
        {pokemonsFiltered.map((pokemon) => (
          <Card key={pokemon.id} margin="1rem">
            <Image src={pokemon.front_default} />
            <Text color="white">{pokemon.name}</Text>
          </Card>
        ))}
      </Wrapper>
    </Content>
  );
}
