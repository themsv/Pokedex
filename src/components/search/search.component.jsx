import styled from "styled-components";
import { useState } from "react";

const Search = ({ filterPokeman }) => {
  const [input, setinput] = useState("");
  const clickHandler = () => {
    filterPokeman(input.toLowerCase());
  };

  return (
    <SearchContainer>
      <SearchTitle>Search by</SearchTitle>
      <SearchBoxWrapper>
        <SearchInput
          type="search"
          placeholder="Name or Number"
          value={input}
          onChange={(e) => setinput(e.target.value)}
        />
        <ion-icon name="search-outline" onClick={clickHandler}></ion-icon>
      </SearchBoxWrapper>
    </SearchContainer>
  );
};

export default Search;

const SearchContainer = styled.div`
  height: 12vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 6px;
  width: 420px;
  margin-bottom: 24px;
`;
const SearchTitle = styled.p``;
const SearchBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  background-color: #adc9c7;
`;
const SearchInput = styled.input`
  border: 0;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  outline: 0;
  padding: 12px 24px;
  width: 90%;
  font-size: 18px;
  background-color: inherit;
`;
