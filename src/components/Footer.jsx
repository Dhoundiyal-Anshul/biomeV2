function Footer() {
  return (
    <div className="relative min-h-[905px] bg-gradient-to-b from-white via-white to-black/15">
      <div className="container mx-auto px-10">
        {/* Help text */}
        <div className="text-center text-white text-base font-lato font-medium max-w-[532px] mx-auto mt-[562px]">
          We can supply all sorts of Building Material. <br />
          we would only be delighted to help you out. <br />
          You can also call us or E-Mail us.
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

        {/* Email input */}
        <div className="absolute left-[120px] top-[642px]">
          <input
            type="email"
            placeholder="Email address"
            className="w-[400px] h-[38px] px-5 py-2.5 bg-white rounded-full border border-[#CCCCCC] text-sm font-inter font-medium text-black/36"
          />
        </div>

        {/* Copyright */}
        <div className="absolute bottom-[27px] left-[40px] right-[40px] text-center text-white text-[10px] font-lato font-medium">
          Copyright © 2024 Biome - All Rights Reserved.
        </div>
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
      >
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  };

  return <button className="w-6 h-6">{icons[icon]}</button>;
};

export default Footer;
