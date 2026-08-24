import TrendingSongs from "../Home/TrendingSongs/TrendingSongs";
import Footer from "../Home/Footer/Footer";
import MusicPage from "../MusicPage/MusicPage";

function SecondHome() {
  return (
    <div className="min-h-full flex flex-col">
      <div className="flex-1">
        <MusicPage />
      </div>
      <div className="flex-1">
        <TrendingSongs />
      </div>

      <Footer />
    </div>
  );
}

export default SecondHome;
