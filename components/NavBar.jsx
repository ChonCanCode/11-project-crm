import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav className="pl-5 pr-5 w-full h-16 bg-white border-b border-gray-200 flex items-center justify-between shadow-sm">
        <div className="flex items-center cursor-pointer">
          <Link
            className="text-xl font-semibold text-gray-800 hover:text-red-400"
            to="/"
          >
            Project CRM
          </Link>
        </div>
        <div>
          <Link className="text-gray-800 hover:text-red-400" to="/Properties">
            Properties
          </Link>
        </div>
        <div className="flex items-center gap-6">
          <button className="text-gray-600 hover:text-red-400 transition cursor-pointer w-9 h-9 rounded-full hover:bg-gray-300">
            <i class="fa-solid fa-bell"></i>
          </button>
          <button className="w-9 h-9 rounded-full hover:text-red-400 flex items-center justify-center text-gray-700 hover:bg-gray-300 transition cursor-pointer">
            U
          </button>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
