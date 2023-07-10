import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/project-1.jpg';
import Work2 from './assets/project-2.jpg';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='navicon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='navicon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='navicon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='navicon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Santhosh',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Sakthivel',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '23 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Indian',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Location : ',
    description: 'TamilNadu',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+91 8072127851',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'santhoshfsd2023@gmail.com',
  },

  {
    id: 9,
    title: 'Langages : ',
    description: 'Tamil, English',
  },
];

export const stats = [
  {
    id: 1,
    no: '1',
    title: 'Years of <br /> Experience',
  },

  {
    id: 2,
    no: '2+',
    title: 'Completed <br /> Projects',
  },

  {
    id: 3,
    no: 'Degree',
    title: 'B.E <br /> Completed ',
  },

];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2022-2023',
    title: 'MERN Stack <span> at GUVI </span>',
    desc: 'I completed MERN Stack Developer course at GUVI with good knowledge of ReactJs, NodeJs, ExpressJs and MongoDB. I love working on new and exciting technologies emerging nowadays.',
  },
    {
    id: 2,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2018-2022',
    title: 'Bachelor of Engineering <span> B.E</span>',
    desc: 'Electronics and Communication Engineering at Mailam Engineering Collage in 2022.',
  },

  {
    id: 3,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2017-2018',
    title: 'HSC <span> 12th </span>',
    desc: 'Completed Computer Science (12th) at Alpha English Higher Secondary School in 2018.',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2015-2016',
    title: 'SSLC <span> 10th </span>',
    desc: 'Completed 10th at Alpha English Higher Secondary School in 2016.',
  },
];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '85',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '70',
  },

  {
    id: 3,
    title: 'Tailwind Css',
    percentage: '80',
  },

  {
    id: 4,
    title: 'React',
    percentage: '75',
  },

  {
    id: 5,
    title: 'Express JS',
    percentage: '40',
  },

  {
    id: 6,
    title: 'Node JS',
    percentage: '35',
  },

  {
    id: 7,
    title: 'MongoDb',
    percentage: '50',
  },

  {
    id: 8,
    title: 'Material UI',
    percentage: '70',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'YouTube Clone',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Video',
      },
      {
        icon: <FiUser />,
        title: 'Tech : ',
        desc: 'HTML, CSS, JavaScript',
      },
      {
        icon: <FaCode />,
        title: 'Description : ',
        desc: 'video streaming software',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://63b3e2cad802a6296d23b0a0--demomas.netlify.app/',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Admin Dashboard',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Dashboard',
      },
      {
        icon: <FiUser />,
        title: 'Tech : ',
        desc: 'React, Tailwind CSS, Material UI',
      },
      {
        icon: <FaCode />,
        title: 'Description : ',
        desc: 'Create and Update Workflows',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://644e70711e322e544b3bf85f--demomas.netlify.app/',
      },
    ],
  },

];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
