import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  backgroundColor?: string;
}

const Header: React.FC<HeaderProps> = ({ backgroundColor }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const dropdownOptions = [
    { name: "Home", path: "/" },
    { name: "Chef Miko", path: "/chef-miko" },
    { name: "Chef Carlos", path: "/chef-carlos" },
    { name: "Chef Ivan", path: "/chef-ivan" },
    { name: "Chef Cléo", path: "/chef-cleo" },
  ];

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentPageName =
    dropdownOptions.find(option => option.path === location.pathname)?.name || "Menu";

  const logoLinkPath = "/"; 

  return (
    <header className="header" style={backgroundColor ? { backgroundColor } : {}}>
      <div className="header-content">
      <Link to={logoLinkPath} className="logo-text-link">
          <div className="logo-text">GATOUCA</div>
      </Link>
        <nav className="nav-dropdown" ref={dropdownRef}>
          <button onClick={toggleDropdown} className="dropdown-button">
            <span>{currentPageName}</span>
            <i className="dropdown-arrow"></i>
          </button>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              {dropdownOptions.map(option => (
                <Link key={option.name} to={option.path} onClick={() => setIsDropdownOpen(false)}>
                  {option.name}
                </Link>
              ))}
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
