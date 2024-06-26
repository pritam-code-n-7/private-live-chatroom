import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex justify-center items-center ">
      <div className="flex flex-col p-6 max-w-lg border border-cyan-500 bg-neutral-900 rounded items-center justify-center text-white">
        <p className="text-lg font-[roboto]">404 Not Found</p>
        <Link to="/" className="text-blue-500 underline font-bold">
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
