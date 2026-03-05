import Status from "../Status/Status";

const Statuses = ({ addTasks, handleCompleteBtn }) => {
  if (!addTasks || addTasks.length === 0) {
    return (
      <p className="text-sm text-gray-500 my-3">
        Select a ticket to add to Task Status
      </p>
    );
  }

  return (
    <div>
      {addTasks.map((task) => (
        <Status key={task.id} task={task} handleCompleteBtn={handleCompleteBtn} />
      ))}
    </div>
  );
};

export default Statuses;