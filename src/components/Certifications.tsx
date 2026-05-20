import { useEffect, useRef } from 'react';
import { Award, ExternalLink, CheckCircle } from 'lucide-react';

const certifications = [
  {
    title: 'Google Cloud Security',
    issuer: 'Google Cloud',
    date: '2024',
    description:
      'Foundations of cloud security on Google Cloud — IAM, VPC security, threat detection, and compliance best practices.',
    badge: 'GCP Security',
  },
  {
    title: 'AWS IAM & Security',
    issuer: 'Amazon Web Services',
    date: '2024',
    description:
      'In-depth coverage of AWS Identity & Access Management, least privilege design, role-based access control, and policy evaluation logic.',
    badge: 'AWS IAM',
  },
  {
    title: 'Cloud Computing Fundamentals',
    issuer: 'Coursera / NPTEL',
    date: '2023',
    description:
      'Comprehensive cloud computing principles: service models, deployment architectures, networking, and serverless paradigms.',
    badge: 'Cloud Fundamentals',
  },
];

export default function Certifications() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        }),
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="certifications"
      className="py-20 md:py-28 px-4 md:px-6 border-t border-black/10 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="fade-in">
          <p className="text-xs font-bold uppercase tracking-widest text-black/60 mb-4">
            Certifications
          </p>

          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight break-words">
            Professional Credentials
          </h2>

          <p className="text-base md:text-lg text-black/60 max-w-2xl mb-12 md:mb-16">
            Verified expertise in cloud security and infrastructure from leading technology platforms.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="bg-card bg-card-hover rounded-lg p-5 md:p-7 h-full overflow-hidden break-words"
              >
                <div className="flex items-start justify-between gap-3 mb-5">
                  <div className="w-12 h-12 rounded-lg bg-black flex items-center justify-center text-white text-lg font-bold shrink-0">
                    ✓
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-bold text-black bg-black/10 border border-black/20 rounded-full px-2.5 py-1 shrink-0">
                    <CheckCircle size={10} /> Verified
                  </div>
                </div>

                <span className="inline-block text-xs font-bold px-2.5 py-1 rounded-full bg-black/5 border border-black/10 text-black mb-4">
                  {cert.badge}
                </span>

                <h3 className="text-lg font-black mb-2 break-words">
                  {cert.title}
                </h3>

                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <Award size={12} className="shrink-0" />
                  <span className="text-xs text-black/60 break-words">
                    {cert.issuer}
                  </span>
                  <span className="text-black/30 text-xs">·</span>
                  <span className="text-xs text-black/60 font-bold">
                    {cert.date}
                  </span>
                </div>

                <p className="text-black/70 text-sm leading-relaxed mb-6 break-words">
                  {cert.description}
                </p>

                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-black hover:opacity-60 transition-opacity"
                >
                  View Credential <ExternalLink size={11} />
                </a>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-card rounded-lg p-5 md:p-8 overflow-hidden">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
              {[
                { value: '3', label: 'Certifications' },
                { value: '2', label: 'Cloud Platforms' },
                { value: '100%', label: 'Verified' },
                { value: '2024', label: 'Latest Cert' },
              ].map((stat) => (
                <div key={stat.label} className="break-words">
                  <p className="text-2xl md:text-3xl font-black mb-1">
                    {stat.value}
                  </p>
                  <p className="text-black/60 text-xs md:text-sm font-bold">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
