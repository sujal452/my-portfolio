// src/data.js
import project1 from './assets/project1.png';
import project2 from './assets/project2.png';


import htmlLogo from './assets/html.png';
import cssLogo from './assets/css.png';
import jsLogo from './assets/js.png';
import reactLogo from './assets/react.png';
import gitLogo from './assets/git.png';
import githubLogo from './assets/github.png';
import responsiveLogo from './assets/responsive.png';
import vscodeLogo from './assets/vscode.png';

export const skills = [
  { name: 'HTML5', icon: htmlLogo },
  { name: 'CSS3', icon: cssLogo },
  { name: 'JavaScript', icon: jsLogo },
  { name: 'React', icon: reactLogo },
  { name: 'Git', icon: gitLogo },
  { name: 'GitHub', icon: githubLogo },
  { name: 'Responsive Design', icon: responsiveLogo },
  { name: 'VS Code', icon: vscodeLogo },
];



// import project2 from './assets/project2.png'; // comment this if file not found

export const projects = [
  {
    title: 'QuickTask Pro',
    description: 'Trello-like task manager built with React',
    image: project1,
    live: 'https://example.com',
    github: 'https://github.com/example',
  },

  {
    title: 'Portfolio Website',
    description: 'My personal developer portfolio built with React.',
    image: project2,
    live: 'https://your-portfolio-link.com',
    github: 'https://github.com/sujal452/ecommerce-app',
  },
];
