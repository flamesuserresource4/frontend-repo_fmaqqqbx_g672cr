import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-24 md:pt-24 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">
              Freelance automations that feel like magic
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Ship more work, with less work.
            </h1>
            <p className="mt-6 text-lg text-slate-600 max-w-xl">
              Fluxlane is a modern automation layer for solo founders and freelancers. Connect your tools, auto-generate proposals, send invoices, and keep clients in flow—hands off.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#cta" className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-5 py-3 text-white font-medium shadow hover:bg-slate-800">
                Start free
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-5 py-3 text-slate-800 font-medium bg-white/70 hover:bg-white">
                See how it works
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-slate-600">
              <div className="flex -space-x-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="inline-block h-7 w-7 rounded-full ring-2 ring-white bg-gradient-to-tr from-indigo-500 via-violet-500 to-fuchsia-500" />
                ))}
              </div>
              <span>Trusted by 2,000+ independents</span>
            </div>
          </div>

          <div className="relative h-[420px] sm:h-[520px] lg:h-[560px]">
            <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-slate-200/60 bg-white/60">
              <Spline
                scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute -top-20 right-1/2 translate-x-1/2 h-[500px] w-[900px] rounded-full bg-gradient-to-tr from-fuchsia-300/30 via-indigo-300/20 to-transparent blur-3xl" />
    </section>
  );
}
