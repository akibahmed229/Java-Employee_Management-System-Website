import { useEffect, useRef } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageSlider = () => {
  const images = [
    {
      src: "https://i.pinimg.com/originals/a7/6d/83/a76d83daba2effd74bd78bc061ba8675.jpg",
      alt: "Image 1",
    },
    {
      src: "https://images.pexels.com/photos/2913125/pexels-photo-2913125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Image 2",
    },
    {
      src: "https://images.pexels.com/photos/15245702/pexels-photo-15245702/free-photo-of-anathema.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Image 3",
    },
  ];

  return (
    <Carousel
      showThumbs={true}
      infiniteLoop={true}
      autoPlay={true}
      interval={3000}
      showStatus={false}
      showIndicators={true}
      className="mt-8 mb-8"
    >
      {images.map((image, index) => (
        <div key={index} className="mb-10 w-[30%] h-[auto] m-auto">
          <img src={image.src} alt={image.alt} className="object-cover " />
        </div>
      ))}
    </Carousel>
  );
};

const Home = ({ darkMode }) => {
  const topRef = useRef(null);

  useEffect(() => {
    document.title = "Employee Management System";

    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const darkModeOn = darkMode ? "dark:bg-gray-900 text-white" : "";

  return (
    <div>
      <div
        className="flex flex-col items-center justify-center min-h-screen"
        ref={topRef}
      >
        <h1 className="md:text-4xl lg:text-4xl xl:text-4xl text-2xl font-bold mb-8 ">
          Employee Management System
        </h1>
        <p
          className={`md:text-xl lg:text-xl xl:text-xl ${
            darkModeOn ? "text-white" : "text-gray-700"
          } mb-8`}
        >
          Employee Management System using Java AWT &amp; Swing, with CRUD
          operations using OS file system.
        </p>
        <div
          className={`
            ${darkModeOn ? "bg-[#1f2937]" : "bg-white"}
           rounded-lg shadow-2xl  p-6`}
        >
          <h2 className="md:text-2xl lg:text-2xl xl:text-2xl font-bold mb-4">
            Main Features
          </h2>
          <ul className="list-disc ml-8">
            <li>Search and display employee details based on employee ID.</li>
            <li>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Update employee details such as name, father's name, date of
              birth, salary, address, phone, email, and highest education.
            </li>
            <li>Add new employees to the system.</li>
            <li>Delete existing employees from the system.</li>
            <li>Navigate through employee records using navigation buttons.</li>
            <li>Store employee data in a text file in the OS file system.</li>
          </ul>
          <p className={`${darkModeOn ? "text-white" : "text-gray-700"} mt-4`}>
            The program uses Java AWT &amp; Swing libraries for the graphical
            interface and performs CRUD operations on employee data stored in
            the OS file system.
          </p>
        </div>
      </div>

      <div>
        <div className="flex flex-col items-center">
          <h1 className="md:text-3xl lg:text-3xl xl:text-3xl text-xl font-bold">
            System Screen Shot - A Glimpse of the System
          </h1>
          <ImageSlider />
        </div>
      </div>
    </div>
  );
};

export default Home;
