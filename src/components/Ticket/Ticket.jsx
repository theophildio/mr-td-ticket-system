import calendarIcon from "../../assets/calendar-icon.png";

const Ticket = ({ ticket }) => {
  const { id, title, description, customer, priority, status, createdAt } =
    ticket;
  return (
    <div className="bg-gray rounded-xs shadow-md p-3">
      <div className="flex justify-between">
        <p>{title}</p>
        <span>{status}</span>
      </div>
      <p>{description}</p>
      <div className="flex justify-between">
        <div className="flex items-center">
          <span>{id}</span>
          <span>{priority}</span>
        </div>
        <div className="flex items-center">
          <span>{customer}</span>
          <span>
            <img src={calendarIcon} alt="Calendar icon" />
            {createdAt}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
