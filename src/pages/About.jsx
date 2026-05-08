import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <h2 className="title">Tentang Saya</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>"Saya Ilham adalah seorang Senior Web Developer dengan pengalaman lebih dari [Jumlah] tahun dalam merancang dan membangun aplikasi web yang responsif, terukur, dan berkinerja tinggi. Spesialisasi saya mencakup pengembangan full-stack, mulai dari struktur front-end yang estetis menggunakan React/Vue.js hingga manajemen back-end yang kokoh dengan Node.js, PHP, atau Python.Saya tidak hanya menulis kode; saya menciptakan solusi digital yang memecahkan masalah bisnis nyata. Berbekal keahlian dalam database SQL/NoSQL, integrasi API, dan prinsip-prinsip UI/UX, saya memastikan setiap proyek yang saya kerjakan menghasilkan pengalaman pengguna yang mulus dan aman. Berbasis di [Lokasi Anda/Remote], saya berdedikasi untuk mengikuti tren teknologi terbaru di tahun 2026 untuk memberikan performa web tercepat bagi klien saya."</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;