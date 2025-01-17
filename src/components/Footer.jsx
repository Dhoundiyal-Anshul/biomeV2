function Footer() {
  return (
    <div className="relative min-h-[905px] bg-gradient-to-b from-white via-green-900 to-black before:absolute before:inset-0 before:bg-gradient-to-tr before:from-black/50 before:via-transparent before:to-transparent">
      <div className="container mx-auto px-10 relative z-10 h-full">
          <div className="max-w-[1440px] mx-auto text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white text-[96px] font-bold font-lato px-10 py-20 text-center">
            Creating
            <br />
            Sustainable
            <br />
            World
          </div>

        {/* Help text */}
        <div className="absolute left-[160px] top-[542px] text-white text-base font-lato font-medium max-w-[400px] text-center">
          We can supply all sorts of Building Material. <br />
          we would only be delighted to help you out. <br />
          You can also call us or E-Mail us.
        </div>

        {/* Email input */}
        <div className="absolute left-[120px] top-[642px]">
          <input
            type="email"
            placeholder="Email address"
            className="w-[400px] h-[38px] px-5 py-2.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-sm font-inter font-medium text-white placeholder:text-white/50 focus:outline-none focus:border-white/50 transition-colors"
          />
        </div>

        {/* Social links */}
        <div className="absolute right-[84px] top-[562px]">
          <h3 className="text-white text-base font-lato font-medium mb-8">
            Socials
          </h3>
          <div className="flex flex-col gap-6">
            <SocialIcon icon="instagram" />
            <SocialIcon icon="linkedin" />
            <SocialIcon icon="facebook" />
          </div>
        </div>

        {/* Back to top arrow button */}
        <button
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth"
            });
          }}
          className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-10 h-10 border-2 border-white rounded-full relative hover:bg-white group transition-colors"
        >
          <div className="absolute top-1/2 left-1/2 w-3 h-3 border-l-2 border-t-2 border-white group-hover:border-black transform -translate-x-1/2 -translate-y-1/4 rotate-45 transition-colors" />
        </button>
      </div>

      {/* Copyright - Moved outside container, absolute bottom */}
      <div className="absolute bottom-0 w-full text-center text-white text-[10px] font-lato font-medium py-4">
        Copyright © 2025 Biome - All Rights Reserved.
      </div>
    </div>
  );
}

const SocialIcon = ({ icon }) => {
  const icons = {
    instagram: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="1.5"
        className="opacity-90 hover:opacity-100 transition-opacity"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" />
      </svg>
    ),
    linkedin: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="1.5"
        className="opacity-90 hover:opacity-100 transition-opacity"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M8 10v7M8 7v0M16 17v-6c0-2-2-2-3-2s-2 1-2 2v6" />
      </svg>
    ),
    facebook: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="1.5"
        className="opacity-90 hover:opacity-100 transition-opacity"
      >
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  };

  return <button className="w-6 h-6">{icons[icon]}</button>;
};

export default Footer;
