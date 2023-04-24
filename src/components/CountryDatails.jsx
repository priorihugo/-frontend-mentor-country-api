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
  align-items: center;
  background-color: white;

  padding: 4px;

  border-radius: 4px;
  box-shadow: 15px rgba(0, 0, 0, 0.2);
`;

function getOfficialName(nativeNameObj) {
  if (!nativeNameObj) {
    return "";
  }
  let nativeNameArr = Object.values(nativeNameObj);
  return nativeNameArr[0]?.official;
}

function getCurrencies(currenciesObj) {
  if (!currenciesObj) {
    return "";
  }
  let currenciesArr = Object.values(currenciesObj);
  let nameAndSymbol = currenciesArr.map(
    (item) => item?.name + " " + item?.symbol
  );
  return nameAndSymbol.join(", ");
}

function getLanguages(languagesObj) {
  if (!languagesObj) {
    return "";
  }
  let languagesArr = Object.values(languagesObj);
  return languagesArr.join(", ");
}

function CountryDetails() {
  const { name } = useParams();
  const [country, setCountry] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetch(`https://restcountries.com/v3.1/name/${name}`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log("json ", json);
        setCountry(json[0]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <Wrapper>
      {isLoading ? (
        <></>
      ) : (
        <div>
          <Button>
            <Link to={"/"}>
              <ArrowBackIcon />
              Back
            </Link>
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
                  {getOfficialName(country?.name?.nativeName)}
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
                  {country?.capital?.join(" , ")}
                </p>
              </div>
              <div className="col_2">
                <p>
                  <span>Top Level Domain: </span>
                  {country?.tld?.join(", ")}
                </p>
                <p>
                  <span>Currencies: </span>
                  {getCurrencies(country?.currencies)}
                </p>
                <p>
                  <span>Languages: </span>
                  {getLanguages(country?.languages)}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </Wrapper>
  );
}

export default CountryDetails;
