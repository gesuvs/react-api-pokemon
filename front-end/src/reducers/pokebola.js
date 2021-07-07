export const INCREMENT_POKEBOLA = "INCREMENT_POKEBOLA";
export const DECREMENT_POKEBOLA = "DECREMENT_POKEBOLA";

const INITIAL_STATE = {
  pokebolas: 5,
};

export const incrementPokebola = () => ({
  type: INCREMENT_POKEBOLA,
});

export const decrementPokebola = () => ({
    type: DECREMENT_POKEBOLA,
  });

export default function pokemon(state = INITIAL_STATE, action) {
  switch (action.type) {
    case INCREMENT_POKEBOLA: {
      return {
        pokebolas:
          state.pokebolas < 5 && state.pokebolas >= 0 && state.pokebolas + 1,
      };
    }
    case DECREMENT_POKEBOLA: {
      return {
        pokebolas:
          state.pokebolas <= 5 && state.pokebolas > 0 && state.pokebolas - 1,
      };
    }
    default:
      return state;
  }
}
