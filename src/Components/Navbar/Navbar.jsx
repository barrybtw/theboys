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
          <Link to="new-blog" className="nav__links--newpost">
            NEW BLOG
          </Link>

          {/**/}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
