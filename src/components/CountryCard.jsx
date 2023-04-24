import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 305px;
  height: 450px;
  background-color: white;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);

  border-radius: 8px;

  overflow: hidden;

  cursor: pointer;

  & div {
    height: 170px;
    width: 100%;
    overflow: hidden;
  }

  & div img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  & p,
  h1 {
    margin: 10px;
    color: black;
  }
`;

function CountryCard({ country }) {
  console.log(country);

  return (
    <Link
      to={`/countries/${country?.name?.common}`}
      style={{ textDecoration: "none" }}
    >
      <Wrapper>
        <div>
          <img src={country?.flags?.png} alt={country.flags.alt} />
        </div>

        <h1>{country?.name?.common}</h1>

        <p>
          <span>Population: {country.population} </span>
        </p>
        <p>
          <span>Region: {country.region}</span>
        </p>
        <p>
          <span>Capital: {country.capital}</span>
        </p>
      </Wrapper>
    </Link>
  );
}

export default CountryCard;
