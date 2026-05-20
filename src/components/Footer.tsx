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
    <footer className="border-t border-black/10 py-12 md:py-14 px-4 md:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* About */}
          <div className="min-w-0">
            <h3 className="text-xl font-black mb-4 break-words">
              PV Srinivas
            </h3>

            <p className="text-black/60 text-sm leading-relaxed max-w-xs font-bold break-words">
              ECE Student · Cloud & Network Engineer · Developer.
              Building secure and scalable systems.
            </p>
          </div>

          {/* Navigation */}
          <div className="min-w-0">
            <h4 className="font-black text-sm mb-4 uppercase tracking-wider">
              Navigation
            </h4>

            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();

                      document
                        .querySelector(link.href)
                        ?.scrollIntoView({ behavior: 'smooth' });
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
          <div className="min-w-0">
            <h4 className="font-black text-sm mb-4 uppercase tracking-wider">
              Connect
            </h4>

            <div className="flex gap-3 flex-wrap">

              <a
                href="https://github.com/pvsrinivas1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-lg border-2 border-black text-black flex items-center justify-center hover:bg-black hover:text-white transition-all"
              >
                <Github size={16} />
              </a>

              <a
                href="https://linkedin.com/in/pv-srinivas"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-lg border-2 border-black text-black flex items-center justify-center hover:bg-black hover:text-white transition-all"
              >
                <Linkedin size={16} />
              </a>

              <a
                href="mailto:srinivaspv678@gmail.com"
                aria-label="Email"
                className="w-10 h-10 rounded-lg border-2 border-black text-black flex items-center justify-center hover:bg-black hover:text-white transition-all"
              >
                <Mail size={16} />
              </a>

            </div>

            <p className="mt-4 text-black/60 text-xs md:text-sm font-bold break-words">
              srinivaspv678@gmail.com
            </p>
          </div>
        </div>

        <div className="border-t border-black/10 pt-6 md:pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">

          <p className="text-black/60 text-sm font-bold break-words">
            © {new Date().getFullYear()} PV Srinivas. All rights reserved.
          </p>

          <p className="text-black/40 text-xs font-bold">
            JUST A TECH
          </p>

        </div>

      </div>
    </footer>
  );
}
