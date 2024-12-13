import React from "react";

export function SkalaCard() {
  return (
    <div mt-10>
      <div className="bg3"></div>
      <section className="relative">
        <div className="swiper2">
          <div className="swiper-wrapper2">
            <div className="swiper-slide2">
              <div className="skala-green">
                <img
                  className="skala-img h-24 w-24 object-contain"
                  src="/img/skala-1.png"
                  alt="skala 1"
                />
                <div className="card2">
                  <h3>190 Juta+</h3>
                  <p className="card-desc">Jumlah install aplikasi kami</p>
                </div>
              </div>
            </div>
            <div className="swiper-slide2">
              <div className="skala-purple">
                <img
                  className="skala-img h-24 w-24 object-contain"
                  src="/img/skala-2.png"
                  alt="skala 2"
                />
                <div className="card2">
                  <h3>2 juta+</h3>
                  <p className="card-desc">
                    Mitra Driver yang sudah bergabung dengan kami
                  </p>
                </div>
              </div>
            </div>
            <div className="swiper-slide2">
              <div className="skala-orange">
                <img
                  className="skala-img h-24 w-24 object-contain"
                  src="/img/skala-3.png"
                  alt="skala 3"
                />
                <div className="card2">
                  <h3>900.000+</h3>
                  <p className="card-desc">Jumlah mitra GoFood</p>
                </div>
              </div>
            </div>
            <div className="swiper-slide2">
              <div className="skala-blue">
                <img
                  className="skala-img h-24 w-24 object-contain"
                  src="/img/skala-4.png"
                  alt="gojek logo"
                />
                <div className="card2">
                  <h3>2.448x</h3>
                  <p className="card-desc">
                    Lipat kenaikan pengunduhan aplikasi Gojek dari 2015 sampai 2020
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
