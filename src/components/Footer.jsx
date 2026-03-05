
const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 mt-12 py-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 flex items-center space-x-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">H</span>
          </div>
          <span className="text-lg font-bold text-gray-800 tracking-tight">CS -- Ticket System</span>
        </div>
        
        <div className="flex justify-center text-sm text-gray-500 text-center md:text-left">
          &copy; {new Date().getFullYear()} HelpDesk Customer Support Zone. All rights reserved.
        </div>
        
        <div className="hidden md:flex space-x-6 text-sm text-gray-500">
          <a href="#" className="hover:text-indigo-600 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-indigo-600 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-indigo-600 transition-colors">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
