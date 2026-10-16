import Image from "next/image";
import { ArrowUpRight, Download, Mail, MapPin, Briefcase } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Socials } from "@/components/socials";
import { ContactForm } from "@/components/contact-form";
import { BrandIcon, TechIcon } from "@/components/icons";
import { principles, projects, skills } from "@/data/content";
import { portraitSrc, resumeHref, site } from "@/data/site";

const formEnabled = Boolean(process.env.RESEND_API_KEY && process.env.CONTACT_TO_EMAIL);

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: site.name,
      jobTitle: "Frontend Developer",
      url: site.url,
      email: `mailto:${site.email}`,
      address: { "@type": "PostalAddress", addressLocality: "Lagos", addressCountry: "NG" },
      knowsAbout: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
      sameAs: Object.values(site.socials).filter(Boolean),
    },
    { "@type": "WebSite", name: `${site.name} Portfolio`, url: site.url },
  ],
};

const eyebrow = "text-sm font-medium text-accent";
const h2 = "mt-2 font-serif text-3xl font-semibold sm:text-4xl";

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header resumeHref={resumeHref} />
      <main>
        {/* Hero */}
        <section id="home" className="container-x grid items-center gap-10 py-14 sm:py-20 md:grid-cols-[1.15fr_1fr]">
          <div>
            <p className={eyebrow}>Frontend Developer</p>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.1] sm:text-6xl">
              <span className="text-accent">Afolabi Adedeji</span> 
            </h1>
              <h2 className="text-2xl font-semibold sm:text-4xl">Engineering interfaces that look exceptional and work flawlessly.</h2>
            
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              A frontend developer with 2+ years of experience building scalable, user-friendly web
              applications with React, Next.js and TypeScript.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="btn-primary">
                View projects <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
              {resumeHref && (
                <a href={resumeHref} download className="btn-outline">
                  Download resume <Download className="size-4" aria-hidden="true" />
                </a>
              )}
            </div>
            <Socials className="mt-8" />
          </div>

          <div className="relative mx-auto w-full max-w-sm md:max-w-none">
            <div className="aspect-[4/5] overflow-hidden rounded-xl border border-line bg-accent-soft">
              {portraitSrc ? (
                <Image
                  src={portraitSrc}
                  alt="Portrait of Afolabi Adedeji, frontend developer"
                  width={800}
                  height={1000}
                  priority
                  sizes="(min-width: 768px) 40vw, 90vw"
                  className="size-full object-cover"
                />
              ) : (
                <div className="grid size-full place-items-center font-serif text-7xl text-accent" aria-label="Initials AA">
                  AA
                </div>
              )}
            </div>
            <div className="absolute -bottom-4 left-4 right-4 rounded-lg border border-line bg-surface px-4 py-3 shadow-sm sm:left-auto sm:right-[-1rem] sm:w-72">
              <p className="flex items-center gap-2 text-sm font-medium">
                <span className="size-2 rounded-full bg-green-500" aria-hidden="true" />
                Available for opportunities
              </p>
              <p className="mt-0.5 text-xs text-muted">Open to new roles and collaborations</p>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="border-t border-line">
          <div className="container-x grid gap-10 py-16 md:grid-cols-[1.2fr_1fr] md:py-20">
            <div>
              <p className={eyebrow}>About</p>
              <h2 className={h2}>Web experiences that solve real problems.</h2>
              <p className="mt-5 max-w-xl leading-relaxed text-muted">
                I&rsquo;m Afolabi Adedeji, a frontend developer with over two years of experience creating and
                designing user-friendly websites and web applications. I turn designs into functional
                interfaces, with a focus on clean structure, reusable components and responsive, accessible
                user experiences.
              </p>
            </div>
            <ul className="grid gap-px self-center overflow-hidden rounded-lg border border-line bg-line">
              {principles.map((p) => (
                <li key={p.title} className="bg-surface px-5 py-4">
                  <h3 className="font-sans text-base font-semibold">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted">{p.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="border-t border-line">
          <div className="container-x py-16 md:py-20">
            <p className={eyebrow}>Projects</p>
            <h2 className={h2}>Selected work</h2>
            <ul className="mt-10 grid gap-6 md:grid-cols-2">
              {projects.map((p) => (
                <li key={p.title}>
                  <article className="flex h-full flex-col overflow-hidden rounded-lg border border-line bg-surface">
                    <div className="aspect-[16/10] border-b border-line bg-accent-soft">
                      {p.image ? (
                        <Image
                          src={p.image}
                          alt={`Screenshot of ${p.Jolo_Portfolio.gif}`}
                          width={1280}
                          height={800}
                          sizes="(min-width: 768px) 50vw, 100vw"
                          className="size-full object-cover object-top"
                        />
                      ) : (
                        <div className="grid size-full place-items-center px-6 text-center text-sm text-muted">
                          Screenshot to add: save it in <code className="mx-1 font-mono">public/projects</code> and set{" "}
                          <code className="mx-1 font-mono">image</code> in <code className="mx-1 font-mono">content.ts</code>
                        </div>
                      )}
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="font-sans text-lg font-semibold">{p.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{p.description}</p>
                      <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
                        {p.tags.map((t) => (
                          <li key={t} className="rounded bg-accent-soft px-2 py-1 text-xs font-medium text-accent">{t}</li>
                        ))}
                      </ul>
                      {(p.demo || p.repo) && (
                        <div className="mt-5 flex gap-5 text-sm font-medium">
                          {p.demo && (
                            <a href={p.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-accent hover:underline">
                              Live demo <ArrowUpRight className="size-4" aria-hidden="true" />
                            </a>
                          )}
                          {p.repo && (
                            <a href={p.repo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-accent">
                              <BrandIcon name="github" className="size-4" /> View code
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="border-t border-line">
          <div className="container-x py-16 md:py-20">
            <p className={eyebrow}>Skills</p>
            <h2 className={h2}>Technologies I work with</h2>
            <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
              {skills.map((s) => (
                <li key={s.name} className="flex items-center gap-3 rounded-lg border border-line bg-surface px-4 py-3">
                  <TechIcon path={s.icon.path} hex={s.icon.hex} mono={"mono" in s && s.mono} />
                  <span className="text-sm font-medium">{s.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="border-t border-line">
          <div className="container-x grid gap-10 py-16 md:grid-cols-2 md:py-20">
            <div>
              <p className={eyebrow}>Contact</p>
              <h2 className={h2}>Let&rsquo;s work together.</h2>
              <p className="mt-5 max-w-md leading-relaxed text-muted">
                I&rsquo;m open to new opportunities, collaborations, or just a friendly chat. Feel free to reach out.
              </p>
              <dl className="mt-8 space-y-5 text-sm">
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 size-5 text-accent" aria-hidden="true" />
                  <div>
                    <dt className="font-medium">Email</dt>
                    <dd><a href={`mailto:${site.email}`} className="text-muted hover:text-accent">{site.email}</a></dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-5 text-accent" aria-hidden="true" />
                  <div>
                    <dt className="font-medium">Location</dt>
                    <dd className="text-muted">{site.location}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Briefcase className="mt-0.5 size-5 text-accent" aria-hidden="true" />
                  <div>
                    <dt className="font-medium">Availability</dt>
                    <dd className="text-muted">Open to opportunities</dd>
                  </div>
                </div>
              </dl>
              <Socials className="mt-8" />
            </div>

            {formEnabled ? (
              <ContactForm />
            ) : (
              <div className="self-start rounded-lg border border-line bg-surface p-6">
                <h3 className="font-sans text-base font-semibold">Send a message</h3>
                <p className="mt-2 text-sm text-muted">The contact form is not configured yet, so email works best.</p>
                <a href={`mailto:${site.email}`} className="btn-primary mt-5">
                  Email me <ArrowUpRight className="size-4" aria-hidden="true" />
                </a>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
