import axios from "axios";
import { COLORS } from "./colors";

export let genders = {};
const getFemalePokes = async () => {
  const { data } = await axios.get("https://pokeapi.co/api/v2/gender/1/");
  const femalePokes = await data.pokemon_species_details.map(
    (poke) => poke.pokemon_species.name
  );
  genders = { ...genders, female: femalePokes };
};

const getMalePokes = async () => {
  const { data } = await axios.get("https://pokeapi.co/api/v2/gender/2/");
  const malePokes = await data.pokemon_species_details.map(
    (poke) => poke.pokemon_species.name
  );
  genders = { ...genders, male: malePokes };
};
const getGenderLessPokes = async () => {
  const { data } = await axios.get("https://pokeapi.co/api/v2/gender/3/");
  const genderlessPokes = await data.pokemon_species_details.map(
    (poke) => poke.pokemon_species.name
  );
  genders = { ...genders, genderless: genderlessPokes };
};
(async () =>
  Promise.all([getMalePokes(), getFemalePokes(), getGenderLessPokes()]))();

export const fetchPokemanTypes = async (_url) => {
  // TODO: To remove url from component and place in env
  const res = await axios.get(_url);
  const types = await res.data.types.map((el) => COLORS[el.type.name]);
  return types;
};

export const fetchPokemen = async () => {
  const res = await axios.get(process.env.REACT_APP_API_URL);
  const data = await res.data.results;
  const pokemonData = await Promise.all(
    data.map(async (eachPokeman) => {
      const pokemanDetails = await fetchPokemonDetails(eachPokeman.url);
      const pokemonDesc = await fetchPokemonDescription(
        pokemanDetails.speciesUrl
      );
      const pokemonWeakness = await fetchWeaknessByPokemonTypes(
        pokemanDetails.types
      );
      const pokemonEvolution = await fetchEvolutionChain(
        pokemonDesc.evolutionChainUrl
      );
      const genders = getGendersByName(eachPokeman.name);
      return {
        ...eachPokeman,
        ...pokemanDetails,
        ...pokemonDesc,
        pokemonWeakness,
        pokemonEvolution,
        genders,
      };
    })
  );
  console.log(pokemonData);
  return pokemonData;
};

export const formatNumber = (pokemonId) => {
  if (pokemonId < 10) return `00${pokemonId}`;
  if (pokemonId < 100 && pokemonId > 9) return `0${pokemonId}`;
  return pokemonId;
};

const fetchPokemonDetails = async (_url) => {
  const { data } = await axios.get(_url);
  const types = data.types.map((el) => el.type.name);
  const name = data.forms[0].name;
  const abilities = data.abilities.map((el) => el.ability.name);
  const image = data.sprites.other.dream_world.front_default;
  const { height, weight, id, stats } = data;
  const speciesUrl = data.species.url;
  const bgColors = types.map((el) => COLORS[el]);
  const statsPoke = stats.map((abc) => {
    return { [abc.stat.name]: abc.base_stat };
  });

  return {
    types,
    abilities,
    image,
    height,
    weight,
    pokemonId: id,
    speciesUrl,
    statsPoke,
    name,
    bgColors,
  };
};

const fetchPokemonDescription = async (speciesUrl) => {
  const { data } = await axios.get(speciesUrl);
  const eggGroups = data.egg_groups.map((group) => group.name);
  const fileterdFlavorTextEntries = data.flavor_text_entries
    .filter((element) => element.language.name === "en")
    .map((_abc) => _abc.flavor_text.replace(/\n/g, " ").replace(/\f/g, " "));

  const flavouredText = [...new Set(fileterdFlavorTextEntries)].join(" ");
  const evolutionChainUrl = data.evolution_chain.url;

  return { eggGroups, flavouredText, evolutionChainUrl };
};

const fetchEvolutionChain = async (evolutionChainUrl) => {
  const { data } = await axios.get(evolutionChainUrl);
  const abc1 = data.chain?.species;
  const abc2 = data.chain?.evolves_to[0]?.species;
  const abc3 = data.chain?.evolves_to[0]?.evolves_to[0]?.species;
  return [abc1, abc2, abc3].filter((abc) => abc);
};

const fetchWeaknessByPokemonTypes = (types) => {
  const weak = [];
  types.map(async (_type) => {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/type/${_type}`);
    const weakness = await data.damage_relations.double_damage_from.map(
      (damage) => damage.name
    );
    weak.push(...weakness);
  });
  return weak;
};

export const getPokemonByName = async (name) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
  const { data } = await axios.get(url);

  const pokemonId = await data.id;
  const bgColors = await fetchPokemanTypes(url);

  return { pokemonId, bgColors, name };
};

const getGendersByName = (name) => {
  let gendersByName = [];
  if (genders.length) {
    if (genders.male.includes(name)) gendersByName.push("male");
    if (genders.female.includes(name)) gendersByName.push("female");
    if (genders.genderless.includes(name)) gendersByName.push("genderless");
  }
  return gendersByName;
};
