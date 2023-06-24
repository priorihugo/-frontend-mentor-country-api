import Input from "../Input";
import Filter from "../Filter";
import * as Styled from './style'

function SearchBar({searchValue , setSearchValue , searchFilter , setSearchFilter}) {

  return (
    <Styled.Wrapper>
      <Input inputValue={searchValue} setInputValue={setSearchValue}/>
      <Filter searchFilter={searchFilter} setSearchFilter = {setSearchFilter} />
    </Styled.Wrapper>
  );
}

export default SearchBar;
