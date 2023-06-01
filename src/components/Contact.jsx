import { useEffect, useRef } from "react";

const Contact = ({ darkMode }) => {
  const topRef = useRef(null);

  useEffect(() => {
    document.title = "Contact | Employee Management System";

    if (topRef.current) {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div
      className={`flex flex-col items-center justify-center h-screen  mx-auto`}
      ref={topRef}
    >
      <div
        className={`max-w-6xl p-8 ${
          darkMode ? "bg-[#1f2937]" : "bg-white"
        }  shadow-xl rounded-lg`}
      >
        <h1 className="text-2xl font-bold md:mb-6 lg:mb-6 xl:mb-6">
          Contract Services
        </h1>
        <p className={` mb-6 ${darkMode ? "text-white" : "text-gray-600"} `}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          cursus quam ac justo fringilla, in volutpat lacus pharetra. Aenean ac
          turpis enim.
        </p>

        <div className="mb-6">
          <h2 className="text-lg font-bold mb-2">Service Details</h2>
          <ul
            className={`list-disc list-inside ${
              darkMode ? "text-white" : "text-gray-600"
            } `}
          >
            <li>Lorem ipsum dolor sit amet</li>
            <li>Consectetur adipiscing elit</li>
            <li>Nulla facilisi</li>
            <li>Etiam sed diam eu nisl pretium</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-2">Contact Us</h2>
          <p className={` mb-2 ${darkMode ? "text-white" : "text-gray-600"} `}>
            If you have any questions or would like to request our contract
            services, please fill out the form below or reach out to us:
          </p>
          <p className={`${darkMode ? "text-white" : "text-gray-600"} `}>
            Phone: <span className="text-blue-500">+1 (123) 456-7890</span>
          </p>
          <p className={`${darkMode ? "text-white" : "text-gray-600"} `}>
            Email:{" "}
            <span className="text-blue-500">info@contractservices.com</span>
          </p>
        </div>

        <form className="mt-8">
          <div className="mb-4">
            <label
              htmlFor="name"
              className={`block ${
                darkMode ? "text-white" : "text-gray-600"
              } font-bold mb-2`}
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className={`block ${
                darkMode ? "text-white" : "text-gray-600"
              } font-bold mb-2`}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className={`block ${
                darkMode ? "text-white" : "text-gray-600"
              } font-bold mb-2`}
            >
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
