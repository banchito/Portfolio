const projects = [
  {
    title: 'Esteban Portfolio Website',
    description:
      'A responsive website integrating visual and React.js component testing estrategies.',
    image: '/images/1.png',
    tags: ['NextJS', 'Node', 'Cypress', 'Happo.io'],
    source: 'https://github.com/banchito/Portfolio',
    id: 0,
  },
];

const TimeLineData = [
  {
    year: 2019,
    text: 'Started my software developing journey as intern at Streamily.com.',
  },
  { year: 2020, text: 'Succesfully completed Web Development Coding Bootcamp.' },
  {
    year: 2021,
    text: 'Transitioned from intern to Contractor. ',
  },
];

const socialUrls = {
  github: 'https://github.com/banchito',
  linkedIn: 'https://www.linkedin.com/in/banchito/',
};

const accomplishments = [
  { title: '3 Foreign Languages', text: ' English, French & Spanish' },
  { title: '1 BA Degree', text: ' Law - Colombia ' },
  { title: '1 AS Degree', text: 'Computer Information Systems' },
];

module.exports = { socialUrls, TimeLineData, projects, accomplishments };
