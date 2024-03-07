import React, {useEffect} from 'react';
import './App.css';

import ahmed1 from './images/ahmed1.jpeg';
import ahmedandruni from './images/ahmedandruni.jpeg';
import catwalle from './images/ahmedandruffy.jpeg';

function App() {

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry,index) => {
          if (entry.isIntersecting) {          
            const delay = index * 0.5; // Adjust the 0.5s interval as needed
            entry.target.style.transitionDelay = `${delay}s`;
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    document.querySelectorAll('.fade-in').forEach((img) => {
      observer.observe(img);
    });

    // Clean up function
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="App">
      <nav>
        <ul>
          <li><a href="#about"><span>About</span></a></li>
          <li><a href="#projects"><span>Projects</span></a></li>
          <li><a href="#skills"><span>Skills</span></a></li>
          <li><a href="#work-experience"><span>Work Experience</span></a></li>
        </ul>
      </nav>


      <section id="about">
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.</p>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <div className="projectHeader">
          <h3>Project 1</h3>
          <div className="project">
            <p>• Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.</p>
          </div>
          <h3>Project 2</h3>
          <div className="project">
            <p>• Nulla porttitor accumsan tincidunt. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>
          </div>
          <h3>Project 3</h3>
          <div className="project">
            <p>• Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur aliquet quam id dui posuere.</p>
          </div>
        </div>
      </section>

      <section id="skills">
        <h2>Skills</h2>
        <p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur aliquet quam id dui posuere.</p>
      </section>

      <section id="work-experience">
        <h2>Work Experience</h2>
        <p>Donec sollicitudin molestie malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.</p>
      </section>

      <section id="photodump">
        <h2>Gallery Wall</h2>
        <div class="photo-container">
          <img src={ahmed1} alt="Ahmed" class="fade-in"></img>
          <img src={ahmedandruni} alt="Ahmed and Runali" class="fade-in"></img>
          <img src={catwalle} alt="" class="fade-in"></img>
        </div>
      </section>

    </div>
  );
}

export default App;
