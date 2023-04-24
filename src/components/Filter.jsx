import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: center;
  justify-content: center;

  background-color: white;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.2);
  border-radius: 5px;

  & select {
    border-radius: 5px;
    border-width: 0px;
    background-color: transparent;
    outline: none;
    height: 40px;
    padding: 0 20px;
    width: 200px;
  }

  & select option {
    padding: 0 20px;
  }
`;

function Filter() {
  return (
    <Wrapper>
      <select placeholder="Filter by region">
        <option>All</option>
        <option>Africa</option>
        <option>America</option>
        <option>Asia</option>
        <option>Europa</option>
        <option>Oceania</option>
      </select>
    </Wrapper>
  );
}

export default Filter;
