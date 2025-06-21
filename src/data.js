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
import nodeLogo from './assets/node.png';
import figmaLogo from './assets/figma.png';
export const learning = [
  { name: 'Node.js', icon: nodeLogo },
  { name: 'Figma', icon: figmaLogo },
  // Add more if needed
];
export const skills = [
  { name: 'HTML5', icon: htmlLogo, level: '95%' },
  { name: 'CSS3', icon: cssLogo, level: '90%' },
  { name: 'JavaScript', icon: jsLogo, level: '85%' },
  { name: 'React', icon: reactLogo, level: '80%' },
  { name: 'Git', icon: gitLogo, level: '75%' },
  { name: 'GitHub', icon: githubLogo, level: '80%' },
  { name: 'Responsive Design', icon: responsiveLogo, level: '90%' },
  { name: 'VS Code', icon: vscodeLogo, level: '85%' },
];



export const upcomingProjects = [
  {
    title: 'AI Blog Writer',
    description: 'An AI-powered tool to write SEO-optimized blog posts.',
    status: 'In Progress',
  },
  {
    title: 'E-commerce Dashboard',
    description: 'Admin panel to manage orders, products, and users.',
    status: 'Planned',
  },
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
