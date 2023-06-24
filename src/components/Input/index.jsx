
import SearchIcon from "@mui/icons-material/Search";
import { useRef } from "react";

import * as Styled from './style'

function Input({ inputValue, setInputValue }) {

  return (
    <Styled.Wrapper>
      <SearchIcon />

      <input
        type="text"
        placeholder="Search for a country"
        onChange={(evt) => {
          console.log(evt.target.value);
          setInputValue(evt.target.value);
        }}
      />
    </Styled.Wrapper>
  );
}

export default Input;
