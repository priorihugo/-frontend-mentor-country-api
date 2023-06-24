import { useRoutes } from "react-router-dom";
import CountriesList from "../components/CountriesList";
import CountryDetails from "../components/CountryDetails";

export default function MainRoute() {
  return useRoutes([
    { path: "/", element: <CountriesList /> },
    { path: "/frontend-mentor-country-api/", element: <CountriesList /> },
    { path: "/countries/:name", element: <CountryDetails /> },
    {
      path: "/frontend-mentor-country-api/countries/:name",
      element: <CountryDetails />,
    },
  ]);
}
