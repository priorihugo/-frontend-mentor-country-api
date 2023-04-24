import { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 40px;

  & .country_info {
    display: flex;
    flex-direction: row;

    justify-content: space-between;

    gap: 100px;
    margin-top: 20px;
  }
  & .image {
    display: flex;
    flex: 1;
    align-items: center;
    justify-items: center;
  }

  & .image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  & .info {
    display: flex;
    width: 40%;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 15px;
    justify-content: space-between;
  }

  & .info .col_1 {
    display: flex;
    flex: 1;
    gap: 0;
    flex-direction: column;
    flex-wrap: wrap;
  }

  & .info .col_2 {
    display: flex;
    flex: 1;
    flex-direction: column;
    flex-wrap: wrap;
  }

  & h1 {
    width: 100%;
  }

  & p {
    margin: 4px 0;
    padding: 0;
  }
`;

const Button = styled.div`
  display: flex;
  justify-items: center;
  background-color: white;

  padding: 4px;

  border-radius: 4px;
  box-shadow: 15px rgba(0, 0, 0, 0.2);
`;

function CountryDetails() {
  const { name } = useParams();
  const [country, setCountry] = useState({});

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${name}`)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log("json ", json);
        setCountry(json[0]);
      });
  }, []);

  return (
    <Wrapper>
      <div>
        <Button>

            Back
  
        </Button>

        <div className="country_info">
          <div className="image">
            <img src={country?.flags?.png} alt={country?.flags?.alt} />
          </div>

          <div className="info">
            <h1>{country?.name?.common}</h1>
            <div className="col_1">
              <p>
                <span>Native Name: </span>
                {country?.name?.nativeName?.swe?.official}
              </p>
              <p>
                <span>Population: </span>
                {country?.population}
              </p>

              <p>
                <span>Region: </span>
                {country?.region}
              </p>
              <p>
                <span>Subregion: </span>
                {country?.subregion}
              </p>
              <p>
                <span>Capital: </span>
                {country?.capital?.map((item) => (
                  <p>{item}</p>
                ))}
              </p>
            </div>
            <div className="col_2">
              <p>
                <span>Top Level Domain: </span>
                {country?.tld?.map((item) => item)}
              </p>
              <p>
                <span>Currencies: </span>
                {Object.keys(country?.currencies).map((item) => {
                  return country?.currencies[item]?.name;
                })}
              </p>
              <p>
                <span>Languages: </span>
                {Object.values(country?.languages)?.map((item) => item)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default CountryDetails;
