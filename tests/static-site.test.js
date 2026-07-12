const assert = require("node:assert/strict");
const { existsSync, readFileSync } = require("node:fs");
const test = require("node:test");

const html = readFileSync("index.html", "utf8");
const css = readFileSync("styles.css", "utf8");
const script = readFileSync("script.js", "utf8");

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

  const saveCount = (
    projectsSection.match(
      /class="project-card world-save-row unlock-card"/g
    ) || []
  ).length;
  assert.equal(saveCount, expectedProjects.length);

  const saves = [...projectsSection.matchAll(/Project Save (\d{2})/g)].map(
    (match) => match[1]
  );
  assert.deepEqual(saves, ["01", "02", "03", "04", "05", "06"]);
  assert.doesNotMatch(projectsSection, /Request details/);
});

test("project repository blocks link to the supplied GitHub repositories", () => {
  const repositories = [
    "https://github.com/MattMoga/Cypress",
    "https://github.com/mohammedahmxd/workout-together",
    "https://github.com/RohanRamchandani/Skin-Infection-Detector",
    "https://github.com/mohammedahmxd/HackHive2026",
    "https://github.com/mohammedahmxd/Uber-Simulator",
  ];

  for (const repository of repositories) {
    assert.match(html, new RegExp(`href="${repository}"`));
  }

  assert.equal((html.match(/class="badge badge-repo"/g) || []).length, 5);
});

test("projects are not hidden by stylesheet rules", () => {
  assert.doesNotMatch(css, /\.projects-section[^{]*\{[^}]*display:\s*none/i);
  assert.doesNotMatch(css, /\.world-menu[^{]*\{[^}]*display:\s*none/i);
  assert.doesNotMatch(css, /\.world-save-list[^{]*\{[^}]*display:\s*none/i);
});

test("world map links every major portfolio location in order", () => {
  const heroSection = html.slice(sectionIndex("spawn"), sectionIndex("world-description"));
  const destinations = [
    ["#spawn", "Go to Spawn Point"],
    ["#experience", "Go to Experience Village"],
    ["#projects", "Go to Project Mines"],
    ["#community", "Go to Community Hub"],
    ["#portal", "Go to Portal"],
  ];

  for (const [href, label] of destinations) {
    assert.match(heroSection, new RegExp(`href="${href}"`));
    assert.match(heroSection, new RegExp(`aria-label="${label}"`));
  }

  assert.match(heroSection, /src="ahmed-world-map\.png"/);
  assert.match(heroSection, /Select a marker to travel\./);
  assert.equal((heroSection.match(/class="map-trigger /g) || []).length, 5);
  assert.doesNotMatch(html, /id="world-map"/);
  assert.equal(
    (script.match(/classList\.add\("is-visited"\)/g) || []).length,
    1,
    "visited map markers should only be awarded by direct marker clicks"
  );
});

test("cards unlock on scroll with a non-observer fallback", () => {
  assert.match(script, /function setupUnlockObserver\(\)/);
  assert.match(script, /classList\.add\("is-unlocked"\)/);
  assert.match(css, /\.reveal-ready \.unlock-card\.is-unlocked/);
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
  assert.doesNotMatch(script, /2200/);
});

test("tall sections reveal on small viewports and have a visibility fallback", () => {
  assert.match(script, /threshold:\s*0\.01/);
  assert.match(script, /sections\.forEach\(\(section\) => section\.classList\.add\("is-visible"\)\)/);
});

test("mobile about layout uses compact explicit spacing", () => {
  assert.match(css, /\.world-section \.section-layout\s*\{[^}]*gap:\s*28px/s);
  assert.match(css, /\.description-copy > p\s*\{[^}]*margin-top:\s*0/s);
  assert.match(css, /\.world-notes\s*\{[^}]*margin-top:\s*28px/s);
});

test("about section includes the profile photo", () => {
  const aboutSection = html.slice(sectionIndex("world-description"), sectionIndex("experience"));
  assert.match(
    aboutSection,
    /src="WhatsApp%20Image%202026-07-03%20at%207\.51\.51%20PM\.jpeg"/
  );
  assert.match(aboutSection, /alt="Mohammed Ahmed"/);
});

test("community section features NextGen Collective and its event photo", () => {
  const communitySection = html.slice(
    sectionIndex("community"),
    sectionIndex("portal")
  );

  assert.match(communitySection, /<h3>NextGen Collective<\/h3>/);
  assert.match(communitySection, /Toronto Tech Week/);
  assert.match(communitySection, /As Co-Founder of NextGen Collective/);
  assert.match(communitySection, /src="nextgen-collective-networking\.jpg"/);
  assert.doesNotMatch(communitySection, /src="nextgen-collective-stage\.jpg"/);
  assert.match(communitySection, /data-count="60">60<\/span>\+/);
  assert.match(communitySection, /data-count="10">10<\/span>\+/);
  assert.match(communitySection, /Toronto/);
  assert.match(communitySection, /Tech Week event/);
  assert.match(script, /function setupCommunityStats\(\)/);
  assert.match(script, /requestAnimationFrame\(updateNumbers\)/);
  assert.match(css, /@media \(max-width:\s*640px\)[\s\S]*\.community-stats\s*\{[\s\S]*grid-template-columns:\s*1fr/);
});

test("contact portal uses Mohammed's supplied contact links", () => {
  const portalSection = html.slice(sectionIndex("portal"));

  assert.match(portalSection, /href="mailto:m1lakdawala@torontomu\.ca"/);
  assert.match(
    portalSection,
    /href="https:\/\/www\.linkedin\.com\/in\/mohammed-ahmxd"/
  );
  assert.match(
    portalSection,
    /href="https:\/\/github\.com\/mohammedahmxd"/
  );
  assert.match(portalSection, /href="AIEngineerpdf\.pdf"/);
  assert.ok(existsSync("AIEngineerpdf.pdf"), "resume PDF should exist");
  assert.doesNotMatch(portalSection, /mailto:hello@example\.com/);
});
