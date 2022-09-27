import axios from "axios";

export const fetchPokemen = async () => {
  const res = await axios.get(process.env.REACT_APP_API_URL);
  const data = await res.data.results;
  return data;
};

export const fetchPokemanTypes = async (_url) => {
  // TODO: To remove url from component and place in env
  const res = await axios.get(_url);
  const types = await res.data.types.map((el) => el.type.name);
  return types;
};

export const fetchPokemanFlavortextById = async (_id) => {
  // TODO: To remove url from component and place in env
  const response = await axios.get(
    `https://pokeapi.co/api/v2/pokemon-species/${_id}`
  );
  const data = await response.data;
  const fileterdFlavorTextEntries = await data.flavor_text_entries
    .filter((element) => element.language.name === "en")
    .map((_abc) => _abc.flavor_text.replace(/\n/g, " ").replace(/\f/g, " "));
  const flavouredText = [...new Set(fileterdFlavorTextEntries)].join(" ");
  return flavouredText;
};

export const formatNumber = (pokemanId) => {
  if (pokemanId < 10) return `00${pokemanId}`;
  if (pokemanId < 100 && pokemanId > 9) return `0${pokemanId}`;
  return pokemanId;
};
