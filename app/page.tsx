'use client';

import React, { useState, useEffect } from 'react';

const Portfolio = () => {
  const [displayedTexts, setDisplayedTexts] = useState<string[]>([]);
  const texts = ['Eu sou desenvolvedor', 'Fullstack e Frontend'];

  useEffect(() => {
    let lineIndex = 0;
    let charIndex = 0;
    const interval = setInterval(() => {
      if (lineIndex < texts.length) {
        const currentLine = texts[lineIndex];
        if (charIndex < currentLine.length) {
          setDisplayedTexts((prev) => {
            const newTexts = [...prev];
            newTexts[lineIndex] = currentLine.substring(0, charIndex + 1);
            return newTexts;
          });
          charIndex++;
        } else {
          lineIndex++;
          charIndex = 0;
        }
      } else {
        clearInterval(interval);
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='container'>
      <header className='header'>
        <h1>Marcos Vinicius</h1>
        <nav className='nav'>
          <a href='#about'>Sobre</a>
          <a href='#projects'>Projetos</a>
          <a href='#contact'>Contato</a>
        </nav>
      </header>

      <main>
        <section id='about' className='section about'>
          <div className='typing-text-container'>
            <h1 className='typing-text'>
              {displayedTexts.map((text, index) => (
                <span key={index} style={{ display: 'block' }}>
                  {text}
                </span>
              ))}
            </h1>
          </div>
          <div>
            <h2>Sobre Mim</h2>
            <p>
              Sou um desenvolvedor de software apaixonado por criar soluções
              elegantes e eficientes. Tenho experiência em desenvolvimento web
              full-stack e frontend, com foco em React, Vue.js, Node.js, Java,
              Spring e Quarkus. Estou sempre aprendendo novas tecnologias e
              buscando aprimorar minhas habilidades.
            </p>
            <a
              href='https://drive.google.com/file/d/1obKytsUxmKfk3D6cjkcMnWnQRMKl-ESy/view?usp=sharing'
              target='_blank'
              rel='noopener noreferrer'
              className='cv-button'
            >
              Baixar CV
            </a>
          </div>
        </section>

        <section id='skills' className='section'>
          <h2>Habilidades</h2>
          <div className='skills-grid'>
            {[
              'JavaScript',
              'TypeScript',
              'Java',
              'Kotlin',
              'React.js',
              'Next.js',
              'Vue.js',
              'Nuxt.js',
              'Vuetify',
              'Vuex',
              'HTML5',
              'CSS3',
              'Tailwind CSS',
              'Redux',
              'Node.js',
              'Spring Boot',
              'Quarkus',
              'Express.js',
              'Nest.js',
              'RESTful APIs',
              'React Native',
              'Android',
              'MongoDB',
              'PostgreSQL',
              'MySQL',
              'Oracle',
              'Firebase',
              'Docker',
              'Git',
              'GitHub Actions',
              'Jenkins',
              'CI/CD',
              'Jest',
              'Cypress',
              'Testes Unitários',
              'Testes de Integração',
              'TDD',
              'Agile',
              'Scrum',
              'Kanban',
            ].map((skill) => (
              <div key={skill} className='skill-badge'>
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </section>

        <section id='projects' className='section projects'>
          <h2>Projetos</h2>
          <div className='projects-grid'>
            <div className='project-card'>
              <h3> Banco Algar</h3>
              <p>
                Essa API foi desenvolvida em Spring Boot, com a finalidade para
                apresentar as funcionalidades de um banco. Foi implementado
                todas as principais funções que um banco pode fazer.
              </p>
            </div>
            <div className='project-card'>
              <h3>Freelaah</h3>
              <p>
                Plataforma educacional inovadora que permite aos usuários se
                inscreverem em cursos estruturados em trilhas de aprendizado,
                possibilitando a aplicação prática dos conhecimen- tos
                adquiridos em projetos colaborativos com empresas parceiras.
              </p>
            </div>
            <div className='project-card'>
              <h3>ChangeColor</h3>
              <p>
                ChangeColor é um aplicativo Android desenvolvido em Kotlin que
                demonstra como alterar programaticamente a cor de fundo de uma
                View. Ao clicar no botão flutuante (FAB), a cor de fundo da tela
                muda aleatoriamente entre um conjunto pré-definido de cores.
              </p>
            </div>
          </div>
        </section>

        <section id='contact' className='section contact'>
          <h2>Contato</h2>
          <div className='contact-links'>
            <a
              href='https://www.linkedin.com/in/marcosoliveirarocha/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'></path>
                <rect x='2' y='9' width='4' height='12'></rect>
                <circle cx='4' cy='4' r='2'></circle>
              </svg>
            </a>
            <a
              href='https://github.com/marcosvinirocha'
              target='_blank'
              rel='noopener noreferrer'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'></path>
              </svg>
            </a>
            <a href='mailto:marcosvinicius.udia1256@gmail.com'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'></path>
                <polyline points='22,6 12,13 2,6'></polyline>
              </svg>
            </a>
          </div>
        </section>
      </main>

      <footer className='footer'>
        <p>
          &copy; {new Date().getFullYear()} Marcos Vinicius. Todos os direitos
          reservados.
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;
