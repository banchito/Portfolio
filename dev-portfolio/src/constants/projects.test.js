const { projects } = require("./constans");

test('Project details are correct', () => {
  expect(projects).toMatchInlineSnapshot(`
    Array [
      Object {
        "description": "A responsive website integrating visual and React.js component testing estrategies.",
        "id": 0,
        "image": "/images/1.png",
        "source": "https://github.com/banchito/Portfolio",
        "tags": Array [
          "NextJS",
          "Node",
          "Cypress",
          "Happo.io",
        ],
        "title": "Esteban Portfolio Website",
      },
    ]
  `);
});

