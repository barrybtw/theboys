import React from "react";
import footer from "./../../Styles/Footer.module.css";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={footer.footer}>
      <p>SOCIALZ Copyright &copy; {year}</p>
    </footer>
  );
}

export default Footer;
