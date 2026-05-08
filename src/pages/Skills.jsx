import { useState } from 'react';
import './Skills.css';

const Skills = () => {
  const skillData = [
    {
      id: 'js',
      name: 'JavaScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      desc: 'Bahasa pemrograman utama untuk pengembangan web modern. Digunakan untuk logika website, aplikasi mobile, hingga backend server.',
      tags: ['ES6+', 'Async/Await', 'DOM']
    },
    {
      id: 'react',
      name: 'React JS',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      desc: 'Library JavaScript paling populer untuk membangun User Interface yang interaktif dan cepat dengan sistem komponen.',
      tags: ['Hooks', 'SPA', 'Virtual DOM']
    },
    {
      id: 'laravel',
      name: 'Laravel',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg',
      desc: 'Framework PHP yang powerful untuk backend aplikasi. Membantu pembuatan sistem database dan API dengan sangat cepat dan aman.',
      tags: ['MVC', 'Eloquent', 'Blade']
    }
  ];

  const [selectedSkill, setSelectedSkill] = useState(skillData[0]);

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="title">Technical Skills</h2>
        
        <div className="skills-container">
          {/* Sisi Daftar Icon */}
          <div className="skills-list">
            {skillData.map((skill) => (
              <div 
                key={skill.id} 
                className={`skill-card ${selectedSkill.id === skill.id ? 'active' : ''}`}
                onClick={() => setSelectedSkill(skill)}
              >
                <img src={skill.icon} alt={skill.name} />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>

          {/* Sisi Detail Deskripsi */}
          <div className="skill-detail">
            <div className="detail-card">
              <div className="detail-header">
                <img src={selectedSkill.icon} alt={selectedSkill.name} className="detail-icon" />
                <div className="detail-title">
                  <h3>{selectedSkill.name}</h3>
                  <div className="tags">
                    {selectedSkill.tags.map(tag => (
                      <span key={tag} className="tag">#{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="detail-body">
                <p>{selectedSkill.desc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;