// Student logins page. Separate from app.js, which expects the main page's DOM.
// Names, audiences, labels, and URLs are copied from https://www.alvernia.edu/logins (checked 2026-11-05).
// Leave `description` null unless an official source says what the system does. Never guess.
const SOURCE = {
  logins: 'https://www.alvernia.edu/logins',
  newsletter: 'https://www.alvernia.edu/sites/default/files/documents/New%20Student%20Summer%20Newsletter%20-%20Edition%20Nine.pdf',
  registrar: 'https://www.alvernia.edu/current-students/registrar/registrar-transcripts',
  career: 'https://www.alvernia.edu/student-experience/office-career-development',
  catalog: 'https://catalog.alvernia.edu/content.php?catoid=4&navoid=55',
  shuttle: 'https://www.alvernia.edu/alvernia-shuttle-services'
};
const BOTH = ['students', 'faculty'], STUDENTS = ['students'], FACULTY = ['faculty'];
const LOG_IN = 'Log in';
const GROUPS = ['Classes', 'Money and Housing', 'Campus Life', 'Email and Tools'];
const OFFICE_365_INSTRUCTIONS = 'https://alverniauniversity-my.sharepoint.com/personal/academic_support_alvernia_edu/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Facademic%5Fsupport%5Falvernia%5Fedu%2FDocuments%2FClass%20Visit%20PPTs%20%26%20Handouts%2FAU%20Student%20Tech%20Guide%2Dlinked%20auStudentTechGuide%2Epdf&parent=%2Fpersonal%2Facademic%5Fsupport%5Falvernia%5Fedu%2FDocuments%2FClass%20Visit%20PPTs%20%26%20Handouts&ga=1';

// `only` limits a link to one audience when the official page lists it for just that audience.
const SYSTEMS = [
  // Classes
  { name: 'Canvas', group: 'Classes', audiences: BOTH, source: SOURCE.newsletter,
    description: 'Course pages for syllabi, assignments, announcements, and grades during the semester.',
    keywords: 'grades courses classes quizzes discussion',
    primary: { label: LOG_IN, href: 'https://alvernia.instructure.com/login/saml' },
    links: [{ label: 'Catalog (personal email)', href: 'https://alvernia.instructure.com/login/canvas', only: 'students' }] },
  { name: 'Self-Service', group: 'Classes', audiences: STUDENTS, source: SOURCE.newsletter,
    description: 'Class schedule, registration, bills, financial aid, academic progress, and final grades.',
    keywords: 'grades courses classes register billing records transcript unofficial',
    primary: { label: LOG_IN, href: 'https://selfservice.alvernia.edu/SELFSERV/Home/LogIn?ReturnUrl=%2FSELFSERV%2F' },
    links: [{ label: 'Login Instructions', href: 'https://web.alvernia.edu/faq/index.php?action=artikel&cat=23&id=169&artlang=en&highlight=myalvernia+login&_gl=1*6gv0ka*_ga*MTI1NzM1ODg2My4xNjk4ODYzNjQ4*_ga_7LTL25YXL8*MTY5OTI5ODc2OC40LjAuMTY5OTI5ODc3MC41OC4wLjA.' }] },
  { name: 'myAlvernia', group: 'Classes', audiences: STUDENTS, description: null,
    primary: { label: LOG_IN, href: 'https://alverniauniversity.sharepoint.com/sites/AlverniaSelf-ServicePortal' },
    links: [{ label: 'Parent Access', href: 'https://commerce.cashnet.com/alverniapay?LT=P' }] },
  { name: 'Degree Audit uAchieve', group: 'Classes', audiences: BOTH, description: null,
    primary: { label: LOG_IN, href: 'https://alvernia.uachieve.com/selfservice' },
    links: [
      { label: 'Student Login Instructions', href: 'https://www.alvernia.edu/sites/default/files/documents/Student%20Degree%20Audit%20Directions.doc.pdf', only: 'students' },
      { label: 'Advisor Login Instructions', href: 'https://www.alvernia.edu/sites/default/files/documents/Advisor%20Degree%20Audit%20Directions_0.pdf', only: 'faculty' }
    ] },
  { name: 'Academic Success Center', group: 'Classes', audiences: STUDENTS, source: SOURCE.logins,
    description: 'Tutoring and study groups.',
    primary: { label: LOG_IN, href: 'https://alvernia.mywconline.com' },
    links: [
      { label: 'Grammarly Pro', href: 'https://www.grammarly.com/business/join-invite-link/activate?key=zu9xld0h&q_mailing_7TWioKGK91wgspZ1KJVuuXaRUVxkLR3wgJYK5=RpGrFMGXkLCneJP2rJEnJ53vo3xzKhTB3qqabZMi6mTQS5UH2S95r376S&sid=5r8zLg7q1XzMYTeXkku8' },
      { label: 'ASC FAQ\'s', href: 'https://sway.cloud.microsoft/swTdThHqcXQdQg7w' }
    ] },
  { name: 'Accommodations', group: 'Classes', audiences: BOTH, description: null,
    primary: { label: LOG_IN, href: 'https://alvernia-accommodate.symplicity.com/' },
    links: [{ label: 'Apply (first time)', href: 'https://alvernia-accommodate.symplicity.com/public_accommodation', only: 'students' }] },
  { name: 'Typhon', group: 'Classes', audiences: STUDENTS, source: SOURCE.logins,
    description: 'DNP clinical and professional documents.',
    primary: { label: LOG_IN, href: 'https://www3.typhongroup.net/np/data/login.asp?facility=3090' },
    links: [{ label: 'Instructions', href: 'https://web.alvernia.edu/faq/index.php?action=artikel&cat=23&id=269&artlang=en' }] },
  { name: 'Transferology', group: 'Classes', audiences: BOTH, description: null,
    primary: { label: 'Learn More', href: 'https://www.transferology.com/school/alvernia' },
    links: [{ label: 'Email registrar', href: 'mailto:RegistrarsOffice@alvernia.edu', only: 'faculty' }] },
  { name: 'Panopto', group: 'Classes', audiences: FACULTY, description: null,
    primary: { label: LOG_IN, href: 'https://alvernia.hosted.panopto.com/Panopto/Pages/Home.aspx' },
    links: [
      { label: 'FAQs', href: 'https://web.alvernia.edu/faq/index.php?action=show&cat=79' },
      { label: 'What can Panopto do for you?', href: 'https://alvernia.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=d931479e-f376-453f-916c-08f61772cd6b' }
    ] },
  { name: 'AUAdvise', group: 'Classes', audiences: FACULTY, description: null,
    primary: { label: LOG_IN, href: 'https://alvernia.campus.eab.com/cas/schools/318-alvernia_university/ldap_sessions/new' },
    links: [{ label: 'FAQs', href: 'https://alvernia.topdesk.net/tas/public/ssp/content/detail/knowledgeitem?origin=knowledgeBaseStartPage&unid=73a9c7db4cc74d19b50613fc5b394ae1&from=0da67a3b-d66d-4bdf-a627-d1a3ae4059dd' }] },
  { name: 'WEAVE', group: 'Classes', audiences: FACULTY, description: null,
    primary: { label: LOG_IN, href: 'https://app.weaveeducation.com/login' },
    links: [{ label: 'Login Instruction', href: 'https://pax.alvernia.edu/organization/resources/documents/view/1897144' }] },

  // Money and Housing
  { name: 'ARC: Alvernia Residential Communities Portal', group: 'Money and Housing', audiences: STUDENTS, source: SOURCE.logins,
    description: 'Residential communities portal, with incoming resident housing application instructions.',
    keywords: 'housing residence dorm',
    primary: { label: LOG_IN, href: 'https://alvernia.erezlife.com/' },
    links: [{ label: 'Spring 2027 Incoming Resident Housing Application Instructions', href: 'https://www.alvernia.edu/sites/default/files/documents/Spring%202027%20Incoming%20Resident%20Housing%20Application%20Instructions.pdf' }] },
  { name: 'Bookstore', group: 'Money and Housing', audiences: STUDENTS, description: null,
    primary: { label: 'Bookstore Website', href: 'https://alvernia.bkstr.com/' }, links: [] },
  { name: 'Book Store', group: 'Money and Housing', audiences: FACULTY, description: null,
    primary: { label: 'Faculty Login', href: 'https://adoptions.efollett.com/OnlineAdoptionsWeb/onlineAdoptions.html?storeNumber=562&langId=en_US' }, links: [] },
  { name: 'Finance', group: 'Money and Housing', audiences: FACULTY, source: SOURCE.logins,
    description: 'Payroll, payables, and requisitions.',
    links: [
      { label: 'ADP Workforce Now (Payroll Provider)', href: 'http://www.workforcenow.adp.com' },
      { label: 'PN3 for Payables', href: 'https://pn3.alvernia.edu/PN3Payables' },
      { label: 'PN3 for Requisitions', href: 'https://pn3.alvernia.edu/PN3Requisition' }
    ] },
  { name: 'University Credit Card Spend Management', group: 'Money and Housing', audiences: FACULTY, description: null,
    primary: { label: 'Access Online', href: 'https://www.access-online.com/cpsApp1/AxolPreAuthServlet?requestCmdId=login' }, links: [] },

  // Campus Life
  { name: 'Handshake', group: 'Campus Life', audiences: STUDENTS, source: SOURCE.career,
    description: 'Career platform for jobs, internships, career fairs, and Career Development appointments.',
    keywords: 'job employers workshops',
    primary: { label: LOG_IN, href: 'https://alvernia.joinhandshake.com/login' },
    links: [{ label: 'Student Guide', href: 'https://pax.alvernia.edu/organization/resources/documents/view/1963510' }] },
  { name: 'PAX (Promoting Alvernia eXperiences)', group: 'Campus Life', audiences: STUDENTS, description: null,
    primary: { label: LOG_IN, href: 'https://pax.alvernia.edu/organizations' }, links: [] },
  { name: 'Get Connected Volunteer Services (Holleran Center)', group: 'Campus Life', audiences: STUDENTS, source: SOURCE.logins,
    description: 'Volunteer services through the Holleran Center.',
    keywords: 'volunteering',
    primary: { label: LOG_IN, href: 'https://volunteer.alvernia.edu/' }, links: [] },
  { name: 'Omnilert', group: 'Campus Life', audiences: STUDENTS, source: SOURCE.catalog,
    description: 'Emergency messages by text, email, and voicemail for registered users.',
    keywords: 'alerts safety',
    primary: { label: LOG_IN, href: 'https://alvernia.omnilert.net/' }, links: [] },
  { name: 'Report It', group: 'Campus Life', audiences: STUDENTS, source: SOURCE.logins,
    description: 'Student concern or Clare\'s Cupboard.',
    primary: { label: 'Report', href: 'https://cm.maxient.com/reporting.php?AlverniaUniv' }, links: [] },
  { name: 'Complio', group: 'Campus Life', audiences: STUDENTS, source: SOURCE.logins,
    description: 'Alvernia Student Health Portal.',
    primary: { label: LOG_IN, href: 'http://alverniacompliance.com/index.html' },
    links: [{ label: 'User Guide', href: 'https://alverniauniversity.sharepoint.com/sites/HealthandAcademicCompliance/Shared%20Documents/Forms/AllItems.aspx?CT=1767814993391&OR=OWA%2DNT%2DMail&CID=51c44630%2Dd415%2D1d3e%2D16b4%2D7e0bba20333e&clickParams=eyJYLUFwcE5hbWUiOiJNaWNyb3NvZnQgT3V0bG9vayBXZWIgQXBwIiwiWC1BcHBWZXJzaW9uIjoiMjAyNjAxMDIwMDMuMDEiLCJPUyI6IldpbmRvd3MgMTEifQ%3D%3D' }] },
  { name: 'Shuttle Services', group: 'Campus Life', audiences: STUDENTS, source: SOURCE.shuttle,
    description: 'Campus bus network connecting CollegeTowne, the Student Center, and other campus locations.',
    keywords: 'bus transportation commute',
    primary: { label: 'Learn More', href: 'https://www.alvernia.edu/alvernia-shuttle-services' }, links: [] },

  // Email and Tools
  { name: 'Office 365', group: 'Email and Tools', audiences: BOTH, source: SOURCE.logins,
    description: 'Email, SharePoint, Teams, OneDrive, Word, and more.',
    keywords: 'outlook password',
    primary: { label: LOG_IN, href: 'https://sts.alvernia.edu/adfs/ls/?domain_hint=alvernia.edu&wa=wsignin1.0&wtrealm=urn%3afederation%3aMicrosoftOnline&wctx=%26LoginOptions%3D2%26wa%3Dwsignin1.0%26wreply%3Dhttps:%252F%252Fportal.office.com%252F' },
    links: [
      { label: 'Login Instructions', href: OFFICE_365_INSTRUCTIONS },
      { label: 'Microsoft Online Password Reset', href: 'https://passwordreset.microsoftonline.com/' }
    ] },
  { name: 'Print Portal', group: 'Email and Tools', audiences: STUDENTS, description: null,
    primary: { label: LOG_IN, href: 'https://print.alvernia.edu:9192/user' }, links: [] },
  { name: 'SoftDocs', group: 'Email and Tools', audiences: BOTH, description: null,
    primary: { label: 'Etrieve | Content', href: 'https://alvernia.etrieve.cloud/central/forms' }, links: [] },
  { name: 'Astra Event Scheduler', group: 'Email and Tools', audiences: FACULTY, description: null,
    primary: { label: LOG_IN, href: 'https://www.aaiscloud.com/alverniau' },
    links: [{ label: 'Login Instructions', href: 'https://pax.alvernia.edu/organization/resources/documents/view/967409' }] },
  { name: 'Facilities Work Order', group: 'Email and Tools', audiences: FACULTY, description: null,
    primary: { label: LOG_IN, href: 'http://www.myschoolbuilding.com/myschoolbuilding/mygateway.asp?acctnum=102547668' }, links: [] }
];

const AUDIENCE_LABEL = { all: 'all audiences', students: 'Students', faculty: 'Faculty/Staff' };
const DEFAULT_AUDIENCE = 'students';
const state = { audience: DEFAULT_AUDIENCE, query: '' };
const $ = id => document.getElementById(id);

function searchText(system) {
  const labels = [system.primary, ...system.links].filter(Boolean).map(link => link.label).join(' ');
  return [system.name, system.group, system.description, system.keywords, labels, system.primary && system.primary.label === LOG_IN ? 'login' : '']
    .filter(Boolean).join(' ').toLowerCase();
}

// Every word typed must appear, so "final grades" and "grades login" both work.
function matches(system, audience, query) {
  if (audience !== 'all' && !system.audiences.includes(audience)) return false;
  const text = searchText(system);
  return query.toLowerCase().split(/\s+/).filter(Boolean).every(word => text.includes(word));
}

function makeLink(link, systemName, className) {
  const a = document.createElement('a');
  a.className = className;
  a.href = link.href;
  a.textContent = link.label;
  const isMail = link.href.startsWith('mailto:');
  if (!isMail) { a.target = '_blank'; a.rel = 'noopener'; }
  const hidden = document.createElement('span');
  hidden.className = 'sr-only';
  const forSystem = link.label === LOG_IN ? ' to ' + systemName : ' for ' + systemName;
  hidden.textContent = forSystem + (isMail ? '' : ' (opens in a new tab)');
  a.append(hidden);
  return a;
}

function makeCard(system) {
  const card = document.createElement('article');
  card.className = 'login-card';
  const title = document.createElement('h3');
  title.textContent = system.name;
  card.append(title);
  if (state.audience === 'all') {
    const who = document.createElement('p');
    who.className = 'login-who';
    who.textContent = system.audiences.map(a => a === 'students' ? 'Students' : 'Faculty/Staff').join(' · ');
    card.append(who);
  }
  const description = document.createElement('p');
  description.className = system.description ? 'login-description' : 'login-description unconfirmed';
  description.textContent = system.description || 'Description not confirmed yet';
  card.append(description);
  const actions = document.createElement('div');
  actions.className = 'login-actions';
  if (system.primary) actions.append(makeLink(system.primary, system.name, 'login-primary'));
  const visibleLinks = system.links.filter(link => !link.only || state.audience === 'all' || link.only === state.audience);
  // Always render this row, even when empty, so Login buttons line up across a row of cards.
  const secondary = document.createElement('div');
  secondary.className = 'login-secondary';
  for (const link of visibleLinks) secondary.append(makeLink(link, system.name, ''));
  actions.append(secondary);
  card.append(actions);
  return card;
}

function systemsPhrase(count) { return count + (count === 1 ? ' system' : ' systems'); }

function render() {
  const query = state.query.trim();
  const shown = SYSTEMS.filter(system => matches(system, state.audience, query));
  const container = $('logins-groups');
  container.replaceChildren();
  for (const group of GROUPS) {
    const inGroup = shown.filter(system => system.group === group);
    if (!inGroup.length) continue;
    const section = document.createElement('section');
    section.className = 'login-group';
    const heading = document.createElement('h2');
    heading.textContent = group;
    const grid = document.createElement('div');
    grid.className = 'login-grid';
    grid.append(...inGroup.map(makeCard));
    section.append(heading, grid);
    container.append(section);
  }
  for (const button of document.querySelectorAll('[data-audience]')) {
    const isActive = button.dataset.audience === state.audience;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  }
  const audienceLabel = AUDIENCE_LABEL[state.audience];
  $('logins-count').textContent = query
    ? systemsPhrase(shown.length) + ' matching “' + query + '” for ' + audienceLabel
    : systemsPhrase(shown.length) + ' for ' + audienceLabel;
  $('logins-empty').hidden = shown.length > 0;
  if (!shown.length) {
    const elsewhere = SYSTEMS.filter(system => matches(system, 'all', query)).length;
    $('logins-empty-text').textContent = elsewhere
      ? 'Nothing matches “' + query + '” for ' + audienceLabel + ', but ' + systemsPhrase(elsewhere) + (elsewhere === 1 ? ' matches' : ' match') + ' under All.'
      : 'Nothing matches “' + query + '”. Try a simpler word, like “grades”, “housing”, or “email”, or check the official Logins page linked above.';
  }
}

$('logins-filter').addEventListener('input', event => { state.query = event.target.value; render(); });
for (const button of document.querySelectorAll('[data-audience]')) {
  button.addEventListener('click', () => { state.audience = button.dataset.audience; render(); });
}
$('logins-reset').addEventListener('click', () => {
  state.query = '';
  state.audience = DEFAULT_AUDIENCE;
  $('logins-filter').value = '';
  render();
  $('logins-filter').focus();
});

function setMenu(isOpen) {
  $('main-nav').classList.toggle('open', isOpen);
  $('menu-toggle').setAttribute('aria-expanded', String(isOpen));
}
$('menu-toggle').addEventListener('click', () => setMenu(!$('main-nav').classList.contains('open')));
document.querySelector('.site-header').addEventListener('keydown', event => {
  if (event.key === 'Escape' && $('main-nav').classList.contains('open')) { setMenu(false); $('menu-toggle').focus(); }
});

render();
