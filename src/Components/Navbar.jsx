import { Link } from "react-router-dom";
import "../styles/navbar.scss";
import { useTheme } from "./theme-context";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  console.log(theme);

  return (
    <nav>
      <Link to="/" className="link">
        Home
      </Link>
      <Link to={`/about`} className="link">
        About
      </Link>
      <Link to={`/blog`} className="link">
        My Blog
      </Link>
      <div className="themeToggle">
        <button onClick={toggleTheme} className="toggle">
          {theme === "dark" ? "Light" : "Dark"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
