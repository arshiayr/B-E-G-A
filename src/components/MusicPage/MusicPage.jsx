import { useNavigate, useParams } from "react-router-dom";
import { IoMdPlay } from "react-icons/io";
import { IoArrowBack } from "react-icons/io5";
import { FaHeart } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";

const TrackCart = [
  {
    id: "qalafi-1",
    SongName: "Qalafi",
    SingersName: "M9",
    ImgUrl: "https://i.scdn.co/image/ab67616d0000e1a366cee195af09176657a1e795",
    Duration: "3:45",
  },

  {
    id: "qalafi-2",
    SongName: "Qalafi",
    SingersName: "M9",
    ImgUrl: "https://i.scdn.co/image/ab67616d0000e1a366cee195af09176657a1e795",
    Duration: "3:45",
  },

  {
    id: "qalafi-3",
    SongName: "Qalafi",
    SingersName: "M9",
    ImgUrl: "https://i.scdn.co/image/ab67616d0000e1a366cee195af09176657a1e795",
    Duration: "3:45",
  },

  {
    id: "qalafi-4",
    SongName: "Qalafi",
    SingersName: "M9",
    ImgUrl: "https://i.scdn.co/image/ab67616d0000e1a366cee195af09176657a1e795",
    Duration: "3:45",
  },

  {
    id: "qalafi-5",
    SongName: "Qalafi",
    SingersName: "M9",
    ImgUrl: "https://i.scdn.co/image/ab67616d0000e1a366cee195af09176657a1e795",
    Duration: "3:45",
  },

  {
    id: "qalafi-6",
    SongName: "Qalafi",
    SingersName: "M9",
    ImgUrl: "https://i.scdn.co/image/ab67616d0000e1a366cee195af09176657a1e795",
    Duration: "3:45",
  },
];

function MusicPage() {
  const navigate = useNavigate();

  const { musicId } = useParams();

  const selectedTrack = TrackCart.find((track) => track.id === musicId);

  if (!selectedTrack) {
    return (
      <div className="w-full min-h-full bg-[#121212] flex flex-col items-center justify-center">
        <h1 className="text-white text-3xl font-bold mb-4">Song not found</h1>

        <button
          onClick={() => navigate("/")}
          className="
            px-6
            py-3
            rounded-full
            bg-white
            text-black
            font-bold
            hover:scale-105
            transition
            cursor-pointer
          "
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="w-full min-h-full bg-[#121212] text-white">
      <section
        className="
          relative
          w-full
          min-h-[350px]
          flex
          items-end
          px-8
          pb-8
          overflow-hidden
          bg-gradient-to-b
          from-[#535353]
          via-[#292929]
          to-[#121212]
        "
      >
        <button
          onClick={() => navigate(-1)}
          className="
            absolute
            top-6
            left-6
            w-10
            h-10
            rounded-full
            bg-black/60
            flex
            items-center
            justify-center
            text-white
            hover:bg-black
            transition
            cursor-pointer
            z-20
          "
        >
          <IoArrowBack className="text-xl" />
        </button>

        <div
          className="
            w-full
            flex
            items-end
            gap-7
          "
        >
          <img
            src={selectedTrack.ImgUrl}
            alt={selectedTrack.SongName}
            className="
              w-[232px]
              h-[232px]
              min-w-[232px]
              object-cover
              rounded-md
              shadow-2xl
            "
          />

          <div className="pb-2 min-w-0">
            <p
              className="
                text-white
                text-[13px]
                font-bold
                uppercase
                mb-4
              "
            >
              Song
            </p>

            <h1
              className="
                text-white
                text-5xl
                md:text-6xl
                lg:text-7xl
                font-black
                leading-none
                tracking-[-2px]
                mb-6
              "
            >
              {selectedTrack.SongName}
            </h1>

            <div className="flex items-center gap-2">
              <span
                className="
                  text-white
                  text-sm
                  font-bold
                  hover:underline
                  cursor-pointer
                "
              >
                {selectedTrack.SingersName}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section
        className="
          px-8
          py-6
          flex
          items-center
          gap-6
        "
      >
        <button
          className="
            w-14
            h-14
            rounded-full
            bg-[#1ed760]
            flex
            items-center
            justify-center
            cursor-pointer
            hover:scale-105
            hover:bg-[#1fdf64]
            transition
            shadow-xl
          "
        >
          <IoMdPlay
            className="
              text-black
              text-2xl
              ml-1
            "
          />
        </button>

        <button
          className="
            text-[#b3b3b3]
            text-2xl
            hover:text-white
            transition
            cursor-pointer
          "
        >
          <FaHeart />
        </button>

        <button
          className="
            text-[#b3b3b3]
            text-2xl
            hover:text-white
            transition
            cursor-pointer
          "
        >
          <BsThreeDots />
        </button>
      </section>

      <section className="px-8 pb-12">
        <div
          className="
            grid
            grid-cols-[50px_1fr_100px]
            items-center
            px-4
            py-2
            border-b
            border-[#2a2a2a]
            text-[#b3b3b3]
            text-sm
          "
        >
          <span>#</span>

          <span>Title</span>

          <span className="text-right">Duration</span>
        </div>

        <div
          className="
            group
            grid
            grid-cols-[50px_1fr_100px]
            items-center
            px-4
            py-3
            rounded-md
            hover:bg-[#2a2a2a]
            transition
            cursor-pointer
          "
        >
          <span
            className="
              text-[#b3b3b3]
              text-sm
            "
          >
            1
          </span>

          <div
            className="
              flex
              items-center
              gap-4
              min-w-0
            "
          >
            <img
              src={selectedTrack.ImgUrl}
              alt={selectedTrack.SongName}
              className="
                w-12
                h-12
                rounded
                object-cover
              "
            />

            <div className="min-w-0">
              <p
                className="
                  text-white
                  text-sm
                  font-medium
                  truncate
                "
              >
                {selectedTrack.SongName}
              </p>

              <p
                className="
                  text-[#b3b3b3]
                  text-xs
                  mt-1
                  truncate
                "
              >
                {selectedTrack.SingersName}
              </p>
            </div>
          </div>

          <span
            className="
              text-[#b3b3b3]
              text-sm
              text-right
            "
          >
            {selectedTrack.Duration}
          </span>
        </div>
      </section>
    </div>
  );
}

export default MusicPage;
