function PromoBanner() {
  return (
    <div className="relative  w-full  py-8 mb-12">
      {/* Container with max width and padding */}
      <div className="container mx-auto px-6">
        {/* Corner Elements */}
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Top-left corner */}
          <div className="absolute top-0 left-0 md:w-14 md:h-14 w-8 h-8 ">
            <div className="absolute top-0 left-0 w-full h-2 rounded-3xl bg-yellow-400"></div>
            <div className="absolute top-0 left-0 w-2 h-full rounded-3xl bg-yellow-400"></div>
          </div>

          {/* Bottom-right corner */}
          <div className="absolute bottom-0 right-0  md:w-14 md:h-14 w-8 h-8 ">
            <div className="absolute bottom-0 right-0 w-full rounded-3xl h-2 bg-yellow-400"></div>
            <div className="absolute bottom-0 right-0 w-2 h-full rounded-3xl bg-yellow-400"></div>
          </div>

          {/* Text content */}
          <h2 className="text-2xl md:text-6xl  font-bold text-white text-center px-12">
            APOSTA QUE É NA MOOSH
          </h2>
        </div>
      </div>
    </div>
  );
}

export default PromoBanner;