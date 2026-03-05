
const Banner = ({ inProgressCount, resolvedCount }) => {
  return (
    <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 text-white rounded-2xl p-8 mb-8 shadow-lg mt-6 mx-4 md:mx-auto max-w-7xl relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-purple-300 opacity-20 rounded-full blur-2xl"></div>
      
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight">Customer Support Zone</h1>
          <p className="text-indigo-100 text-lg">Manage and resolve customer tickets efficiently.</p>
        </div>
        
        <div className="flex space-x-4 md:space-x-8">
          {/* Stats Card: In Progress */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 text-center min-w-[120px]">
            <p className="text-indigo-100 text-sm font-medium uppercase tracking-wider mb-1">In Progress</p>
            <p className="text-3xl font-bold">{inProgressCount}</p>
          </div>
          
          {/* Stats Card: Resolved */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 text-center min-w-[120px]">
            <p className="text-indigo-100 text-sm font-medium uppercase tracking-wider mb-1">Resolved</p>
            <p className="text-3xl font-bold">{resolvedCount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
