import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import '../pages/css/Navbar.css';
import { logoutUser } from '../redux/actions';
import image00 from '../pages/C1.jpg';

const Navbar = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <nav className="navbar">
   <div>
   <img
   src={image00}
   
   alt="Main banner" height='60px' width='70px'
 />
   <div className="navbar-brand"> Fashion</div>
   </div>
   <ul className="navbar-links">
        <li>
         <Link to="/"><button>Home</button></Link>
        </li>
        {!user ? (
          <>
            <li>
              <Link to="/login"><button>Login</button></Link>
            </li>
            <li>
              <Link to="/register"><button>Register</button></Link>
            </li>
          </>
        ) : (
          <>
            {user.isAdmin ? (
              <li>
                <Link to="/admin/dashboard"><button>AdminDashboard</button></Link>
              </li>
            ) : (
              <li>
                <Link to="/user/dashboard"><button>UserDashboard</button></Link>
              </li>
            )}
            <li>
              <button onClick={handleLogout} >Logout</button>
            </li>
          </>
        )}
        <li>
          <Link to="/sustainability"><button>Sustainability</button></Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;