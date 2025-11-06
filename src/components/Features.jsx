export default function Features() {
  const features = [
    {
      title: 'Proposal autopilot',
      desc: 'Generate beautiful, scoped proposals from a brief. Stay consistent and close faster.',
    },
    {
      title: 'Invoice sync',
      desc: 'Send branded invoices, chase late payments, and reconcile automatically.',
    },
    {
      title: 'Client workflows',
      desc: 'Trigger onboarding packets, collect assets, and schedule check-ins—without manual pings.',
    },
    {
      title: 'Multi-tool glue',
      desc: 'Connect Notion, Slack, Google, and Stripe. We orchestrate the boring bits for you.',
    },
  ];

  return (
    <section id="features" className="py-20 md:py-28 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Automations that earn their keep</h2>
          <p className="mt-4 text-slate-600">Build a dependable pipeline across clients and cashflow. We sweat the steps so you don’t.</p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-slate-900/90 text-white flex items-center justify-center text-sm font-semibold">{f.title.split(' ')[0]}</div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
