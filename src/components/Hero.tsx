import { useEffect, useRef } from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    setTimeout(() => el.classList.add('visible'), 100);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'radial-gradient(2px 2px at 20% 30%, black, rgba(0,0,0,0)),radial-gradient(2px 2px at 60% 70%, black, rgba(0,0,0,0))',
          backgroundSize: '200px 200px',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 pt-28 pb-20 w-full">
        <div ref={ref} className="fade-in text-center">
          <p className="inline-block border border-black/20 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-widest mb-8">
            JUST A TECH 
          </p>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] mb-6">
            Hello I'm<br />
            <span className="font-bold">PV Srinivas</span>
          </h1>

          <p className="text-lg md:text-xl text-black/70 leading-relaxed mb-4 max-w-2xl mx-auto">
            <span className="font-bold">ECE Student</span> · <span className="font-bold">Cloud & Cybersecurity</span> · <span className="font-bold">Developer</span>
          </p>

          <p className="text-base md:text-lg text-black/60 max-w-2xl mx-auto leading-relaxed mb-12">
            Building secure, scalable systems at the intersection of hardware, cloud infrastructure, and cybersecurity. Passionate about protecting digital assets and automating the future.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <a
              href="#projects"
              className="px-7 py-3 rounded-lg bg-black text-white font-bold text-sm hover:opacity-80 transition-opacity"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-7 py-3 rounded-lg border-2 border-black text-black font-bold text-sm hover:bg-black hover:text-white transition-all"
            >
              Get In Touch
            </a>
          </div>

          <div className="flex items-center justify-center gap-4">
            {[
              { href: 'https://github.com/pvsrinivas', icon: <Github size={20} />, label: 'GitHub' },
              { href: 'https://linkedin.com/in/pvsrinivas', icon: <Linkedin size={20} />, label: 'LinkedIn' },
              { href: 'mailto:pvsrinivas@outlook.in', icon: <Mail size={20} />, label: 'Email' },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-11 h-11 rounded-lg border-2 border-black text-black flex items-center justify-center hover:bg-black hover:text-white transition-all"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 flex justify-center">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-black/40 hover:text-black/60 transition-colors"
          >
            <span className="text-xs font-bold tracking-widest uppercase">Scroll</span>
            <ArrowDown size={16} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
