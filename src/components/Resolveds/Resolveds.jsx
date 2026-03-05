import Resolved from "../Resolved/Resolved";

const Resolveds = ({ getResolved }) => {
  if (!getResolved || getResolved.length === 0) {
    return <p className="text-sm text-gray-500 my-3">No resolved tasks yet</p>;
  }
  return (
    <div>
      {getResolved.map((task) => (
        <Resolved key={task.id} task={task}></Resolved>
      ))}
    </div>
  );
};

export default Resolveds;
