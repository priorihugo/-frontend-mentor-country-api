import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import * as Styled from "./style";
import { useTheme } from "../../hooks/useTheme";

function Switch() {
  const { theme, toggle } = useTheme();
  return (
    <Styled.Button
      onClick={() => {
        toggle();
      }}
    >
      <Styled.Wrapper>
        {theme.name === "light" ? (
          <DarkModeIcon color={theme.colors.text} />
        ) : (
          <LightModeIcon />
        )}
        {theme.name === "light" ? <h1>Dark Mode</h1> : <h1>Light Mode</h1>}
      </Styled.Wrapper>
    </Styled.Button>
  );
}

export default Switch;
