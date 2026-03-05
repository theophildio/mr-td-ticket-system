import Ticket from "../Ticket/Ticket";

const Tickets = ({ tickets, handleAddTask }) => {
  
  if(!tickets || tickets.length === 0) {
    return (
      <p className="text-sm text-gray-500 my-3">No tickets remaing</p>
    )
  }

  return (
    <div className="tickets grid md:grid-cols-2 gap-5">
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
