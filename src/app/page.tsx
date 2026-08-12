import { DATA } from "@/data";
import { Reveal } from "@/components/Reveal";
import { ChevronRight, ExternalLink, Mail } from "lucide-react";
import Link from "next/link";

export const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className={className}>
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

export const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function Home() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-12">
      {/* Hero Section */}
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-2">
              <Reveal delay={0.1}>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Hi, I'm {DATA.name}
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="max-w-[600px] md:text-xl text-muted-foreground font-medium">
                  {DATA.about}
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="flex gap-4 pt-4 items-center">
                  <Link href={`mailto:${DATA.contact.email}`} className="text-muted-foreground hover:text-foreground transition-colors">
                    <Mail className="size-6" />
                  </Link>
                  <Link href={DATA.contact.social.LinkedIn.url} target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                    <LinkedinIcon className="size-6" />
                  </Link>
                  <Link href={DATA.contact.social.GitHub.url} target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                    <GithubIcon className="size-6" />
                  </Link>
                  <a href="/resume.pdf" download className="ml-4 inline-flex items-center rounded-md border border-transparent bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 px-4 py-2 text-sm font-semibold transition-colors">
                    Download Resume
                  </a>
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.4}>
              <div className="relative flex shrink-0 overflow-hidden rounded-full size-32 border-4 border-white shadow-md">
                <img src="/profile.jpg" alt="Harshath Mukundan" className="h-full w-full object-cover object-top" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section id="work" className="flex flex-col gap-y-4">
        <Reveal>
          <h2 className="text-2xl font-bold">Work Experience</h2>
        </Reveal>
        {DATA.experience.map((exp, id) => (
          <Reveal key={id} delay={0.1 * id}>
            <div className="rounded-xl bg-card text-card-foreground border border-border shadow-sm flex p-4 hover:shadow-md transition-all duration-300">
              <div className="flex-none">
                <span className="relative flex shrink-0 overflow-hidden rounded-full border border-border size-12 m-auto bg-background shadow-sm">
                  {exp.logo ? (
                    <img src={exp.logo} alt={exp.company} className="h-full w-full object-contain p-1" />
                  ) : (
                    <span className="flex h-full w-full items-center justify-center rounded-full text-lg font-bold text-foreground">
                      {exp.company[0]}
                    </span>
                  )}
                </span>
              </div>
              <div className="flex-grow ml-4 flex-col group">
                <div className="flex flex-col">
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex items-center justify-center font-semibold leading-none text-sm sm:text-base">
                      {exp.company}
                    </h3>
                    <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
                      {exp.start} - {exp.end}
                    </div>
                  </div>
                  <div className="font-sans text-xs sm:text-sm text-primary mt-1 font-medium">{exp.title}</div>
                </div>
                <div className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {exp.description}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </section>

      {/* Education */}
      <section id="education" className="flex flex-col gap-y-4">
        <Reveal>
          <h2 className="text-2xl font-bold">Education</h2>
        </Reveal>
        {DATA.education.map((edu, id) => (
          <Reveal key={id} delay={0.1 * id}>
            <div className="rounded-xl bg-card text-card-foreground border border-border shadow-sm flex p-4 hover:shadow-md transition-all duration-300">
              <div className="flex-none">
                <span className="relative flex shrink-0 overflow-hidden rounded-full border border-border size-12 m-auto bg-background shadow-sm">
                  {edu.logo ? (
                    <img src={edu.logo} alt={edu.school} className="h-full w-full object-cover" />
                  ) : (
                    <span className="flex h-full w-full items-center justify-center rounded-full text-lg font-bold text-foreground">
                      {edu.school[0]}
                    </span>
                  )}
                </span>
              </div>
              <div className="flex-grow ml-4 flex-col group">
                <div className="flex flex-col">
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex items-center justify-center font-semibold leading-none text-sm sm:text-base">
                      {edu.school}
                    </h3>
                    <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
                      {edu.start} - {edu.end}
                    </div>
                  </div>
                  <div className="font-sans text-xs sm:text-sm text-primary mt-1 font-medium">{edu.degree}</div>
                </div>
                <div className="mt-2 text-xs sm:text-sm text-muted-foreground">
                  {edu.description}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </section>

      {/* Skills */}
      <section id="skills" className="flex flex-col gap-y-4">
        <Reveal>
          <h2 className="text-2xl font-bold">Skills</h2>
        </Reveal>
        <div className="flex flex-wrap gap-2">
          {DATA.skills.map((skill, id) => (
            <Reveal key={id} delay={0.03 * id}>
              <div className="inline-flex items-center rounded-md border border-border/50 px-2.5 py-1 text-xs font-medium transition-colors bg-card text-card-foreground shadow-sm hover:bg-muted/50">
                {skill}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-6 space-y-8">
        <Reveal>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-full bg-foreground text-background px-4 py-1.5 text-sm font-medium shadow-sm">
                My Projects
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mt-2">Check out my latest work</h2>
            </div>
          </div>
        </Reveal>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {DATA.projects.map((project, id) => (
            <Reveal key={id} delay={0.1 * id}>
              <div className="rounded-xl bg-card text-card-foreground flex flex-col overflow-hidden border border-border hover:shadow-lg transition-all duration-300 ease-out h-full group">
                <div className="h-48 w-full overflow-hidden bg-muted flex items-center justify-center relative">
                  {project.image ? (
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <div className="h-full w-full bg-gradient-to-br from-primary/10 to-primary/30 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                      <span className="text-primary font-bold text-xl opacity-50">{project.title.split(" ")[0]}</span>
                    </div>
                  )}
                </div>
                
                <div className="flex flex-col p-4 flex-grow">
                  <div className="space-y-1">
                    <h3 className="font-semibold tracking-tight text-lg">{project.title}</h3>
                    <time className="font-sans text-xs text-muted-foreground">{project.dates}</time>
                    <div className="mt-2 text-sm text-muted-foreground leading-snug">
                      {project.description}
                    </div>
                  </div>
                  
                  <div className="mt-4 flex flex-wrap gap-1">
                    {project.tags.map((tag, tagId) => (
                      <div key={tagId} className="inline-flex items-center rounded-md border border-border/50 font-medium bg-secondary/50 text-secondary-foreground px-2 py-0.5 text-[10px]">
                        {tag}
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-auto pt-4 flex items-center gap-2">
                    <Link target="_blank" href={project.link}>
                      <div className="items-center rounded-md border border-transparent bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 flex gap-2 px-3 py-1.5 text-xs font-semibold transition-colors">
                        <GithubIcon className="size-3.5" />
                        Github
                      </div>
                    </Link>
                    {project.live && (
                      <Link target="_blank" href={project.live}>
                        <div className="items-center rounded-md border border-border bg-background text-foreground shadow-sm hover:bg-muted flex gap-2 px-3 py-1.5 text-xs font-semibold transition-colors">
                          <ExternalLink className="size-3.5" />
                          Live Demo
                        </div>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Volunteering */}
      {DATA.volunteering && DATA.volunteering.length > 0 && (
        <section id="volunteering" className="py-6 space-y-8">
          <Reveal>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-full bg-foreground text-background px-4 py-1.5 text-sm font-medium shadow-sm">
                  Volunteering
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mt-2 max-w-xl mx-auto leading-tight">
                  Communities I am currently involved in or have been a part of in the past.
                </h2>
              </div>
            </div>
          </Reveal>
          
          <div className="flex flex-col gap-y-4 w-full">
            {DATA.volunteering.map((vol, id) => (
              <Reveal key={id} delay={0.1 * id}>
                <div className="rounded-xl bg-card text-card-foreground border border-border shadow-sm flex p-4 hover:shadow-md transition-all duration-300">
                  <div className="flex-none">
                    <span className="relative flex shrink-0 overflow-hidden rounded-full border border-border size-12 m-auto bg-background shadow-sm">
                      {vol.logo ? (
                        <img src={vol.logo} alt={vol.organization} className="h-full w-full object-contain p-1" />
                      ) : (
                        <span className="flex h-full w-full items-center justify-center rounded-full text-lg font-bold text-foreground">
                          {vol.organization[0]}
                        </span>
                      )}
                    </span>
                  </div>
                  <div className="flex-grow ml-4 flex-col group">
                    <div className="flex flex-col">
                      <div className="flex items-center justify-between gap-x-2 text-base">
                        <h3 className="inline-flex items-center justify-center font-semibold leading-none text-sm sm:text-base">
                          {vol.organization}
                        </h3>
                        <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
                          {vol.start} {vol.end ? `- ${vol.end}` : ''}
                        </div>
                      </div>
                      <div className="font-sans text-xs sm:text-sm text-primary mt-1 font-medium">{vol.title}</div>
                    </div>
                    {vol.location && (
                      <div className="mt-2 text-xs sm:text-sm text-muted-foreground">
                        {vol.location}
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* Achievements */}
      {DATA.achievements && DATA.achievements.length > 0 && (
        <section id="achievements" className="py-6 space-y-8">
          <Reveal>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-full bg-foreground text-background px-4 py-1.5 text-sm font-medium shadow-sm">
                  Achievements
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mt-2 max-w-xl mx-auto leading-tight">
                  Recognition & Accomplishments
                </h2>
              </div>
            </div>
          </Reveal>
          
          <div className="flex flex-col gap-y-4 w-full">
            {DATA.achievements.map((ach, id) => (
              <Reveal key={id} delay={0.1 * id}>
                <div className="rounded-xl bg-card text-card-foreground border border-border shadow-sm flex p-4 hover:shadow-md transition-all duration-300">
                  <div className="flex-none">
                    <span className="relative flex shrink-0 overflow-hidden rounded-lg border border-border size-12 m-auto bg-black shadow-sm">
                      {ach.logo ? (
                        <img src={ach.logo} alt={ach.organization} className="h-full w-full object-cover" />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-black">
                          <div className="size-6 rounded-full border-[3px] border-[#00CAFF]"></div>
                        </div>
                      )}
                    </span>
                  </div>
                  <div className="flex-grow ml-4 flex-col group">
                    <div className="flex flex-col">
                      <div className="flex items-center justify-between gap-x-2 text-base">
                        <h3 className="inline-flex items-center justify-center font-bold leading-none text-sm sm:text-lg">
                          {ach.title}
                        </h3>
                        <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
                          {ach.date}
                        </div>
                      </div>
                      <div className="font-sans text-xs sm:text-base text-muted-foreground mt-1 font-medium">{ach.organization}</div>
                    </div>
                    {ach.description && (
                      <div className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {ach.description}
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* Certifications */}
      <section id="certifications" className="flex flex-col gap-y-4 pb-12">
        <Reveal>
          <h2 className="text-2xl font-bold">Certifications</h2>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {DATA.certifications.map((cert, id) => (
            <Reveal key={id} delay={0.1 * id}>
              <div className="rounded-lg bg-card text-card-foreground border border-border shadow-sm flex items-center p-3 hover:bg-accent hover:text-accent-foreground transition-colors duration-200">
                <div className="flex-none mr-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
                  </span>
                </div>
                <div className="font-semibold text-sm">
                  {cert.title}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-12 space-y-8 pb-24">
        <Reveal>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-full bg-foreground text-background px-4 py-1.5 text-sm font-medium shadow-sm">
                Contact
              </div>
              <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl mt-2">Get in Touch</h2>
              <p className="max-w-[600px] md:text-xl text-muted-foreground mt-4 mx-auto leading-relaxed">
                Have any questions or inquiries? Feel free to drop me a message at{" "}
                <Link href={`mailto:${DATA.contact.email}`} className="text-blue-500 hover:underline">
                  {DATA.name.split(' ')[0]}
                </Link>
              </p>
            </div>
          </div>
        </Reveal>
      </section>

    </main>
  );
}
