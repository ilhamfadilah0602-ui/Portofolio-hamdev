// 1. Import semua komponen halaman dan pendukung
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Contact from './pages/Contact'; // Import halaman contact yang baru
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      {/* Navigasi tetap berada di atas (fixed) */}
      <Navbar />
      
      <main>
        {/* Section Home */}
        <section id="home">
          <div className="container">
            <Home />
          </div>
        </section>

        {/* Section About */}
        <section id="about">
          <div className="container">
            <About />
          </div>
        </section>

        {/* Section Skills */}
        <section id="skills">
          <div className="container">
            <Skills />
          </div>
        </section>

        {/* Section Contact (Paling Bawah) */}
        <section id="contact">
          <div className="container">
            <Contact />
          </div>
        </section>
      </main>

      {/* Footer sederhana */}
      <footer style={{ 
        textAlign: 'center', 
        padding: '40px 20px', 
        opacity: 0.5, 
        fontSize: '0.9rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)' 
      }}>
        <p>&copy; 2026 ilhamdev. Dipersembahkan dengan React & Laravel.</p>
      </footer>
    </div>
  );
}

export default App;