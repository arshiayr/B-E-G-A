import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

function Footer() {
  const footerLinks = {
    company: {
      title: "Company",
      links: [
        { name: "About", href: "https://www.spotify.com/us/about-us/contact/" },
        { name: "Jobs", href: "https://www.lifeatspotify.com/" },
        { name: "For the Record", href: "https://newsroom.spotify.com/" },
      ],
    },
    communities: {
      title: "Communities",
      links: [
        { name: "For Artists", href: "https://artists.spotify.com/" },
        { name: "Developers", href: "https://developer.spotify.com/" },
        { name: "Advertising", href: "https://ads.spotify.com/" },
        { name: "Investors", href: "https://investors.spotify.com/" },
        { name: "Vendors", href: "https://spotifyforvendors.com/" },
      ],
    },
    usefulLinks: {
      title: "Useful links",
      links: [
        { name: "Support", href: "https://support.spotify.com/" },
        { name: "Free Mobile App", href: "https://www.spotify.com/us/free/" },
        { name: "Popular by Country", href: "/popular-in/us" },
        {
          name: "Import your music",
          href: "https://www.spotify.com/us/import-music/",
        },
      ],
    },
    spotifyPlans: {
      title: "Spotify Plans",
      links: [
        {
          name: "Premium Individual",
          href: "https://www.spotify.com/us/premium/#plans",
        },
        {
          name: "Premium Duo",
          href: "https://www.spotify.com/us/duo/#ref=spotifycom_footer_premium_duo",
        },
        {
          name: "Premium Family",
          href: "https://www.spotify.com/us/family/#ref=spotifycom_footer_premium_family",
        },
        {
          name: "Premium Student",
          href: "https://www.spotify.com/us/student/#ref=spotifycom_footer_premium_student",
        },
        {
          name: "Spotify Free",
          href: "https://www.spotify.com/us/free/#ref=spotifycom_footer_free",
        },
      ],
    },
  };

  return (
    <footer
      className="
        w-full
        bg-[#121212]
        px-6
        sm:px-8
        lg:px-10
        pt-16
        sm:pt-20
        pb-10
        text-white
      "
    >
      <div
        className="
          w-full
          flex
          flex-col
          lg:flex-row
          lg:justify-between
          gap-12
          lg:gap-8
        "
      >
        <div
          className="
            flex
            flex-wrap
            gap-x-10
            gap-y-12
            lg:gap-x-8
            flex-1
          "
        >
          <div
            className="
              flex
              flex-col
              w-[140px]
              sm:w-[160px]
            "
          >
            <h4
              className="
                text-white
                text-[14px]
                font-bold
                mb-5
              "
            >
              {footerLinks.company.title}
            </h4>

            {footerLinks.company.links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="
                  text-[#b3b3b3]
                  text-[14px]
                  leading-5
                  mb-3
                  w-fit
                  no-underline
                  hover:text-white
                  hover:underline
                  transition-colors
                  duration-200
                "
              >
                {link.name}
              </a>
            ))}
          </div>

          <div
            className="
              flex
              flex-col
              w-[140px]
              sm:w-[160px]
            "
          >
            <h4
              className="
                text-white
                text-[14px]
                font-bold
                mb-5
              "
            >
              {footerLinks.communities.title}
            </h4>

            {footerLinks.communities.links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="
                  text-[#b3b3b3]
                  text-[14px]
                  leading-5
                  mb-3
                  w-fit
                  no-underline
                  hover:text-white
                  hover:underline
                  transition-colors
                  duration-200
                "
              >
                {link.name}
              </a>
            ))}
          </div>

          <div
            className="
              flex
              flex-col
              w-[140px]
              sm:w-[160px]
            "
          >
            <h4
              className="
                text-white
                text-[14px]
                font-bold
                mb-5
              "
            >
              {footerLinks.usefulLinks.title}
            </h4>

            {footerLinks.usefulLinks.links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="
                  text-[#b3b3b3]
                  text-[14px]
                  leading-5
                  mb-3
                  w-fit
                  no-underline
                  hover:text-white
                  hover:underline
                  transition-colors
                  duration-200
                "
              >
                {link.name}
              </a>
            ))}
          </div>

          <div
            className="
              flex
              flex-col
              w-[140px]
              sm:w-[160px]
            "
          >
            <h4
              className="
                text-white
                text-[14px]
                font-bold
                mb-5
              "
            >
              {footerLinks.spotifyPlans.title}
            </h4>

            {footerLinks.spotifyPlans.links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="
                  text-[#b3b3b3]
                  text-[14px]
                  leading-5
                  mb-3
                  w-fit
                  no-underline
                  hover:text-white
                  hover:underline
                  transition-colors
                  duration-200
                "
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div
          className="
            flex
            items-start
            gap-3
            shrink-0
          "
        >
          <div
            className="
              w-10
              h-10
              rounded-full
              bg-[#1f1f1f]
              flex
              items-center
              justify-center
              cursor-pointer
              hover:bg-[#2a2a2a]
              transition-all
              duration-200
              hover:scale-105
            "
          >
            <FaInstagram
              className="
                w-5
                h-5
                text-white
              "
            />
          </div>

          <div
            className="
              w-10
              h-10
              rounded-full
              bg-[#1f1f1f]
              flex
              items-center
              justify-center
              cursor-pointer
              hover:bg-[#2a2a2a]
              transition-all
              duration-200
              hover:scale-105
            "
          >
            <FaXTwitter
              className="
                w-5
                h-5
                text-white
              "
            />
          </div>

          <div
            className="
              w-10
              h-10
              rounded-full
              bg-[#1f1f1f]
              flex
              items-center
              justify-center
              cursor-pointer
              hover:bg-[#2a2a2a]
              transition-all
              duration-200
              hover:scale-105
            "
          >
            <FaFacebook
              className="
                w-5
                h-5
                text-white
              "
            />
          </div>
        </div>
      </div>

      <div
        className="
          w-full
          border-t
          border-[#292929]
          mt-14
          pt-8
        "
      >
        <span
          className="
            text-[#b3b3b3]
            text-[12px]
          "
        >
          © 2026 Spotify AB
        </span>
      </div>
    </footer>
  );
}

export default Footer;
