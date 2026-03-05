import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Resolveds from "./components/Resolveds/Resolveds";
import Statuses from "./components/Statuses/Statuses";
import Tickets from "./components/Tickets/Tickets";

function App() {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);

  const [addTasks, setAddTasks] = useState([]);
  const [getResolved, setGetResolved] = useState([]);

  useEffect(() => {
    fetch("/tickets.json")
      .then((res) => res.json())
      .then((data) => setTickets(data))
      .finally(() => setLoading(false));
  }, []);

  const handleAddTask = (ticket) => {
    const alreadyAdded = addTasks.find((t) => t.id === ticket.id);

    if (alreadyAdded) {
      toast.warning("This ticket is already added!");
      return;
    }

    setAddTasks([...addTasks, ticket]);
    toast.success("Ticket added to Task Status!");
  };

  const handleCompleteBtn = (task) => {
    setAddTasks((prev) => prev.filter((t) => t.id !== task.id));

    setGetResolved((prev) => [...prev, task]);

    setTickets((prev) => prev.filter((t) => t.id !== task.id));

    toast.success("Task completed successfully!");
  };

  return (
    <>
      <Header />
      <main className="w-11/12 mx-auto">
        <Banner addTasks={addTasks} getResolved={getResolved} />
        <section className="flex justify-between gap-12 mb-15">
          <div className="left-side customer-tickets w-3/4">
            <h3 className="text-lg font-semibold">Customer Tickets</h3>

            {loading ? (
              <div className="flex justify-center items-center h-40">
                <span className="loading loading-spinner loading-md"></span>
              </div>
            ) : (
              <Tickets tickets={tickets} handleAddTask={handleAddTask} />
            )}
          </div>
          <div className="right-side w-1/4">
            <h3 className="text-lg font-semibold">Task Status</h3>
            <Statuses
              addTasks={addTasks}
              handleCompleteBtn={handleCompleteBtn}
            />

            <h3 className="text-lg font-semibold mt-8">Resovled Task</h3>
            <Resolveds getResolved={getResolved} />
          </div>
        </section>
      </main>
      <ToastContainer />
      <Footer />
    </>
  );
}

export default App;
