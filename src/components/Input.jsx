import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: center;
  justify-content:center;

  background-color: white;
  box-shadow: 0 3px 15px rgba(0,0,0,0.2);
  border-radius: 5px;
  padding: 0 0 0 15px;
  gap: 5px;

  & input{
    border-radius: 5px;
    border-width: 0px;
    background-color: transparent;
    outline: none;
    height: 40px;

  }
`;
function Input() {
  return (
    <Wrapper>
      <SearchIcon />
      <input
        type="text"
        placeholder="Search for a country"
      />
    </Wrapper>
  );
}

export default Input;
