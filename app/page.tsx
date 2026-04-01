export default function JonRheaumeSite() {
  const sections = [
    { id: "build", label: "What I Build" },
    { id: "work", label: "Experience" },
    { id: "projects", label: "Systems" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  const buildCards = [
    {
      title: "Forecast Credibility",
      body:
        "Pipeline architecture and conversion discipline used to evaluate whether a forecast is supported by real conversion and coverage.",
    },
    {
      title: "Revenue Math & Capacity Modeling",
      body:
        "Headcount, ramp, and attainment are modeled to determine whether planned pipeline and bookings are supported by actual team capacity.",
    },
    {
      title: "GTM Motion Design",
      body:
        "Signal processing, sequencing logic, and execution design that define how pipeline is created, routed, and converted.",
    },
  ];

  const workItems = [
    {
      title: "ClearCompany | $10M → $90M ARR",
      summary:
        "Supported 38 consecutive quarters of compounding growth by developing the GTM infrastructure that connected pipeline creation, conversion, and team capacity.",
      bullets: [
        "Reduced SDR ramp from 90 to 30 days and improved lead to opportunity conversion from 24% to 48%",
        "Architected a $400M+ cumulative pipeline engine and scaled SDR org from 0 to 40+ reps",
        "Led the hiring and onboarding of 180+ roles across Sales, Marketing, and Operations",
      ],
    },
    {
      title: "AI-Assisted GTM Motion | Signal Processing",
      summary:
        "Developed an outbound system to identify in-market buyers prior to inbound conversion. Focused on motion design and defining the handoff between AI automation and human execution.",
      bullets: [
        "Generated a 10x pipeline return on initial investment ($60K to $600K)",
        "Deployed and managed 50+ AI agents integrated into the GTM tech stack",
        "Built signal identification and routing into outbound workflows",
      ],
    },
  ];

  const projectItems = [
    {
      title: "Revenue Planning Model",
      summary:
        "A structured planning system designed to evaluate whether pipeline creation, team capacity, and conversion assumptions support a given revenue target.",
      bullets: [
        "Models the relationship between targets, pipeline generation, and conversion across the revenue engine",
        "Evaluates capacity across revenue-generating roles and how that capacity converts into pipeline and bookings",
        "Surfaces whether revenue targets are supported by actual operating assumptions, not surface-level pipeline metrics",
      ],
    },
    {
      title: "Pipeline Cohort & Timing Model",
      summary:
        "A timing model built to determine when pipeline must be created to realistically close within a given planning window.",
      bullets: [
        "Tracks pipeline by creation cohort and expected close timing based on historical sales-cycle behavior",
        "Highlights whether current pipeline can realistically convert within the periods attached to plan",
        "Shows when volume exists but timing breaks the likelihood of hitting bookings targets",
      ],
    },
    {
      title: "Effective Headcount Modeling",
      summary:
        "A planning approach that treats team capacity as a time-based productivity curve rather than a static headcount number.",
      bullets: [
        "Reflects ramp, peak effectiveness, and changes in output over time",
        "Connects hiring timing to when productive capacity actually shows up",
        "Produces a more realistic view of coverage and target support",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#top" className="text-lg font-semibold tracking-tight text-[#00354B]">
            Jon Rheaume
          </a>
          <nav className="hidden gap-6 md:flex">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="text-sm font-medium text-slate-600 transition hover:text-[#00354B]"
              >
                {section.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="border-b border-slate-200 bg-[#F8ECD8]">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-24 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-32">
            <div>
              <div className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-[#F78021]">
                Revenue Architecture · Boston, MA
              </div>
              <h1 className="max-w-4xl text-5xl font-medium leading-tight tracking-tight text-[#00354B] md:text-6xl">
                <span className="font-serif">Pipeline systems that hold up under real operating conditions.</span>
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
                I build the infrastructure that connects GTM activity to revenue outcomes across scaling B2B SaaS organizations.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="mailto:jon@jonrheaume.com"
                  className="rounded-2xl bg-[#F78021] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5"
                >
                  Let&apos;s talk
                </a>
                <a
                  href="#work"
                  className="rounded-2xl border border-slate-300 px-5 py-3 text-sm font-semibold text-[#00354B] transition hover:border-[#00354B]"
                >
                  See the work
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F78021]">
                Focus
              </div>
              <div className="mt-4 space-y-5 text-sm leading-7 text-slate-700">
                <p>
                  Revenue infrastructure for B2B SaaS companies where the constraint is whether pipeline, capacity, and conversion math hold up.
                </p>
                <p>
                  Best aligned to senior operating roles, revenue modeling projects, and selective fractional work.
                </p>
                <p>
                  Work typically sits at the intersection of forecast credibility, pipeline coverage, GTM systems design, and execution capacity.
                </p>
                <p>
                  Strongest fit for teams that need clearer operating math behind growth targets rather than broader brand or top-of-funnel marketing support.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="build" className="bg-[#f3efe7]">
          <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
            <div className="mb-10">
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-[#F78021]">What I Build</div>
              <h2 className="mt-3 max-w-3xl text-3xl font-medium tracking-tight text-[#00354B] md:text-4xl">
                <span className="font-serif">Revenue outcomes are driven by pipeline structure, team capacity, and conversion over time.</span>
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {buildCards.map((card, index) => (
                <div key={card.title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                  <div className="text-xs font-semibold uppercase tracking-[0.24em] text-[#F78021]">
                    0{index + 1}
                  </div>
                  <h3 className="mt-4 text-2xl font-medium tracking-tight text-[#00354B]">
                    <span className="font-serif">{card.title}</span>
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-700">{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="border-y border-slate-200 bg-[#c7d6df]">
          <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
            <div className="mb-10">
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-[#F78021]">Work</div>
              <h2 className="mt-3 text-3xl font-medium tracking-tight text-[#00354B] md:text-4xl">
                <span className="font-serif">What this looks like in practice.</span>
              </h2>
            </div>
            <div className="space-y-8">
              {workItems.map((item) => (
                <div key={item.title} className="grid gap-6 rounded-3xl border border-slate-200 bg-white p-7 lg:grid-cols-[0.8fr_1.2fr]">
                  <div>
                    <h3 className="text-2xl font-medium tracking-tight text-[#00354B]">
                      <span className="font-serif">{item.title}</span>
                    </h3>
                  </div>
                  <div>
                    <p className="text-base leading-8 text-slate-700">{item.summary}</p>
                    <ul className="mt-5 space-y-2 text-sm leading-7 text-slate-700">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#F78021]" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="bg-white">
          <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
            <div className="mb-10">
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-[#F78021]">Selected Systems</div>
              <h2 className="mt-3 text-3xl font-medium tracking-tight text-[#00354B] md:text-4xl">
                <span className="font-serif">Systems built to answer whether revenue targets are actually achievable.</span>
              </h2>
            </div>
            <div className="space-y-8">
              {projectItems.map((item) => (
                <div key={item.title} className="rounded-3xl border border-slate-200 bg-[#f8f6f1] p-7">
                  <h3 className="text-2xl font-medium tracking-tight text-[#00354B]">
                    <span className="font-serif">{item.title}</span>
                  </h3>
                  <p className="mt-4 text-base leading-8 text-slate-700">{item.summary}</p>
                  <ul className="mt-5 space-y-2 text-sm leading-7 text-slate-700">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#F78021]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="bg-[#f8f6f1]">
          <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.24em] text-[#F78021]">About</div>
                <h2 className="mt-3 text-3xl font-medium tracking-tight text-[#00354B] md:text-4xl">
                  <span className="font-serif">The longer version.</span>
                </h2>
                <div className="mt-6 space-y-5 text-base leading-8 text-slate-700">
                  <p>
                    I build the infrastructure that determines whether revenue targets are achievable, including pipeline systems, coverage models, and forecasting logic that connect activity to outcomes.
                  </p>
                  <p>
                    At ClearCompany, I supported growth from ~$10M to ~$90M ARR across 38 consecutive quarters by focusing on forecast credibility, capacity planning, and conversion discipline.
                  </p>
                  <p>
                    I work with B2B SaaS companies where pipeline quality and GTM structure are the primary constraints.
                  </p>
                </div>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                <div className="space-y-6 text-sm leading-7 text-slate-700">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F78021]">Best fit</div>
                    <div className="mt-2">B2B SaaS companies where pipeline quality, forecast credibility, and GTM structure are real constraints.</div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F78021]">Background</div>
                    <div className="mt-2">~15 years in B2B SaaS across SDR leadership, pipeline generation, GTM systems, and revenue planning.</div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F78021]">Use cases</div>
                    <div className="mt-2">VP and SVP operating roles, revenue modeling projects, and selective fractional work where the problem is systemic.</div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F78021]">Location</div>
                    <div className="mt-2">Boston, MA</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-[#00354B]">
          <div className="mx-auto max-w-6xl px-6 py-20 text-center lg:px-8">
            <h2 className="text-4xl font-medium tracking-tight text-[#F8ECD8] md:text-5xl">
              <span className="font-serif">Execution reflects the structure behind it. Let&apos;s talk.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-200">
              Selectively open to senior operating roles, fractional engagements, and PE portfolio work.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="mailto:jon@jonrheaume.com"
                className="rounded-2xl bg-[#F78021] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5"
              >
                jon@jonrheaume.com
              </a>
              <a
                href="https://calendly.com/jon-s-rheaume/30min"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-slate-400 px-5 py-3 text-sm font-semibold text-[#F8ECD8] transition hover:border-white"
              >
                Schedule time
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}