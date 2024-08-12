import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link ,useNavigate} from 'react-router-dom';
import '../pages/css/Navbar.css';
import { logoutUser } from '../redux/actions';

const Navbar = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate= useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login", { replace: true });
    window.history.pushState(null, "", window.location.origin);
    window.addEventListener("popstate", function(event) {
      window.history.pushState(null, "", window.location.origin);
    });
    dispatch(logoutUser());
    window.location.href = '/login';
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">Fashion Rental</div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        {!user ? (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        ) : (
          <>
            {user.isAdmin ? (
              <li>
                <Link to="/admin/dashboard">Admin Dashboard</Link>
              </li>
            ) : (
              <li>
                <Link to="/user/dashboard">User Dashboard</Link>
              </li>
            )}
            <li>
              <button onClick={handleLogout} className="logout-button">Logout</button>
            </li>
          </>
        )}
        <li>
          <Link to="/sustainability">Sustainability</Link>
        </li>
        <li>
          <Link to="/landing">About Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
