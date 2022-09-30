import {
  ImgDescription,
  DetailsContainer,
  ContentWrapper,
  TitleBar,
  PokemanId,
  PokemanDesc,
  Modal,
  PokemonDetails,
  EachDetail,
  TypeSpan,
  StatsWrapper,
  StatsDetails,
  SkillPercent,
  PokemonDetailsWrapper,
  ReadMore,
  ReadMoreModal,
} from "./details.styles";
import { useContext, useState } from "react";
import PokemonImg from "../../components/pokemon-image/pokemon-image.component";
import IconSet from "../../components/icon-set/icon-set.component";
import { PokemanModalContext } from "../../contexts/pokeman-modal.context";
import PokemonEvolution from "../../components/pokemon-evolution/pokemon-evolution.component";
import _ from "lodash";
import { COLORS } from "../../utils/colors";

const Details = () => {
  const { pokemonInModal: pokemon } = useContext(PokemanModalContext);
  const [pokemonFlavourText, setPokemonFlavourText] = useState(null);
  return (
    <Modal className="modal-abc">
      {pokemon && (
        <DetailsContainer>
          <ImgDescription>
            <PokemonImg pokemon={pokemon} customHeight="208px" />
            <ContentWrapper GroupntWrapper>
              <TitleBar>
                <h2>{pokemon.name.toUpperCase()}</h2>
                <PokemanId>
                  <h2>{pokemon.pokemonId}</h2>
                </PokemanId>
                <IconSet />
              </TitleBar>
              <PokemanDesc>
                {pokemon.flavouredText.substring(0, 400)}. . .
                <ReadMore
                  onClick={() => setPokemonFlavourText(pokemon.flavouredText)}
                >
                  read more
                </ReadMore>
              </PokemanDesc>
            </ContentWrapper>
          </ImgDescription>
          {pokemonFlavourText && (
            <ReadMoreModal>
              <p>{pokemonFlavourText}</p>
              <ion-icon
                onClick={() => setPokemonFlavourText(null)}
                name="close-outline"
              ></ion-icon>
            </ReadMoreModal>
          )}
          <PokemonDetailsWrapper>
            <PokemonDetails>
              <EachDetail>
                <h4>Height</h4>
                <p>{pokemon.height}</p>
              </EachDetail>
              <EachDetail>
                <h4>Weight</h4>
                <p> {pokemon.weight / 100}Kg</p>
              </EachDetail>
              <EachDetail>
                <h4>Genders</h4>
                <p>
                  {pokemon.genders.map((gender) => (
                    <span key={gender}>{_.capitalize(gender)},</span>
                  ))}
                </p>
              </EachDetail>
              <EachDetail>
                <h4>Egg Group</h4>
                <p>
                  {pokemon.eggGroups.map((egg) => (
                    <span>{_.capitalize(egg)},</span>
                  ))}
                </p>
              </EachDetail>
            </PokemonDetails>
            <PokemonDetails>
              <EachDetail>
                <h4>Abilities</h4>
                <p>
                  {pokemon.abilities.map((ability) => (
                    <span>{_.capitalize(ability)}, </span>
                  ))}
                </p>
              </EachDetail>
              <EachDetail>
                <h4>Types</h4>
                <p>
                  {pokemon.types.map((type) => (
                    <TypeSpan color={COLORS[type]}>
                      {_.capitalize(type)}
                    </TypeSpan>
                  ))}
                </p>
              </EachDetail>
              <EachDetail>
                <h4>Weak Against</h4>
                <p>
                  {pokemon.pokemonWeakness.map((type) => (
                    <TypeSpan color={COLORS[type]}>
                      {_.capitalize(type)}
                    </TypeSpan>
                  ))}
                </p>
              </EachDetail>
            </PokemonDetails>
          </PokemonDetailsWrapper>
          <StatsDetails>
            <h3>Stats</h3>
            <StatsWrapper>
              {pokemon.statsPoke.map((stat) => {
                return (
                  <div className="skill">
                    <p>{_.capitalize(Object.keys(stat)[0])}</p>
                    <SkillPercent
                      className="skill-bar"
                      widthValue={Object.values(stat)[0]}
                    >
                      <span className="skill-count3">
                        {Object.values(stat)[0]}
                      </span>
                    </SkillPercent>
                  </div>
                );
              })}
            </StatsWrapper>
          </StatsDetails>
          <PokemonEvolution pokemonEvolution={pokemon.pokemonEvolution} />
        </DetailsContainer>
      )}
    </Modal>
  );
};

export default Details;
