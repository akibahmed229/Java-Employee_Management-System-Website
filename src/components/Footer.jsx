import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 lg:w-1/4 mb-4">
            <h2 className="text-lg font-bold mb-2">Company</h2>
            <ul className="list-none">
              <li className="mb-2">
                <Link to="/about">About Us</Link>
              </li>
              <li className="mb-2">
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4 mb-4 text-center">
            <h2 className="text-lg font-bold mb-2">Resources</h2>
            <ul className="list-none">
              <li className="mb-2">
                <a href="#faq">FAQ</a>
              </li>
              <li className="mb-2">
                <a href="#blog">Blog</a>
              </li>
              <li className="mb-2">
                <a href="#privacy">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4 mb-4 text-center">
            <h2 className="text-lg font-bold mb-2">Social Media</h2>
            <ul className="list-none">
              <li className="mb-2 cursor-pointer">
                <a
                  onClick={() =>
                    window.open("https://www.facebook.com/AhmedAkib229")
                  }
                >
                  Facebook
                </a>
              </li>
              <li className="mb-2 cursor-pointer">
                <a
                  onClick={() =>
                    window.open("https://twitter.com/ahmedakib229")
                  }
                >
                  Twitter
                </a>
              </li>{" "}
              <li className="mb-2 cursor-pointer">
                <a
                  onClick={() =>
                    window.open("https://www.linkedin.com/in/akibahmed229")
                  }
                >
                  LinkeIn
                </a>
              </li>
              <li className="mb-2 cursor-pointer">
                <a onClick={() => window.open("https://instagram.com")}></a>
              </li>{" "}
              <li className="mb-2 cursor-pointer">
                <a
                  onClick={() => window.open("https://github.com/akibahmed229")}
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center mt-4">
        <p className="text-sm">
          © 2023 Employee Management System. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
