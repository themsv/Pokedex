import styled, { keyframes } from "styled-components";

const fade = keyframes`
 0% { opacity:0}
 50% {opacity:0.5}
 100% {  opacity: 1 }
`;

export const Modal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(63, 66, 101, 0.9);
  display: flex;
  justify-content: center;
  height: fit-content;
  z-index: 99999;
  animation-name: ${fade};
  animation-duration: 0.6s;
`;
export const DetailsContainer = styled.div`
  width: 56vw;
  background-color: #deecec;
  padding: 48px 32px;
`;

export const ImgDescription = styled.header`
  display: flex;
  gap: 2rem;
  margin-bottom: 32px;
  position: relative;
`;
export const ReadMoreModal = styled.div`
  position: absolute;
  background-color: #2e3057;
  color: white;
  width: 52vw;
  font-size: 10px;
  padding: 18px;
  border-radius: 8px;
  z-index: 9999;
  display: grid;
  grid-template-columns: auto auto;
  animation: ${fade} 0.6s ease-in;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TitleBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PokemanId = styled.div`
  padding: 8px 16px;
  border-left: 2px solid black;
  border-right: 2px solid black;
`;

export const PokemanDesc = styled.p`
  font-size: 16px;
`;

export const PokemonDetailsWrapper = styled.div`
  margin-top: 64px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const PokemonDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const EachDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
export const TypeSpan = styled.span`
  padding: 2px;
  margin-left: 4px;
  border: 1px solid black;
  border-radius: 6px;
  background-color: ${(props) => props.color};
`;

export const StatsDetails = styled.div`
  margin: 64px 0;
  padding: 12px 32px;
  background-color: #b1d2d3;
  border-radius: 16px;
`;
export const StatsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px 64px;
  margin-top: 16px;
`;

export const SkillPercent = styled.div`
  width: ${(props) => `${props.widthValue}%`};
`;

export const ReadMore = styled.span`
  text-decoration: underline;
  cursor: pointer;
  font-weight: 700;
`;
