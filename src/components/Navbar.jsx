
const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 py-4 px-6 md:px-12 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">H</span>
          </div>
          <span className="text-xl font-bold text-gray-800 tracking-tight">HelpDesk</span>
        </div>

        {/* Menu Items */}
        <div className="hidden md:flex items-center space-x-8 text-gray-600 font-medium">
          <a href="#" className="hover:text-indigo-600 transition-colors">Dashboard</a>
          <a href="#" className="hover:text-indigo-600 transition-colors">Tickets</a>
          <a href="#" className="hover:text-indigo-600 transition-colors">Customers</a>
        </div>

        {/* Action Button */}
        <div>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-lg font-medium transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1">
            New Ticket
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
