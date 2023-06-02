import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

function Navbar({ darkMode, setDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();

  const toggleDarkMode = () => {
    const updatedDarkMode = !darkMode;
    setDarkMode(updatedDarkMode);
    localStorage.setItem("darkMode", JSON.stringify(updatedDarkMode));
  };

  const handleDropeDownChange = (e) => {
    e.preventDefault();

    switch (e.target.value) {
      case "option2":
        navigate("/technology");
        setTimeout(() => {
          e.target.value = "option1";
        }, 500);
        break;
      case "option3":
        window.open("https://github.com/akibahmed229/Java-CRUD-App", `_blank`);
        setTimeout(() => {
          e.target.value = "option1";
        }, 500);
        break;
      case "option4":
        window.open(
          "https://github.com/akibahmed229/Java-Employee_Management-System-Website",
          `_blank`
        );
        setTimeout(() => {
          e.target.value = "option1";
        }, 500);
        break;
      default:
        break;
    }
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const darkModeIcon = darkMode ? faSun : faMoon;

  return (
    <nav className="bg-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="text-white font-semibold text-2xl">
                EmployeeXpert
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <Link
                to="/"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium"
              >
                Home
              </Link>

              <select
                id="dropdown"
                className="text-gray-300 bg-transparent hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium"
                defaultValue="option1"
                onChange={handleDropeDownChange}
              >
                <option value="option1" hidden>
                  Select Category
                </option>
                <option value="option2">Technology</option>
                <option value="option3">JavaProject Code</option>
                <option value="option4">Site Source Code</option>
              </select>

              <Link
                to="/about"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium"
              >
                Contact
              </Link>
              <div onClick={toggleDarkMode}>
                <button
                  className={`w-[50px] h-[50px] hover:scale-50  hover:duration-400 ${
                    darkMode ? "text-white" : "bg-white"
                  } p-1  rounded-full `}
                >
                  <FontAwesomeIcon icon={darkModeIcon} fontSize={"2.4rem"} />
                </button>
              </div>
            </div>
          </div>
          <div className="block md:hidden">
            <button
              onClick={handleMenuToggle}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
            >
              <svg
                className="h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    className="fill-white"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6H20V8H4V6ZM4 11H20V13H4V11ZM20 18H4V16H20V18Z"
                  />
                ) : (
                  <path
                    className="fill-white"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6H20V8H4V6ZM4 11H20V13H4V11ZM4 16H20V18H4V16Z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>

            <select
              id="dropdown"
              onChange={handleDropeDownChange}
              defaultValue="option3"
              className="text-gray-300 bg-transparent  hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              <option value="option1" hidden>
                Select Category
              </option>
              <option value="option2">Technology</option>
              <option value="option3">JavaProject Code</option>
              <option value="option4">Site Source Code</option>
            </select>

            <Link
              to="/about"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </Link>
            <button
              className={`w-[50px] h-[50px]  ${
                darkMode ? "text-white" : "bg-white"
              } p-1  rounded-full `}
              onClick={toggleDarkMode}
            >
              <FontAwesomeIcon icon={darkModeIcon} fontSize={"2.4rem"} />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
