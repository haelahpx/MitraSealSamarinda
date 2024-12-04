import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import bagImage from './assets/images/bag.jpg';
import tambahan from './assets/images/tambahan.jpg';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

  return (
    <div className="font-sans">
      <NavBar />
      <HeroSection />
      <MissionSection />
      <AdvantageSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

function NavBar() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-gray-800 shadow-lg">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-4xl font-bold leading-tight font-yeseva">
              <span className="text-red-600 text-outline">M</span>
              <span className="text-blue-600 text-outline">S</span>
            </h1>
          </div>
          <div className="flex items-center space-x-6">
            {/* Navigation Links */}
            <a href="#hero" className="pb-1 text-white transition-all hover:border-b-2 hover:border-white">Home</a>
            <a href="#mission" className="pb-1 text-white transition-all hover:border-b-2 hover:border-white">Visi Misi</a>
            <a href="#advantage" className="pb-1 text-white transition-all hover:border-b-2 hover:border-white">Keunggulan</a>
            <a href="#contact" className="pb-1 text-white transition-all hover:border-b-2 hover:border-white">Kontak</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-20 pb-12 bg-center bg-cover"
      style={{ backgroundImage: `url(${bagImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-start justify-center h-full px-4 mx-auto text-white max-w-7xl pt-72">
        <h1 className="mb-4 text-3xl text-4xl font-bold md:text-6xl" data-aos="fade-up">Mitra Seal Samarinda</h1>
        <p className="text-xl" data-aos="fade-up">Pusat Seal Alat Berat Berkualitas di Kalimantan Timur Stokist Seal Mesin dan Alat Berat</p>
      </div>
    </section>
  );
}
function MissionSection() {
  return (
    <section id="mission" className="py-12 bg-white" data-aos="fade-up">
      <div className="px-4 mx-auto max-w-7xl">
        <h2 className="mb-12 text-4xl font-bold text-center text-blue-600">Mitra Seal Visi Misi</h2>
        <p className="max-w-3xl mx-auto mb-12 text-center text-gray-600">
          Menjadi perusahaan seal terbesar dan terlengkap dengan mewujudkan nilai Islam, yang rahmatan lil 'alamin.
        </p>

        {/* Grid layout with responsive adjustments */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          <MissionCard title="Integritas" description="Membangun perusahaan yang berintegritas dan menjunjung tinggi nilai-nilai kebenaran dalam setiap aspek bisnis." color="bg-blue-50" />
          <MissionCard title="Profesionalisme" description="Menjadi perusahaan yang profesional dalam memberikan layanan dan produk berkualitas terbaik." color="bg-pink-50" />
          <MissionCard title="Manfaat untuk Bangsa" description="Memberikan dampak positif bagi masyarakat dan bangsa dengan produk yang bermanfaat." color="bg-blue-50" />
        </div>

        {/* Adjust grid for mobile screens */}
        <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2">
          <MissionCard title="Nilai Islam" description="Menerapkan prinsip-prinsip Islam dalam setiap aktivitas perusahaan sebagai landasan moral dan etika." color="bg-pink-50" />
          <MissionCard title="Pelayanan Terbaik" description="Memberikan pelayanan terbaik kepada pelanggan dengan berlandaskan pada profesionalisme dan integritas." color="bg-blue-50" />
        </div>
      </div>
    </section>
  );
}

function MissionCard({ title, description, color }) {
  return (
    <div className={`p-6 transition duration-300 rounded-lg shadow group ${color} hover:${color === 'bg-blue-50' ? 'bg-pink-50' : 'bg-blue-50'}`} data-aos="fade-up">
      <h3 className="mb-4 text-xl font-bold text-blue-600">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function AdvantageSection() {
  return (
    <section id="advantage" className="py-16 bg-white" data-aos="fade-up">
      <div className="px-4 mx-auto max-w-7xl">
        {/* Main card container */}
        <div className="flex flex-col p-6 rounded-lg shadow-xl bg-gray-50 md:flex-row md:space-x-12">
          {/* Left section for text description */}
          <div className="flex flex-col items-start justify-between space-y-6 md:w-1/2">
            <h3 className="text-4xl font-extrabold leading-tight text-blue-600">Keunggulan Mitra Seal</h3>
            <p className="text-lg leading-relaxed text-gray-700">
              Kami menyediakan seal berkualitas dari merek terpercaya seperti NOK dan SKF yang telah memenuhi standar internasional. Seal kami teruji untuk mendukung kinerja mesin dan alat berat dalam berbagai industri.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Dapatkan produk terbaik yang telah terbukti kualitas dan ketahanannya, cocok untuk kebutuhan industri Anda.
            </p>
            <img src={tambahan} alt="Mitra Seal Image" className="w-full h-auto rounded-lg shadow-xl" />
          </div>

          {/* Right section for Advantage Cards */}
          <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-2 md:w-1/2 md:mt-0">
            <AdvantageCard 
              title="Berkualitas"
              description="Seal yang kami tawarkan berasal dari merek terpercaya seperti NOK dan SKF yang telah memenuhi standar internasional."
              color="bg-blue-50"
            />
            <AdvantageCard 
              title="Teruji dan Terbukti"
              description="Produk seal kami telah teruji dan terbukti efektif mendukung kinerja mesin dan alat berat dalam berbagai industri."
              color="bg-pink-50"
            />
            <AdvantageCard 
              title="Gratis Konsultasi"
              description="Kami siap membantu Anda memilih seal yang sesuai dengan jenis dan spesifikasi yang tepat untuk kebutuhan Anda."
              color="bg-blue-50"
            />
            <AdvantageCard 
              title="Pelayanan Sepenuh Hati"
              description="Tempat nyaman dan ramah, outlet serta tim kami siap melayani Anda dengan sepenuh hati."
              color="bg-pink-50"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function AdvantageCard({ title, description, color }) {
  return (
    <div className={`p-6 transition-transform duration-300 rounded-lg shadow-md group ${color} border-4 border-transparent bg-clip-padding hover:scale-105 hover:${color === 'bg-blue-50' ? 'bg-pink-50' : 'bg-blue-50'}`} data-aos="fade-up">
      <h3 className="mb-4 text-2xl font-semibold text-blue-600">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}



function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-white" data-aos="fade-up">
      <div className="px-6 mx-auto max-w-7xl">
        <div className="p-8 shadow-xl bg-gray-50 rounded-xl">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-semibold text-blue-600">Kontak Kami</h2>
            <p className="max-w-3xl mx-auto mt-4 text-lg text-gray-500">
              Kami siap membantu Anda! Jika Anda memiliki pertanyaan atau ingin bekerja sama, silakan hubungi kami melalui WhatsApp atau kirim pesan melalui formulir berikut.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Kirim Pesan Section */}
            <div
              className="p-8 border border-gray-200 rounded-lg shadow-md bg-pink-50"
              data-aos="fade-up"
            >
              <h3 className="mb-6 text-2xl font-semibold text-center text-blue-600">Kirim Pesan</h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const name = e.target.name.value;
                  const message = e.target.message.value;
                  const whatsappLink = `https://wa.me/62123456789?text=Nama:%20${encodeURIComponent(
                    name
                  )}%0APesan:%20${encodeURIComponent(message)}`;
                  window.open(whatsappLink, "_blank");
                }}
              >
                <div className="mb-6">
                  <label htmlFor="name" className="block font-medium text-gray-700">
                    Nama
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 mt-2 transition-all duration-200 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                    placeholder="Masukkan nama Anda"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block font-medium text-gray-700">
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    className="w-full px-4 py-3 mt-2 transition-all duration-200 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                    rows="5"
                    placeholder="Masukkan pesan Anda"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 text-white transition-all duration-200 bg-blue-600 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>

            {/* Lokasi Kami Section */}
            <div
              className="p-8 border border-gray-200 rounded-lg shadow-md bg-blue-50"
              data-aos="fade-up"
            >
              <h3 className="mb-6 text-2xl font-semibold text-center text-blue-600">Lokasi Kami</h3>
              <div className="w-full overflow-hidden rounded-lg shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1021354.3242295259!2d116.43988894505124!3d-0.5017597912707628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df67f364621bc35%3A0xd8366e18feac1f19!2sMITRA%20SEAL!5e0!3m2!1sid!2sid!4v1733307799313!5m2!1sid!2sid"
                  width="100%"
                  height="400"
                  style={{ border: "0" }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/62123456789" 
      target="_blank"
      rel="noopener noreferrer"
      className="fixed p-4 transition duration-200 bg-green-600 rounded-full shadow-lg bottom-4 right-4 hover:bg-green-700"
      aria-label="Chat with us on WhatsApp"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp Logo"
        className="w-8 h-8"
      />
    </a>
  );
}

function Footer() {
  return (
    <footer id="footer" className="py-12 text-white bg-gray-800">
      <div className="px-4 mx-auto text-center max-w-7xl">
        {/* Logo with MS text */}
        <h1 className="mb-4 text-4xl font-bold leading-tight font-yeseva">
          <span className="text-red-600 text-outline">M</span>
          <span className="text-blue-600 text-outline">S</span>
        </h1>
        <p className="mb-6 text-gray-300">
          Pusat Seal Alat Berat Berkualitas di Kalimantan Timur. Kami siap memberikan solusi untuk kebutuhan industri Anda.
        </p>
        
        <div className="flex justify-center mb-6 space-x-12">
          <div className="text-left">
            <h3 className="mb-4 text-xl font-semibold text-blue-400">Links</h3>
            <ul className="text-gray-300">
              <li><a href="#hero" className="hover:text-blue-600">Home</a></li>
              <li><a href="#mission" className="hover:text-blue-600">Visi Misi</a></li>
              <li><a href="#advantage" className="hover:text-blue-600">Keunggulan</a></li>
              <li><a href="#contact" className="hover:text-blue-600">Kontak</a></li>
            </ul>
          </div>
          <div className="text-left">
            <h3 className="mb-4 text-xl font-semibold text-blue-400">Services</h3>
            <ul className="text-gray-300">
              <li><a  className="hover:text-blue-600">Produk Seal</a></li>
              <li><a className="hover:text-blue-600">Konsultasi Gratis</a></li>
              <li><a  className="hover:text-blue-600">Pengiriman</a></li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center mb-6 space-x-6">
          <a href="https://www.facebook.com/people/Mitra-Seal-Samarinda/pfbid0rHVxUhQqHrvV8Zw66PG9wLgMnkchziEpKAKge35BMBb7M973UYL9jum8AkNEjEzsl/" className="text-gray-400 hover:text-blue-600">
            <i className="fab fa-facebook-f"></i> 
          </a>
          <a href="https://www.instagram.com/mitrasealsamarinda/" className="text-gray-400 hover:text-blue-600">
            <i className="fab fa-instagram"></i> 
          </a>
        </div>

        <div className="text-gray-400">
          <p>&copy; 2024 Mitra Seal Samarinda. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}


export default App;
