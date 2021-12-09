import React from "react";
import { Link } from "react-router-dom";
import styles from "./../../Styles/Navbar.module.css";
import { BsPatchPlusFill } from "react-icons/bs";

function Navbar() {
  const links = [
    {
      name: "Homepage",
      link: "/",
    },
    {
      name: "Profilepage",
      link: "/",
    },
  ];
  const HandleCreatePost = (e) => {
    e.preventDefault();
    console.log("Lol");
  };

  return (
    <nav className={styles.navBar}>
      {/* Logo */}
      <div className={styles.navLogo}>SOCIALZ</div>

      {/* List */}
      <ul className={styles.navList}>
        {/* Buttons */}
        {links.map((element) => {
          const { name, link } = element;
          return (
            <Link to={link} className={styles.navAnimated}>
              {name}
            </Link>
          );
        })}
        <Link to="/">
          <BsPatchPlusFill onClick={HandleCreatePost} />
        </Link>
        {/**/}
      </ul>
    </nav>
  );
}

export default Navbar;
