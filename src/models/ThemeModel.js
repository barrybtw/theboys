import React from "react";
import { createModel } from "hox";
import useLocalStorage from "../hooks/useLocalStorage";

const useThemeToggle = () => {
	const [darkMode, setDarkMode] = useLocalStorage(
		"theme",
		window.matchMedia("(prefers-color-scheme: dark)").matches
	);

	React.useEffect(() => {
		document.body.classList.toggle("dark-mode", darkMode);
	}, [darkMode]);

	const toggle = () => setDarkMode((x) => !x);
	return { darkMode, toggle, setDarkMode };
};

export default createModel(useThemeToggle);
