import { toast } from 'react-toastify';

const Navbar = () => {
  const handleNavClick = (e, item) => {
    e.preventDefault();
    toast.info(`Navigated to ${item}`, {
      position: "top-right",
      autoClose: 1500,
      theme: "light",
      icon: "🔗"
    });
  };

  const handleNewTicket = () => {
    toast.success("Opening New Ticket form...", {
      position: "top-right",
      autoClose: 2000,
      theme: "light",
      icon: "📝"
    });
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 py-4 px-6 md:px-12 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center cursor-pointer" onClick={(e) => handleNavClick(e, 'Home')}>
          <span className="text-2xl font-bold text-[#111827] tracking-tight">CS — Ticket System</span>
        </div>

        {/* Menu Items */}
        <div className="hidden lg:flex items-center space-x-7 text-[#4B5563] text-[15px] font-medium">
          {['Home', 'FAQ', 'Changelog', 'Blog', 'Download', 'Contact'].map((item) => (
            <a 
              key={item} 
              href="#" 
              onClick={(e) => handleNavClick(e, item)}
              className="hover:text-purple-600 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Action Button */}
        <div>
          <button 
            onClick={handleNewTicket}
            className="bg-[#8b5cf6] hover:bg-[#7c3aed] text-white px-5 py-2.5 rounded-md text-sm font-medium transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-1 flex items-center gap-1.5"
          >
            <span className="text-lg leading-none mb-[2px]">+</span>
            <span>New Ticket</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
