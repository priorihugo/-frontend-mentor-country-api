import styled, { keyframes } from "styled-components";
import CountryCard from "./CountryCard";
import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";

const Spin = keyframes`
0% { transform: rotate(0deg); };
100% { transform: rotate(360deg)}; 
`;

const Flex = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: red;
`;

const Spinner = styled.div`
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: spin 2s linear infinite;
  animation-name: ${Spin};
  animation-duration: 8s;
  animation-iteration-count: infinite;
`;

const List = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0 40px;
  justify-content: space-evenly;
  gap: 35px;
  max-width: 100%;
`;

function CountriesList({ nameFilter, selectFilter }) {
  const [isLoading, setIsLoading] = useState(true);

  const [countries, setCountries] = useState([]);
  const [shownCountries, setShownCountries] = useState([]);

  function searchName(input) {
    console.log("input ", input);

    if (input == "" || input == undefined) {
      setShownCountries([...countries]);
      return;
    }

    let data = [...countries];
    //console.log(data);
    let filtered = data.filter((item) => {
      //console.log("item ", item);
      return (
        item?.name?.common?.toLowerCase().includes(input?.toLowerCase()) ||
        item?.name?.common?.toLowerCase().includes(input?.toLowerCase())
      );
    });

    setShownCountries([...filtered]);
  }

  useEffect(() => {
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

  return (
    <>
      {isLoading ? (
        <Flex>
          <Spinner />
        </Flex>
      ) : (
        <>
          <SearchBar />
          <List>
            {countries.map((country, index) => (
              <CountryCard key={index} country={country} />
            ))}
          </List>
        </>
      )}
    </>
  );
}

export default CountriesList;
