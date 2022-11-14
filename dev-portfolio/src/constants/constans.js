const projects = [
  {
    title: 'World Cup Bet',
    description:
      'A responsive website to bet with friends over the results of every match of the soccer 2022 World Cup.',
    image: '/images/worldCup.png',
    tags: ['React', 'Firebase'],
    source: 'https://github.com/banchito/world_cup',
    id: 0,
    visit: 'https://world-cup-alpha.vercel.app/',
  },
  {
    title: 'Esteban Portfolio Website',
    description:
      'A responsive website integrating visual and React.js component testing estrategies.',
    image: '/images/portfolio.png',
    tags: ['NextJS', 'Node', 'Cypress', 'Happo.io'],
    source: 'https://github.com/banchito/Portfolio',
    id: 1,
    visit: '',
  },
]

const TimeLineData = [
  {
    year: 2022,
    text: 'Full time freelance contractor. ',
  },
  {
    year: 2020,
    text: 'Succesfully completed Web Development Coding Bootcamp.',
  },
  {
    year: 2019,
    text: 'Started my software developing journey as intern at Streamily.com.',
  },
];

const socialUrls = {
  github: 'https://github.com/banchito',
  linkedIn: 'https://www.linkedin.com/in/banchito/',
  resume: 'https://banchito.github.io/Resume/',
};

const accomplishments = [
  { title: '3 Foreign Languages', text: ' English, French & Spanish' },
  { title: '1 BA Degree', text: ' Law - Colombia ' },
  { title: '1 AS Degree', text: 'Computer Information Systems' },
];

module.exports = { socialUrls, TimeLineData, projects, accomplishments };
