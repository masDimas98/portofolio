import Image from "next/image";
import portfolio from "@/data/projects.json";
import { ProjectCarousel } from "@/components/ProjectCarousel";

const { hero, about, contact, skills, experiences, projects } = portfolio;

type Project = (typeof projects)[number];
type Experience = (typeof experiences)[number];
type Skill = (typeof skills)[number];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <main className="mx-auto flex min-h-screen max-w-5xl flex-col gap-20 px-6 pb-24 pt-10 md:px-10 md:pt-16">
        {/* New Hero */}
        <section className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-center">
          <div className="space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-4 py-1 text-xs font-medium text-slate-300 shadow-sm shadow-slate-900/50 backdrop-blur">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
              {hero.availability}
            </span>
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-400">
                {hero.role}
              </p>
              <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl md:text-5xl">
                {hero.name}
              </h1>
              <p className="max-w-2xl text-pretty text-sm leading-relaxed text-slate-300 sm:text-base">
                {hero.summary}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={hero.ctaPrimary.href}
                className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/40 transition hover:bg-emerald-400"
              >
                {hero.ctaPrimary.label}
              </a>
              <a
                href={hero.ctaSecondary.href}
                className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/40 px-5 py-2.5 text-sm font-medium text-slate-100 shadow-sm shadow-slate-900/60 transition hover:border-slate-500 hover:bg-slate-900"
              >
                {hero.ctaSecondary.label}
              </a>
            </div>
          </div>

          <aside className="flex items-center justify-center">
            <div className="relative h-52 w-52 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 shadow-2xl shadow-slate-950/70">
              <Image
                src={hero.photo}
                alt={`${hero.name} profile`}
                fill
                sizes="208px"
                className="object-cover"
                priority
              />
            </div>
          </aside>
        </section>

        {/* About */}
        <section className="rounded-3xl border border-slate-800 bg-slate-950/60 p-6 shadow-xl shadow-slate-950/70">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-slate-50">
                {about.values.title}
              </h2>
              <ul className="space-y-3 text-sm text-slate-300">
                {about.values.items.map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <span
                      className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${item.dotColorClass}`}
                    />
                    <span>
                      <strong className="font-medium text-slate-200">
                        {item.title}:
                      </strong>{" "}
                      {item.description}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-slate-50">
                {about.approach.title}
              </h2>
              {about.approach.paragraphs.map((p) => (
                <p key={p} className="text-sm leading-relaxed text-slate-300">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Skills & Experience */}
        <section className="grid gap-10 border-y border-slate-800 py-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,2fr)]">
          <div className="space-y-4">
            <div>
              <h2 className="text-lg font-semibold text-slate-50">Core Skills</h2>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {skills.map((skill: Skill) => (
                <SkillPill key={skill.id} title={skill.category} items={skill.items} />
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-slate-50">
              Experience Highlights
            </h2>
            <ul className="space-y-3 text-sm text-slate-200">
              {experiences.map((exp: Experience) => (
                <li
                  key={exp.id}
                  className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex-1 space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-400">
                          {exp.role}
                        </p>
                        <span className="text-xs text-slate-500">·</span>
                        <p className="text-xs font-medium text-slate-300">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
                        <span>
                          {formatDate(exp.startAt)} - {exp.isCurrent ? "Present" : formatDate(exp.endAt)}
                        </span>
                        {exp.location && (
                          <>
                            <span>·</span>
                            <span>{exp.location}</span>
                          </>
                        )}
                      </div>
                      <p className="mt-2 text-sm text-slate-100">
                        {exp.description}
                      </p>
                      {exp.highlights && exp.highlights.length > 0 && (
                        <ul className="mt-2 space-y-1 pl-4 text-xs text-slate-300">
                          {exp.highlights.map((highlight, idx) => (
                            <li key={idx} className="list-disc">
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      )}
                      {exp.technologies && exp.technologies.length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full bg-slate-800/80 px-2 py-0.5 text-[0.65rem] text-slate-400 ring-1 ring-slate-700"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="space-y-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold text-slate-50">
                Featured Projects
              </h2>
              <p className="mt-1 text-sm text-slate-400">
                Backend projects that stand out in architecture, performance, and
                reliability.
              </p>
            </div>
            <span className="hidden rounded-full border border-slate-800 bg-slate-900 px-3 py-1 text-xs text-slate-300 md:inline-flex">
              {projects.length} backend projects
            </span>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project: Project) => (
              <article
                key={project.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/60 p-4 shadow-lg shadow-slate-950/70 transition hover:border-emerald-500/70 hover:bg-slate-900/80"
              >
                <div className="space-y-2">
                  {"images" in project && Array.isArray(project.images) && (
                    <ProjectCarousel images={project.images} className="mb-3" />
                  )}
                  <div className="flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.2em] text-slate-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
                    {project.role}
                  </div>
                  <h3 className="text-sm font-semibold text-slate-50">
                    {project.name}
                  </h3>
                  <p className="text-xs text-slate-300">{project.description}</p>
                </div>
                <div className="mt-4 space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-slate-900/80 px-2 py-1 text-[0.68rem] text-slate-300 ring-1 ring-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <dl className="flex flex-wrap items-center gap-3 text-[0.7rem] text-slate-400">
                    {project.metrics?.latencyMs && (
                      <div className="flex items-center gap-1">
                        <span className="h-1 w-1 rounded-full bg-emerald-400" />
                        <dt className="font-medium text-slate-300">Latency</dt>
                        <dd>{project.metrics.latencyMs}ms p95</dd>
                      </div>
                    )}
                    {project.metrics?.throughputRps && (
                      <div className="flex items-center gap-1">
                        <span className="h-1 w-1 rounded-full bg-sky-400" />
                        <dt className="font-medium text-slate-300">
                          Throughput
                        </dt>
                        <dd>{project.metrics.throughputRps} req/s</dd>
                      </div>
                    )}
                  </dl>
                  <div className="flex items-center justify-between pt-1 text-[0.7rem] text-slate-400">
                    <span>{project.year}</span>
                    {project.links?.repo && (
                      <a
                        href={project.links.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300"
                      >
                        Source Code
                        <span aria-hidden>↗</span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="mt-4 rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl shadow-slate-950/70"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-lg font-semibold text-slate-50">
                {contact.title}
              </h2>
              <p className="mt-1 text-sm text-slate-300">
                {contact.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 text-sm">
              {contact.links.map((link) => {
                const isPrimary = link.variant === "primary";
                const isExternal =
                  link.href.startsWith("http://") ||
                  link.href.startsWith("https://");

                const className = isPrimary
                  ? "inline-flex items-center justify-center rounded-full bg-emerald-500 px-4 py-2 font-semibold text-slate-950 shadow-lg shadow-emerald-500/40 transition hover:bg-emerald-400"
                  : "inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-950 px-4 py-2 font-medium text-slate-100 hover:border-slate-500";

                return (
                  <a
                    key={link.id}
                    href={link.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noreferrer" : undefined}
                    className={className}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

type SkillPillProps = {
  title: string;
  items: string[];
};

function SkillPill({ title, items }: SkillPillProps) {
  return (
    <div className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-4 shadow-sm shadow-slate-950/60 transition hover:border-slate-700 hover:bg-slate-900/90">
      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-slate-400 mb-2.5">
        {title}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {items.map((item, idx) => (
          <span
            key={idx}
            className="inline-flex items-center rounded-md bg-slate-800/60 px-2 py-1 text-[0.7rem] font-medium text-slate-300 ring-1 ring-slate-700/50 transition group-hover:bg-slate-800/80"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function formatDate(dateStr: string): string {
  const [year, month] = dateStr.split("-");
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return `${monthNames[parseInt(month) - 1]} ${year}`;
}
