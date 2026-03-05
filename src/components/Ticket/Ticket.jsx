import calendarIcon from "../../assets/calendar-icon.png";

const Ticket = ({ ticket, handleAddTask }) => {
  const { id, title, description, customer, priority, status, createdAt } =
    ticket;
  return (
    <div
      onClick={() => handleAddTask(ticket)}
      className="bg-gray rounded-md shadow-lg p-3 cursor-pointer bg-white mt-3"
    >
      <div className="flex justify-between pb-2">
        <p className="text-lg font-semibold">{title}</p>
        {/* <span className={`px-3 rounded-xl ${status === "Open" ? "text-green-600 bg-green-100" : "text-yellow-600 bg-yellow-100"}`}>{status}</span> */}
        <span
          className={`flex items-center gap-1 px-2 py-1 rounded-full text-sm font-light
      ${
        status === "Open"
          ? "bg-green-100 text-green-700"
          : "bg-yellow-100 text-yellow-700"
      }`}
        >
          <span
            className={`w-4 h-4 rounded-full
        ${status === "Open" ? "bg-green-500" : "bg-yellow-500"}`}
          ></span>

          {ticket.status}
        </span>
      </div>
      <p className="text-gray-500">{description}</p>
      <div className="flex justify-between pt-4">
        <div className="flex items-center">
          <span className="text-gray-500">
            <small>{id}</small>
          </span>
          <span
            className={`ml-4 uppercase ${priority === "Low Priority" ? "text-green-600" : priority === "Medium Priority" ? "text-yellow-400" : "text-red-600"}`}
          >
            {priority}
          </span>
        </div>
        <div className="flex items-center text-gray-500">
          <span className="mr-4">
            <small>{customer}</small>
          </span>
          <span className="flex items-center">
            <img
              className="mr-1 w-[14px]"
              src={calendarIcon}
              alt="Calendar icon"
            />
            <small>{createdAt}</small>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
