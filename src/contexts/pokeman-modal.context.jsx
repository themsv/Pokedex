import { useState, createContext } from "react";

export const PokemanModalContext = createContext({
  pokemonInModal: {},
  setPokemonInModal: () => {},
});

export const PokemanModalProvider = ({ children }) => {
  const [pokemonInModal, setPokemonInModal] = useState(null);
  const value = { pokemonInModal, setPokemonInModal };

  return (
    <PokemanModalContext.Provider value={value}>
      {children}
    </PokemanModalContext.Provider>
  );
};
