import styled from "styled-components";
import Input from "./Input";
import Filter from "./Filter";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 15px;

  @media (max-width: 650px) {
    flex-direction: column;

    & Input{
        flex: 1;
        width: 100%;
    }
    & Filter{
        flex: 1;
        width: 100%;
    }

  }

  padding: 40px;
`;

function SearchBar() {
  return (
    <Wrapper>
      <Input />
      <Filter />
    </Wrapper>
  );
}

export default SearchBar;
