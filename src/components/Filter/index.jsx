import * as Styled from './style'

function Filter({ searchFilter, setSearchFilter }) {

  return (
    <Styled.Wrapper>
      <select
        placeholder="Filter by region"
        onChange={(evt) => {
          console.log(evt.target.value);
          setSearchFilter(evt.target.value);
        }}
      >
        <option value={""}>All</option>
        <option value={"Africa"}>Africa</option>
        <option value={"Americas"}>America</option>
        <option value={"Asia"}>Asia</option>
        <option value={"Europe"}>Europa</option>
        <option value={"Oceania"}>Oceania</option>
      </select>
    </Styled.Wrapper>
  );
}

export default Filter;
