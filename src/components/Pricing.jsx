export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Simple, fair pricing</h2>
          <p className="mt-4 text-slate-600">Start free. Upgrade when you’re booking more work than you can handle.</p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Starter</h3>
            <p className="mt-2 text-sm text-slate-600">For getting organized</p>
            <p className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900">$0</p>
            <ul className="mt-6 space-y-2 text-sm text-slate-600">
              <li>Up to 3 active clients</li>
              <li>Basic automations</li>
              <li>Email support</li>
            </ul>
            <a href="#cta" className="mt-8 inline-flex w-full items-center justify-center rounded-lg border border-slate-300 px-4 py-2 font-medium">Get started</a>
          </div>

          <div className="rounded-2xl border-2 border-slate-900 bg-white p-6 shadow-md relative">
            <span className="absolute -top-3 right-4 rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white">Most popular</span>
            <h3 className="text-lg font-semibold text-slate-900">Pro</h3>
            <p className="mt-2 text-sm text-slate-600">For busy independents</p>
            <p className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900">$19<span className="text-base font-medium text-slate-600">/mo</span></p>
            <ul className="mt-6 space-y-2 text-sm text-slate-600">
              <li>Unlimited clients</li>
              <li>All automations</li>
              <li>Priority support</li>
            </ul>
            <a href="#cta" className="mt-8 inline-flex w-full items-center justify-center rounded-lg bg-slate-900 px-4 py-2 font-medium text-white">Upgrade</a>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Studio</h3>
            <p className="mt-2 text-sm text-slate-600">For small teams</p>
            <p className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900">$49<span className="text-base font-medium text-slate-600">/mo</span></p>
            <ul className="mt-6 space-y-2 text-sm text-slate-600">
              <li>Shared workspace</li>
              <li>Advanced permissions</li>
              <li>Concierge onboarding</li>
            </ul>
            <a href="#cta" className="mt-8 inline-flex w-full items-center justify-center rounded-lg border border-slate-300 px-4 py-2 font-medium">Contact sales</a>
          </div>
        </div>
      </div>
    </section>
  );
}
