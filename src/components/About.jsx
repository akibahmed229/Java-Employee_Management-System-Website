import { useEffect, useRef } from "react";

const About = ({ darkMode }) => {
  const topRef = useRef(null);

  const developers = [
    {
      name: "Akib Ahmed",
      role: "Full Stack Developer",
      photo: "/images/Ahmed-logo.jpg",
    },
    {
      name: "Pallab Chandra Das",
      role: "Fronted Developer",
      photo: "/images/pollob.png",
    },
    {
      name: "Hemel",
      role: "UI/UX Designer",
      photo: "/images/Hemel.jpg",
    },
    {
      name: "MD Nahidul Islam",
      role: "UI/UX Designer",
      photo: "/images/nahidjpg.jpg",
    },
  ];

  useEffect(() => {
    document.title = "About | Employee Management System";

    if (topRef.current) {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center " ref={topRef}>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mb-8 mt-8">
          About Employee Management System
        </h1>
        <div
          className={`rounded-lg shadow-2xl p-6 ${
            darkMode ? "bg-[#1f2937]" : "bg-white"
          }`}
        >
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className={`${darkMode ? "text-white" : "text-gray-700"} mb-8`}>
            The Employee Management System is a Java-based application that
            provides a user-friendly interface for managing employee details.
          </p>
          <h2 className="text-2xl font-bold mt-6 mb-4">Features</h2>
          <ul className="list-disc ml-8">
            <li>Perform CRUD operations on employee data</li>
            <li>Search, view, update, and remove employee records</li>
            <li>Store employee data using the OS file system</li>
            <li>Utilize Java AWT &amp; Swing for the graphical interface</li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mt-6 mb-4">Developers</h2>

        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {developers.map((developer, index) => (
            <div
              key={index}
              className={`${
                darkMode ? "bg-[#1f2937]" : "bg-white"
              } rounded-lg shadow-md p-4`}
            >
              <img
                src={developer.photo}
                alt={developer.name}
                className="object-cover w-[35rem] h-[30rem] mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2 text-center">
                {developer.name}
              </h3>
              <p
                className={`${
                  darkMode ? "text-white" : "text-gray-700"
                } text-center`}
              >
                {developer.role}
              </p>
            </div>
          ))}
        </div>

        <p
          className={`${darkMode} ? "text-white" : "text-gray-700"} mt-4 mb-8`}
        >
          The Employee Management System simplifies the process of managing
          employee information and ensures efficient data storage and retrieval.
        </p>
      </div>
    </div>
  );
};

export default About;
