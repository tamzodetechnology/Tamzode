import { useEffect, useRef, useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowDown, ArrowRight, ArrowUpRight, Bot, Check, ChevronDown, Code2, Database, Globe2, Layers3,
  Menu, Monitor, MousePointer2, Network, PanelTop, ShieldCheck, Smartphone, Sparkles,
  Terminal, X, Zap,
} from 'lucide-react'

const nav = [
  ['Home', '#home'], ['Services', '#services'], ['Projects', '#projects'], ['About', '#about'], ['Contact', '#contact'],
]

const services = [
  { icon: Monitor, number: '01', title: 'Website development', text: 'Fast, distinctive websites that make a clear first impression and turn visits into meaningful action.' },
  { icon: PanelTop, number: '02', title: 'Web applications', text: 'Thoughtful, dependable software built around the way your team and customers actually work.' },
  { icon: Smartphone, number: '03', title: 'Mobile applications', text: 'Useful mobile experiences designed to feel natural, focused and effortless on the go.' },
  { icon: Layers3, number: '04', title: 'Custom software', text: 'Purpose-built tools that bring your processes together and give good ideas room to grow.' },
  { icon: Bot, number: '05', title: 'AI & automation', text: 'Practical AI and automation that simplify repetitive work and help people do more.' },
  { icon: Globe2, number: '06', title: 'E-commerce', text: 'Clear, considered shopping journeys that help customers discover and buy with confidence.' },
  { icon: Database, number: '07', title: 'API & backend', text: 'Secure foundations, integrations and APIs that keep your digital products connected.' },
  { icon: ShieldCheck, number: '08', title: 'Care & maintenance', text: 'Ongoing updates and improvements to keep your product healthy, secure and evolving.' },
]

const projects = [
  { name: 'Payroll Management System', category: 'BUSINESS SOFTWARE', status: 'Client project · In progress', desc: 'A workforce management platform for employee records, attendance, and leave management.', stack: ['Java', 'Spring Boot', 'React', 'PostgreSQL'], focus: 'Bring day-to-day people operations into one dependable workspace.', details: ['Employee records and team information', 'Attendance and leave workflows', 'A React interface backed by a Spring Boot API'], tone: 'payroll', logo: '/payroll-logo.png', logoAlt: 'Payroll Management System logo' },
  { name: 'Eythu', category: 'MOBILE · AI', status: 'Product · In development', desc: 'An AI-powered companion for setting goals, managing tasks, and keeping progress in view.', stack: ['Flutter', 'Spring Boot', 'PostgreSQL', 'AI API'], focus: 'Turn personal goals into manageable plans and everyday actions.', details: ['Goal setting and task planning', 'Progress tracking in a mobile-first experience', 'AI-assisted guidance and scheduling'], tone: 'eythu', logo: '/eythu-logo.png', logoAlt: 'Eythu logo' },
  { name: 'BillFlow AI', category: 'FINANCE · AI', status: 'Product concept', desc: 'A considered way to extract invoice details, keep documents organized, and track payments.', stack: ['AI-assisted', 'Invoice management'], focus: 'Make invoice handling clearer, from document intake to payment follow-up.', details: ['Extract key information from invoices', 'Organize financial documents and flag possible duplicates', 'Track payment status in one place'], tone: 'billflow', logo: '/billflow-ai-reference.png', logoAlt: 'BillFlow AI logo' },
]

const principles = [
  ['User-focused', 'Start with the people who will use it, and make every decision serve them.'],
  ['Built with care', 'Write clean, maintainable software that gives the product a dependable foundation.'],
  ['Always improving', 'Learn from real use and keep refining what we make, one thoughtful step at a time.'],
  ['Innovation with purpose', 'Choose technology for the value it creates, not just because it is new.'],
]

const faqs = [
  ['What can Tamzode help me build?', 'Website development, web and mobile applications, custom software, AI and automation, e-commerce, backend integrations, and ongoing maintenance.'],
  ['How does a project move forward?', 'We start by understanding the problem, shape the experience, develop the solution, then deliver and continue improving it. The details depend on your project.'],
  ['What technologies do you use?', 'The technology depends on the product. Current project examples include React, Spring Boot, Java, Flutter, and PostgreSQL; we can discuss the right fit for your needs.'],
  ['Can you support a product after launch?', 'Yes. Ongoing care and maintenance is one of our services, including updates and continued improvements.'],
  ['Can I request a consultation?', 'Yes. Select “Consultation / discovery call” in the enquiry form and include a few days and times that work for you.'],
]

function Wordmark({ light = false }: { light?: boolean }) {
  return <a className={`wordmark${light ? ' wordmark-light' : ''}`} href="#home" aria-label="Tamzode Technology home">
    <img className="brand-mark" src="/tamzode-mark.png" alt="" />
    <span className="brand-type"><strong>TAMZODE</strong><small>TECHNOLOGY</small></span>
  </a>
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <div className={`eyebrow${light ? ' eyebrow-light' : ''}`}><span className="eyebrow-line" />{children}</div>
}

const previewStates = [
  { heading: 'Ideas, in motion.', label: 'Momentum', message: 'Made to move forward.', status: 'ON TRACK', curve: 'M0,94 C30,91 35,73 65,79 S104,88 128,67 S166,70 194,53 S232,69 260,44 S301,48 326,25 S365,37 390,7', point: [326, 25] },
  { heading: 'Plans, in focus.', label: 'Focus', message: 'Clear steps. Steady progress.', status: 'IN FOCUS', curve: 'M0,99 C30,89 43,91 66,77 S103,67 127,75 S163,57 192,61 S228,44 257,50 S292,32 325,37 S364,20 390,14', point: [325, 37] },
  { heading: 'Progress, made visible.', label: 'Milestones', message: 'Every step has a place.', status: 'IN MOTION', curve: 'M0,102 C26,96 40,78 66,85 S101,60 130,69 S163,46 195,56 S229,36 260,44 S296,21 328,31 S362,15 390,9', point: [328, 31] },
]

function HeroVisual() {
  const [activePreview, setActivePreview] = useState(0)
  const preview = previewStates[activePreview]
  const fillPath = `${preview.curve} L390 115 L0 115Z`

  return <div className="hero-visual" role="button" tabIndex={0} aria-label={`Product preview, ${preview.heading}. Activate to show another preview.`} title="Click to explore the product preview" onClick={() => setActivePreview(index => (index + 1) % previewStates.length)} onKeyDown={event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); setActivePreview(index => (index + 1) % previewStates.length) } }}>
    <div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" />
    <div className="visual-stamp"><span>BUILDING<br />WHAT'S NEXT</span><ArrowUpRight size={15} /></div>
    <div className="visual-window">
      <div className="window-top"><div className="window-dots"><i /><i /><i /></div><span>tamzode / studio</span><span className="window-live"><i /> LIVE PREVIEW</span></div>
      <div className="window-body">
        <div className="window-sidebar"><div className="sidebar-mark"><span /></div><div className={`sidebar-item${activePreview === 0 ? ' active' : ''}`}><PanelTop size={13} /></div><div className={`sidebar-item${activePreview === 1 ? ' active' : ''}`}><Layers3 size={13} /></div><div className={`sidebar-item${activePreview === 2 ? ' active' : ''}`}><Network size={13} /></div><div className="sidebar-item"><Terminal size={13} /></div></div>
        <div className="window-content"><div className="window-greeting"><div><span className="micro-label">YOUR NEXT CHAPTER</span><strong key={activePreview} aria-live="polite">{preview.heading}</strong></div><div className="window-avatar">T</div></div>
          <div className="hero-chart"><div className="chart-head"><div><span>{preview.label}</span><strong>{preview.message}</strong></div><span className="chart-pill"><span /> {preview.status}</span></div><svg viewBox="0 0 390 115" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="chartfill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#72d6ac" stopOpacity=".22" /><stop offset="1" stopColor="#72d6ac" stopOpacity="0" /></linearGradient></defs><path d={fillPath} fill="url(#chartfill)"/><path key={activePreview} className="chart-line" d={preview.curve} fill="none" stroke="#75d8ae" strokeWidth="2.4"/><circle cx={preview.point[0]} cy={preview.point[1]} r="4.5" fill="#75d8ae" stroke="#173d35" strokeWidth="3"/></svg><div className="chart-months"><span>JAN</span><span>MAR</span><span>MAY</span><span>JUL</span><span>SEP</span><span>NOV</span></div></div>
          <div className="window-bottom"><div><span className="bottom-icon"><Code2 size={13} /></span><div><small>Thoughtful by design</small><strong>Every detail has a reason.</strong></div></div><ArrowUpRight size={15} /></div>
        </div>
      </div>
    </div>
    <div className="float-chip chip-top"><span className="chip-spark"><Sparkles size={14} /></span><div><small>BUILT AROUND PEOPLE</small><strong>Human first. Always.</strong></div></div>
    <div className="float-chip chip-bottom"><span className="chip-grid"><i /><i /><i /><i /></span><div><small>THOUGHTFUL ENGINEERING</small><strong>Made to move you forward.</strong></div><ArrowUpRight size={14} /></div>
    <div className="visual-caption"><span>11° 00' 39.6" N</span><span>IDEAS INTO IMPACT</span><span className="preview-click-cue"><MousePointer2 size={10} /> CLICK TO EXPLORE</span></div>
  </div>
}

function Header() {
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState(() => {
    const initial = window.location.hash.slice(1)
    return nav.some(([, href]) => href.slice(1) === initial) ? initial : 'home'
  })

  useEffect(() => {
    const sections = nav
      .map(([, href]) => document.getElementById(href.slice(1)))
      .filter((section): section is HTMLElement => section !== null)
    const observer = new IntersectionObserver(entries => {
      const active = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => Math.abs(a.boundingClientRect.top - innerHeight * .3) - Math.abs(b.boundingClientRect.top - innerHeight * .3))[0]
      if (active) setActiveSection(active.target.id)
    }, { rootMargin: '-25% 0px -65% 0px', threshold: 0 })
    sections.forEach(section => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!open) return
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [open])

  function navigateTo(href: string) {
    setActiveSection(href.slice(1))
    setOpen(false)
  }

  return <header className="site-header"><nav className="nav-shell" aria-label="Main navigation"><Wordmark /><div className="desktop-nav">{nav.map(([label, href]) => { const id = href.slice(1); return <a key={href} href={href} className={activeSection === id ? 'nav-active' : ''} aria-current={activeSection === id ? 'location' : undefined} onClick={() => navigateTo(href)}>{label}{activeSection === id && <motion.span layoutId="active-nav-dot" className="nav-active-indicator" aria-hidden="true" transition={{ type: 'spring', stiffness: 520, damping: 38 }} />}</a> })}</div><a href="#contact" className="nav-cta" onClick={() => navigateTo('#contact')}>Let's talk <ArrowUpRight size={15} /></a><button className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></nav>{open && <div className="mobile-nav">{nav.map(([label, href], i) => { const id = href.slice(1); return <a key={href} href={href} className={activeSection === id ? 'mobile-nav-active' : ''} aria-current={activeSection === id ? 'location' : undefined} onClick={() => navigateTo(href)}><span>0{i + 1}</span>{label}<ArrowUpRight size={16} /></a> })}<a href="#contact" className="mobile-nav-cta" onClick={() => navigateTo('#contact')}>Start a conversation <ArrowRight size={16} /></a></div>}</header>
}

function ContactForm() {
  const [notice, setNotice] = useState('')
  const [submissionState, setSubmissionState] = useState<'idle' | 'sending' | 'success' | 'activation' | 'error'>('idle')
  const [form, setForm] = useState({ name: '', email: '', service: '', details: '' })
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmissionState('sending')
    setNotice('Sending your enquiry…')
    try {
      const response = await fetch('https://formsubmit.co/ajax/tamzodetechnology@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...form, _subject: `New Tamzode enquiry — ${form.service}`, _template: 'table' }),
      })
      const result = await response.json() as { success?: boolean | string; message?: string }
      if (!response.ok || (result.success !== true && result.success !== 'true')) throw new Error('The enquiry service did not accept the submission.')

      if (/activat|confirm/i.test(result.message ?? '')) {
        setSubmissionState('activation')
        setNotice('One-time setup is needed. Check the Tamzode inbox for FormSubmit’s activation email, confirm it, then send your enquiry again.')
        return
      }

      setSubmissionState('success')
      setNotice('Your enquiry was submitted. If this is the first use of the form, confirm the activation email sent to Tamzode so delivery is enabled.')
      setForm({ name: '', email: '', service: '', details: '' })
    } catch {
      setSubmissionState('error')
      setNotice('We couldn’t send your enquiry right now. Please try again, or email tamzodetechnology@gmail.com directly.')
    }
  }
  return <form className="contact-form" onSubmit={submit}>
    <div className="form-row"><label>Your name<input name="name" required minLength={2} autoComplete="name" placeholder="How should we address you?" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} /></label><label>Email address<input name="email" required type="email" autoComplete="email" placeholder="you@company.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} /></label></div>
    <label>What can we help with?<select name="service" required value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}><option value="" disabled>Select a service</option>{services.map(s => <option key={s.number}>{s.title}</option>)}<option>Consultation / discovery call</option><option>Something else</option></select></label>
    <label>Tell us about your project<textarea name="details" required minLength={12} rows={3} placeholder="A little about the challenge, idea, or outcome you're looking for…" value={form.details} onChange={e => setForm({ ...form, details: e.target.value })} /></label>
    <div className="form-submit"><span><ShieldCheck size={15} /> Sent via FormSubmit; retained up to 30 days.</span><button type="submit" className="button button-light" disabled={submissionState === 'sending'}>{submissionState === 'sending' ? 'Sending…' : 'Send enquiry'} <ArrowRight size={16} /></button></div>
    {notice && <p className="form-notice" data-state={submissionState} role="status" aria-live="polite">{notice}</p>}
  </form>
}

type Project = typeof projects[number]

function ProjectDialog({ project, onClose }: { project: Project; onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (!dialog.open) dialog.showModal()
  }, [])

  return <dialog ref={dialogRef} className={`project-dialog project-${project.tone}-dialog`} aria-labelledby="project-dialog-title" onClose={onClose} onClick={event => { if (event.target === event.currentTarget) dialogRef.current?.close() }}>
    <div className="project-dialog-inner">
      <div className={`project-dialog-art project-${project.tone}-art`}><img src={project.logo} alt={project.logoAlt} /></div>
      <div className="project-dialog-content"><div className="project-meta"><span>{project.category}</span><span className="status-dot"><i />{project.status}</span></div><h2 id="project-dialog-title">{project.name}</h2><p className="project-dialog-description">{project.desc}</p><div className="project-dialog-focus"><span>PROJECT FOCUS</span><p>{project.focus}</p></div><h3>Project scope</h3><ul>{project.details.map(item => <li key={item}><Check size={15} />{item}</li>)}</ul><h3>Technology</h3><div className="project-stack">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div><div className="project-dialog-actions"><a href="#contact" className="button button-green" onClick={() => dialogRef.current?.close()}>Discuss a similar project <ArrowUpRight size={15} /></a><span>Stage: {project.status}</span></div></div>
      <button type="button" className="project-dialog-close" aria-label="Close project details" onClick={() => dialogRef.current?.close()}><X size={18} /></button>
    </div>
  </dialog>
}

function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  return <>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <Header />
    <main id="main-content" tabIndex={-1}>
      <section className="hero" id="home"><div className="hero-inner"><motion.div className="hero-copy" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
        <Eyebrow>INNOVATION <span className="eyebrow-dot">·</span> ENGINEERING <span className="eyebrow-dot">·</span> IMPACT</Eyebrow>
        <h1>We build digital<br className="desktop-break" /> solutions for a<br className="desktop-break" /> <span>brighter tomorrow.</span></h1>
        <p className="hero-lede">From powerful web applications to intelligent AI solutions, we help businesses transform ideas into impactful digital products.</p>
        <div className="hero-actions"><a href="#contact" className="button button-green">Start a project <ArrowUpRight size={16} /></a><a href="#projects" className="button button-outline">Explore our work <ArrowRight size={15} /></a></div>
        <div className="hero-footnote"><span className="footnote-mark"><Zap size={13} /></span>Technology with purpose, built around people.</div>
      </motion.div><motion.div className="hero-art" initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .8, delay: .1 }}><HeroVisual /></motion.div>
      </div><a href="#services" className="scroll-cue"><span>SCROLL TO EXPLORE</span><ArrowDown size={13} /></a><div className="hero-index"><span>01 / 05</span><span className="index-line" /></div></section>

      <section className="services section-pad" id="services"><div className="section-container"><div className="section-heading"><div><Eyebrow>WHAT WE DO</Eyebrow><h2>Good ideas deserve<br /><span>great technology.</span></h2></div><p>From a first sketch to a product that keeps growing, we create digital experiences with clarity, care, and a little curiosity.</p></div>
        <div className="services-grid">{services.map((service, i) => <motion.article className="service-card" key={service.number} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: .4, delay: i % 4 * .06 }}><div className="service-card-top"><span className="service-icon"><service.icon size={19} strokeWidth={1.7} /></span><span className="service-number">{service.number}</span></div><h3>{service.title}</h3><p>{service.text}</p><a href="#contact" aria-label={`Discuss ${service.title}`} className="card-arrow"><ArrowUpRight size={17} /></a></motion.article>)}</div>
        <div className="services-foot"><span>ONE GOOD CONVERSATION CAN START ANYWHERE.</span><a href="#contact">Tell us what you have in mind <ArrowRight size={15} /></a></div></div></section>

      <section className="projects section-pad" id="projects"><div className="section-container"><div className="section-heading project-heading"><div><Eyebrow light>SELECTED WORK & IDEAS</Eyebrow><h2>Progress looks<br /><span>different every day.</span></h2></div><p>We believe in being open about where every project stands. Here are a few ideas and products we're working on.</p></div>
        <div className="projects-grid">{projects.map((project, i) => <motion.article className={`project-card project-${project.tone}`} key={project.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: .45, delay: i * .08 }}>
          <div className={`project-art project-${project.tone}-art`}><img className="project-logo" src={project.logo} alt={project.logoAlt} /><span className="project-art-index">0{i + 1}</span></div>
          <div className="project-details"><div className="project-meta"><span>{project.category}</span><span className="status-dot"><i />{project.status}</span></div><h3>{project.name}</h3><p>{project.desc}</p><div className="project-stack">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div><button className="project-toggle" type="button" aria-haspopup="dialog" aria-label={`View ${project.name} project details`} onClick={() => setSelectedProject(project)}>View project details<ArrowUpRight size={15} /></button></div>
        </motion.article>)}</div></div></section>

      <section className="about section-pad" id="about"><div className="section-container about-layout"><div className="about-heading"><Eyebrow>WHY TAMZODE</Eyebrow><h2>Technology<br />with purpose.<br /><span>Innovation<br />with impact.</span></h2><div className="about-aside"><span className="aside-tick" />A thoughtful partner for what comes next.</div></div><div className="about-content"><div className="about-intro"><span className="about-mark">“</span><p>Tamzode Technology focuses on building useful digital products, reliable software solutions, and technology that helps people and businesses move forward.</p></div><div className="principles-grid">{principles.map(([title, text], i) => <div className="principle" key={title}><span className="principle-no">0{i + 1}</span><div><h3>{title}</h3><p>{text}</p></div><Check size={15} /></div>)}</div><div className="about-quote"><span className="quote-rule" /><p>People code a brighter tomorrow.</p><span className="quote-caption">THE IDEA THAT GUIDES US</span></div></div></div></section>

      <section className="process section-pad"><div className="section-container"><div className="process-head"><div><Eyebrow>HOW WE WORK</Eyebrow><h2>Four steps. One shared<br /><span>direction forward.</span></h2></div><p>A good process makes the work clearer at every stage. We keep it collaborative, considered, and focused on what matters.</p></div><div className="process-track">{[['01', 'Discover', 'Understand the problem and what success should feel like.', MousePointer2], ['02', 'Design', 'Shape a clear, considered experience around your people.', Sparkles], ['03', 'Develop', 'Build and test the solution with care and craft.', Code2], ['04', 'Deliver', 'Deploy, support, and keep improving together.', ArrowUpRight]].map(([no, title, text, Icon], i) => { const StepIcon = Icon as typeof Code2; return <motion.article className="process-step" key={no as string} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .25 }} transition={{ duration: .45, delay: i * .1 }}><span className="step-no">{no as string}</span><div className="step-icon"><StepIcon size={18} /></div><h3>{title as string}</h3><p>{text as string}</p></motion.article> })}</div></div></section>

      <section className="faq section-pad" id="faq"><div className="section-container"><div className="section-heading"><div><Eyebrow>GOOD TO KNOW</Eyebrow><h2>A few things you<br /><span>might be wondering.</span></h2></div><p>Clear answers about what we do, how projects move forward, and how to start a conversation.</p></div><div className="faq-list">{faqs.map(([question, answer], index) => <details className="faq-item" key={question}><summary><span className="faq-number">0{index + 1}</span><span>{question}</span><ChevronDown size={17} /></summary><p>{answer}</p></details>)}</div></div></section>

      <section className="contact section-pad" id="contact"><div className="contact-container"><div className="contact-layout"><div className="contact-copy"><Eyebrow light>LET'S MAKE SOMETHING MATTER</Eyebrow><h2>Have an idea?<br /><span>Let's build it.</span></h2><p>Tell us where you want to go. We'll bring curiosity, thoughtful questions, and the right people to help you get there.</p><div className="contact-note"><span><ArrowDown size={14} /></span>Share a little about your project to get started.</div><a className="contact-email" href="mailto:tamzodetechnology@gmail.com">tamzodetechnology@gmail.com <ArrowUpRight size={14} /></a><div className="contact-coordinates"><span>PEOPLE CODE A BRIGHTER TOMORROW.</span><span>11° 00' 39.6" N&nbsp;&nbsp; · &nbsp;&nbsp;TAMZODE / STUDIO</span></div></div><div className="contact-form-wrap"><div className="form-heading"><span>01 — YOUR PROJECT</span><span className="form-progress"><i /></span></div><ContactForm /></div></div></div></section>
    </main>
    {selectedProject && <ProjectDialog project={selectedProject} onClose={() => setSelectedProject(null)} />}
    <footer className="footer"><div className="footer-main"><div className="footer-brand"><Wordmark light /><p>PEOPLE CODE A<br />BRIGHTER TOMORROW.</p><div className="social-links" role="group" aria-label="Tamzode social platforms"><span role="img" aria-label="Instagram"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" className="social-dot"/></svg></span><span role="img" aria-label="Facebook"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 21v-8h3l.5-4H14V7c0-1.2.4-2 2-2h2V1.4C17.3 1.2 16.2 1 15 1c-3.4 0-5.5 2-5.5 5.7V9H6v4h3.5v8H14Z"/></svg></span><span role="img" aria-label="LinkedIn"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9h4v12H4zM6 3.5a2.3 2.3 0 1 0 0 4.6 2.3 2.3 0 0 0 0-4.6ZM11 9h3.8v1.7h.1A4.2 4.2 0 0 1 18.7 8c3.9 0 4.3 2.5 4.3 5.7V21h-4v-6.5c0-1.6 0-3.6-2.2-3.6s-2.5 1.7-2.5 3.5V21h-4V9Z"/></svg></span><span role="img" aria-label="WhatsApp"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.2 11.8a8.2 8.2 0 0 1-12.1 7.3L3 20.4l1.3-4.8a8.2 8.2 0 1 1 15.9-3.8Z"/><path d="M9 8.2c.2-.5.4-.5.7-.5h.5c.2 0 .4 0 .5.4l.8 1.8c.1.3.1.5-.1.7l-.6.7c-.2.2-.2.4 0 .7.5.9 1.2 1.5 2.1 2 .3.2.5.1.7-.1l.8-.9c.2-.2.4-.2.7-.1l1.7.8c.3.1.4.3.4.5 0 .3-.2 1.2-.7 1.6-.5.5-1.2.7-2 .6-1.1-.1-2.5-.8-3.8-1.9-1.1-1-2.1-2.3-2.4-3.3-.3-1.1.1-2 .7-3Z"/></svg></span></div></div><div className="footer-column"><span>EXPLORE</span>{nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}<a href="#faq">FAQs</a></div><div className="footer-column"><span>OUR SERVICES</span>{services.slice(0, 4).map(s => <a key={s.number} href="#services">{s.title}</a>)}</div><div className="footer-end"><a href="#contact" className="footer-talk">Have something in mind?<ArrowUpRight size={16} /></a><span>Thoughtfully made for a brighter tomorrow.</span></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Tamzode Technology. All rights reserved.</span><a href="#home">BACK TO THE TOP <ArrowUpRight size={12} /></a><span>BUILT WITH PURPOSE <span className="footer-spark">✳</span></span></div></footer>
  </>
}

export default App
