export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium uppercase tracking-widest">
          AI-Powered Feedback Routing
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Route customer feedback to the{' '}
          <span className="text-[#58a6ff]">right team</span> automatically
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Stop manually triaging feedback. Our AI reads every submission, classifies it, assigns a priority score, and delivers it straight to the team that can act on it.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
        >
          Get Started — $39/mo
        </a>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { title: 'Smart Classification', desc: 'OpenAI categorizes feedback into bugs, feature requests, praise, and more.' },
            { title: 'Priority Scoring', desc: 'Each item gets a 1–10 urgency score so teams tackle what matters first.' },
            { title: 'Auto-Routing', desc: 'Feedback lands in the right Slack channel, inbox, or project board instantly.' }
          ].map((f) => (
            <div key={f.title} className="p-5 rounded-xl bg-[#161b22] border border-[#30363d]">
              <h3 className="text-white font-semibold mb-1">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="rounded-2xl bg-[#161b22] border border-[#30363d] p-8 text-center">
          <p className="text-[#58a6ff] text-sm font-semibold uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$39</p>
          <p className="text-[#8b949e] text-sm mb-6">per month, cancel anytime</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited feedback submissions',
              'AI classification & priority scoring',
              'Slack, email & webhook routing',
              'Dashboard & analytics',
              'Priority support'
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Start Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How does the AI routing work?',
              a: 'Each feedback submission is sent to OpenAI, which classifies the content, assigns a category and priority score, then triggers the matching routing rule you configure.'
            },
            {
              q: 'Which integrations are supported?',
              a: 'Out of the box we support Slack, email, and generic webhooks. More integrations are added regularly based on customer requests.'
            },
            {
              q: 'Can I customize the routing rules?',
              a: 'Yes. You define rules based on category, priority score, keywords, or any combination. Rules can route to different destinations per team or product area.'
            }
          ].map((item) => (
            <div key={item.q} className="p-5 rounded-xl bg-[#161b22] border border-[#30363d]">
              <p className="font-semibold text-white mb-1">{item.q}</p>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
