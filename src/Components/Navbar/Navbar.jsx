import { Link } from "react-router-dom";
import "./navbar.scss";

function Navbar() {
  const links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Blogs",
      link: "/find-friends",
    },
    {
      name: "Personal Blogs",
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
          <a
            href="/"
            className="nav__links--newpost"
            onClick={HandleCreatePost}
          >
            NEW POST
          </a>

          {/**/}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
