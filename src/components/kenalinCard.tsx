import React from "react";

export function KenalinCard() {
  const kenalinData = [
    {
      title: "Fortune Top 20",
      desc: "Satu-satunya perusahaan di Asia Tenggara yang dua kali berada di daftar Perusahaan Pengubah Dunia versi majalah Fortune",
      image: "/img/fortune.png",
    },
    {
      title: "Berkontribusi lebih dari $7.1 triliun",
      desc: "Penggerak roda perekonomian Indonesia",
      image: "/img/ekonomi.png",
    },
    {
      title: "Jaket hijau, pergerakan juga hijau",
      desc: "Gojek mengurangi pemakaian plastik hingga 11.3 ton sejak September 2020",
      image: "/img/hijau.png",
    },
    {
      title: "Tumbuh 80% sejak pandemi",
      desc: "Mitra Food merchants naik 80% sejak pandemi berkat solusi digitalisasi Gojek untuk UMKM.",
      image: "/img/pandemi.png",
    },
  ];

  return (
    <div className="relative">
      <div className="w-full h-[166px] z-1 absolute top-0 flex items-end bg-[#101820]">
        <div className="bg-white h-24 w-full rounded-t-[64px] lg:rounded-t-[96px]"></div>
      </div>
      <div className="swiper">
        <div className="swiper-wrapper ">
          {kenalinData.map((item, index) => (
            <div className="swiper-slide flex flex-col align-center justify-center mx-auto" key={index}>
              <div className="flex flex-col align-center justify-center px-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[186px] object-contain"
                />
                <div className="card-content mt-4 text-center">
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                  <p className="text-lg">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

