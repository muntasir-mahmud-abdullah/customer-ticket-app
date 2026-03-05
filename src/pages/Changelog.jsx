
const Changelog = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Changelog</h1>
        <span className="bg-purple-100 text-purple-700 font-medium px-3 py-1 rounded-full text-sm">v1.1.0</span>
      </div>
      
      <div className="relative border-l-2 border-gray-200 ml-3 md:ml-6 space-y-12">
        <div className="relative pl-8">
          <div className="absolute -left-2.5 top-1.5 w-5 h-5 bg-white border-4 border-purple-500 rounded-full"></div>
          <p className="text-sm font-bold text-purple-600 mb-1">March 5, 2026</p>
          <h3 className="text-xl font-bold text-gray-800 mb-3">Version 1.1.0 - The Routing Update</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Added React Router for seamless navigation between pages.</li>
            <li>Implemented 'New Ticket' Modal for dynamic ticket creation.</li>
            <li>Rebranded Navbar and added standard secondary pages (FAQ, Blog).</li>
            <li>Added wave vector background to Banner statistics cards.</li>
          </ul>
        </div>
        
        <div className="relative pl-8">
          <div className="absolute -left-2.5 top-1.5 w-5 h-5 bg-white border-4 border-gray-300 rounded-full"></div>
          <p className="text-sm font-bold text-gray-500 mb-1">March 4, 2026</p>
          <h3 className="text-xl font-bold text-gray-800 mb-3">Version 1.0.0 - Initial Release</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Launched base application structure.</li>
            <li>Added responsive Tailwind UI blocks.</li>
            <li>Integrated React-Toastify for fluid user feedback constraints.</li>
            <li>Created 10 mock starting tickets.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Changelog;
