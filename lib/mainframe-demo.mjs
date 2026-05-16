export const MAINFRAME_SITE_SECTIONS = [
  {
    id: 'hero',
    eyebrow: 'Mainframe Studio / client operating systems',
    title: 'We build the frame your business runs on.',
    copy:
      'A launch-safe draft for mainframestud.io: Mainframe Studio connects the public website to the operator workflow behind it, so intake, content, files, bookings, finance visibility, and approvals live in one legible system.',
  },
  {
    id: 'operating-system',
    eyebrow: 'From storefront to control room',
    title: 'The site is only the surface. The system underneath does the work.',
    copy:
      'Each client OS starts with the public promise, then maps how work actually moves through forms, CRM notes, calendars, Drive folders, Slack/team decisions, agent drafts, and dashboard review before anything sensitive leaves the building.',
  },
  {
    id: 'proof',
    eyebrow: 'Demo-first proof',
    title: 'Show the workflow before promising automation.',
    copy:
      'The demo dashboard uses realistic sample data to teach the operating model without claiming live integrations are complete. Operators can see CRM, bookings, content, Drive, team, finance, agents, and approvals in one calm view.',
  },
  {
    id: 'offer',
    eyebrow: 'Install once. Operate monthly.',
    title: 'A practical foundation for service businesses that need less owner bottleneck.',
    copy:
      'Mainframe Studio packages the website, workflow map, storage taxonomy, team channels, dashboards, and approval gates as a foundation install, then supports recurring operations as the client proves what should be automated next.',
  },
  {
    id: 'guardrails',
    eyebrow: 'Launch-safe boundaries',
    title: 'Agents draft, route, summarize, and prepare. Humans approve the moves that matter.',
    copy:
      'The public copy stays careful: this is an operating infrastructure studio, not a magic autonomous business. Demo data is labeled, integrations are scoped, and approvals remain in front of publishing, customer messages, spend, and financial workflows.',
  },
];

export const MAINFRAME_DASHBOARD_MODULES = [
  {
    id: 'crm',
    label: 'CRM',
    metric: '24 active leads',
    status: 'Demo pipeline',
    accent: '#5b7cfa',
    items: ['New inquiry: private event operator', 'Follow-up due: quote approval', 'Tagged: high-fit service business'],
  },
  {
    id: 'bookings',
    label: 'Bookings',
    metric: '7 holds this month',
    status: 'Calendar draft',
    accent: '#23d18b',
    items: ['Discovery call held for Tuesday', 'Install sprint blocked for assets', 'Client check-in recurring monthly'],
  },
  {
    id: 'content',
    label: 'Content',
    metric: '18 assets queued',
    status: 'Approval required',
    accent: '#c58b5c',
    items: ['Homepage copy v2 ready', 'Case-study outline drafted', 'Social proof clips awaiting owner notes'],
  },
  {
    id: 'drive',
    label: 'Drive',
    metric: '42 organized files',
    status: 'Folder map live',
    accent: '#f6f3ea',
    items: ['Brand assets normalized', 'Contracts separated from media', 'Agent-readable folder index prepared'],
  },
  {
    id: 'team',
    label: 'Slack + Team',
    metric: '6 routed decisions',
    status: 'Operator loop',
    accent: '#8b5cf6',
    items: ['Owner approval requested', 'Editor handoff summarized', 'Intern checklist assigned'],
  },
  {
    id: 'finance',
    label: 'Finance',
    metric: '$12.4k visible pipeline',
    status: 'Read-only demo',
    accent: '#7dd3fc',
    items: ['Setup fee forecasted', 'Recurring retainer estimate', 'No money movement in demo'],
  },
  {
    id: 'agents',
    label: 'Agents',
    metric: '11 drafts prepared',
    status: 'Human-gated',
    accent: '#fb7185',
    items: ['Call summary converted to tasks', 'Drive gaps detected', 'Weekly operator brief drafted'],
  },
  {
    id: 'approvals',
    label: 'Approvals',
    metric: '5 waiting review',
    status: 'Owner control',
    accent: '#ffca3a',
    items: ['Publish homepage section', 'Send client recap email', 'Confirm budget before spend'],
  },
];

export const MAINFRAME_LAUNCH_GUARDRAILS = [
  'Use demo data until each client integration is verified and approved.',
  'Agents draft, summarize, and route; human approval gates stay in front of publishing, spend, financial workflows, and external sends.',
  'Avoid guarantees about revenue, ranking, full autonomy, or financial outcomes.',
  'Describe live integrations as scoped workflows, not universal platform claims.',
  'Keep client secrets, credentials, and private files out of public pages and screenshots.',
];

export function getMainframeDemoSnapshot() {
  return {
    name: 'Mainframe Studio',
    domain: 'mainframestud.io',
    heroLine: MAINFRAME_SITE_SECTIONS[0].title,
    siteSections: MAINFRAME_SITE_SECTIONS,
    dashboardModules: MAINFRAME_DASHBOARD_MODULES,
    guardrails: MAINFRAME_LAUNCH_GUARDRAILS,
  };
}
