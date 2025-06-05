import Link from "next/link";

export default function WriteImmediately() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
            <div className="container mx-auto px-6 py-12">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-8">
                        <Link href="/" className="text-blue-400 hover:text-blue-300 transition-colors">
                            ← Back to Start
                        </Link>
                    </div>

                    <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 mb-8 border border-slate-700">
                        <h1 className="text-3xl font-bold mb-6 text-green-400">📚 Writing Mode: Activated</h1>

                        <div className="prose prose-invert max-w-none">
                            <p className="text-lg leading-relaxed mb-6">
                                You crack your knuckles and open a new browser tab. Time is ticking, and you need to be efficient.
                                The atomic bomb decision is the most obvious and well-documented choice for analyzing Truman&apos;s presidency.
                                You&apos;ve got this!
                            </p>

                            <p className="text-lg leading-relaxed mb-6">
                                Your strategy: Focus on the atomic bomb decision - August 1945. It&apos;s controversial, well-documented,
                                and you can easily argue both sides. Plus, there are plenty of primary sources available.
                            </p>

                            <p className="text-lg leading-relaxed mb-8">
                                You start typing your thesis: &quot;President Harry S. Truman&apos;s decision to use atomic weapons against
                                Japan in August 1945 was...&quot; - but wait, you need to decide your angle first.
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <Link href="/sources?topic=atomic-bomb&perspective=justified" className="block">
                            <div className="bg-gradient-to-br from-green-600/20 to-green-700/20 border border-green-500/30 rounded-lg p-6 hover:border-green-400/50 transition-colors h-full">
                                <h3 className="text-xl font-semibold mb-3 text-green-400">✅ Argue It Was Justified</h3>
                                <p className="text-slate-300">
                                    Focus on ending the war quickly, saving lives, and avoiding a costly invasion of Japan.
                                    Gather sources that support Truman&apos;s decision.
                                </p>
                            </div>
                        </Link>

                        <Link href="/sources?topic=atomic-bomb&perspective=unjustified" className="block">
                            <div className="bg-gradient-to-br from-red-600/20 to-red-700/20 border border-red-500/30 rounded-lg p-6 hover:border-red-400/50 transition-colors h-full">
                                <h3 className="text-xl font-semibold mb-3 text-red-400">❌ Argue It Was Unjustified</h3>
                                <p className="text-slate-300">
                                    Focus on the humanitarian cost, alternatives that weren&apos;t tried, and the political motivations
                                    behind the decision.
                                </p>
                            </div>
                        </Link>
                    </div>

                    <div className="bg-slate-700/30 rounded-lg p-6 border border-slate-600">
                        <h3 className="text-lg font-semibold mb-4 text-yellow-400">💡 Writing Tip</h3>
                        <p className="text-slate-300">
                            Remember: A strong essay doesn&apos;t just pick a side - it acknowledges the complexity of the decision
                            and shows why your position is most convincing despite valid counterarguments.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
} 