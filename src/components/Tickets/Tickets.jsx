import { use } from "react";
import Ticket from "../Ticket/Ticket";

const Tickets = ({ticketPromise}) => {
    const tickets = use(ticketPromise);
    console.log(tickets);

    return (
        <div className="tickets grid grid-cols-2 gap-5 pb-15">
            {
                tickets.map(ticket => <Ticket 
                    key={ticket.id} 
                    ticket={ticket}>
                    </Ticket>)
            }
        </div>
    );
};

export default Tickets;