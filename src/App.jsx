import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      {/* Header */}
      <header>
        <Navbar></Navbar>
      </header>
      {/* Main body */}
      <main className="w-11/12 mx-auto">
        <Banner></Banner>
      </main>
    </>
  );
}

export default App;
