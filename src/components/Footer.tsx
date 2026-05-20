import { Github, Linkedin, Mail } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-black/10 py-14 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <span className="text-black font-black text-lg tracking-tight">
                PV<span className="font-light">.Srinivas</span>
              </span>
            </div>
            <p className="text-black/60 text-sm leading-relaxed max-w-xs font-bold">
              ECE Student · Cloud & Cybersecurity · Developer. Building secure systems one commit at a time.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-black text-sm mb-4 uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-black/60 hover:text-black text-sm font-bold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-black text-sm mb-4 uppercase tracking-wider">Connect</h4>
            <div className="flex gap-3">
              {[
                { href: 'https://github.com/pvsrinivas', icon: <Github size={16} />, label: 'GitHub' },
                { href: 'https://linkedin.com/in/pvsrinivas', icon: <Linkedin size={16} />, label: 'LinkedIn' },
                { href: 'mailto:pvsrinivas@outlook.in', icon: <Mail size={16} />, label: 'Email' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-lg border-2 border-black text-black flex items-center justify-center hover:bg-black hover:text-white transition-all"
                >
                  {s.icon}
                </a>
              ))}
            </div>
            <p className="mt-4 text-black/60 text-xs font-bold">pvsrinivas@outlook.in</p>
          </div>
        </div>

        <div className="border-t border-black/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-black/60 text-sm font-bold">
            &copy; {new Date().getFullYear()} PV Srinivas. All rights reserved.
          </p>
          <p className="text-black/40 text-xs font-bold">
            JUST A TECH
          </p>
        </div>
      </div>
    </footer>
  );
}
