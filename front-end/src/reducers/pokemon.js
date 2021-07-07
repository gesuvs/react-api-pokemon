export const POKEMON_CAPTURED = "POKEMON_CAPTURED";

const INITIAL_STATE = {
  pokemons: [],
};

export const capturePokemon = (pokemon) => ({
  type: POKEMON_CAPTURED,
  payload: { pokemon },
});

export default function pokemon(state = INITIAL_STATE, action) {
  switch (action.type) {
    case POKEMON_CAPTURED: {
      return {
        ...state,
        pokemons: [...state.pokemons, action.payload.pokemons],
      };
    }
    default:
      return state;
  }
}
