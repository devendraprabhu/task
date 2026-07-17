import './App.css'

const navLinks = ['Home', 'Studio', 'Services', 'Contact', 'FAQs']

const heroAvatars = [
  {
    src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    alt: 'Portrait of a team member',
    className: 'avatar avatar--small',
    style: { '--x': '1%', '--y': '67%', '--delay': '0s' },
  },
  {
    src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80',
    alt: 'Portrait of a team member',
    className: 'avatar avatar--medium',
    style: { '--x': '9%', '--y': '60%', '--delay': '0.08s' },
  },
  {
    src: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=300&q=80',
    alt: 'Portrait of a team member',
    className: 'avatar avatar--large',
    style: { '--x': '27%', '--y': '25%', '--delay': '0.16s' },
  },
  {
    src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80',
    alt: 'Portrait of a team member',
    className: 'avatar avatar--medium',
    style: { '--x': '34%', '--y': '39%', '--delay': '0.24s' },
  },
  {
    src: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80',
    alt: 'Portrait of a team member',
    className: 'avatar avatar--large',
    style: { '--x': '47%', '--y': '18%', '--delay': '0.32s' },
  },
  {
    src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    alt: 'Portrait of a team member',
    className: 'avatar avatar--medium',
    style: { '--x': '58%', '--y': '34%', '--delay': '0.4s' },
  },
  {
    src: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?auto=format&fit=crop&w=300&q=80',
    alt: 'Portrait of a team member',
    className: 'avatar avatar--large',
    style: { '--x': '74%', '--y': '18%', '--delay': '0.48s' },
  },
  {
    src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80',
    alt: 'Portrait of a team member',
    className: 'avatar avatar--medium',
    style: { '--x': '89%', '--y': '38%', '--delay': '0.56s' },
  },
]

const services = [
  {
    tag: 'Office of multiple interest content',
    title: 'Collaborative & partnership',
  },
  {
    tag: 'The hanger US Air force digital experimental',
    title: 'We talk about our weight',
  },
  {
    tag: 'Delta faucet content, social, digital',
    title: 'Piloting digital confidence',
  },
]

const footerLinks = [
  {
    title: 'Company',
    links: ['Home', 'Studio', 'Service', 'Blog'],
  },
  {
    title: 'Terms & Policies',
    links: ['Privacy Policy', 'Terms & Conditions', 'Explore', 'Accessibility'],
  },
  {
    title: 'Follow Us',
    links: ['Instagram', 'LinkedIn', 'Youtube', 'Twitter'],
  },
  {
    title: 'Terms & Policies',
    links: ['1499 Fulton st, STE 2D Chicago, IL 63687', '(123) 45678900', 'info@elementum.com'],
  },
]

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <a className="brand" href="#home">
          Elementum
        </a>
        <nav className="nav" aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`}>
              {link}
            </a>
          ))}
        </nav>
        <button type="button" className="menu-button" aria-label="Open menu">
          <span />
          <span />
        </button>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero__decor hero__decor--left" aria-hidden="true" />
          <div className="hero__decor hero__decor--right" aria-hidden="true" />

          <div className="hero__content reveal">
            <p className="eyebrow">Creative strategy, digital craft, and thoughtful execution</p>
            <h1>
              The <span>thinkers</span> and doers were <span>changing</span> the{' '}
              <span>status</span> quo with bold ideas.
            </h1>
            <p className="hero__copy">
              We are a team of strategists, designers, communicators, and researchers.
              Together, we believe progress happens when ideas stay clear, human, and useful.
            </p>
          </div>

          <div className="avatars reveal" aria-label="Team portraits">
            {heroAvatars.map((avatar) => (
              <img
                key={`${avatar.alt}-${avatar.style['--x']}`}
                className={avatar.className}
                style={avatar.style}
                src={avatar.src}
                alt={avatar.alt}
                loading="lazy"
              />
            ))}
          </div>
        </section>

        <section className="feature section feature--split reveal" id="studio">
          <div className="feature__text">
            <h2>
              Tomorrow should <span>be better</span> than today
            </h2>
            <p>
              We create a calm, practical process for strategy, design, and research. Every
              step is tuned to help teams move forward with less friction and more clarity.
            </p>
            <a href="#services" className="text-link">
              Read more
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="feature__media">
            <div className="circle-frame circle-frame--large">
              <img
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80"
                alt="Team discussing strategy in a meeting room"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <section className="feature section feature--reverse reveal" id="contact">
          <div className="feature__media feature__media--left">
            <div className="circle-frame circle-frame--medium">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80"
                alt="Two teammates working together on a laptop"
                loading="lazy"
              />
            </div>
          </div>

          <div className="feature__text feature__text--right">
            <h2>
              See how we can help you <span>progress</span>
            </h2>
            <p>
              We add a layer of careful thinking and action that helps teams design digital
              products, social content, and brand experiences that feel steady and effective.
            </p>
            <a href="#newsletter" className="text-link">
              Read more
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </section>

        <section className="services section reveal" id="services">
          <div className="section-heading">
            <h2>
              What we can <span>offer</span> you!
            </h2>
          </div>

          <div className="service-list">
            {services.map((service) => (
              <a key={service.title} href="#newsletter" className="service-row">
                <div className="service-row__tag">{service.tag}</div>
                <div className="service-row__title">{service.title}</div>
                <div className="service-row__arrow" aria-hidden="true">
                  →
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="testimonials section reveal" id="faqs">
          <div className="testimonials__decor testimonials__decor--left" aria-hidden="true" />
          <div className="testimonials__decor testimonials__decor--right" aria-hidden="true" />

          <div className="section-heading section-heading--center">
            <h2>
              What our customer says <span>About Us</span>
            </h2>
          </div>

          <div className="testimonial-layout">
            <div className="testimonial-avatars testimonial-avatars--left" aria-hidden="true">
              <span className="mini-avatar mini-avatar--one" />
              <span className="mini-avatar mini-avatar--two" />
              <span className="mini-avatar mini-avatar--three" />
              <span className="mini-avatar mini-avatar--four" />
            </div>

            <blockquote className="testimonial-card">
              <p>
                Elementum delivered the site with the timeline they promised. The result brought
                more traffic, clearer usability, and a polished experience that felt easy to use
                right away.
              </p>
            </blockquote>

            <div className="testimonial-avatars testimonial-avatars--right" aria-hidden="true">
              <span className="mini-avatar mini-avatar--five" />
              <span className="mini-avatar mini-avatar--six" />
              <span className="mini-avatar mini-avatar--seven" />
              <span className="mini-avatar mini-avatar--eight" />
            </div>
          </div>
        </section>

        <section className="newsletter section reveal" id="newsletter">
          <div className="newsletter__decor newsletter__decor--left" aria-hidden="true" />
          <div className="newsletter__decor newsletter__decor--right" aria-hidden="true" />

          <div className="newsletter__content">
            <h2>
              Subscribe to <br /> our newsletter
            </h2>
            <p>To make your stay special and even more memorable.</p>
            <a className="button" href="mailto:info@elementum.com">
              Subscribe Now
            </a>
          </div>

          <footer className="footer">
            {footerLinks.map((column) => (
              <div key={column.title} className="footer__column">
                <h3>{column.title}</h3>
                <ul>
                  {column.links.map((link) => (
                    <li key={link}>{link}</li>
                  ))}
                </ul>
              </div>
            ))}
          </footer>

          <p className="copyright">©2023 Elementum. All rights reserved</p>
        </section>
      </main>
    </div>
  )
}

export default App
