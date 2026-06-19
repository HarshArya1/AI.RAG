import { useNavigate } from "react-router-dom";


const Login = () => {
    const navigate = useNavigate();
  return (
    <div className="h-screen w-full bg-black text-white p-0 md:p-5 flex flex-col md:flex-row gap-0 md:gap-5">

      {/* left side */}
      <div className="h-full w-full md:max-w-[560px] rounded-none md:rounded-[24px] p-8 sm:p-10 md:p-12 bg-[#0A0A0B] border-0 md:border border-white/[0.08] flex flex-col justify-center">

        <div className="flex flex-col gap-3">
          <h1 className="font-semibold text-[28px] sm:text-[32px] md:text-[34px] tracking-tight leading-[1.15]">
            Let's<br />Get Back to It
          </h1>
          <p className="font-light text-[14px] md:text-[15px] text-white/40 leading-relaxed">
            Continue exploring, organizing, and finding answers faster.
          </p>
        </div>

        <form className="mt-10 md:mt-12">
          <div className="flex flex-col gap-4 md:gap-5">

            {/* email */}
            <div className="flex flex-col gap-2">
              <label
                className="text-[11px] font-medium tracking-wider uppercase text-white/35"
                htmlFor="email"
              >
                Email Address
              </label>
              <div className="w-full h-[48px] md:h-[50px] bg-[#141416] rounded-[10px] px-4 items-center gap-3 flex border border-white/[0.08] focus-within:border-white/25 transition-colors">
                <i className="ri-mail-line text-[17px] text-white/30"></i>
                <input
                  id="email"
                  className="w-full h-full outline-none font-normal text-[15px] text-white placeholder:text-white/25 bg-transparent"
                  placeholder="you@example.com"
                  type="email"
                />
              </div>
            </div>

            {/* password */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <label
                  className="text-[11px] font-medium tracking-wider uppercase text-white/35"
                  htmlFor="password"
                >
                  Password
                </label>
                <a href="#" className="text-[12px] text-white/35 hover:text-white/70 transition-colors">
                  Forgot password?
                </a>
              </div>
              <div className="w-full h-[48px] md:h-[50px] bg-[#141416] rounded-[10px] px-4 items-center gap-3 flex border border-white/[0.08] focus-within:border-white/25 transition-colors">
                <i className="ri-lock-2-line text-[17px] text-white/30"></i>
                <input
                  id="password"
                  className="w-full h-full outline-none font-normal text-[15px] text-white placeholder:text-white/25 bg-transparent"
                  placeholder="••••••••••••"
                  type="password"
                />
              </div>
            </div>

            {/* sign in button */}
            <button
              type="submit"
              className="w-full h-[48px] md:h-[50px] mt-2 rounded-[10px] bg-white text-black font-medium text-[15px] hover:bg-white/90 transition-colors"
            >
              Sign in
            </button>

            {/* sign up link */}
            <p className="text-center text-[13px] text-white/35">
              Don't have an account?{" "}
              <span
                onClick={() => navigate("/register")}
               className="font-medium text-white/80 cursor-pointer hover:text-white transition-colors">
                Sign up
              </span>
            </p>

            {/* divider */}
            <div className="flex items-center gap-3 my-1">
              <div className="flex-1 h-px bg-white/[0.08]"></div>
              <span className="text-[11px] text-white/30 tracking-wide">OR</span>
              <div className="flex-1 h-px bg-white/[0.08]"></div>
            </div>

            {/* google */}
            <button
              type="button"
              className="w-full h-[48px] md:h-[50px] rounded-[10px] border border-white/[0.08] flex items-center justify-center gap-3 font-normal text-[14px] text-white/85 hover:bg-white/[0.04] hover:border-white/15 transition-colors"
            >
              <svg width="17" height="17" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.72v2.26h2.9c1.7-1.57 2.7-3.88 2.7-6.62z" fill="#4285F4"/>
                <path d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.9-2.26c-.81.54-1.84.87-3.06.87-2.36 0-4.36-1.6-5.08-3.74H.86v2.33A9 9 0 0 0 9 18z" fill="#34A853"/>
                <path d="M3.92 10.69A5.4 5.4 0 0 1 3.63 9c0-.59.1-1.16.29-1.69V4.98H.86A9 9 0 0 0 0 9c0 1.45.35 2.83.86 4.02l3.06-2.33z" fill="#FBBC05"/>
                <path d="M9 3.58c1.32 0 2.5.45 3.44 1.35l2.58-2.58C13.46.89 11.43 0 9 0A9 9 0 0 0 .86 4.98l3.06 2.33C4.64 5.18 6.64 3.58 9 3.58z" fill="#EA4335"/>
              </svg>
              Continue with Google
            </button>

          </div>
        </form>
      </div>

      {/* right side — hidden on mobile */}
      <div className="hidden md:flex flex-1 h-full items-center justify-center">
        <img
          src="/Login-side-Image.png"
          alt="robot illustration"
          className="max-h-[85%] w-auto object-contain"
        />
      </div>

    </div>
  );
};

export default Login;