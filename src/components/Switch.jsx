import styled from "styled-components";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items:center;
  gap:15px;
`;

function Switch() {
  return (
    <Wrapper>
        <DarkModeIcon/>
      <h1>Dark Mode</h1>
    </Wrapper>
  );
}

export default Switch;
