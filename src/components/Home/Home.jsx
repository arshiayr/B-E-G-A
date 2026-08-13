import TrendingSongs from "./TrendingSongs/TrendingSongs";

function Home() {
  return (
    <div className="min-h-full flex flex-col">

      <div className="flex-1">
        <TrendingSongs />
      </div>

    </div>
  );
}

export default Home;
