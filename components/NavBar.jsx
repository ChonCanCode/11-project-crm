function NavBar() {
  return (
    <nav className="w-full h-16 bg-white border-b border-gray-200 flex items-center justify-between shadow-sm">
      <div className="flex items-center ml-5">
        <h1 className="text-xl font-semibold text-gray-800">Project CRM</h1>
      </div>

      <div className="flex items-center gap-6">
        <button className="text-gray-600 hover:text-black transition">
          Alerts
        </button>
        <button className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-300 transition">
          U
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
