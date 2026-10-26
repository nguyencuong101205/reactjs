import React, { useContext } from "react";
import { ThemeContext } from "./App";
import "../App.css";

function Paragragh() {
  const { theme } = useContext(ThemeContext);
  console.log("Theme in Paragraph:", theme);
  return (
    <div>
      <p className={theme}>Paragraph</p>
    </div>
  );
}
export default Paragragh;
