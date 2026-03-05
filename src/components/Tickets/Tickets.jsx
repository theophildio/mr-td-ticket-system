import { use } from "react";
import Ticket from "../Ticket/Ticket";

const Tickets = ({ ticketPromise, handleAddTask }) => {
  const tickets = use(ticketPromise);

  return (
    <div className="tickets grid grid-cols-2 gap-5 pb-15">
      {tickets.map((ticket) => (
        <Ticket
          key={ticket.id}
          ticket={ticket}
          handleAddTask={handleAddTask}
        ></Ticket>
      ))}
    </div>
  );
};

export default Tickets;
