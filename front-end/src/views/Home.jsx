import { useEffect, useState } from "react";
import { Heading } from "../components/Heading";
import { Content } from "../components/Content";
import { Grid } from "../components/Grid";
import { Profile } from "../components/Profile";
import { AvatarWrapper } from "../components/Avatar";
import { Wrapper } from "../components/Wrapper";
import { PokemonGrid } from "../components/PokemonGrid";
import { Card } from "../components/Card";
import { Text } from "../components/Text";
import axios from "axios";
import Pagination from "../components/Pagination/Pagination";
import { Image } from "../components/Image/image";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "../components/Spinner/spinner";
import { useToasts } from "react-toast-notifications";

export default function Home() {
  const [pokemons, setPokemon] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [pokemonCard, setPokemonCard] = useState({
    name: "",
    loading: false,
  });

  const dispatch = useDispatch();
  const { addToast } = useToasts();

  const count = useSelector((state) => state.counter);
  const pokemonsState = useSelector((state) => state.pokemon);
  const { pokebolas } = useSelector((state) => state.pokebola);

  const attemptCapture = (id) => {
    setPokemonCard({
      id,
      loading: true,
    });
    dispatch({
      type: "DECREMENT_POKEBOLA",
    });

    dispatch({
      type: "START_COUNTER",
      payload: {
        secs: 10,
      },
    });

    setTimeout(() => {
      const random = Math.floor(Math.random() * (100 - 10 + 1)) + 10;
      if (random <= 40)
        addToast("Não foi dessa vez mestre pokemon", { appearance: "error" });
      else {
        addToast("Pokemon capturado", { appearance: "success" });
        const newList = pokemons.filter((pokemon) => pokemon.id !== id);
        const pokemon = pokemons.filter((pokemon) => pokemon.id === id);
        setPokemon(newList);
        const { payload } = dispatch({
          type: "POKEMON_CAPTURED",
          payload: {
            pokemons: pokemon,
          },
        });

        const storage = localStorage.getItem("POKEMONS");
        if (storage) {
          let tmp = JSON.parse(localStorage.getItem("POKEMONS"));
          tmp.push(...payload.pokemons);
          localStorage.setItem("POKEMONS", JSON.stringify(tmp));
        } else {
          localStorage.setItem("POKEMONS", JSON.stringify(payload.pokemons));
        }
      }
      setPokemonCard({
        id,
        loading: false,
      });
    }, 5000);
  };

  useEffect(() => {
    const storage = localStorage.getItem("POKEMONS");
    if (storage) {
      pokemonsState.pokemons.push(...JSON.parse(storage));
    }

    async function getPokemonPagined(args) {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=${
          args ? 6 + args : 6
        }&offset=${(currentPage - 1) * 10}`
      );

      const filtered = response.data.results.filter(
        (i) => !pokemonsState.pokemons.filter((y) => y.name === i.name).length
      );

      setTotalCount(response.data.count);

      const getPokemonsDetails = async () => {
        return Promise.all(
          filtered.map(async (item) => {
            const { data } = await axios.get(item.url);
            const {
              name,
              sprites: { front_default },
              id,
            } = await Promise.resolve(data);
            return { name, front_default, id };
          })
        );
      };

      const pokemonsDetails = await getPokemonsDetails();

      setPokemon(pokemonsDetails);
    }

    getPokemonPagined();
  }, [currentPage, pokemonsState, count]);

  return (
    <>
      <Content as="main" maxWidth="900px" padding="2rem">
        <Heading white lg>
          Desafio Pokemon
        </Heading>

        <Text color="white"> Inicie a caçada Pokemon</Text>

        <Grid gridGap="0.8rem" margin="2rem 0 0 0" col="3fr 1fr">
          <Profile padding="2rem">
            <Wrapper
              display="flex"
              width="100%"
              alignItems="center"
              flexDirection="column"
            >
              <AvatarWrapper name="GJ" />
              <Text color="white">Guilherme Jesus</Text>
              <hr />

              <div>Contador: {count.secs}</div>
              <div>
                Pokebolas disponiveis:
                <div>
                  {[...Array(pokebolas).keys()].map((item) => (
                    <Image
                      key={item}
                      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/master-ball.png"
                    />
                  ))}
                </div>
              </div>
            </Wrapper>
          </Profile>

          <Wrapper
            background="#282a36"
            borderRadius="1rem"
            padding="2rem"
            width="500px"
            height="auto"
            display="flex"
            flexDirection="column"
            alignItems="center"
            boxSizing="border-box"
          >
            <Wrapper display="flex" alignItems="center">
              <Text color="white">
                Clique em algum pokemon para lançar uma pokebola
              </Text>
              <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/master-ball.png" />
            </Wrapper>
            <PokemonGrid padding="2rem">
              {pokemons.map((pokemon) => (
                <Card
                  key={pokemon.name}
                  breakInside="avoid"
                  gridTemplateRows="1fr auto"
                  display="grid"
                  marginBotttom="1rem"
                  onClick={() => attemptCapture(pokemon?.id)}
                >
                  <Wrapper position="relative">
                    <Wrapper
                      position="absolute"
                      transform="translate(2rem, 3.8rem)"
                      zIndex="1"
                    >
                      {pokemonCard.id === pokemon.id && pokemonCard.loading && (
                        <Spinner />
                      )}
                    </Wrapper>
                    <Image
                      filter={
                        pokemonCard.id === pokemon.id &&
                        pokemonCard.loading &&
                        "blur(1px)"
                      }
                      src={pokemon.front_default}
                      alt={pokemon.name}
                      gridRow="1 / -1"
                      gridColumn="1"
                    />
                    <Text
                      filter={
                        pokemonCard.id === pokemon.id &&
                        pokemonCard.loading &&
                        "blur(1px)"
                      }
                      justifySelf="center"
                      padding="0.2rem"
                      gridRow="3"
                      gridColumn="1"
                      color="white"
                    >
                      {pokemon.name}
                    </Text>
                  </Wrapper>
                </Card>
              ))}
            </PokemonGrid>
            <Wrapper display="flex" flex="1" alignItems="flex-end">
              <Pagination
                currentPage={currentPage}
                totalCount={totalCount}
                pageSize={10}
                onPageChange={(page) => setCurrentPage(page)}
              />
            </Wrapper>
          </Wrapper>
        </Grid>
      </Content>
    </>
  );
}
