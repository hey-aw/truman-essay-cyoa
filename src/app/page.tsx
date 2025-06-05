import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      <div className="container mx-auto px-6 py-12">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            The Truman Essay
          </h1>
          <p className="text-xl text-slate-300">A Choose Your Own Adventure</p>
        </header>

        <main className="max-w-4xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 mb-8 border border-slate-700">
            <div className="prose prose-invert max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                It&apos;s 3 AM and you&apos;re staring at a blank document on your laptop screen. The cursor blinks mockingly
                as you realize you have less than 6 hours until your History essay on President Harry S. Truman is due.
                You&apos;ve been procrastinating for weeks, and now panic is setting in.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Your coffee has gone cold, energy drinks litter your desk, and your roommate is sound asleep.
                The assignment is worth 40% of your final grade, and you need to write 2,500 words analyzing
                Truman&apos;s most significant presidential decision.
              </p>

              <p className="text-lg leading-relaxed mb-8">
                As you sit in the eerie glow of your laptop, you contemplate your options. What do you do?
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/write-immediately" className="block">
              <div className="bg-gradient-to-br from-green-600/20 to-green-700/20 border border-green-500/30 rounded-lg p-6 hover:border-green-400/50 transition-colors cursor-pointer group h-full">
                <h3 className="text-xl font-semibold mb-3 text-green-400 group-hover:text-green-300">
                  📚 Start Writing Immediately
                </h3>
                <p className="text-slate-300 group-hover:text-slate-200">
                  Dive straight into research and writing. You&apos;ll focus on the atomic bomb decision -
                  it&apos;s the most obvious choice and you can find plenty of sources quickly.
                </p>
              </div>
            </Link>

            <Link href="/research-first" className="block">
              <div className="bg-gradient-to-br from-blue-600/20 to-blue-700/20 border border-blue-500/30 rounded-lg p-6 hover:border-blue-400/50 transition-colors cursor-pointer group h-full">
                <h3 className="text-xl font-semibold mb-3 text-blue-400 group-hover:text-blue-300">
                  🔍 Research First
                </h3>
                <p className="text-slate-300 group-hover:text-slate-200">
                  Spend time exploring different aspects of Truman&apos;s presidency. Maybe there&apos;s a less
                  obvious but more interesting decision to analyze.
                </p>
              </div>
            </Link>

            <Link href="/get-coffee" className="block">
              <div className="bg-gradient-to-br from-purple-600/20 to-purple-700/20 border border-purple-500/30 rounded-lg p-6 hover:border-purple-400/50 transition-colors cursor-pointer group h-full">
                <h3 className="text-xl font-semibold mb-3 text-purple-400 group-hover:text-purple-300">
                  ☕ Get More Coffee
                </h3>
                <p className="text-slate-300 group-hover:text-slate-200">
                  You need fuel for this all-nighter. Head to the 24-hour café down the street
                  and clear your head before tackling this massive task.
                </p>
              </div>
            </Link>

            <Link href="/email-professor" className="block">
              <div className="bg-gradient-to-br from-red-600/20 to-red-700/20 border border-red-500/30 rounded-lg p-6 hover:border-red-400/50 transition-colors cursor-pointer group h-full">
                <h3 className="text-xl font-semibold mb-3 text-red-400 group-hover:text-red-300">
                  📧 Email Professor
                </h3>
                <p className="text-slate-300 group-hover:text-slate-200">
                  Panic and send a desperate email asking for an extension. It&apos;s risky,
                  but maybe you can buy yourself more time.
                </p>
              </div>
            </Link>
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-400 italic">
              &quot;The buck stops here.&quot; - Harry S. Truman
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
