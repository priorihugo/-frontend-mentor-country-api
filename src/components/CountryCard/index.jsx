import { Link } from "react-router-dom";
import * as Styled from './style'

function CountryCard({ country }) {
  return (
    <Link
      to={`/frontend-mentor-country-api/countries/${country?.name?.common}`}
      style={{ textDecoration: "none" }}
    >
      <Styled.Wrapper>
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
      </Styled.Wrapper>
    </Link>
  );
}

export default CountryCard;
