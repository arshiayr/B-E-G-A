import { Link } from "react-router-dom";

import { FaSpotify } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";

function Login() {
  return (
    <body className="m-0 min-h-screen bg-[#0e0e0e] text-white">
      <section className="flex min-h-screen w-full justify-center">
        <div className="w-full max-w-[450px] px-6">
          <div className="flex justify-center pt-[100px]">
            {/* <img
              src="./logo/Spotify.png"
              alt="Spotify"
              /> */}
            <FaSpotify className="h-12 w-[72px] cursor-default object-contain" />
          </div>

          <h1
            className="
                    mt-0
                    mb-8
                    text-center
                    font-[Arial,Helvetica,sans-serif]
                    text-[40px]
                    font-bold
                    leading-tight
                "
          >
            Welcome back
          </h1>

          <form action="" method="post">
            <label
              className="
                        block
                        cursor-default
                        font-[Arial,Helvetica,sans-serif]
                        text-sm
                        font-bold
                    "
              for="input"
            >
              Email or username
            </label>

            <input
              className="
                        mt-2.5
                        box-border
                        h-[52px]
                        w-full
                        rounded-[5px]
                        border
                        border-white/40
                        bg-[#0e0e0e]
                        px-2.5
                        text-base
                        text-white
                        outline-none
                        transition
                        duration-300
                        ease-in-out
                        placeholder:text-gray-400
                        hover:border-white
                        focus:border-white
                    "
              id="input"
              name="username"
              type="email"
            />

            <p
              id="sms"
              className="
                        mt-2
                        min-h-[20px]
                        font-['Gill_Sans','Gill_Sans_MT',Calibri,'Trebuchet_MS',sans-serif]
                        text-sm
                        text-[#ff6363]
                    "
            >
              <b></b>
            </p>

            <button
              id="btn"
              type="button"
              className="
                        mt-2
                        block
                        w-full
                        rounded-full
                        border-none
                        bg-[#00ff77]
                        px-4
                        py-[15px]
                        text-lg
                        font-bold
                        text-black
                        transition
                        duration-200
                        ease-in-out
                        hover:scale-[1.05]
                        hover:bg-[#37fe94]
                        active:scale-[0.98]
                        active:bg-[#00ff77]
                        cursor-pointer
                    "
            >
              Continue
            </button>

            <button
              id="btn-submit"
              type="submit"
              className="
                        mt-2
                        hidden
                        w-full
                        rounded-full
                        border-none
                        bg-[#00ff77]
                        px-4
                        py-[15px]
                        text-lg
                        font-bold
                        text-black
                        transition
                        duration-200
                        ease-in-out
                        hover:scale-[1.05]
                        hover:bg-[#37fe94]
                        active:scale-[0.98]
                        active:bg-[#00d061]
                        cursor-pointer
                    "
            >
              Continue
            </button>

            <div
              className="
                        my-7
                        flex
                        items-center
                        gap-4
                    "
            >
              <div className="h-px flex-1 bg-white/20"></div>

              <h3
                className="
                            m-0
                            cursor-default
                            font-[Arial,Helvetica,sans-serif]
                            text-sm
                            font-bold
                        "
              >
                OR
              </h3>

              <div className="h-px flex-1 bg-white/20"></div>
            </div>

            <a
              id="link-logo1"
              href="index.html"
              className="m-0 block no-underline"
            >
              <div
                className="
                            mb-2.5
                            flex
                            h-[54px]
                            w-full
                            box-border
                            cursor-pointer
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-white/40
                            px-4
                            transition
                            duration-200
                            ease-in-out
                            hover:scale-[1.05]
                            hover:border-white
                            active:scale-[0.98]
                            active:border-white/40
                        "
              >
                {/* <img
                    src="./logo/google.png"
                    alt="Google"
                    /> */}
                <FcGoogle className="absoluteml-[-250px] h-[25px] w-[40px] object-contain" />

                <p
                  className="
                                m-0
                                font-[Arial,Helvetica,sans-serif]
                                text-[15px]
                                font-bold
                                text-white
                            "
                >
                  Continue with Google
                </p>
              </div>
            </a>

            <a
              id="link-logo2"
              href="index.html"
              className="m-0 block no-underline"
            >
              <div
                className="
                            mb-2.5
                            flex
                            h-[54px]
                            w-full
                            box-border
                            cursor-pointer
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-white/40
                            px-4
                            transition
                            duration-200
                            ease-in-out
                            hover:scale-[1.05]
                            hover:border-white
                            active:scale-[0.98]
                            active:border-white/40
                        "
              >
                {/* <img
                  src="./logo/Facebook2.png"
                  alt="Facebook"
                  /> */}
                <FaFacebook className="absoluteml-[-250px] h-[25px] w-[40px] object-contain" />

                <p
                  className="
                                m-0
                                font-[Arial,Helvetica,sans-serif]
                                text-[15px]
                                font-bold
                                text-white
                            "
                >
                  Continue with Facebook
                </p>
              </div>
            </a>

            <a
              id="link-logo3"
              href="index.html"
              className="m-0 block no-underline"
            >
              <div
                className="
                            mb-[30px]
                            flex
                            h-[54px]
                            w-full
                            box-border
                            cursor-pointer
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-white/40
                            px-4
                            transition
                            duration-200
                            ease-in-out
                            hover:scale-[1.05]
                            hover:border-white
                            active:scale-[0.98]
                            active:border-white/40
                        "
              >
                {/* <img
                  src="./logo/Apple2.png"
                  alt="Apple"
                  /> */}
                <FaApple className="absoluteml-[-250px] h-[25px] w-[40px] object-contain" />

                <p
                  className="
                                m-0
                                font-[Arial,Helvetica,sans-serif]
                                text-[15px]
                                font-bold
                                text-white
                            "
                >
                  Continue with Apple
                </p>
              </div>
            </a>

            <div className="flex justify-center items-center gap-2">
              <p
                className="
                            m-0
                            cursor-default
                            font-[Arial,Helvetica,sans-serif]
                            text-[15px]
                            text-[#a5a5a5]
                        "
              >
                Don't have an account?
              </p>

              <a
                className="
                            m-0
                            cursor-pointer
                            font-[Arial,Helvetica,sans-serif]
                            text-[15px]
                            font-bold
                            text-white
                            no-underline
                            transition
                            duration-200
                            hover:text-white/80
                            active:text-white/50
                        "
                href="./signup.html"
              >
                Sign up
              </a>
            </div>

            <div
              className="
                        mt-[80px]
                        mb-[30px]
                        text-center
                    "
            >
              <p
                className="
                            m-0
                            mb-1
                            font-[Arial,Helvetica,sans-serif]
                            text-[12px]
                            text-[#a5a5a5]
                        "
              >
                This site is protected by reCAPTCHA and the Google
                <b
                  className="
                                cursor-pointer
                                underline
                                transition
                                duration-200
                                hover:text-[#00ff77]
                            "
                >
                  Privacy Policy
                </b>
              </p>

              <p
                className="
                            m-0
                            font-[Arial,Helvetica,sans-serif]
                            text-[12px]
                            text-[#a5a5a5]
                        "
              >
                and
                <b
                  className="
                                cursor-pointer
                                underline
                                transition
                                duration-200
                                hover:text-[#00ff77]
                            "
                >
                  Terms of Service
                </b>
                apply.
              </p>
            </div>
          </form>
        </div>
      </section>
    </body>
  );
}

export default Login;
