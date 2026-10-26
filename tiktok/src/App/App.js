import { useState, createContext } from "react";
import Content from "./Content";
import "../App.css";

export const ThemeContext = createContext();

console.log("ThemeContext:", ThemeContext);

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div style={{ padding: 20 }}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <Content />
      </div>
    </ThemeContext.Provider>
  );
}
export default App;
