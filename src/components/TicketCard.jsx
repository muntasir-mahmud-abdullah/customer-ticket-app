
const priorityColors = {
  High: 'bg-red-100 text-red-700 border-red-200',
  Medium: 'bg-amber-100 text-amber-700 border-amber-200',
  Low: 'bg-emerald-100 text-emerald-700 border-emerald-200'
};

const TicketCard = ({ ticket, onAddToTask }) => {
  const { id, title, description, customer, priority, createdAt } = ticket;
  
  // Format date to readable string
  const formattedDate = new Date(createdAt).toLocaleDateString('en-US', {
    month: 'short', day: 'numeric', year: 'numeric'
  });

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-shadow relative overflow-hidden group flex flex-col h-full">
      {/* Top Section */}
      <div className="flex justify-between items-start mb-3">
        <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-1 rounded">
          {id}
        </span>
        <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${priorityColors[priority] || 'bg-gray-100 text-gray-700'}`}>
          {priority} Priority
        </span>
      </div>

      {/* Main Content */}
      <div className="flex-grow">
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 leading-tight">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {description}
        </p>
      </div>

      {/* Footer Info */}
      <div className="flex justify-between items-center border-t border-gray-50 pt-4 mt-auto">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-xs uppercase">
            {customer.charAt(0)}
          </div>
          <div>
            <p className="text-xs font-medium text-gray-900">{customer}</p>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>
        
        <button 
          onClick={() => onAddToTask(ticket)}
          className="bg-indigo-50 hover:bg-indigo-100 text-indigo-700 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors border border-indigo-200"
        >
          Add to Task
        </button>
      </div>
    </div>
  );
};

export default TicketCard;
