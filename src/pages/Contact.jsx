import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    nama: '',
    pesan: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleKirimWA = (e) => {
    e.preventDefault();
    
    // Ganti nomor di bawah dengan nomor WhatsApp kamu (awali dengan 62)
    const nomorWA = "62882016503408"; 
    const teks = `Halo, saya ${formData.nama}. %0A%0A${formData.pesan}`;
    const linkWA = `https://wa.me/${nomorWA}?text=${teks}`;

    window.open(linkWA, '_blank');
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="title">Contact Me</h2>
        
        <div className="contact-wrapper">
          <div className="contact-info">
            <h3>Let's Talk!</h3>
            <p>Punya pertanyaan atau ingin bekerja sama? Kirimkan pesan langsung ke WhatsApp saya.</p>
            <div className="info-item">
              <span>📍</span> pakuhaji-Ngamprah-Bandung Barat-Jawa Barat-Indonesia
            </div>
            <div className="info-item">
              <span>📧</span> ilhampelajarrpl.0602@gmail.com
            </div>
          </div>

          <form className="contact-form" onSubmit={handleKirimWA}>
            <div className="form-group">
              <label>Nama Lengkap</label>
              <input 
                type="text" 
                name="nama" 
                placeholder="Masukkan nama anda..." 
                required 
                value={formData.nama}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Pesan</label>
              <textarea 
                name="pesan" 
                rows="5" 
                placeholder="Tulis pesan anda di sini..." 
                required
                value={formData.pesan}
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit" className="btn-kirim">
              Kirim ke WhatsApp <span>🚀</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;