import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/Home/Home";
import "./App.css";

function App() {
  return (
    <div className="bg-black h-screen flex flex-col overflow-hidden">

      <Header />

      <div className="flex flex-1 gap-2 p-2 min-h-0">

        <Sidebar />

        <main className="flex-1 min-w-0 min-h-0 overflow-y-auto bg-[#121212] rounded-lg">
          <Home />
        </main>

      </div>

    </div>
  );
}

export default App;