
const FAQ = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h1>
      
      <div className="space-y-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-2">How do I create a new ticket?</h3>
          <p className="text-gray-600">Click the "+ New Ticket" button in the navigation bar to open the creation modal. Fill out the required details such as customer name, title, description, and priority.</p>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-2">How do I mark a ticket as in progress?</h3>
          <p className="text-gray-600">From the Dashboard (Home), find the ticket in the "Customer Tickets" grid and click "Add to Task". It will be moved to the Task Status column on the right.</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-2">How do I resolve a ticket?</h3>
          <p className="text-gray-600">Once a ticket is in the Task Status column, click the "Complete" button. It will be marked as resolved and removed from your queue.</p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
