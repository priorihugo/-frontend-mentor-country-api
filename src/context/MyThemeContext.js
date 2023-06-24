import { createContext, useState } from "react";
import { light } from "../styles/themes/light";
import { dark } from "../styles/themes/dark";
import { ThemeProvider } from "styled-components";

export const MyThemeContext = createContext();

export function MyThemeProvider({ children }) {
  const [myTheme, setTheme] = useState(light);

  const toggle = () => {
    console.log("togle");

    if (myTheme.name === 'light') {
      console.log("dark");
      setTheme(dark);
    } else {
      console.log("light");
      setTheme(light);
    }
  };
  return (
    <MyThemeContext.Provider value={{ theme: myTheme, toggle: toggle }}>
      <ThemeProvider theme={myTheme}>{children}</ThemeProvider>
    </MyThemeContext.Provider>
  );
}
