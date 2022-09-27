import styled from "styled-components";

export const Modal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(63, 66, 101, 0.9);
  display: flex;
  justify-content: center;
  z-index: 100;
`;
export const DetailsContainer = styled.div`
  width: 54vw;
  background-color: #deecec;
  padding: 48px 32px;
`;

export const ImgDescription = styled.header`
  display: flex;
  gap: 2rem;
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
  font-size: 18px;
`;
