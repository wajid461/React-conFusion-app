import styled, { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#fff",
  fontColor: "#000",
};

export const darkTheme = {
  body: "#1a1919",
  fontColor: "#fff",
};

export const Buttones = styled.button.attrs(props => ({
    className: "small",
  }))`
    background: #24a0ed;
    color: black;
    cursor: pointer;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid black;
    border-radius: 3px;
  `;


export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.body};
	}
    fontColor {
        color: ${(props) => props.theme.fontColor}
    }
`;