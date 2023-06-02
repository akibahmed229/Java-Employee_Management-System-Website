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
      className={`flex flex-col items-center justify-center   mx-auto`}
      ref={topRef}
    >
      <div className="h-screen  flex flex-col justify-center items-center">
        <div
          className={`max-w-6xl p-8 ${
            darkMode ? "bg-[#1f2937]" : "bg-white"
          }  shadow-xl rounded-lg`}
        >
          <h1 className="text-2xl font-bold md:mb-6 lg:mb-6 xl:mb-6">
            Contract Services
          </h1>
          <p
            className={` mb-6 text-m ${
              darkMode ? "text-white" : "text-gray-600"
            } `}
          >
            Our experienced team provides high-quality solutions in areas such
            as legal, financial, consulting, and more. With a focus on contract
            drafting, review, negotiation, and management, we ensure legally
            sound agreements that protect your interests. Our personalized
            approach and industry expertise simplify complex matters and deliver
            effective results. Trust us to handle your contract needs while you
            concentrate on your core business objectives. Contact us today to
            learn how our comprehensive services can help you achieve your
            goals.
          </p>

          <div className="mb-6">
            <h2 className="text-lg font-bold mb-2">Service Details</h2>
            <ul
              className={`list-disc list-inside text-sm space-y-4 ${
                darkMode ? "text-white" : "text-gray-600"
              } `}
            >
              <li>
                User-Friendly Interface: Our site offers a user-friendly
                interface that allows visitors to navigate effortlessly and
                access different sections of the Employee Management system.
              </li>

              <li>
                Project Overview: We provide a detailed overview of the Java
                Employee Management project, explaining its purpose,
                functionalities, and benefits. Visitors can gain a clear
                understanding of how the system streamlines employee management
                tasks.
              </li>

              <li>
                Screenshots and Demo: Through screenshots and a live demo, we
                showcase the system's user interface, demonstrating its
                intuitive design and functionality. Visitors can visually
                experience the system and its features in action.
              </li>
              <li>
                Feature Highlights: We highlight the key features of the
                Employee Management system, such as employee search, data
                update, record addition, and deletion. This helps visitors
                understand how the system simplifies and enhances the management
                of employee details.
              </li>
              <li>
                Technology Stack: We provide information about the technologies
                used in developing the Java Employee Management project,
                including Java, AWT, Swing, and the OS file system. This gives
                visitors insights into the technical aspects of the system.
              </li>
              <li>
                Contact and Support: We offer a contact form for visitors to
                reach out to us with any inquiries or support requests related
                to the Employee Management system. Our team is readily available
                to provide assistance and address any questions or concerns.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className={`${
          darkMode ? "bg-[#1f2937]" : "bg-white"
        } w-[60vw]  p-8  shadow-xl rounded-lg  m-20`}
      >
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

        <form className="mt-8 p-8">
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
