import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  java,
  c,
  gradup,
  project1,
  project2,
  project3,
  project4,
  project5,
} from '../assets'

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
]

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'React Native Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Competitive Coding ',
    icon: creator,
  },
]

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Java',
    icon: java,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'c++',
    icon: c,
  },
  {
    name: 'docker',
    icon: docker,
  },
]

const experiences = [
  {
    title: 'Junior Developer',
    company_name: 'GradUp.in',
    icon: gradup,
    iconBg: '#383E56',
    date: 'July 2023 -  Current',
    points: [
      'Developed webs craping and automation systems for data collection,resulting in improved data quality and increased sales.',
      'Created a scheduled task for daily database updates,ensuring data accuracy.',
      'Implemented advanced caching strategies using Next.js,resulting in a remarkable 40% reduction in page load times.',
      'Developed the backend APIs of the course video player,optimizing video streaming capabilities and reducing buffering time by 60%, resulting in an improved user experience.',
      'Implemented and integrated AI-powered chatbot chatling API into the company’s website,Collaborated with cross-functional teams including marketing and sales to analyze data collected from the chatbot API, identifying key insights on customer preferences and behavior that informed strategic decision-making',
    ],
  },
  {
    title: 'Intern',
    company_name: 'GeekForGeeks',
    icons: '',
    iconBg: '#E6DEDD',
    date: 'Apr 2023 - Jun 2023',
    points: [
      'During the internship,I gained hands-on experience in developing web applications using Spring Boot, creating RESTful APIs, handling security, and optimizing performance. I am now equipped with valuable skills and knowledge to excel in software development, particularly in the Spring Boot ecosystem.',
    ],
  },
]

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
]

const projects = [
  {
    name: 'Discord Clone',
    description:
      'A Discord clone using Next.js, Socket.io, Prisma DB, and more! 🎉 This would  have been possible without the incredible tutorials from Code with Antonio. 🙌🌐 Check out the live project here: https://lnkd.in/gXARkemY↗',
    tags: [
      {
        name: 'Nextjs-14',
        color: 'blue-text-gradient',
      },
      {
        name: 'Socket.io',
        color: 'green-text-gradient',
      },
      {
        name: 'Prisma DB',
        color: 'pink-text-gradient',
      },
    ],
    image: project4,
    source_code_link: 'https://discord-clone-production-68a7.up.railway.app/',
  },

  {
    name: 'Sorting Algo Visualizer',
    description:
      'A Next js app build to visualize and understand basic sorting algorithms such as Bubble Sort, Insertion Sort, Merge Sort, Quick Sort. 🙌🌐 Check out the live project here: https://sortingalgo-visual.vercel.app',
    tags: [
      {
        name: 'Nextjs-14',
        color: 'blue-text-gradient',
      },
      {
        name: 'TypeScript',
        color: 'green-text-gradient',
      },
      {
        name: 'Algorithms',
        color: 'pink-text-gradient',
      },
    ],
    image: project5,
    source_code_link: 'https://sortingalgo-visual.vercel.app',
  },
  {
    name: 'AI Based Tic-tac-Toe',
    description:
      'Developed a Tic-Tac-Toe game using C++ and the Minimax algorithm with backtracking. Implemented an AI opponent that uses the Minimax algorithm to find the optimal move to make based on the current game state.',
    tags: [
      {
        name: 'C++',
        color: 'blue-text-gradient',
      },
      {
        name: 'MinMax Algo',
        color: 'green-text-gradient',
      },
      {
        name: 'data-structures',
        color: 'pink-text-gradient',
      },
    ],
    image: project1,
    source_code_link: 'https://github.com/Diyanshrao',
  },
  {
    name: 'Yelp Camp',
    description:
      'Designed and developed a web application using Express.js and MongoDB that allows users to search and discover nearby campgrounds.Utilized MongoDB to store and manage data. Created a RESTful API to handle client-server communication.',
    tags: [
      {
        name: 'Express',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'mongoDB',
        color: 'pink-text-gradient',
      },
    ],
    image: project2,
    source_code_link: 'https://github.com/Diyanshrao',
  },
  {
    name: 'FaceBook Clone',
    description:
      'A social networking platform developed with SpringBoot,React.js, Node.js,MySQL.Replicates the functionality of Facebook.Delivers a familiar and feature-rich social networking experience akin to the renowned platform, Facebook. database management.',
    tags: [
      {
        name: 'SpringBoot',
        color: 'blue-text-gradient',
      },
      {
        name: 'Nextjs',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: project3,
    source_code_link: 'https://github.com/Diyanshrao',
  },
]

export { services, technologies, experiences, testimonials, projects }
