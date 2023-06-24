import CountryCard from "../CountryCard";
import { useEffect, useState } from "react";
import SearchBar from "../SearchBar";
import { Spinner } from "../Spinner";

import * as Styled from "./style";

function CountriesList({ nameFilter, selectFilter }) {
  const [isLoading, setIsLoading] = useState(true);

  const [countries, setCountries] = useState([]);
  const [shownCountries, setShownCountries] = useState([]);

  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");


  function searchCountries(searchName, regionfilter) {
    console.log("searchName ", searchName, "regionFilter ", regionfilter);

    let data = [...countries];

    console.log("****", data);

    //pegando a região
    if (regionfilter !== "" && regionfilter !== undefined) {
      let regionFiltered = data.filter((item) => {
        return item.region.toLowerCase() === regionfilter.toLowerCase();
      });
      data = [...regionFiltered];
    }
    console.log("***", data);

    //pegando por nome
    if (searchName !== "" && searchName !== undefined) {
      let nameFiltered = data.filter((item) => {
        //console.log("item ", item);
        return item.name?.common
          ?.toLowerCase()
          .includes(searchName.toLowerCase());
      });
      data = [...nameFiltered];
    }
    console.log("**", data);

    setShownCountries([...data]);
    //console.log(data);
  }

  useEffect(() => {
    console.log("fetching");

    fetch("https://restcountries.com/v3.1/all")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        const sorted = json.sort((a, b) =>
          a?.name?.common.localeCompare(b?.name?.common)
        );
        setCountries(sorted);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    searchCountries(search, filter);
  }, [search, filter, countries]);

  return (
    <>
      {isLoading ? (
        <Styled.Flex>
          <Spinner />
        </Styled.Flex>
      ) : (
        <>
          <SearchBar
            searchFilter={filter}
            setSearchFilter={setFilter}
            searchValue={search}
            setSearchValue={setSearch}
          />
          <Styled.List>
            {shownCountries.map((country, index) => (
              <CountryCard key={index} country={country} />
            ))}
          </Styled.List>
        </>
      )}
    </>
  );
}

export default CountriesList;
