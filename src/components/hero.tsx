export function Hero() {
  return (
    <div id="sectiion-1">
      <div className="w-full lg:h-auto h-auto md:aspect-auto overflow-hidden relative aspect-[3/4]  ">
        <div className="w-full filter brightness-90">
          <img
            src="https://cdn-site.gojek.com/uploads/hero_b18c33ed07.jpg"
            alt="hero"
            className="w-full h-full object-cover block z-0"
          />
        </div>
        <div className="absolute h-full w-full top-0 left-0 py-15">
          <div className="flex flex-col mx-auto h-full md:justify-center text-white w-4/5 justify-end">
            <h1 className="lg:w-2/3 text-5xl font-bold leading-[64px]">3 negara. 20+ layanan. 1 platform on-demand</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
