const Status = ({ task, handleCompleteBtn }) => {
  return (
    <div className="bg-white rounded-md shadow-md p-3 my-4">
      <p className="font-semibold">{task.title}</p>
      <button onClick={() => handleCompleteBtn(task)} className="btn w-full mt-4 bg-green-500 text-white rounded-md cursor-pointer">
        Complete
      </button>
    </div>
  );
};

export default Status;