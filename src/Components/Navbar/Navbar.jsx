import React from "react";
import { Link } from "react-router-dom";
import styles from "./../../Styles/Navbar.module.css";

function Navbar() {
  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log("Works!");
  };
  return (
    <nav className={styles.navBar}>
      {/* Logo */}
      <div className={styles.navLogo}>SOCIALZ</div>

      {/* List */}
      <ul className={styles.navList}>
        {/* Buttons */}
        <Link to="/">Homepage</Link>
        {/**/}
        {/* Search function */}
        <form action="submit" className="nav-searchbar" onSubmit={HandleSubmit}>
          <input type="text" placeholder="Search..." />
          <button>Search</button>
        </form>
      </ul>
    </nav>
  );
}

export default Navbar;
