const { projects } = require("./constans");

test('Project details are correct', () => {
  expect(projects).toMatchInlineSnapshot(`
    Array [
      Object {
        "description": "A responsive website to bet with friends over the results of every match of the soccer 2022 World Cup.",
        "id": 0,
        "image": "/images/worldCup.png",
        "source": "https://github.com/banchito/world_cup",
        "tags": Array [
          "React",
          "Firebase",
        ],
        "title": "World Cup Bet",
        "visit": "https://world-cup-alpha.vercel.app/",
      },
      Object {
        "description": "A responsive website integrating visual and React.js component testing estrategies.",
        "id": 1,
        "image": "/images/portfolio.png",
        "source": "https://github.com/banchito/Portfolio",
        "tags": Array [
          "NextJS",
          "Node",
          "Cypress",
          "Happo.io",
        ],
        "title": "Esteban Portfolio Website",
        "visit": "",
      },
    ]
  `)
});

