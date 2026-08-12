import { GoPlus } from "react-icons/go";
import { GrLanguage } from "react-icons/gr";

const FooterLikns = [
  {
    lable: "Legal",
    link: "https://www.spotify.com/fr/legal/end-user-agreement/",
  },
  {
    lable: "Safety & Privacy Center",
    link: "https://www.spotify.com/fr/safetyandprivacy",
  },
  {
    lable: "Privacy Policy",
    link: "https://www.spotify.com/fr/legal/privacy-policy/",
  },
  {
    lable: "Cookies Setting"
  },
  {
    lable: "About Ads",
    link: "https://www.spotify.com/fr/legal/privacy-policy/#s3",
  },
  {
    lable: "Accessibility",
    link: "https://www.spotify.com/fr/accessibility",
  },
];
function Sidebar() {
  return (
    <section className="w-[420px] h-[calc(100vh-72px)] p-1">
      <div
        className="
      first-div
      w-full
      h-full
      bg-[#121212]
      rounded-lg
      overflow-hidden
      flex
      flex-col
    "
      >
        <div
          className="
        head-div
        h-[68px]
        px-5
        flex
        items-center
        justify-between
        shrink-0
      "
        >
          <h4
            className="
          text-[#b3b3b3]
          text-[16px]
          font-bold
          m-0
          cursor-pointer
          hover:text-white
          transition-colors
        "
          >
            Your Library
          </h4>

          <div
            id="creat-div"
            title="Create a playlist, folder, or Jam"
            className="
          creat-div
          flex
          items-center
          gap-2
          px-3
          py-2
          rounded-full
          cursor-pointer
          hover:bg-[#1f1f1f]
          transition-colors
          group
        "
          >
            
            <GoPlus
              className="
            w-[18px]
            h-[18px]
            object-contain
            opacity-70
            group-hover:opacity-100"
              color="white"
            />

            <span
              className="
            text-[#b3b3b3]
            text-[14px]
            font-bold
            group-hover:text-white
          "
            >
              Create
            </span>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-2">
          <div
            className="
          child-div
          bg-[#1f1f1f]
          rounded-lg
          px-5
          py-5
          mb-2
        "
          >
            <h4
              className="
            text-white
            text-[15px]
            font-bold
            m-0
            mb-2
          "
            >
              Create your first playlist
            </h4>

            <h5
              className="
            text-white
            text-[13px]
            font-normal
            m-0
            mb-5
          "
            >
              It's easy, We'll help you
            </h5>

            <button
              type="button"
              className="
            creat-btn
            bg-white
            text-black
            px-4
            py-2
            rounded-full
            text-[14px]
            font-bold
            border-none
            cursor-pointer
            transition-all
            duration-200
            hover:scale-105
            hover:bg-[#f0f0f0]
          "
            >
              Create playlist
            </button>
          </div>

          <div
            className="
          child-div
          child2
          bg-[#1f1f1f]
          rounded-lg
          px-5
          py-5
          mb-2
        "
          >
            <h4
              className="
            text-white
            text-[15px]
            font-bold
            m-0
            mb-2
          "
            >
              Let's find some podcasts to follow
            </h4>

            <h5
              className="
            text-white
            text-[13px]
            font-normal
            m-0
            mb-5
          "
            >
              We'll keep you updated on new episodes
            </h5>

            <button
              type="button"
              className="
            creat-btn
            bg-white
            text-black
            px-4
            py-2
            rounded-full
            text-[14px]
            font-bold
            border-none
            cursor-pointer
            transition-all
            duration-200
            hover:scale-105
            hover:bg-[#f0f0f0]
          "
            >
              Browse podcasts
            </button>
          </div>
        </div>

        <footer
          className="
        first-footer
        shrink-0
        px-5
        pt-4
        pb-5
      "
        >
          <div className="flex flex-wrap gap-x-8 gap-y-2 mb-3">
            {FooterLikns.map((link) => (
              <a
                href={link.link}
                className="
            text-[#b3b3b3]
            text-[11px]
            cursor-pointer
            hover:text-white
          "
              >
                {link.lable}
              </a>
            ))}
          </div>

          
          <div className="mb-5">
            <span
              className="
            text-[#fff]
            text-[.6875rem]
            cursor-pointer
            hover:text-underline
          "
            >
              Cookies
            </span>
          </div>

          <div
            className="
          english-btn
          w-fit
          flex
          items-center
          gap-2
          px-4
          py-2
          border
          border-[#727272]
          rounded-full
          cursor-pointer
          hover:border-white
          transition-colors
        "
          >
            
            <GrLanguage
              className="
            w-[16px]
            h-[16px]
            object-contain
            "
              color="white"
            />

            <span
              className="
            text-white
            text-[13px]
            font-bold
          "
            >
              English
            </span>
          </div>
        </footer>
      </div>
    </section>
  );
}

export default Sidebar;
