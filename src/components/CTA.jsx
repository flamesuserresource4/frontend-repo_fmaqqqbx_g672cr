export default function CTA() {
  return (
    <section id="cta" className="py-20 md:py-28 bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Turn your client work into a smooth machine</h2>
        <p className="mt-4 text-slate-300 max-w-2xl mx-auto">Join thousands of independents who automate busywork and keep more focus for the craft.</p>
        <form onSubmit={(e) => e.preventDefault()} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
          <input
            type="email"
            required
            placeholder="you@studio.co"
            className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button type="submit" className="rounded-lg bg-white px-5 py-3 font-medium text-slate-900 shadow hover:bg-slate-100">Get early access</button>
        </form>
        <p className="mt-3 text-xs text-slate-400">No spam. Cancel anytime.</p>
      </div>
    </section>
  );
}
