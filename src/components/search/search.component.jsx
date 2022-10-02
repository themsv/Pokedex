import styled from "styled-components";

const Search = ({ filterPokeman, searchPokemon }) => {
  const onChangeHandler = (event) => {
    filterPokeman(String(event.target.value.toLowerCase()));
  };

  return (
    <SearchContainer>
      <SearchTitle>Search by</SearchTitle>
      <SearchBoxWrapper>
        <SearchInput
          type="search"
          placeholder="Name or Number"
          value={searchPokemon}
          onChange={onChangeHandler}
        />
        <ion-icon name="search-outline"></ion-icon>
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
