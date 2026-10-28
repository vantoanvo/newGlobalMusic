import { useState } from 'react';
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  CirclePlay,
  Facebook,
  Instagram,
  Linkedin,
  Menu,
  Music2,
  Play,
  Quote,
  Sparkles,
  X,
  Youtube,
} from 'lucide-react';

const classroomImage =
  'https://images.pexels.com/photos/8363120/pexels-photo-8363120.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const teacherImage =
  'https://images.pexels.com/photos/8363149/pexels-photo-8363149.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const performanceImage =
  'https://images.pexels.com/photos/11425205/pexels-photo-11425205.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

const programs = [
  {
    number: '01',
    title: 'Start a music program',
    text: 'Bring joyful, high-quality music education to your school community with a plan built around your students.',
    color: 'orange',
  },
  {
    number: '02',
    title: 'Grow your practice',
    text: 'Get the training, lesson plans, and community you need to lead with confidence in every classroom.',
    color: 'teal',
  },
  {
    number: '03',
    title: 'Put instruments in hands',
    text: 'From first notes to final bows, we help make sure students have the tools to find their own sound.',
    color: 'yellow',
  },
];

const donationAmounts = ['$25', '$50', '$100', '$250'];

function App() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [selectedDonation, setSelectedDonation] = useState<string>('$50');
  const [monthly, setMonthly] = useState<boolean>(false);

  const closeMenu = (): void => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="topline">
        <div className="container topline-inner">
          <span>Music belongs in every school.</span>
          <a href="#donate">Give the gift of music <ArrowUpRight size={14} /></a>
        </div>
      </div>

      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#top" onClick={closeMenu} aria-label="Global Music Education Network home">
            <img src="/logo.webp" alt="Global Music Education Network logo" />
            <span>Global Music<br /><b>Education Network</b></span>
          </a>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`}>
            <a href="#programs" onClick={closeMenu}>Programs <ChevronDown size={15} /></a>
            <a href="#impact" onClick={closeMenu}>Our impact</a>
            <a href="#stories" onClick={closeMenu}>Stories</a>
            <a href="#resources" onClick={closeMenu}>Resources</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a className="nav-donate" href="#donate" onClick={closeMenu}>Donate <ArrowUpRight size={16} /></a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow"><Music2 size={16} /> Music changes everything</p>
              <h1>Every child deserves the chance to <em>make music.</em></h1>
              <p className="hero-lede">We partner with teachers and schools to make music education joyful, accessible, and part of every child&apos;s story.</p>
              <div className="hero-actions">
                <a href="#teacher" className="button button-dark">Bring music to your school <ArrowUpRight size={18} /></a>
                <a href="#story" className="text-link"><span className="play-icon"><Play size={13} fill="currentColor" /></span> See the difference</a>
              </div>
              <div className="hero-note"><Sparkles size={17} /><span>Designed with teachers, for every learner.</span></div>
            </div>
            <div className="hero-art">
              <div className="hero-photo-frame">
                <img src={classroomImage} alt="Students learning a song together in a bright classroom" />
              </div>
              <div className="hero-sticker"><span>More music.</span><strong>More possibility.</strong><Music2 size={24} /></div>
              <div className="hero-doodle">♪</div>
            </div>
          </div>
          <div className="hero-wave" aria-hidden="true" />
        </section>

        <section className="impact-strip" id="impact">
          <div className="container impact-grid">
            <div className="impact-intro"><span className="impact-mark">✳</span><p>When music is in the room,<br /><strong>possibility is too.</strong></p></div>
            <div className="stat"><strong>1.2<span>M</span></strong><span>students reached</span></div>
            <div className="stat"><strong>480</strong><span>schools in our network</span></div>
            <div className="stat"><strong>92<span>%</span></strong><span>of teachers feel supported</span></div>
          </div>
        </section>

        <section className="section programs-section" id="programs">
          <div className="container">
            <div className="section-heading split-heading">
              <div><p className="eyebrow">How we show up</p><h2>From the first note<br />to the <em>big moment.</em></h2></div>
              <p>Great music education starts with a teacher who feels supported. We bring the tools, training, and belief to help every music-maker find their voice.</p>
            </div>
            <div className="program-grid">
              {programs.map((program) => (
                <article className={`program-card ${program.color}`} key={program.number}>
                  <div className="card-number">{program.number}</div>
                  <div className="card-icon"><Music2 size={28} /></div>
                  <h3>{program.title}</h3>
                  <p>{program.text}</p>
                  <a href="#teacher" className="card-link">Explore this program <ArrowUpRight size={17} /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="teacher-section" id="teacher">
          <div className="container teacher-grid">
            <div className="teacher-photo"><img src={teacherImage} alt="Teacher guiding students around a piano" /><span className="photo-caption">A little support goes a long way.</span></div>
            <div className="teacher-copy"><p className="eyebrow">For teachers & schools</p><h2>You already know the power of music. <em>We help you share it.</em></h2><p>Whether you&apos;re starting from scratch or growing something special, our team meets you where you are. Together, we&apos;ll build a program your students can feel proud of.</p><ul className="check-list"><li><span><Check size={15} /></span> Practical training that fits your school day</li><li><span><Check size={15} /></span> Ready-to-teach lessons for every level</li><li><span><Check size={15} /></span> Instruments and a community that has your back</li></ul><a href="#resources" className="button button-outline">Explore teacher support <ArrowUpRight size={18} /></a></div>
          </div>
        </section>

        <section className="story-section" id="stories">
          <div className="container story-grid">
            <div className="story-copy" id="story"><p className="eyebrow">A student story</p><Quote className="quote-mark" size={39} fill="currentColor" /><blockquote>“Before music, I was quiet. Now I know that my ideas can take up space.”</blockquote><div className="story-person"><span className="avatar">JR</span><span><strong>Jada, 5th grade</strong><small>Student musician, Chicago</small></span></div><a className="text-link" href="#stories">Read more stories <ArrowUpRight size={17} /></a></div>
            <div className="story-image"><img src={performanceImage} alt="Young student performing cello" /><div className="image-label"><span>Listen closely</span><CirclePlay size={30} /></div></div>
          </div>
        </section>

        <section className="resources-section" id="resources">
          <div className="container resources-grid">
            <div><p className="eyebrow">Your next step</p><h2>Good things happen when we <em>play together.</em></h2></div>
            <div className="resource-list" id="events"><a href="#teacher"><span><b>01</b> Free lesson library</span><ArrowUpRight size={20} /></a><a href="#teacher"><span><b>02</b> Training for teachers</span><ArrowUpRight size={20} /></a><a href="#teacher"><span><b>03</b> Request an instrument</span><ArrowUpRight size={20} /></a><a href="#events"><span><b>04</b> Upcoming events</span><ArrowUpRight size={20} /></a></div>
          </div>
        </section>

        <section className="donate-section" id="donate">
          <div className="container donate-grid">
            <div className="donate-copy"><p className="eyebrow">Make a joyful noise</p><h2>Your gift puts an instrument in a child&apos;s hands.</h2><p>Every gift helps a teacher open the door to music for more students. Choose a one-time gift or make music part of your month.</p><div className="donate-proof"><span className="proof-avatars"><i>AM</i><i>KL</i><i>TC</i></span><span><strong>Join 3,800+ music-makers</strong><small>giving what they can, together</small></span></div></div>
            <div className="donate-box"><div className="donate-toggle"><button className={!monthly ? 'active' : ''} onClick={() => setMonthly(false)}>One time</button><button className={monthly ? 'active' : ''} onClick={() => setMonthly(true)}>Monthly</button></div><p className="donate-label">{monthly ? 'Choose your monthly gift' : 'Choose your gift'}</p><div className="amount-grid">{donationAmounts.map((amount) => <button className={selectedDonation === amount ? 'selected' : ''} key={amount} onClick={() => setSelectedDonation(amount)}>{amount}</button>)}</div><button className="button button-orange donate-button">Give {selectedDonation} {monthly ? 'monthly' : 'today'} <ArrowUpRight size={18} /></button><small className="secure-note">Your gift helps create more music, everywhere.</small></div>
          </div>
        </section>
      </main>

      <footer className="site-footer" id="about">
        <div className="container footer-top"><div className="footer-brand"><a className="brand brand-light" href="#top"><img src="/logo.webp" alt="Global Music Education Network logo" /><span>Global Music<br /><b>Education Network</b></span></a><p>Making room for every child to find their sound.</p><div className="social-links"><a href="#about" aria-label="Instagram"><Instagram size={18} /></a><a href="#about" aria-label="Facebook"><Facebook size={18} /></a><a href="#about" aria-label="LinkedIn"><Linkedin size={18} /></a><a href="#about" aria-label="YouTube"><Youtube size={18} /></a></div></div><div className="footer-links"><div><strong>Explore</strong><a href="#programs">Programs</a><a href="#impact">Our impact</a><a href="#stories">Stories</a><a href="#events">Events</a></div><div><strong>Get involved</strong><a href="#teacher">Join as a teacher</a><a href="#donate">Donate</a><a href="#about">Partner with us</a><a href="#resources">Resources</a></div><div><strong>Stay in tune</strong><p>Get good news, classroom ideas, and stories worth sharing.</p><div className="email-form"><input type="email" placeholder="Your email address" aria-label="Your email address" /><button aria-label="Subscribe"><ArrowUpRight size={18} /></button></div></div></div></div><div className="container footer-bottom"><span>© 2025 Global Music Education Network</span><span>Music is for everyone.</span><span>Privacy · Accessibility</span></div>
      </footer>
    </div>
  );
}

export default App;
