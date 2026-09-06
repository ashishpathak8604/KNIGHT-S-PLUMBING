import { useState } from 'react'
import {
  Phone, Menu, X, ChevronRight, Star, MapPin,
  Droplets, Flame, Home, Building2, SearchCheck, Wrench,
  ShieldCheck, Clock, Users, Award, CheckCircle,
  Mail, Send, AlertTriangle, ArrowRight
} from 'lucide-react'

// Brand social SVG icons (lucide-react doesn't ship brand icons)
function FacebookIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}
function InstagramIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}
function TwitterXIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

// ─── Data ────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: 'Home',          href: '#home' },
  { label: 'Services',      href: '#services' },
  { label: 'About Us',      href: '#about' },
  { label: 'Service Areas', href: '#service-areas' },
  { label: 'Financing',     href: '#contact' },
  { label: 'Contact',       href: '#contact' },
]

const SERVICES = [
  {
    icon: Droplets,
    title: 'Drain Cleaning',
    desc: 'Clear clogged drains and keep your plumbing flowing smoothly with professional drain cleaning.',
  },
  {
    icon: Flame,
    title: 'Water Heater Services',
    desc: 'Installation, repair and maintenance for all types of water heaters — tank and tankless.',
  },
  {
    icon: Home,
    title: 'Residential Plumbing',
    desc: 'Professional plumbing solutions for your home — from minor repairs to full remodels.',
  },
  {
    icon: Building2,
    title: 'Commercial Plumbing',
    desc: 'Reliable plumbing services for businesses of all sizes, delivered on schedule.',
  },
  {
    icon: SearchCheck,
    title: 'Leak Detection & Repair',
    desc: 'Find and fix leaks before they become costly problems with our precise detection methods.',
  },
  {
    icon: Wrench,
    title: 'Pipe Installation & Repair',
    desc: 'Professional installation and repair of plumbing pipes for any residential or commercial system.',
  },
]

const TRUST_POINTS = [
  {
    icon: Award,
    title: 'Experienced & Reliable',
    desc: 'Over 25 years of trusted local plumbing expertise throughout the Greater Houston area.',
  },
  {
    icon: Users,
    title: 'Family Owned & Operated',
    desc: 'A local company that genuinely cares about its neighbors and their homes.',
  },
  {
    icon: ShieldCheck,
    title: 'Licensed & Insured',
    desc: 'Fully licensed and insured — giving you peace of mind on every job.',
  },
  {
    icon: Clock,
    title: 'Fast Emergency Response',
    desc: 'Available 24/7 when plumbing problems simply cannot wait.',
  },
]

const SERVICE_AREAS = [
  'Clear Lake', 'League City', 'Friendswood', 'Pearland',
  'Webster', 'Houston', 'Kemah', 'Seabrook',
  'Pasadena', 'Galveston', 'Alvin', 'Santa Fe',
]

const TESTIMONIALS = [
  {
    stars: 5,
    text: "Knight's Plumbing came out the same day and fixed our burst pipe quickly. Professional, clean, and fairly priced. I won't call anyone else for plumbing work.",
    name: 'Sandra M.',
    city: 'Clear Lake, TX',
  },
  {
    stars: 5,
    text: "Our water heater gave out on a Friday night and they were at our door within an hour. True 24/7 service — we were so relieved. Highly recommend!",
    name: 'James R.',
    city: 'League City, TX',
  },
  {
    stars: 5,
    text: "We've used Knight's for our commercial property for years. Always on time, always professional, and the work is done right the first time. Great local company.",
    name: 'Diana T.',
    city: 'Webster, TX',
  },
]

const FOOTER_SERVICES = [
  'Drain Cleaning', 'Water Heater Services',
  'Pipe Repair & Installation', 'Leak Detection',
  'Commercial Plumbing', 'Residential Plumbing',
]

// ─── Sub-components ───────────────────────────────────────────────────────────

function StarRating({ count = 5 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  )
}

function ServiceCard({ icon: Icon, title, desc }) {
  return (
    <div className="card group cursor-default">
      <div className="w-12 h-12 rounded-lg bg-navy-50 flex items-center justify-center mb-4 group-hover:bg-red-50 transition-colors duration-200">
        <Icon className="w-6 h-6 text-[#0d1e35] group-hover:text-red-600 transition-colors duration-200" />
      </div>
      <h3 className="text-[#0d1e35] font-bold text-lg mb-2">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-4">{desc}</p>
      <a
        href="#contact"
        className="inline-flex items-center gap-1 text-sm font-semibold text-red-600 hover:text-red-700 transition-colors"
      >
        Learn More <ChevronRight className="w-4 h-4" />
      </a>
    </div>
  )
}

function TrustCard({ icon: Icon, title, desc }) {
  return (
    <div className="flex gap-4">
      <div className="shrink-0 w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center">
        <Icon className="w-6 h-6 text-red-600" />
      </div>
      <div>
        <h3 className="text-[#0d1e35] font-bold text-base mb-1">{title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}

function TestimonialCard({ stars, text, name, city }) {
  return (
    <div className="card flex flex-col gap-4">
      <StarRating count={stars} />
      <p className="text-gray-600 text-sm leading-relaxed flex-1 italic">"{text}"</p>
      <div>
        <p className="font-semibold text-[#0d1e35] text-sm">{name}</p>
        <p className="text-gray-400 text-xs">{city}</p>
      </div>
    </div>
  )
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white font-sans">

      {/* ── 1. TOP TRUST BAR ─────────────────────────────────────────────── */}
      <div className="bg-[#0d1e35] text-gray-300 text-xs py-2">
        <div className="max-w-7xl mx-auto px-4">
          {/* Desktop */}
          <div className="hidden md:flex items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-red-500" />
                Family Owned &amp; Operated Since 1988
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-red-500" />
                Licensed &amp; Insured
              </span>
            </div>
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-red-500" />
                Serving Clear Lake &amp; Greater Houston
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-red-500" />
                24/7 Emergency Service
              </span>
            </div>
          </div>
          {/* Mobile — compact two items */}
          <div className="flex md:hidden items-center justify-between">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-red-500" />
              Family Owned Since 1988
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-red-500" />
              24/7 Emergency
            </span>
          </div>
        </div>
      </div>

      {/* ── 2. MAIN NAVIGATION ───────────────────────────────────────────── */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">

            {/* Brand */}
            <a href="#home" className="flex flex-col leading-none" aria-label="Knight's Plumbing — Home">
              <span className="text-[#0d1e35] font-extrabold text-xl tracking-tight">
                KNIGHT'S
                <span className="text-red-600"> PLUMBING</span>
              </span>
              <span className="text-gray-400 text-[10px] font-medium tracking-widest uppercase">
                Residential &amp; Commercial
              </span>
            </a>

            {/* Desktop nav links */}
            <div className="hidden lg:flex items-center gap-6">
              {NAV_LINKS.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="nav-link text-gray-600 hover:text-[#0d1e35] text-sm font-medium transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+12813330733"
                className="btn-primary text-sm py-2.5"
                aria-label="Call Knight's Plumbing at (281) 333-0733"
              >
                <Phone className="w-4 h-4" />
                (281) 333-0733
              </a>
            </div>

            {/* Mobile: call + hamburger */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href="tel:+12813330733"
                className="btn-primary text-sm py-2 px-3"
                aria-label="Call Now"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">Call Now</span>
              </a>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 text-[#0d1e35] hover:bg-gray-100 rounded-md transition-colors"
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
              >
                {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="lg:hidden menu-fade-in border-t border-gray-100 bg-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {NAV_LINKS.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-700 hover:text-[#0d1e35] hover:bg-gray-50 font-medium text-sm px-3 py-2.5 rounded-md transition-colors"
                >
                  {label}
                </a>
              ))}
              <div className="mt-3 pt-3 border-t border-gray-100">
                <a
                  href="tel:+12813330733"
                  className="btn-primary w-full text-sm"
                  aria-label="Call Knight's Plumbing"
                >
                  <Phone className="w-4 h-4" />
                  Call Now — (281) 333-0733
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* ── 3. HERO ──────────────────────────────────────────────────────── */}
      <section
        id="home"
        className="relative min-h-[90vh] flex items-center bg-[#0d1e35]"
        aria-labelledby="hero-heading"
      >
        {/* Background image */}
        <img
          src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=1800&q=80"
          alt="Professional plumber repairing a residential plumbing system"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
          loading="eager"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1e35]/90 via-[#0d1e35]/70 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 md:py-28">
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <p className="text-red-400 text-xs font-semibold tracking-widest uppercase mb-4">
              Clear Lake &amp; Greater Houston
            </p>

            {/* Heading */}
            <h1
              id="hero-heading"
              className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4"
            >
              Reliable Plumbing<br />
              <span className="text-red-400">When You Need It Most</span>
            </h1>

            {/* Subheading */}
            <p className="text-gray-300 text-lg font-medium mb-3">
              Residential &amp; Commercial Plumbing Services
            </p>

            {/* Description */}
            <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-lg">
              Family owned and operated since 1988, Knight's Plumbing provides reliable
              plumbing services for homes and businesses throughout Clear Lake, Houston
              and surrounding areas.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a
                href="tel:+12813330733"
                className="btn-primary text-base py-4 px-8"
                aria-label="Call Knight's Plumbing at (281) 333-0733"
              >
                <Phone className="w-5 h-5" />
                Call Now — (281) 333-0733
              </a>
              <a
                href="#contact"
                className="btn-outline-white text-base py-4 px-8"
              >
                Schedule a Service
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Trust row */}
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {[
                '24/7 Emergency Service',
                'Licensed & Insured',
                '25+ Years Experience',
                'Trusted by Local Homeowners',
              ].map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-1.5 text-gray-300 text-sm"
                >
                  <CheckCircle className="w-4 h-4 text-red-400 shrink-0" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. SERVICES ──────────────────────────────────────────────────── */}
      <section id="services" className="py-20 bg-gray-50" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="section-eyebrow mb-2">Our Services</p>
            <h2 id="services-heading" className="section-heading mb-3">
              Complete Plumbing Solutions
            </h2>
            <p className="text-gray-500 text-base max-w-xl mx-auto">
              From routine maintenance to emergency repairs, we're here when you need us.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((svc) => (
              <ServiceCard key={svc.title} {...svc} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. ABOUT / TRUST ─────────────────────────────────────────────── */}
      <section id="about" className="py-20 bg-white" aria-labelledby="about-heading">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: image */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1621905251189-08b45249ff78?auto=format&fit=crop&w=900&q=80"
                alt="Knight's Plumbing professional plumber working on a residential plumbing job in the Houston area"
                className="w-full rounded-2xl object-cover shadow-lg aspect-[4/3]"
                loading="lazy"
              />
              {/* Badge overlay */}
              <div className="absolute -bottom-4 -right-4 bg-red-600 text-white rounded-xl px-5 py-4 shadow-xl hidden sm:block">
                <p className="text-3xl font-extrabold leading-none">25+</p>
                <p className="text-xs font-medium mt-0.5 opacity-90">Years Serving Houston</p>
              </div>
            </div>

            {/* Right: content */}
            <div>
              <p className="section-eyebrow mb-2">About Knight's Plumbing</p>
              <h2 id="about-heading" className="section-heading mb-4">
                A Local Team<br />You Can Trust
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-8">
                For more than 25 years, Knight's Plumbing has been serving Clear Lake,
                Pearland, Friendswood and the greater Houston area. We're committed to
                providing professional, affordable and reliable plumbing services with a
                focus on customer satisfaction. As a family-owned business, we treat every
                customer like a neighbor — because most of you are.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                {[
                  { stat: '25+', label: 'Years of Experience' },
                  { stat: '1,000+', label: 'Customers Served' },
                  { stat: '24/7', label: 'Emergency Service' },
                ].map(({ stat, label }) => (
                  <div key={stat} className="text-center sm:text-left">
                    <p className="stat-number">{stat}</p>
                    <p className="text-gray-500 text-xs mt-1 font-medium leading-tight">{label}</p>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-[#0d1e35] font-semibold text-sm hover:text-red-600 transition-colors"
              >
                Learn More About Us
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. WHY CHOOSE US ─────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50" aria-labelledby="why-heading">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 id="why-heading" className="section-heading">
              Why Homeowners Choose Knight's
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {TRUST_POINTS.map((tp) => (
              <TrustCard key={tp.title} {...tp} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. SERVICE AREA ──────────────────────────────────────────────── */}
      <section id="service-areas" className="py-20 bg-[#0d1e35]" aria-labelledby="areas-heading">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: text */}
            <div>
              <p className="text-red-400 text-xs font-semibold tracking-widest uppercase mb-3">
                Our Service Area
              </p>
              <h2 id="areas-heading" className="text-white text-3xl sm:text-4xl font-extrabold leading-tight mb-4">
                Proudly Serving Clear Lake<br />&amp; Greater Houston
              </h2>
              <p className="text-gray-400 text-base leading-relaxed mb-8">
                From Clear Lake to Pearland and everywhere in between — if you're in
                the Greater Houston area, Knight's Plumbing is your local plumber.
              </p>

              {/* Area tags */}
              <div className="flex flex-wrap gap-2">
                {SERVICE_AREAS.map((area) => (
                  <span
                    key={area}
                    className="flex items-center gap-1.5 bg-white/10 text-gray-200 text-sm font-medium px-3 py-1.5 rounded-full border border-white/10"
                  >
                    <MapPin className="w-3.5 h-3.5 text-red-400" />
                    {area}
                  </span>
                ))}
                <span className="text-gray-400 text-sm px-2 py-1.5">
                  &amp; surrounding areas
                </span>
              </div>

              <div className="mt-8">
                <a href="tel:+12813330733" className="btn-primary text-sm py-3">
                  <Phone className="w-4 h-4" />
                  Call for Service in Your Area
                </a>
              </div>
            </div>

            {/* Right: map placeholder */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/3] bg-[#152d4e] flex flex-col items-center justify-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80"
                  alt="Map showing Knight's Plumbing service area around Greater Houston, Texas"
                  className="absolute inset-0 w-full h-full object-cover opacity-30 rounded-2xl"
                  loading="lazy"
                />
                <div className="relative z-10 text-center p-6">
                  <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <p className="text-white font-bold text-lg">Greater Houston Area</p>
                  <p className="text-gray-300 text-sm mt-1">Webster, TX — Headquarters</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. TESTIMONIALS ──────────────────────────────────────────────── */}
      <section className="py-20 bg-white" aria-labelledby="reviews-heading">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="section-eyebrow mb-2">Customer Reviews</p>
            <h2 id="reviews-heading" className="section-heading">
              Trusted By Homeowners &amp; Businesses
            </h2>
            <p className="text-gray-400 text-xs mt-2 italic">
              * Sample reviews for design concept purposes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. EMERGENCY CTA ─────────────────────────────────────────────── */}
      <section className="relative py-24 bg-[#0d1e35] overflow-hidden" aria-labelledby="emergency-heading">
        {/* Subtle bg texture */}
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=60"
          alt="Plumbing pipes background texture"
          className="absolute inset-0 w-full h-full object-cover opacity-10"
          loading="lazy"
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <div className="w-14 h-14 rounded-full bg-red-600/20 border border-red-500/30 flex items-center justify-center mx-auto mb-6">
            <AlertTriangle className="w-7 h-7 text-red-400" />
          </div>
          <h2 id="emergency-heading" className="text-white text-4xl sm:text-5xl font-extrabold mb-4">
            Need a Plumber Now?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            We're available <strong className="text-white">24/7</strong> for emergency plumbing
            services in Clear Lake and surrounding areas. Don't wait — call us now.
          </p>
          <a
            href="tel:+12813330733"
            className="btn-primary text-xl py-5 px-12 inline-flex shadow-2xl"
            aria-label="Call Knight's Plumbing emergency line at (281) 333-0733"
          >
            <Phone className="w-6 h-6" />
            Call (281) 333-0733
          </a>
        </div>
      </section>

      {/* ── 10. CONTACT / QUOTE ──────────────────────────────────────────── */}
      <section id="contact" className="py-20 bg-gray-50" aria-labelledby="contact-heading">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Left */}
            <div>
              <p className="section-eyebrow mb-2">Get In Touch</p>
              <h2 id="contact-heading" className="section-heading mb-4">
                Request a Quote<br />or Schedule a Service
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-8">
                Fill out the form and a member of our team will be in touch shortly.
                For urgent issues, please call us directly.
              </p>

              <div className="flex flex-col gap-5">
                <a
                  href="tel:+12813330733"
                  className="flex items-center gap-4 group"
                  aria-label="Call Knight's Plumbing"
                >
                  <div className="w-11 h-11 rounded-lg bg-red-50 flex items-center justify-center group-hover:bg-red-100 transition-colors">
                    <Phone className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">Phone</p>
                    <p className="text-[#0d1e35] font-semibold">(281) 333-0733</p>
                  </div>
                </a>

                <a
                  href="mailto:service@knightsplumbing.com"
                  className="flex items-center gap-4 group"
                  aria-label="Email Knight's Plumbing"
                >
                  <div className="w-11 h-11 rounded-lg bg-red-50 flex items-center justify-center group-hover:bg-red-100 transition-colors">
                    <Mail className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">Email</p>
                    <p className="text-[#0d1e35] font-semibold">service@knightsplumbing.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-lg bg-red-50 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">Location</p>
                    <p className="text-[#0d1e35] font-semibold">Webster, Texas</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col gap-4"
                aria-label="Service request form"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="full-name" className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                      Full Name
                    </label>
                    <input
                      id="full-name"
                      type="text"
                      placeholder="John Smith"
                      autoComplete="name"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d1e35] focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone-number" className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                      Phone Number
                    </label>
                    <input
                      id="phone-number"
                      type="tel"
                      placeholder="(281) 000-0000"
                      autoComplete="tel"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d1e35] focus:border-transparent transition"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d1e35] focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label htmlFor="service-needed" className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                    Service Needed
                  </label>
                  <select
                    id="service-needed"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0d1e35] focus:border-transparent transition bg-white"
                  >
                    <option value="">Select a service…</option>
                    <option>Drain Cleaning</option>
                    <option>Water Heater Services</option>
                    <option>Residential Plumbing</option>
                    <option>Commercial Plumbing</option>
                    <option>Leak Detection &amp; Repair</option>
                    <option>Pipe Installation &amp; Repair</option>
                    <option>Emergency Service</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Describe the issue or service you need…"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d1e35] focus:border-transparent transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full py-3.5 text-sm mt-1"
                >
                  <Send className="w-4 h-4" />
                  Send Request
                </button>

                <p className="text-center text-xs text-gray-400">
                  For immediate assistance, call{' '}
                  <a href="tel:+12813330733" className="text-red-600 font-semibold hover:underline">
                    (281) 333-0733
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── 11. FOOTER ───────────────────────────────────────────────────── */}
      <footer className="bg-[#080f1c] text-gray-400" aria-label="Site footer">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* Col 1: Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="mb-4">
                <p className="text-white font-extrabold text-xl tracking-tight">
                  KNIGHT'S<span className="text-red-500"> PLUMBING</span>
                </p>
                <p className="text-gray-500 text-xs tracking-widest uppercase mt-0.5">
                  Residential &amp; Commercial
                </p>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">
                Family owned and operated since 1988, serving Clear Lake and the
                Greater Houston area with trusted plumbing services.
              </p>
              <p className="text-red-500 font-semibold text-sm italic mb-4">
                "Family Owned. Texas Proud."
              </p>
              {/* Social icons */}
              <div className="flex gap-3">
                {[
                  { Icon: FacebookIcon,  label: 'Facebook' },
                  { Icon: InstagramIcon, label: 'Instagram' },
                  { Icon: TwitterXIcon,  label: 'Twitter / X' },
                ].map(({ Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={`Knight's Plumbing on ${label}`}
                    className="w-9 h-9 rounded-lg bg-white/5 hover:bg-red-600 flex items-center justify-center transition-colors duration-200"
                  >
                    <Icon className="w-4 h-4 text-gray-400" />
                  </a>
                ))}
              </div>
            </div>

            {/* Col 2: Quick Links */}
            <div>
              <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
                Quick Links
              </h3>
              <ul className="flex flex-col gap-2">
                {NAV_LINKS.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Services */}
            <div>
              <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
                Services
              </h3>
              <ul className="flex flex-col gap-2">
                {FOOTER_SERVICES.map((svc) => (
                  <li key={svc}>
                    <a href="#services" className="text-sm hover:text-white transition-colors">
                      {svc}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Contact */}
            <div>
              <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
                Contact Us
              </h3>
              <div className="flex flex-col gap-3">
                <a
                  href="tel:+12813330733"
                  className="flex items-center gap-2.5 text-sm hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-red-500 shrink-0" />
                  (281) 333-0733
                </a>
                <a
                  href="mailto:service@knightsplumbing.com"
                  className="flex items-center gap-2.5 text-sm hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-red-500 shrink-0" />
                  service@knightsplumbing.com
                </a>
                <p className="flex items-center gap-2.5 text-sm">
                  <MapPin className="w-4 h-4 text-red-500 shrink-0" />
                  Webster, Texas
                </p>
                <p className="flex items-start gap-2.5 text-sm">
                  <Clock className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>Mon – Fri: 8am – 6pm<br />24/7 Emergency Service</span>
                </p>
              </div>

              <div className="mt-6">
                <a href="tel:+12813330733" className="btn-primary text-sm py-2.5 w-full">
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-600">
            <p>© 2026 Knight's Plumbing. All rights reserved.</p>
            <p>Design concept — sample page only. Not the official Knight's Plumbing website.</p>
          </div>
        </div>
      </footer>

      {/* ── MOBILE STICKY BOTTOM CTA ─────────────────────────────────────── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
        <a
          href="tel:+12813330733"
          className="flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white font-bold py-4 text-sm shadow-2xl transition-colors"
          aria-label="Call Knight's Plumbing at (281) 333-0733"
        >
          <Phone className="w-5 h-5 shrink-0" />
          Call Knight's Plumbing — (281) 333-0733
        </a>
      </div>

    </div>
  )
}
