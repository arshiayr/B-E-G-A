import { FaSpotify } from "react-icons/fa";
import { SlArrowDownCircle } from "react-icons/sl";
import { GoHomeFill } from "react-icons/go";
import { Link } from "react-router-dom";

const HeaderLinks = [
  {
    lable: "Premium",
    href: "https://www.spotify.com/az-az/premium/",
  },
  {
    lable: "Support",
    href: "https://support.spotify.com/az-az/",
  },
  {
    lable: "Download",
    href: "https://spotify.com/download",
  },
];
function Header() {
  return (
    <header className="w-full h-[64px] bg-black flex items-center px-2 gap-2">
      <FaSpotify
        className="w-[40px] h-[40px] object-contain ml-2 mr-2"
        color="white"
      />

      <a href="/" className="no-underline">
        <div
          className="
        w-[48px] h-[48px]
        bg-[#1f1f1f]
        rounded-full
        flex items-center justify-center
        transition-all duration-200
        hover:bg-[#2a2a2a]
        cursor-pointer
      "
        >
          <GoHomeFill
            className="w-[24px] h-[24px] object-contain"
            color="white"
          />
        </div>
      </a>

      <div className="relative ml-1 w-[360px]">
        <input
          className="
        input-search
        w-full
        h-[48px]
        bg-[#1f1f1f]
        text-white
        text-[15px]
        rounded-full
        px-12
        outline-none
        border
        border-transparent
        placeholder:text-[#b3b3b3]
        transition-all duration-200
        hover:bg-[#2a2a2a]
        focus:bg-[#2a2a2a]
        focus:border-white
      "
          id="input-search"
          type="text"
          placeholder="What do you want to play?"
        />

        <svg
          className="
        absolute
        left-4
        top-1/2
        -translate-y-1/2
        w-[24px]
        h-[24px]
        text-[#b3b3b3]
      "
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-4.35-4.35m2.35-5.65a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
          />
        </svg>
      </div>

      <div className="ml-auto flex items-center gap-6 pr-4">
        {HeaderLinks.map((link) => (
          <a
            href={link.href}
            className="
          text-[#b3b3b3]
          text-[14px]
          font-bold
          no-underline
          hover:text-white
          transition-colors
          "
          >
            {link.lable}
          </a>
        ))}


        <div className="h-[25px] w-[1px] bg-[#b3b3b3]"></div>

        <a
          href="/"
          className="
        flex items-center gap-2
        text-white
        text-[14px]
        font-bold
        no-underline
        hover:text-white
        transition-colors
      "
        >
          <SlArrowDownCircle className="w-[18px] h-[18px] object-contain text-[#b3b3b3] hover:text-white font-bold" />

          <span>Install App</span>
        </a>

        <a
          href="/"
          className="
        text-[#b3b3b3]
        text-[14px]
        font-bold
        no-underline
        hover:text-white
        transition-colors
      "
        >
          Sign up
        </a>

        <Link to="/Login">
          <button
            type="button"
            className="
            h-[48px]
            px-7
            bg-white
            text-black
            rounded-full
            text-[14px]
            font-bold
            cursor-pointer
            transition-all duration-200
            hover:scale-[1.04]
            hover:bg-[#f0f0f0]
            "
          >
            Log in
          </button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
