import { Link } from "react-router-dom";
import "./navbar.scss";
import { BsPatchPlusFill } from "react-icons/bs";

function Navbar() {
  const links = [
    {
      name: "Homepage",
      link: "/",
    },
    {
      name: "Find friends",
      link: "/find-friends",
    },
  ];
  const HandleCreatePost = (e) => {
    e.preventDefault();
    console.log("Lol");
  };

  return (
    <nav>
      <div className="nav__container">
      <div className="nav__logo">SOCIALZ</div>
        <ul className="nav__links">
          {/* Buttons */}
          {links.map((element) => {
            const { name, link } = element;
            return (
              <Link to={link} className="nav__links--animated">
                {name}
              </Link>
            );
          })}
          <Link to="/">
            <BsPatchPlusFill onClick={HandleCreatePost} className="nav__btn"/>
          </Link>
          {/**/}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
