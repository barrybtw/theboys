import useDarkMode from "../models/ThemeModel";
/// add your color and it's inverse here and then import it in your component to automatically determine the color according to the theme

// FOR EXAMPLE
/// import { useColor } from "../hooks/useColor";
// const c = useColor();
// <h1 style={{color: c.textColor}}>Welcome</h1>  <=== will return #fff if dark mode is on and #111 if light theme

function useColor() {
	const { darkMode: d } = useDarkMode();
	return {
		navColor: d ? "rgb(31, 31, 31)" : "#F9F7F7",
		textColor: d ? "rgb(219, 219, 219)" : "#111",
		inverseTextColor: !d ? "rgb(219, 219, 219)" : "#111",
		contactColor: d ? "#c4c4c4" : "#000",
	};
}

export default useColor;
