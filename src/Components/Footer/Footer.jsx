import React from "react";
import './footer.scss';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="container">
        <p>Socialz Copyright &copy; {year}</p>
      </div>
    </footer>
  );
}

export default Footer;
