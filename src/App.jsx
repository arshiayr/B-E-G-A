import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/Pages/Home";
// import MusicPage from "./components/MusicPage/MusicPage";
import Login from "./components/Pages/Login";
import Signup from "./components/Pages/Signup";
import SecondHome from "./components/Second Home/SecondHome";

import "./App.css";

function App() {
  return (
    <div className="h-screen w-screen bg-black flex flex-col overflow-hidden">
      <Header />

      <div className="flex-1 min-h-0 flex gap-2 px-2 pb-2">
        <aside className="w-[420px] shrink-0 h-full">
          <Sidebar />
        </aside>

        <main
          className="
            flex-1
            min-w-0
            min-h-0
            h-full
            bg-[#121212]
            rounded-lg
            overflow-y-auto
          "
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/music/:musicId" element={<SecondHome />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
