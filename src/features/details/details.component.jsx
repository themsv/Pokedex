import {
  ImgDescription,
  DetailsContainer,
  ContentWrapper,
  TitleBar,
  PokemanId,
  PokemanDesc,
  Modal,
} from "./details.styles";
import { useState, useEffect } from "react";
import PokemanImg from "../../components/pokeman-image/pokeman-image.component";
import IconSet from "../../components/icon-set/icon-set.component";
import { fetchPokemanFlavortextById, formatNumber } from "../../utils/api";

const Details = ({ pokeman, pokemanId }) => {
  const [flavourText, setFlavourText] = useState(null);
  console.log(pokeman);
  useEffect(() => {
    const getFlavourText = async () => {
      const text = await fetchPokemanFlavortextById(pokemanId);
      setFlavourText(text);
    };
    getFlavourText();
  }, []);

  return (
    <Modal>
      <DetailsContainer>
        <ImgDescription>
          <PokemanImg
            pokeman={pokeman}
            pokemanId={pokemanId}
            customHeight="208px"
          />
          <ContentWrapper>
            <TitleBar>
              <h2>{pokeman.name.toUpperCase()}</h2>
              <PokemanId>
                <h2>{formatNumber(pokeman.pokemanId)}</h2>
              </PokemanId>
              <IconSet />
            </TitleBar>
            <PokemanDesc>
              {flavourText && flavourText.substring(0, 300)}
            </PokemanDesc>
          </ContentWrapper>
        </ImgDescription>
      </DetailsContainer>
    </Modal>
  );
};

export default Details;
