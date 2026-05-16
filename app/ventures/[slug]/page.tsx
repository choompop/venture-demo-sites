import { ventures } from '../../data';
import { notFound } from 'next/navigation';
import { getMainframeDemoSnapshot } from '../../../lib/mainframe-demo.mjs';

const basePath = process.env.GITHUB_PAGES === 'true' ? '/venture-demo-sites' : '';

export function generateStaticParams(){
  return ventures.map(v=>({slug:v.slug}));
}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}){
  const { slug } = await params;
  const v=ventures.find(x=>x.slug===slug);
  return {title: v ? `${v.name} — Demo` : 'Demo'};
}

function MainframeStudioPage(){
  const demo = getMainframeDemoSnapshot();
  return <>
    <nav className="nav"><div className="navin"><a className="brand" href={basePath || '/'}>← Demo Lab</a><div className="navlinks"><a href="#site">Site</a><a href="#dashboard">Dashboard</a><a href="#guardrails">Guardrails</a></div></div></nav>
    <main>
      <section className="routeHero mainframeHero"><div className="wrap heroGrid"><div><div className="eyebrow">{demo.domain} / launch-safe public draft</div><h1>{demo.heroLine}</h1><p className="lead">A polished Mainframe Studio direction for service businesses: public website, intake, CRM, bookings, content, Drive, Slack/team, finance visibility, agents, and approvals shaped as one operating system.</p><div className="path"><a className="button primary" href="#dashboard">Open demo dashboard</a><a className="button" href="#site">Read site frame</a></div></div><div className="controlRoom" aria-label="Mainframe Studio demo dashboard preview"><div className="controlTop"><span>CLIENT OS</span><b>Live demo</b></div>{demo.dashboardModules.slice(0,4).map((module)=><div className="controlRow" key={module.id}><span style={{color:module.accent}}>{module.label}</span><strong>{module.metric}</strong><em>{module.status}</em></div>)}</div></div></section>
      <section id="site" className="section"><div className="wrap"><div className="sectionHead"><div><div className="eyebrow">mainframestud.io-ready site</div><h2 className="big">A public page that sells the system without overclaiming it.</h2></div><p className="muted">The copy is intentionally careful: Mainframe Studio installs operating infrastructure and approval workflows. It does not promise autonomous outcomes, guaranteed growth, or live financial movement.</p></div><div className="siteGrid">{demo.siteSections.map((section)=><article className="panel sitePanel" key={section.id}><div className="eyebrow">{section.eyebrow}</div><h3>{section.title}</h3><p className="muted">{section.copy}</p></article>)}</div></div></section>
      <section id="dashboard" className="section"><div className="wrap"><div className="sectionHead"><div><div className="eyebrow">demo dashboard</div><h2 className="big">One control room for every requested operating area.</h2></div><p className="muted">Demo data only. Built to show how a future client OS would organize work before any real credentials, customer records, or payments are connected.</p></div><div className="dashboardGrid">{demo.dashboardModules.map((module)=><article className="panel module dashboardModule" key={module.id} style={{borderColor:module.accent}}><div className="moduleTop"><span style={{color:module.accent}}>{module.label}</span><b>{module.metric}</b></div><h3>{module.status}</h3><ul>{module.items.map((item)=><li key={item}>{item}</li>)}</ul></article>)}</div></div></section>
      <section id="guardrails" className="section"><div className="wrap split"><div><div className="eyebrow">approval boundaries</div><h2 className="big">Launch-safe claims. Human-gated automation.</h2><p className="muted">The demo can feel operational while staying honest about what is sample data, what requires setup, and where a human owner approves external action.</p></div><div className="panel"><h2>Guardrails</h2><ul className="guardrailList">{demo.guardrails.map((guardrail)=><li key={guardrail}>{guardrail}</li>)}</ul></div></div></section>
    </main>
    <footer className="footer"><div className="wrap">Mainframe Studio demo — part of the Kyburz venture operating system.</div></footer>
  </>;
}

export default async function VenturePage({params}:{params:Promise<{slug:string}>}){
  const { slug } = await params;
  const v=ventures.find(x=>x.slug===slug);
  if(!v) return notFound();
  if(v.slug === 'mainframe-studio') return <MainframeStudioPage />;
  return <>
    <nav className="nav"><div className="navin"><a className="brand" href={basePath || '/'}>← Demo Lab</a><div className="navlinks"><a href="#site">Site</a><a href="#dashboard">Dashboard</a><a href="#ops">Ops</a></div></div></nav>
    <main>
      <section className="routeHero"><div className="wrap"><div className="eyebrow" style={{color:v.accent}}>{v.type} / {v.domain}</div><h1>{v.name}</h1><p className="lead">{v.line}</p><div className="path"><a className="button primary" style={{background:`linear-gradient(135deg, ${v.accent}, #8b5cf6)`}} href="#dashboard">View dashboard demo</a><a className="button" href={basePath || '/'}>All ventures</a></div></div></section>
      <section id="site" className="section"><div className="wrap split"><div><h2 className="big">Public website frame</h2><p className="muted">A focused external surface for the brand: clear promise, audience, offer, trust signals, lead capture, and content lanes. This page is a demo direction, not final public copy.</p></div><div className="panel"><h2>Homepage sections</h2><div className="pillrow">{['Hero','Offer','Proof','Resources','Intake','Footer'].map(x=><span className="pill" key={x}>{x}</span>)}</div></div></div></section>
      <section id="dashboard" className="section"><div className="wrap"><h2 className="big">Demo dashboard modules</h2><div className="modules">{v.modules.map(m=><div className="panel module" key={m}><h3>{m}</h3><p className="muted">Sample module for demo data, intern workflows, and future client operating systems.</p></div>)}</div></div></section>
      <section id="ops" className="section"><div className="wrap split"><div className="panel"><div className="eyebrow">Guardrail</div><p className="muted">{v.caution}</p></div><div className="panel"><div className="eyebrow">Shared stack</div><p className="muted">Domain → Vercel → Google Drive → Slack → Hermes context → dashboard → approval workflow.</p></div></div></section>
    </main>
    <footer className="footer"><div className="wrap">{v.name} demo — part of the Kyburz venture operating system.</div></footer>
  </>
}
