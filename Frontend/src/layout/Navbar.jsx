import { Link } from "react-router-dom";

const Navbar = () => {
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <nav>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <button onClick={logout}>Logout</button>
    </nav>
  );
};

export default Navbar;