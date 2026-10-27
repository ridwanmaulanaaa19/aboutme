import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

const BG_IMAGE =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260729_022513_486985a2-ac8c-4278-91a8-071dcd9fcaff.png&w=1280&q=85';
const PORTRAIT_IMAGE = `${import.meta.env.BASE_URL}ridwan.webp`;

type LinkItem = { label: string; href: string; external?: boolean };

const EMAIL: LinkItem = {
  label: 'Email',
  href: 'mailto:ridwanmaulanaaa19@gmail.com',
};

const FIND_ME: LinkItem[] = [
  {
    label: 'WhatsApp',
    href: 'https://api.whatsapp.com/send/?phone=6283892250205&text&type=phone_number&app_absent=0',
    external: true,
  },
  { label: 'TikTok', href: 'https://www.tiktok.com/@_rm19rm19', external: true },
  { label: 'Instagram', href: 'https://www.instagram.com/rdwnm4ulana/', external: true },
];

const EASE_DRAWER = 'cubic-bezier(0.76, 0, 0.24, 1)';

const linkProps = (item: LinkItem) =>
  item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {};

function Marquee() {
  return (
    <div
      className="anim-fade-up absolute inset-x-0 top-[16vh] z-10 overflow-hidden sm:top-[14vh]"
      style={{ animationDelay: '500ms' }}
    >
      <div className="marquee flex w-max whitespace-nowrap font-display text-[18vh] uppercase leading-none tracking-wide text-cream sm:text-[30vh]">
        {[0, 1, 2, 3].map((i) => (
          <span key={i} className="pr-[6vw]" aria-hidden={i > 0}>
            Ridwan Maulana&nbsp;
          </span>
        ))}
      </div>
    </div>
  );
}

function Hamburger({ open, onClick }: { open: boolean; onClick: () => void }) {
  const bar = 'absolute left-0 h-0.5 w-full bg-cream';
  return (
    <button
      type="button"
      aria-label={open ? 'Close menu' : 'Open menu'}
      aria-expanded={open}
      onClick={onClick}
      className="anim-fade-up fixed right-[17px] top-[17px] z-50 flex h-10 w-10 items-center justify-center sm:hidden"
      style={{ animationDelay: '900ms' }}
    >
      <span className="relative block h-4 w-6">
        <span
          className={`${bar} top-0`}
          style={{
            transform: open ? 'translateY(7px) rotate(45deg)' : 'none',
            transition: `transform 500ms ${EASE_DRAWER}`,
          }}
        />
        <span
          className={`${bar} top-[7px]`}
          style={{ opacity: open ? 0 : 1, transition: 'opacity 300ms ease' }}
        />
        <span
          className={`${bar} bottom-0`}
          style={{
            transform: open ? 'translateY(-7px) rotate(-45deg)' : 'none',
            transition: `transform 500ms ${EASE_DRAWER}`,
          }}
        />
      </span>
    </button>
  );
}

function Drawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const reveal = (delay: number, from: string) => ({
    className: `transition-all duration-700 ${open ? 'translate-y-0 opacity-100' : `${from} opacity-0`}`,
    style: {
      transitionDelay: open ? `${delay}ms` : '0ms',
      transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
    },
  });

  const labelClass = 'text-xs uppercase tracking-[0.2em] text-cream/50';
  const emailReveal = reveal(550, 'translate-y-4');

  return (
    <div className="sm:hidden" aria-hidden={!open}>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-500 ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />
      <aside
        className={`fixed inset-y-0 right-0 z-40 w-[80%] max-w-sm bg-[#141414] px-8 py-10 text-cream ${
          open ? 'translate-x-0' : 'pointer-events-none translate-x-full'
        }`}
        style={{ transition: `transform 600ms ${EASE_DRAWER}` }}
      >
        <button
          type="button"
          aria-label="Close menu"
          onClick={onClose}
          className={`absolute right-6 top-6 transition-all duration-500 ${
            open ? 'rotate-0 opacity-100' : 'rotate-90 opacity-0'
          }`}
          style={{ transitionDelay: open ? '300ms' : '0ms' }}
        >
          <X size={26} strokeWidth={1.5} />
        </button>

        <div className="flex h-full flex-col justify-between pt-16">
          <div>
            <p className={`${labelClass} ${reveal(250, 'translate-y-4').className}`} style={reveal(250, 'translate-y-4').style}>
              Find Me
            </p>
            <nav className="mt-6 flex flex-col gap-2">
              {FIND_ME.map((item, i) => {
                const r = reveal(300 + i * 80, 'translate-y-6');
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={onClose}
                    className={`font-hn text-4xl ${r.className}`}
                    style={r.style}
                    {...linkProps(item)}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>
          </div>

          <div>
            <p className={`${labelClass} ${reveal(500, 'translate-y-4').className}`} style={reveal(500, 'translate-y-4').style}>
              Send an email
            </p>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <a href={EMAIL.href} className={emailReveal.className} style={emailReveal.style}>
                {EMAIL.label}
              </a>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default function App() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const desktopLink = 'transition-opacity duration-300 hover:opacity-60';

  return (
    <section className="relative h-[100dvh] w-full overflow-hidden bg-black font-hn text-cream">
      {/* Background */}
      <img
        src={BG_IMAGE}
        alt=""
        className="anim-fade-in absolute inset-0 h-full w-full object-cover"
      />

      <Marquee />

      {/* Cream rule */}
      <div
        className="anim-line absolute inset-x-6 bottom-[5.5rem] z-10 h-0.5 bg-cream sm:inset-x-10 sm:bottom-28"
        style={{ animationDelay: '1200ms' }}
      />

      {/* Portrait */}
      <img
        src={PORTRAIT_IMAGE}
        alt="Portrait"
        className="anim-rise-in pointer-events-none absolute inset-0 z-20 h-full w-full object-contain object-bottom [@media(max-aspect-ratio:3/4)]:object-cover"
        style={{ animationDelay: '300ms' }}
      />

      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-30 flex items-start justify-between px-6 pt-6 sm:px-10 sm:pt-8">
        <div className="flex flex-col items-start">
          <a
            href="#"
            className="anim-fade-up font-hn text-lg tracking-wide text-cream"
            style={{ animationDelay: '800ms' }}
          >
            nielfansemyu
          </a>
        </div>

        <div className="hidden items-start gap-16 sm:flex lg:gap-24">
          <span className="anim-fade-up text-sm text-cream" style={{ animationDelay: '900ms' }}>
            2026
          </span>
          <nav className="flex flex-col gap-0.5 text-sm text-cream">
            <a
              href={FIND_ME[0].href}
              className={`anim-fade-up ${desktopLink}`}
              style={{ animationDelay: '1000ms' }}
              {...linkProps(FIND_ME[0])}
            >
              WhatsApp
            </a>
            <a
              href={EMAIL.href}
              className={`anim-fade-up ${desktopLink}`}
              style={{ animationDelay: '1080ms' }}
            >
              Email
            </a>
          </nav>
          <div className="flex flex-col gap-0.5 text-sm text-cream">
            {[FIND_ME[2], FIND_ME[1]].map((item, i) => (
              <a
                key={item.label}
                href={item.href}
                className={`anim-fade-up ${desktopLink}`}
                style={{ animationDelay: `${1150 + i * 80}ms` }}
                {...linkProps(item)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </header>

      <Hamburger open={open} onClick={() => setOpen((v) => !v)} />

      {/* Footer */}
      <footer className="absolute inset-x-0 bottom-0 z-30 flex items-end justify-between px-6 pb-5 font-hn text-xs leading-relaxed text-cream sm:z-10 sm:px-10 sm:pb-8 sm:text-sm">
        <div>
          <div className="anim-fade-up" style={{ animationDelay: '1400ms' }}>
            <p>Student</p>
            <p>Gamer</p>
          </div>
        </div>
        <div className="text-right">
          <div className="anim-fade-up" style={{ animationDelay: '1550ms' }}>
            <p>16 years old</p>
          </div>
        </div>
      </footer>

      <Drawer open={open} onClose={() => setOpen(false)} />
    </section>
  );
}
