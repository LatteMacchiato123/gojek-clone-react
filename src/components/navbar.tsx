export function Navbar() {
  return (
    <div className="hidden lg:flex h-[100px] w-full sticky top-0 z-[99] align-middle shadow-md transition ease-in-out duration-200 text-white bg-gray-900">
      <div className="flex w-full px-10 justify-between items-center bg-[#101820]  ">
        <a href="#">
          <img
            src="https://lelogama.go-jek.com/prime/upload/gojek-horizontal-logo-white.svg"
            alt="logo gojek"
            width="112px"
            height="32px"
          ></img>
        </a>
        <div className="flex gap-10 items-center ">
          <a href="#" className="hover:underline">
            Beranda
          </a>
          <a href="#" className="hover:underline">
            Gabung jadi Mitra
          </a>
          <a href="#" className="hover:underline">
            GoCorp
          </a>
          <a href="#" className="hover:underline">
            Karir
          </a>
          <a href="#" className="hover:underline">
            Perusahaan
          </a>
          <a href="#" className="hover:underline">
            Produk
          </a>
          <a href="#" className="hover:underline">
            Blog
          </a>
          <a href="#" className="hover:underline">
            Bantuan
          </a>
          <a href="#" className="hover:underline">
            ID
          </a>
        </div>
      </div>
    </div>
  );
}
