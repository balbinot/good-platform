// === NAV scroll effect ===
const nav = document.getElementById('site-nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
});

// === Mobile nav toggle ===
const toggle = document.getElementById('nav-toggle');
const navLinks = document.querySelector('.nav-links');
if (toggle) {
  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// Close mobile nav on link click
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// === Scroll reveal ===
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// === Team tabs ===
const tabBtns = document.querySelectorAll('.tab-btn');
const teamGrid = document.getElementById('team-grid');

const teamData = {
  applicants: [
    { name: 'Dominic Dirkx', org: 'TU Delft', role: 'WP1 & WP3-3 lead, WP4 co-lead. Cassini data analysis.', expertise: ['PAS', 'RS', 'SW'], initials: 'DD' },
    { name: 'Gijs Verdoes Kleijn', org: 'Univ. Groningen', role: 'WP2 lead, WP4 co-lead. Lead OmegaCEN Astronomical Science Data Center.', expertise: ['AD', 'SSA', 'SW'], initials: 'GV' },
    { name: 'Eduardo Balbinot', org: 'Leiden / RUG', role: 'WP3-2 lead. Survey astrometric analysis.', expertise: ['AD', 'SSA', 'SW'], initials: 'EB' },
    { name: 'Marco Langbroek', org: 'TU Delft', role: 'WP3-1 co-lead. Astrometric SSA data including TUD-labs.', expertise: ['AD', 'SSA'], initials: 'ML' },
    { name: 'Steve Gehly', org: 'TU Delft', role: 'WP3-1 co-lead. Space Situational Awareness.', expertise: ['SSA'], initials: 'SG' },
    { name: 'Maurits Kok', org: 'TU Delft (DCC)', role: 'WP1 & WP4 support. Digital Competence Centre.', expertise: ['SW'], initials: 'MK' },
  ],
  partners: [
    { name: 'Sam Fayolle', org: 'ESA/ESTEC', role: 'Jupiter system radio/astrometric analysis.', expertise: ['PAS', 'RS', 'SW'], initials: 'SF' },
    { name: 'Xuanyu Hu', org: 'UniBW München', role: 'Rosetta radio analysis.', expertise: ['PAS', 'RS'], initials: 'XH' },
    { name: 'Giuseppe Cimo', org: 'JIVE', role: 'PRIDE data, JUICE analysis.', expertise: ['RS'], initials: 'GC' },
    { name: 'Guifre Molera Calves', org: 'Univ. Tasmania', role: 'PRIDE data, SSA optical/radio data.', expertise: ['RS', 'SSA'], initials: 'GM' },
    { name: 'Alexander Stark', org: 'DLR', role: 'Enceladus mission simulation; laser altimetry.', expertise: ['PAS'], initials: 'AS' },
    { name: 'Sebastien LeMaistre', org: 'Royal Obs. Belgium', role: 'Numerous radio analyses.', expertise: ['PAS', 'RS', 'SW'], initials: 'SL' },
    { name: 'Henk de Groot', org: 'Dutch Occultation Assoc.', role: 'Minor body astrometry and occultations.', expertise: ['AD'], initials: 'HG' },
    { name: 'Hanno Spreeuw / Johan Hidding', org: 'eScience Center', role: 'Synergy with WP1 and WP4.', expertise: ['SW'], initials: 'eS' },
    { name: 'Jacco Geul', org: 'TNO', role: 'Near-Earth SSA data and analyses.', expertise: ['SSA', 'SW'], initials: 'JG' },
    { name: 'Bart Root', org: 'TU Delft', role: 'Mars orbiter analysis; TUD-labs radio data.', expertise: ['PAS', 'RS'], initials: 'BR' },
    { name: 'Rüdiger Haas', org: 'Chalmers Univ.', role: 'Lunar mission VLBI data and analyses.', expertise: ['AD', 'RS'], initials: 'RH' },
  ]
};

function renderTeam(group) {
  const people = teamData[group];
  const colors = ['#4a9eff', '#00e5c3', '#7b5ea7', '#ff6b35', '#4a9eff', '#00e5c3'];
  teamGrid.innerHTML = people.map((p, i) => `
    <div class="team-card reveal">
      <div class="team-card-header">
        <div class="team-avatar" style="background: linear-gradient(135deg, ${colors[i % colors.length]}, ${colors[(i+2) % colors.length]})">${p.initials}</div>
        <div>
          <div class="team-name">${p.name}</div>
          <div class="team-org">${p.org}</div>
        </div>
      </div>
      <p class="team-role">${p.role}</p>
      <div class="team-expertise">
        ${p.expertise.map(e => `<span class="expertise-badge">${e}</span>`).join('')}
      </div>
    </div>
  `).join('');

  // Re-observe new elements
  teamGrid.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    tabBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderTeam(btn.dataset.tab);
  });
});

// Initial render
renderTeam('applicants');

// === Milestone stagger animation ===
document.querySelectorAll('.milestone').forEach((m, i) => {
  m.style.animationDelay = `${i * 60}ms`;
});
