import React, { useState } from "react";
import "../App.css";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles, Buttones } from "../themes.js";

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;


function DarkMode() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
                <Buttones className="small" onClick={() => themeToggler()}>
                    Change Theme
                </Buttones>
    </ThemeProvider>
  );
}

export default DarkMode;