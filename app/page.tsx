export default function Home() {
  const buildItems = [
    {
      number: "01",
      title: "Forecast Credibility",
      description:
        "Pipeline architecture and conversion discipline used to evaluate whether a forecast is supported by real conversion and coverage.",
    },
    {
      number: "02",
      title: "Revenue Math & Capacity Modeling",
      description:
        "Headcount, ramp, and attainment are modeled to determine whether planned pipeline and bookings are supported by actual team capacity.",
    },
    {
      number: "03",
      title: "GTM Motion Design",
      description:
        "Signal processing, sequencing logic, and execution design that define how pipeline is created, routed, and converted.",
    },
  ];

  const experienceItems = [
    {
      title: "ClearCompany | $10M → $90M ARR",
      description:
        "Supported 38 consecutive quarters of compounding growth by developing the GTM infrastructure that connected pipeline creation, conversion, and team capacity.",
      bullets: [
        "Reduced SDR ramp from 90 to 30 days and improved lead-to-opportunity conversion from 24% to 48%",
        "Architected a $400M+ cumulative pipeline engine and scaled SDR org from 0 to 40+ reps",
        "Led the hiring and onboarding of 180+ roles across Sales, Marketing, and Operations",
      ],
    },
    {
      title: "AI-Assisted GTM Motion | Signal Processing",
      description:
        "Developed an outbound system to identify in-market buyers prior to inbound conversion. Focused on motion design and defining the handoff between AI automation and human execution.",
      bullets: [
        "Generated a 10x pipeline return on initial investment ($60K to $600K)",
        "Deployed and managed 50+ AI agents integrated into the GTM tech stack",
        "Built signal identification and routing into outbound workflows",
      ],
    },
  ];

  const systemItems = [
    {
      title: "Revenue Planning Model",
      description:
        "A structured planning system designed to evaluate whether pipeline creation, team capacity, and conversion assumptions support a given revenue target.",
      bullets: [
        "Models the relationship between targets, pipeline generation, and conversion across the revenue engine",
        "Evaluates capacity across revenue-generating roles and how that capacity translates into pipeline and bookings",
        "Surfaces whether revenue targets are supported by actual operating assumptions, not surface-level pipeline metrics",
      ],
    },
    {
      title: "Pipeline Cohort & Timing Model",
      description:
        "A timing model built to determine when pipeline must be created to realistically close within a given planning window.",
      bullets: [
        "Tracks pipeline by creation cohort and expected close timing based on historical sales-cycle behavior",
        "Highlights whether current pipeline can realistically convert within the periods attached to plan",
        "Shows when volume exists but timing breaks the likelihood of hitting bookings targets",
      ],
    },
    {
      title: "Effective Headcount Modeling",
      description:
        "A planning approach that treats team capacity as a time-based productivity curve rather than a static headcount number.",
      bullets: [
        "Reflects ramp, peak effectiveness, and changes in output over time",
        "Connects hiring timing to when productive capacity actually shows up",
        "Produces a more realistic view of coverage and target support",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <section className="mx-auto max-w-6xl px-6 py-8 sm:px-8 lg:px-10">
        <header className="flex flex-col gap-6 border-b border-neutral-200 pb-8">
          <div className="flex items-center justify-between gap-6">
            <a href="#top" className="text-lg font-semibold tracking-tight">
              Jon Rheaume
            </a>

            <nav className="hidden gap-6 text-sm text-neutral-600 md:flex">
              <a href="#what-i-build" className="transition hover:text-neutral-900">
                What I Build
              </a>
              <a href="#experience" className="transition hover:text-neutral-900">
                Experience
              </a>
              <a href="#systems" className="transition hover:text-neutral-900">
                Selected Systems
              </a>
              <a href="#about" className="transition hover:text-neutral-900">
                About
              </a>
              <a href="#contact" className="transition hover:text-neutral-900">
                Contact
              </a>
            </nav>
          </div>

          <div id="top" className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.18em] text-neutral-500">
              Revenue Architecture · Boston, MA
            </p>

            <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-neutral-950 sm:text-5xl">
              Pipeline systems that hold up under real operating conditions.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-700">
              I build the infrastructure that connects GTM activity to revenue outcomes
              across scaling B2B SaaS organizations.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center rounded-full bg-neutral-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
              >
                Let&apos;s talk
              </a>
              <a
                href="#experience"
                className="inline-flex items-center rounded-full border border-neutral-300 px-5 py-3 text-sm font-medium text-neutral-900 transition hover:border-neutral-400 hover:bg-neutral-50"
              >
                See experience
              </a>
            </div>
          </div>
        </header>
      </section>

      <section
        id="focus"
        className="mx-auto max-w-6xl px-6 py-12 sm:px-8 lg:px-10"
      >
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.18em] text-neutral-500">Focus</p>
          <p className="mt-4 text-lg leading-8 text-neutral-700">
            Revenue infrastructure for B2B SaaS companies where the constraint is
            whether pipeline, capacity, and conversion math hold up.
          </p>
          <p className="mt-3 text-lg leading-8 text-neutral-700">
            Best aligned to senior operating roles, revenue modeling projects, and
            selective fractional work.
          </p>
        </div>
      </section>

      <section
        id="what-i-build"
        className="mx-auto max-w-6xl px-6 py-12 sm:px-8 lg:px-10"
      >
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.18em] text-neutral-500">
            What I Build
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
            Revenue outcomes are driven by pipeline structure, team capacity, and
            conversion over time.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {buildItems.map((item) => (
            <div
              key={item.number}
              className="rounded-2xl border border-neutral-200 bg-white p-6"
            >
              <p className="text-sm font-medium tracking-[0.18em] text-neutral-400">
                {item.number}
              </p>
              <h3 className="mt-4 text-xl font-semibold tracking-tight text-neutral-950">
                {item.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-neutral-700">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="experience"
        className="mx-auto max-w-6xl px-6 py-12 sm:px-8 lg:px-10"
      >
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.18em] text-neutral-500">
            Experience
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
            What this looks like in practice.
          </h2>
        </div>

        <div className="mt-10 space-y-8">
          {experienceItems.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8"
            >
              <h3 className="text-2xl font-semibold tracking-tight text-neutral-950">
                {item.title}
              </h3>
              <p className="mt-4 max-w-3xl text-base leading-7 text-neutral-700">
                {item.description}
              </p>
              <ul className="mt-5 space-y-3 text-base leading-7 text-neutral-700">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section
        id="systems"
        className="mx-auto max-w-6xl px-6 py-12 sm:px-8 lg:px-10"
      >
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.18em] text-neutral-500">
            Selected Systems
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
            Systems built to answer whether revenue targets are actually achievable.
          </h2>
        </div>

        <div className="mt-10 space-y-8">
          {systemItems.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8"
            >
              <h3 className="text-2xl font-semibold tracking-tight text-neutral-950">
                {item.title}
              </h3>
              <p className="mt-4 max-w-3xl text-base leading-7 text-neutral-700">
                {item.description}
              </p>
              <ul className="mt-5 space-y-3 text-base leading-7 text-neutral-700">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section
        id="about"
        className="mx-auto max-w-6xl px-6 py-12 sm:px-8 lg:px-10"
      >
        <div className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.18em] text-neutral-500">About</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
            The longer version.
          </h2>

          <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
            <p>
              I build the infrastructure that determines whether revenue targets are
              achievable, including pipeline systems, coverage models, and forecasting
              logic that connect activity to outcomes.
            </p>
            <p>
              At ClearCompany, I supported growth from ~$10M to ~$90M ARR across 38
              consecutive quarters by focusing on forecast credibility, capacity
              planning, and conversion discipline.
            </p>
            <p>
              I work with B2B SaaS companies where pipeline quality and GTM structure
              are the primary constraints.
            </p>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-sm uppercase tracking-[0.18em] text-neutral-500">
                Best fit
              </h3>
              <p className="mt-3 text-base leading-7 text-neutral-700">
                B2B SaaS companies where pipeline quality, forecast credibility, and
                GTM structure are real constraints.
              </p>
            </div>

            <div>
              <h3 className="text-sm uppercase tracking-[0.18em] text-neutral-500">
                Background
              </h3>
              <p className="mt-3 text-base leading-7 text-neutral-700">
                ~15 years in B2B SaaS across SDR leadership, pipeline generation, GTM
                systems, and revenue planning.
              </p>
            </div>

            <div>
              <h3 className="text-sm uppercase tracking-[0.18em] text-neutral-500">
                Use cases
              </h3>
              <p className="mt-3 text-base leading-7 text-neutral-700">
                VP and SVP operating roles, revenue modeling projects, and selective
                fractional work where the problem is systemic.
              </p>
            </div>

            <div>
              <h3 className="text-sm uppercase tracking-[0.18em] text-neutral-500">
                Location
              </h3>
              <p className="mt-3 text-base leading-7 text-neutral-700">Boston, MA</p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-10"
      >
        <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-8 sm:p-10">
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
            Execution reflects the structure behind it. Let&apos;s talk.
          </h2>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-neutral-700">
            Selectively open to senior operating roles, fractional engagements, and PE
            portfolio work.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="mailto:jon@jonrheaume.com"
              className="inline-flex items-center rounded-full bg-neutral-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
            >
              jon@jonrheaume.com
            </a>
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-neutral-300 px-5 py-3 text-sm font-medium text-neutral-900 transition hover:border-neutral-400 hover:bg-white"
            >
              Schedule time
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}