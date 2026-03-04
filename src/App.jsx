import { Suspense } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Tickets from "./components/Tickets/Tickets";

const fetchTickets = async () => {
  const res = await fetch("/tickets.json")
  return res.json();
}

function App() {
  const ticketPromise = fetchTickets();


  return (
    <>
      <Header></Header>
      <main className="w-11/12 mx-auto">
        <Banner></Banner>
        <section className="left-side flex justify-between gap-12">
          <div className="customer-tickets w-3/4">
            <h3 className="text-lg font-semibold">Customer Tickets</h3>
            <Suspense fallback={<span className="loading loading-spinner loading-md"></span>}>
              <Tickets ticketPromise={ticketPromise}></Tickets>
            </Suspense>
          </div>
          <div className="right-side w-1/4">
            <h3 className="text-lg font-semibold">Task Status</h3>
            <span>Select a ticket to add to Task Status</span>
            <h3 className="text-lg font-semibold">Resovled Task</h3>
            <span>No resolved tasks yet</span>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
