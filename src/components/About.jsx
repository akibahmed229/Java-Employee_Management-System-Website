import { useEffect, useRef } from "react";

const About = () => {
  const topRef = useRef(null);

  const developers = [
    {
      name: "Akib Ahmed",
      role: "Full Stack Developer",
      photo:
        "https://images.unsplash.com/photo-1610353458972-73d1d9313347?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Pollob Chondro Dash",
      role: "Fronted Developer",
      photo:
        "https://images.unsplash.com/photo-1606893995103-a431bce9c219?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBob3RvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Himel",
      role: "UI/UX Designer",
      photo:
        "https://images.unsplash.com/photo-1550703703-c6f229024ba9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHBob3RvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Nahid",
      role: "UI/UX Designer",
      photo:
        "https://images.unsplash.com/photo-1606122017369-d782bbb78f32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHBob3RvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
  ];

  useEffect(() => {
    document.title = "About | Employee Management System";

    if (topRef.current) {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen"
      ref={topRef}
    >
      <h1 className="text-4xl font-bold mb-8 mt-8">
        About Employee Management System
      </h1>
      <div className=" rounded-lg shadow-2xl p-6">
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <p className="text-gray-700">
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
        <h2 className="text-2xl font-bold mt-6 mb-4">Developers</h2>

        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {developers.map((developer, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4">
              <img
                src={developer.photo}
                alt={developer.name}
                className="w-[60%] h-46 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2 text-center">
                {developer.name}
              </h3>
              <p className="text-gray-700 text-center">{developer.role}</p>
            </div>
          ))}
        </div>
      </div>

      <p className="text-gray-700 mt-4 mb-8">
        The Employee Management System simplifies the process of managing
        employee information and ensures efficient data storage and retrieval.
      </p>
    </div>
  );
};

export default About;
