import "./Banner.css";
const Banner = ({addTasks, getResolved}) => {
  return (
    <div className="flex flex-col md:flex md:flex-row md:justify-between gap-5 md:gap-12 text-center my-12">
      <div className="in-progress-box md:w-1/2 h-[250px] bg-purple-400 rounded-md flex flex-col justify-center items-center">
        <p className="text-white text-xl">In-Progress</p>
        <h2 className="text-white text-3xl md:text-5xl font-bold">{addTasks.length}</h2>
      </div>
      <div className="resolved-box md:w-1/2 h-[250px] bg-green-400 rounded-md flex flex-col justify-center items-center">
        <p className="text-white text-xl">Resolved</p>
        <h2 className="text-white text-3xl md:text-5xl font-bold">{getResolved.length}</h2>
      </div>
    </div>
  );
};

export default Banner;
