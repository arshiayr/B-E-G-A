import TrendingSongs from "./TrendingSongs/TrendingSongs";
import PopularArtist from "./PopularArtist/PopularArtist"
import Footer from "./Footer/Footer";

function Home() {
  return (
    <div className="min-h-full flex flex-col">

      <div className="flex-1">
        <TrendingSongs />
      </div>
      <div className="flex-1">
        <PopularArtist />
      </div>

      <Footer />

    </div>
  );
}

export default Home;