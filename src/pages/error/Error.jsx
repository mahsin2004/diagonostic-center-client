
import { Link } from "react-router-dom";

const Error = () => {

  return (
    <div>
      <section className="flex items-center h-full p-8 dark:bg-gray-900 dark:text-gray-100">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-4">
          <div className="max-w-sm text-center">
            <h2 className="mb-8 font-extrabold text-5xl dark:text-gray-600">
              <img src="https://i.postimg.cc/hPRLVL8b/error1.png" alt="Image" />
            </h2>
            <p className="text-2xl mb-8 font-semibold md:text-3xl">
              Sorry, we could not find this page.
            </p>
            <Link
              to="/"
              className="px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
            >
              <button className="text-xl bg-black text-white px-6 py-2 rounded-xl">Back to homepage</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};


export default Error;
