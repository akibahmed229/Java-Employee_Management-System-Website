import { useEffect, useRef } from "react";

const Techonology = () => {
  const topRef = useRef(null);

  useEffect(() => {
    document.title = "Techonology Used";

    if (topRef.current) {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="min-h-screen" ref={topRef}>
      <div className="container mx-auto py-10">
        <h1 className="text-4xl font-bold mb-6">Technology Used</h1>

        <div className="bg-white rounded-lg shadow-md p-4  w-40 h-44 justify-center items-center mx-auto mt-8 mb-8 ">
          <img
            src="https://www.masabi.com/wp-content/uploads/2016/09/java.jpg.pagespeed.ce_.NW8R5L_LgT.jpg"
            alt="Java"
            className="rounded-full  mx-auto mb-4"
          />
        </div>

        <div className="bg-white p-6 rounded-md shadow-2xl">
          <h2 className="text-2xl font-bold mb-4">Java AWT & Swing</h2>
          <p className="text-gray-700 mb-4">
            Java AWT (Abstract Window Toolkit) and Swing libraries are utilized
            for creating the graphical user interface of the Employee Management
            System. These libraries provide a set of components and classes to
            build the UI components such as labels, text fields, choice boxes,
            and buttons.
          </p>
          <p className="text-gray-700 mb-4">
            AWT and Swing offer a rich set of features for creating interactive
            and responsive interfaces. They provide the foundation for building
            the user interface elements and handling user interactions.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4  w-40 h-44 justify-center items-center mx-auto mt-8 mb-8 ">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsYLmm2407UdgK3iJAovwPFTPS98-iwSNCC_x7FPc3K5Y7ES_nSZ9dxAZPZhhkC1UL1QM&usqp=CAU"
            alt="Java"
            className="mx-auto mb-4"
          />
        </div>

        <div className="bg-white p-6 mt-6 rounded-md shadow-2xl">
          <h2 className="text-2xl font-bold mb-4">JCalendar</h2>
          <p className="text-gray-700 mb-4">
            JCalendar is a Java library used in the Employee Management System
            for handling date selection and display. It provides a calendar
            component that allows users to pick a date conveniently.
          </p>
          <p className="text-gray-700 mb-4">
            The JCalendar library offers various features such as customizable
            date formats, date range selection, and internationalization
            support. It enhances the user experience by simplifying the
            selection and management of dates in the application.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4  w-40 h-44 justify-center items-center mx-auto mt-8 mb-8 ">
          <img
            src="https://img.favpng.com/19/14/20/linux-macos-operating-systems-macintosh-computer-png-favpng-sVnFBiVAPzUM51XGtSSSGm6m6.jpg"
            alt="Java"
            className="object-cover  h-40  mx-auto mb-4"
          />
        </div>

        <div className="bg-white p-6 mt-6 rounded-md shadow-2xl">
          <h2 className="text-2xl font-bold mb-4">OS File System</h2>
          <p className="text-gray-700 mb-4">
            The Employee Management System leverages the OS file system for
            performing CRUD operations on employee data. Employee details are
            stored in a text file within the file system, allowing for easy
            management and persistence of employee records.
          </p>
          <p className="text-gray-700 mb-4">
            By utilizing the OS file system, the program enables efficient
            storage and retrieval of employee data. It uses file read and write
            operations to interact with the text file, ensuring the integrity
            and availability of the data.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Techonology;
