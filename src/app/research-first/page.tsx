import Link from "next/link";

export default function ResearchFirst() {
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
                        <h1 className="text-3xl font-bold mb-6 text-blue-400">🔍 Research Mode: Engaged</h1>

                        <div className="prose prose-invert max-w-none">
                            <p className="text-lg leading-relaxed mb-6">
                                Smart choice! You decide to explore your options before committing. Truman made many significant
                                decisions during his presidency - some obvious, others overlooked. A unique angle might help
                                your essay stand out.
                            </p>

                            <p className="text-lg leading-relaxed mb-8">
                                You open multiple tabs and start browsing. Here are the major decisions that defined Truman&apos;s presidency:
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        <Link href="/write-immediately" className="block">
                            <div className="bg-gradient-to-br from-red-600/20 to-red-700/20 border border-red-500/30 rounded-lg p-6 hover:border-red-400/50 transition-colors h-full">
                                <h3 className="text-lg font-semibold mb-3 text-red-400">☢️ Atomic Bomb Decision</h3>
                                <p className="text-slate-300 text-sm mb-3">August 1945</p>
                                <p className="text-slate-300">
                                    The obvious choice. Plenty of sources, but also what everyone else will write about.
                                </p>
                            </div>
                        </Link>

                        <div className="bg-gradient-to-br from-green-600/20 to-green-700/20 border border-green-500/30 rounded-lg p-6 hover:border-green-400/50 transition-colors cursor-pointer">
                            <h3 className="text-lg font-semibold mb-3 text-green-400">🌍 Marshall Plan</h3>
                            <p className="text-slate-300 text-sm mb-3">1947</p>
                            <p className="text-slate-300">
                                Economic aid to rebuild Europe. Shaped the Cold War and modern international relations.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-purple-600/20 to-purple-700/20 border border-purple-500/30 rounded-lg p-6 hover:border-purple-400/50 transition-colors cursor-pointer">
                            <h3 className="text-lg font-semibold mb-3 text-purple-400">🏛️ Desegregating the Military</h3>
                            <p className="text-slate-300 text-sm mb-3">1948</p>
                            <p className="text-slate-300">
                                Executive Order 9981. A bold civil rights move that was ahead of its time.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-yellow-600/20 to-yellow-700/20 border border-yellow-500/30 rounded-lg p-6 hover:border-yellow-400/50 transition-colors cursor-pointer">
                            <h3 className="text-lg font-semibold mb-3 text-yellow-400">✈️ Berlin Airlift</h3>
                            <p className="text-slate-300 text-sm mb-3">1948-1949</p>
                            <p className="text-slate-300">
                                Responding to Soviet blockade. First major Cold War confrontation.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-cyan-600/20 to-cyan-700/20 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400/50 transition-colors cursor-pointer">
                            <h3 className="text-lg font-semibold mb-3 text-cyan-400">⚔️ Korean War Entry</h3>
                            <p className="text-slate-300 text-sm mb-3">1950</p>
                            <p className="text-slate-300">
                                Committing to &quot;police action&quot; without Congressional approval. Set precedent for future conflicts.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-orange-600/20 to-orange-700/20 border border-orange-500/30 rounded-lg p-6 hover:border-orange-400/50 transition-colors cursor-pointer">
                            <h3 className="text-lg font-semibold mb-3 text-orange-400">👨‍💼 Firing MacArthur</h3>
                            <p className="text-slate-300 text-sm mb-3">1951</p>
                            <p className="text-slate-300">
                                Dismissing a popular general. Established civilian control over military.
                            </p>
                        </div>
                    </div>

                    <div className="bg-slate-700/30 rounded-lg p-6 border border-slate-600 mb-6">
                        <h3 className="text-lg font-semibold mb-4 text-blue-400">🤔 Decision Time</h3>
                        <p className="text-slate-300 mb-4">
                            You&apos;ve surveyed the landscape. Each decision has rich source material and compelling arguments.
                            But time is ticking - you need to pick one and start writing.
                        </p>
                        <p className="text-slate-300">
                            What&apos;s your gut telling you? Which decision feels most interesting to you?
                        </p>
                    </div>

                    <div className="text-center">
                        <Link
                            href="/get-coffee"
                            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                        >
                            ☕ I need coffee to think about this...
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
} 