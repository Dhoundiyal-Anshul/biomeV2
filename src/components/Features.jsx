const feature1 = "https://placehold.co/367x348";
const feature2 = "https://placehold.co/367x348";
const feature3 = "https://placehold.co/367x348";

function Features() {
  const images = [feature1, feature2, feature3];

  return (
    <div className="bg-white min-h-[2048px] relative max-w-[100vw] overflow-hidden">
      {/* Black rounded rectangles */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[834px] w-[1222px] h-[578px] bg-black rounded-[100px]" />
      <div className="absolute left-1/2 -translate-x-1/2 top-[1572px] w-[1360px] h-[578px] bg-black rounded-[100px]" />

      {/* Main heading */}
      <div className="max-w-[1440px] mx-auto text-black text-[96px] font-bold font-lato px-10 py-20">
        Circular, <br />
        Sustainable,
        <br />
        Carbon-Storing Materials.
      </div>

      {/* White vertical line */}
      <div className="absolute left-[374px] top-[330px] h-[57px] border-l-[3px] border-white" />

      {/* Image grid */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[1643px] w-[1222px] grid grid-cols-3 gap-[78px]">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Feature ${index + 1}`}
            className="w-[367px] h-[348px] rounded-[100px] object-cover"
          />
        ))}
      </div>
    </div>
  );
}

export default Features;
