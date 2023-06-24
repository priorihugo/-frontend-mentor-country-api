import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import * as Styled from "./style";
import { Link } from "react-router-dom";

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
    <Styled.Wrapper>
      {isLoading ? (
        <></>
      ) : (
        <div>
          <Link
            to="/frontend-mentor-country-api/"
            style={{ textDecoration: "none" }}
          >
            <Styled.Button>
              <ArrowBackIcon />
              Voltar
            </Styled.Button>
          </Link>

          <div className="country_info">
            <div className="image">
              <img
                src={
                  country?.flags?.svg
                    ? country?.flags?.svg
                    : country?.flags?.png
                }
                alt={country?.flags?.alt}
              />
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
    </Styled.Wrapper>
  );
}

export default CountryDetails;
