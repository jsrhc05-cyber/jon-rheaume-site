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
        "Led hiring and onboarding across 180+ roles in Sales, Marketing, and Operations",
        "Inc. 5000 honoree for 9 consecutive years during this period",
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
      {/* HEADER */}
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

        {/* HERO */}
        <section className="border-b border-slate-200 bg-[#F8ECD8]">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-24 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-32">
            <div>
              <div className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-[#F78021]">
                Revenue Architecture · Boston, MA
              </div>
              <h1 className="max-w-4xl text-5xl font-medium leading-tight tracking-tight text-[#00354B] md:text-6xl">
                <span className="font-serif">
                  Pipeline systems that hold up under real operating conditions.
                </span>
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
                I build the infrastructure that connects GTM activity to revenue outcomes across scaling B2B SaaS organizations.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="mailto:jon@jonrheaume.com" className="rounded-2xl bg-[#F78021] px-5 py-3 text-sm font-semibold text-white shadow-sm">
                  Let&apos;s talk
                </a>
                <a href="#work" className="rounded-2xl border border-[#00354B] px-5 py-3 text-sm font-semibold text-[#00354B]">
                  See the work
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* BUILD */}
        <section id="build" className="bg-[#f3efe7]">
          <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
            <div className="grid gap-6 md:grid-cols-3">
              {buildCards.map((card) => (
                <div key={card.title} className="rounded-3xl border bg-white p-7">
                  <h3 className="text-xl font-semibold text-[#00354B]">{card.title}</h3>
                  <p className="mt-3 text-sm text-slate-700">{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WORK */}
        <section id="work" className="bg-white">
          <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
            {workItems.map((item) => (
              <div key={item.title} className="mb-10">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-2">{item.summary}</p>
                <ul className="mt-4 list-disc pl-5">
                  {item.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="bg-[#00354B] text-white">
          <div className="mx-auto max-w-6xl px-6 py-20 text-center">
            <div className="flex justify-center gap-4">
              <a href="mailto:jon@jonrheaume.com">Email</a>
              <a href="https://www.linkedin.com/in/jonrheaume/">LinkedIn</a>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}