import { IoMdPlay } from "react-icons/io";

const TrackCart = [
  {
    SongName: "Qalafi",
    SingersName: "M9",
    ImgUrl: "https://i.scdn.co/image/ab67616d0000e1a366cee195af09176657a1e795",
  },
  {
    SongName: "Qalafi",
    SingersName: "M9",
    ImgUrl: "https://i.scdn.co/image/ab67616d0000e1a366cee195af09176657a1e795",
  },
  {
    SongName: "Qalafi",
    SingersName: "M9",
    ImgUrl: "https://i.scdn.co/image/ab67616d0000e1a366cee195af09176657a1e795",
  },
  {
    SongName: "Qalafi",
    SingersName: "M9",
    ImgUrl: "https://i.scdn.co/image/ab67616d0000e1a366cee195af09176657a1e795",
  },
  {
    SongName: "Qalafi",
    SingersName: "M9",
    ImgUrl: "https://i.scdn.co/image/ab67616d0000e1a366cee195af09176657a1e795",
  },
  {
    SongName: "Qalafi",
    SingersName: "M9",
    ImgUrl: "https://i.scdn.co/image/ab67616d0000e1a366cee195af09176657a1e795",
  },
];

function TrendingSongs() {
  return (
    <section className="w-full">
      <div className="flex items-center justify-between px-6 mt-6 mb-4">
        <h3 className="text-white text-2xl font-bold">Trending songs</h3>

        <span className="text-[#b3b3b3] text-sm font-bold cursor-pointer hover:text-white hover:underline transition-colors">
          Show all
        </span>
      </div>
      <div className="flex">
        {TrackCart.map((link) => (
          <div
            id="music-div1"
            className="
    group
    relative
    w-[180px]
    p-3
    rounded-lg
    bg-transparent
    hover:bg-[#1f1f1f]
    transition-colors
    duration-300
    cursor-pointer
  "
          >
            <div
              className="
      relative
      w-full
      aspect-square
      rounded-md
      overflow-hidden
      shadow-lg
    "
            >
              <img
                className="
        music
        w-full
        h-full
        object-cover
        transition-transform
        duration-300
        group-hover:scale-[1.03]
      "
                src={link.ImgUrl}
                alt="Qalafi"
              />

              <div
                id="play1"
                className="
        absolute
        right-2
        bottom-2
        w-[48px]
        h-[48px]
        rounded-full
        bg-[#1ed760]
        flex
        items-center
        justify-center
        shadow-xl
        opacity-0
        translate-y-2
        group-hover:opacity-100
        group-hover:translate-y-0
        transition-all
        duration-300
        hover:scale-105
        hover:bg-[#1fdf64]
      "
              >
                <IoMdPlay
                  className="
          w-[22px]
          h-[22px]
          object-contain
          ml-[2px]
        "
                />
              </div>
            </div>

            <h5
              className="
      titr
      name-music
      text-white
      text-[15px]
      font-normal
      mt-3
      mb-1
      truncate
      leading-5
    "
              title="Qalafi"
            >
              {link.SongName}
            </h5>

            <div className="flex items-center min-w-0">
              <span
                className="
        artist-name
        text-[#b3b3b3]
        text-[13px]
        truncate
        hover:text-white
        hover:underline
      "
                title="M9"
              >
                {link.SingersName}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrendingSongs;
