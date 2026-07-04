const assert = require("node:assert/strict");
const { readFileSync } = require("node:fs");
const test = require("node:test");

const html = readFileSync("index.html", "utf8");
const css = readFileSync("styles.css", "utf8");

function sectionIndex(id) {
  return html.indexOf(`id="${id}"`);
}

test("main sections are in the intended document order", () => {
  const order = [
    "spawn",
    "world-description",
    "experience",
    "projects",
    "community",
    "portal",
  ];

  const positions = order.map((id) => [id, sectionIndex(id)]);
  for (const [id, position] of positions) {
    assert.notEqual(position, -1, `missing #${id}`);
  }

  for (let index = 1; index < positions.length; index += 1) {
    const [previousId, previousPosition] = positions[index - 1];
    const [currentId, currentPosition] = positions[index];
    assert.ok(
      previousPosition < currentPosition,
      `#${previousId} should appear before #${currentId}`
    );
  }
});

test("projects section contains all six project saves", () => {
  const projectsSection = html.slice(sectionIndex("projects"), sectionIndex("community"));
  const expectedProjects = [
    "Cypress Web App",
    "Workout Together",
    "DermaDetect",
    "PathPilot",
    "Trade Vacancy Rate Predictor",
    "Uber Simulator",
  ];

  for (const project of expectedProjects) {
    assert.match(projectsSection, new RegExp(`<h3>${project}</h3>`));
  }

  const saveCount = (projectsSection.match(/class="project-card world-save-row"/g) || [])
    .length;
  assert.equal(saveCount, expectedProjects.length);

  const saves = [...projectsSection.matchAll(/Project Save (\d{2})/g)].map(
    (match) => match[1]
  );
  assert.deepEqual(saves, ["01", "02", "03", "04", "05", "06"]);
  assert.doesNotMatch(projectsSection, /Request details/);
});

test("projects are not hidden by stylesheet rules", () => {
  assert.doesNotMatch(css, /\.projects-section[^{]*\{[^}]*display:\s*none/i);
  assert.doesNotMatch(css, /\.world-menu[^{]*\{[^}]*display:\s*none/i);
  assert.doesNotMatch(css, /\.world-save-list[^{]*\{[^}]*display:\s*none/i);
});

test("about section includes the profile photo", () => {
  const aboutSection = html.slice(sectionIndex("world-description"), sectionIndex("experience"));
  assert.match(
    aboutSection,
    /src="WhatsApp%20Image%202026-07-03%20at%207\.51\.51%20PM\.jpeg"/
  );
  assert.match(aboutSection, /alt="Mohammed Ahmed"/);
});
