import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import TicketCard from './components/TicketCard';
import ticketData from './data/tickets.json';

function App() {
  const [customerTickets, setCustomerTickets] = useState(ticketData);
  const [taskStatus, setTaskStatus] = useState([]);
  const [resolvedCount, setResolvedCount] = useState(0);

  const handleAddToTask = (ticket) => {
    // Check if ticket is already in progress
    if (taskStatus.find(t => t.id === ticket.id)) {
      toast.info(`Ticket ${ticket.id} is already in progress!`, {
        position: "top-right",
        autoClose: 2000,
        theme: "light",
      });
      return;
    }

    setTaskStatus([...taskStatus, ticket]);
    toast.success(`Ticket ${ticket.id} added to Task Status!`, {
      position: "top-right",
      autoClose: 2000,
      theme: "light",
    });
  };

  const handleCompleteTask = (ticketId) => {
    // 1. Removed from Task Status
    setTaskStatus(taskStatus.filter(t => t.id !== ticketId));
    
    // 2 & 4. Resolved count increases
    setResolvedCount(prevCount => prevCount + 1);
    
    // 5. Removed from Customer Tickets list
    setCustomerTickets(customerTickets.filter(t => t.id !== ticketId));

    toast.success(`Ticket ${ticketId} resolved successfully! 🎉`, {
      position: "top-right",
      autoClose: 3000,
      theme: "colored",
    });
  };

  const clearResolved = () => {
    setResolvedCount(0);
    toast.info("Resolved count cleared.", { autoClose: 2000 });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      <Navbar />
      
      <main className="flex-grow">
        <Banner 
          inProgressCount={taskStatus.length} 
          resolvedCount={resolvedCount} 
        />

        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mb-12">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Left Column: Customer Tickets */}
            <div className="w-full lg:w-2/3">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Customer Tickets</h2>
                <span className="bg-indigo-100 text-indigo-800 text-sm font-medium px-3 py-1 rounded-full">
                  {customerTickets.length} Total
                </span>
              </div>
              
              {customerTickets.length === 0 ? (
                <div className="bg-white rounded-2xl border border-dashed border-gray-300 p-12 text-center shadow-sm">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">All tasks resolved!</h3>
                  <p className="text-gray-500">Great job clearing out the ticket queue.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {customerTickets.map((ticket) => (
                    <TicketCard 
                      key={ticket.id} 
                      ticket={ticket} 
                      onAddToTask={handleAddToTask} 
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Right Column: Task Status */}
            <div className="w-full lg:w-1/3">
              <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 sticky top-28">
                <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-100">
                  <h2 className="text-xl font-bold text-gray-800 flex items-center">
                    <span className="w-3 h-3 bg-indigo-500 rounded-full mr-2"></span>
                    Task Status
                  </h2>
                  <span className="bg-orange-100 text-orange-800 text-sm font-medium px-2.5 py-0.5 rounded-full">
                    {taskStatus.length} Active
                  </span>
                </div>

                <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                  {taskStatus.length === 0 ? (
                    <div className="text-center py-10 text-gray-500">
                      <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg>
                      </div>
                      <p className="text-sm">No tasks in progress.</p>
                      <p className="text-xs mt-1">Click "Add to Task" on a ticket to begin.</p>
                    </div>
                  ) : (
                    taskStatus.map((task) => (
                      <div key={`task-${task.id}`} className="bg-gray-50 border border-gray-200 rounded-xl p-4 transition-all hover:border-indigo-300">
                        <div className="flex justify-between items-start mb-2">
                          <span className="text-xs font-semibold text-gray-500">{task.id}</span>
                          <span className="w-2 h-2 bg-indigo-600 rounded-full mt-1.5 animate-pulse"></span>
                        </div>
                        <h4 className="text-sm font-bold text-gray-800 mb-4 leading-tight">{task.title}</h4>
                        <button
                          onClick={() => handleCompleteTask(task.id)}
                          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg text-sm font-medium transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1 flex items-center justify-center"
                        >
                          <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                          Complete
                        </button>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
      
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
