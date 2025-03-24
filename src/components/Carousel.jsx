import { useState } from "react";

const Carousel = ({ poster_urls }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % poster_urls.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + poster_urls.length) % poster_urls.length);
  };

  return (
    <div className="relative w-full max-w-[900px] mx-auto overflow-hidden">
      {/* Carousel wrapper */}
      <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-lg">
        {poster_urls.length > 0 ? (
          poster_urls.map((url, index) => {
            const isValidUrl = url && url.startsWith("http");
            const imageUrl = isValidUrl ? url : "/path/to/placeholder-image.jpg";

            return (
              <div
                key={index}
                className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                  index === activeIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={imageUrl}
                  className="w-full h-full object-cover rounded-lg"
                  alt={`Slide ${index + 1}`}
                />
              </div>
            );
          })
        ) : (
          <p>No images available</p>
        )}
      </div>

      {/* Slider indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {poster_urls.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === activeIndex ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setActiveIndex(index)}
          ></button>
        ))}
      </div>

      {/* Slider controls */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
      >
        ◀
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
      >
        ▶
      </button>
    </div>
  );
};

export default Carousel;
