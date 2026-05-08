// 1. Import foto dari folder assets
import profilePhoto from '../assets/profile.png'; 
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        {/* Kontainer Foto dengan Efek Cahaya */}
        <div className="profile-wrapper">
          <div className="profile-glow"></div>
          <div className="profile-circle">
            {/* 2. Gunakan variabel profilePhoto di sini */}
            <img src={profilePhoto} alt="Ilham Profile" />
          </div>
        </div>

        {/* Teks Utama */}
        <div className="text-area">
          <h2 className="welcome-tag">Hello, I'm Ilham</h2>
          <h1 className="moving-gradient">Fullstack <br /> Developer</h1>
          <p className="description">
            Spesialis dalam membangun aplikasi web modern menggunakan <span>ReactJS</span> dan <span>Laravel</span>. 
            Fokus pada desain yang bersih dan performa yang optimal.
          </p>

          <div className="home-btns">
            <a href="https://github.com/ilhamfadilah0602-ui" target="_blank" rel="noreferrer" className="btn btn-filled">
              View GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse"></div>
      </div>
    </section>
  );
};

export default Home;