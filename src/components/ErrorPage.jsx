import { useEffect, useRef } from "react";

const ErrorPage = () => {
  const topRef = useRef(null);

  useEffect(() => {
    document.title = "Error 404";

    if (topRef.current) {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center h-screen"
      ref={topRef}
    >
      <h1 className="text-8xl font-bold text-red-500 mb-4">Error 404</h1>
      <p className="text-2xl text-gray-800">Page not found</p>
      <button
        onClick={() => window.history.back()}
        className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-xl px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 m-5"
      >
        Go Back
      </button>
    </div>
  );
};

export default ErrorPage;
