import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div
      className="flex justify-between text-xl text-white bg-gray-800 p-4 items-center fixed z-10 w-full top-0"
      style={{ width: 'inherit' }}
    >
      <span className="pl-4 text-2xl text-white">Project Status</span>
      <div>
        <Link to="/home">
          <button className="transform transition hover:scale-105 hover:text-blue-300 mx-2">
            Home
          </button>
        </Link>
        <Link to="/about">
          <button className="transform transition hover:scale-105 hover:text-blue-300 mx-2">
            About
          </button>
        </Link>
        <Link to="/admin">
          <button className="transform transition hover:scale-105 hover:text-blue-300 mx-2">
            Admin
          </button>
        </Link>
      </div>
    </div>
  );
};
