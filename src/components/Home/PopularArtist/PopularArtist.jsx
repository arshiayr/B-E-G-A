import { IoMdPlay } from "react-icons/io";
function PopularArtist() {
  const ArtistCart = [
    {
      ArtistName: "M9",
      ImgUrl:
        "https://i.scdn.co/image/ab6761610000939b3ecaf8c1ff7ad3900d6ea01b",
      rank: "Artist",
    },
    {
      ArtistName: "M9",
      ImgUrl:
        "https://i.scdn.co/image/ab6761610000939b3ecaf8c1ff7ad3900d6ea01b",
      rank: "Artist",
    },
    {
      ArtistName: "M9",
      ImgUrl:
        "https://i.scdn.co/image/ab6761610000939b3ecaf8c1ff7ad3900d6ea01b",
      rank: "Artist",
    },
    {
      ArtistName: "M9",
      ImgUrl:
        "https://i.scdn.co/image/ab6761610000939b3ecaf8c1ff7ad3900d6ea01b",
      rank: "Artist",
    },
    {
      ArtistName: "M9",
      ImgUrl:
        "https://i.scdn.co/image/ab6761610000939b3ecaf8c1ff7ad3900d6ea01b",
      rank: "Artist",
    },
    {
      ArtistName: "M9",
      ImgUrl:
        "https://i.scdn.co/image/ab6761610000939b3ecaf8c1ff7ad3900d6ea01b",
      rank: "Artist",
    },
  ];

  return (
    <>
      <div className="w-full flex items-center justify-between px-6 mt-8 mb-4">
        <h3 className="text-white text-2xl font-bold m-0 cursor-pointer hover:underline">
          Popular artist
        </h3>

        <span className="text-[#b3b3b3] text-sm font-bold cursor-pointer hover:text-white hover:underline transition-colors">
          Show all
        </span>
      </div>
      <div className="flex">
        {ArtistCart.map((link) => (
          <div
            className="
            group
            relative
            w-[180px]
            p-3
            rounded-lg
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
              overflow-hidden
              rounded-full
              shadow-lg
            "
            >
              <img
                className="
                artist
                w-full
                h-full
                object-cover
                transition-transform
                duration-300
                group-hover:scale-[1.03]
              "
                src={link.ImgUrl}
                title="ArtistIMG"
                alt="ArtistIMG"
              />

              <div
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
                z-999
              "
              >
                <IoMdPlay
                  className="
                  w-[22px]
                  h-[22px]
                  object-contain
                  ml-[2px]"
                />
              </div>
            </div>

            <h5
              className="
              text-white
              text-[15px]
              font-normal
              mt-3
              mb-1
              truncate
              leading-5
            "
              title="ArtistName"
            >
              {link.ArtistName}
            </h5>

            <span
              className="
              text-[#b3b3b3]
              text-[13px]
            "
            >
              {link.rank}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}

export default PopularArtist;
