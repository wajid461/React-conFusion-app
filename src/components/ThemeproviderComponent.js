const defaultContextData = {
    dark: false,
    toggle: () => {}
};

const ThemeContext = React.createContext(defaultContextData);
const useTheme= () => React.useContext(ThemeContext);

export {useTheme}