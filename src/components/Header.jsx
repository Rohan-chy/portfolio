import { Link, NavLink } from 'react-router-dom';
import pic from '../assets/box.png'

const Header = () => {
    return (
      <nav className="bg-white shadow p-4 fixed top-0 left-0 w-full z-50 mb-10">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link to='/'>
            <div className="flex items-center gap-2 cursor-pointer">
                <img src={pic} alt="logo" />
                <span className="text-gray-800 text-2xl font-bold">TC</span>
              </div>
          </Link>
  
          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8 text-xl font-semibold">
              <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? 'text-blue-500 font-bold' : ''
                  }
                >
                  About
              </NavLink>

              <NavLink
                to="/work"
                className={({ isActive }) =>
                  isActive ? 'text-blue-500 font-bold' : ''
                }
              >
                Work
              </NavLink>

              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive ? 'text-blue-500 font-bold' : ''
                }
              >
                Blog
              </NavLink>
              
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? 'text-blue-500 font-bold' : ''
                }
              >
                Contact
              </NavLink>
          </div>
        </div>
      </nav>
    );
};

export default Header;
