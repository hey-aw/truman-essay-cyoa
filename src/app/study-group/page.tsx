import Link from "next/link";

export default function StudyGroup() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
            <div className="container mx-auto px-6 py-12">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-8">
                        <Link href="/get-coffee" className="text-blue-400 hover:text-blue-300 transition-colors">
                            ← Back to Coffee Shop
                        </Link>
                    </div>

                    <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 mb-8 border border-slate-700">
                        <h1 className="text-3xl font-bold mb-6 text-amber-400">📚 Late Night Study Squad</h1>

                        <div className="prose prose-invert max-w-none">
                            <p className="text-lg leading-relaxed mb-6">
                                You approach the table nervously. &quot;Um, excuse me? Are you guys working on history essays too?&quot;
                            </p>

                            <p className="text-lg leading-relaxed mb-6">
                                Sarah, a junior with color-coded notes, looks up and smiles. &quot;Yeah! We&apos;re all in different
                                sections of Martinez&apos;s class. Want to join? We&apos;re comparing our Truman topics.&quot;
                            </p>

                            <p className="text-lg leading-relaxed mb-8">
                                Perfect. You grab a chair and listen as they share their approaches...
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-slate-700/30 rounded-lg p-6 border border-slate-600">
                            <h3 className="text-lg font-semibold mb-3 text-green-400">Sarah&apos;s Topic</h3>
                            <p className="text-slate-300 mb-2 font-semibold">Marshall Plan (1947)</p>
                            <p className="text-slate-300 text-sm mb-3">
                                &quot;I&apos;m arguing it was Truman&apos;s most significant decision because it reshaped global economics
                                and prevented Soviet expansion in Europe. Plus, fewer people write about it!&quot;
                            </p>
                            <div className="text-xs text-slate-400">
                                Status: 3 sources collected, outline done
                            </div>
                        </div>

                        <div className="bg-slate-700/30 rounded-lg p-6 border border-slate-600">
                            <h3 className="text-lg font-semibold mb-3 text-blue-400">Mike&apos;s Topic</h3>
                            <p className="text-slate-300 mb-2 font-semibold">Firing MacArthur (1951)</p>
                            <p className="text-slate-300 text-sm mb-3">
                                &quot;Everyone expects atomic bomb essays. I&apos;m focusing on civilian control of military.
                                It&apos;s constitutional, controversial, and totally unexpected.&quot;
                            </p>
                            <div className="text-xs text-slate-400">
                                Status: Deep in research, found great primary sources
                            </div>
                        </div>

                        <div className="bg-slate-700/30 rounded-lg p-6 border border-slate-600">
                            <h3 className="text-lg font-semibold mb-3 text-purple-400">Alex&apos;s Topic</h3>
                            <p className="text-slate-300 mb-2 font-semibold">Desegregating the Military (1948)</p>
                            <p className="text-slate-300 text-sm mb-3">
                                &quot;Executive Order 9981 was huge for civil rights. Truman took a political risk that
                                paid off historically. Great for arguing moral leadership.&quot;
                            </p>
                            <div className="text-xs text-slate-400">
                                Status: Struggling with finding diverse perspectives
                            </div>
                        </div>

                        <div className="bg-slate-700/30 rounded-lg p-6 border border-slate-600">
                            <h3 className="text-lg font-semibold mb-3 text-red-400">Your Turn</h3>
                            <p className="text-slate-300 mb-2 font-semibold">You need to decide...</p>
                            <p className="text-slate-300 text-sm mb-3">
                                The group is waiting for you to share. What&apos;s your angle going to be?
                                They&apos;ve given you some great ideas to consider.
                            </p>
                            <div className="text-xs text-slate-400">
                                Status: Decision time!
                            </div>
                        </div>
                    </div>

                    <div className="bg-amber-900/20 border border-amber-500/30 rounded-lg p-6 mb-6">
                        <h3 className="text-lg font-semibold mb-4 text-amber-400">💡 Group Wisdom</h3>
                        <div className="space-y-3 text-slate-300">
                            <p><strong>Sarah:</strong> &quot;Don&apos;t just pick the obvious topic. Everyone does atomic bomb.&quot;</p>
                            <p><strong>Mike:</strong> &quot;Primary sources are gold. The more unique, the better your grade.&quot;</p>
                            <p><strong>Alex:</strong> &quot;Make sure you can argue both sides. Martinez loves nuanced analysis.&quot;</p>
                            <p><strong>Everyone:</strong> &quot;We can share sources if you want to join our group chat!&quot;</p>
                        </div>
                    </div>

                    <div className="text-center space-y-4">
                        <h3 className="text-xl font-semibold text-white">What&apos;s your move?</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <Link
                                href="/sources?topic=atomic-bomb"
                                className="block bg-red-600/20 border border-red-500/30 rounded-lg p-4 hover:border-red-400/50 transition-colors"
                            >
                                <h4 className="font-semibold text-red-400">Stick with Atomic Bomb</h4>
                                <p className="text-slate-300 text-sm">It&apos;s familiar territory, even if it&apos;s popular</p>
                            </Link>
                            <Link
                                href="/research-first"
                                className="block bg-blue-600/20 border border-blue-500/30 rounded-lg p-4 hover:border-blue-400/50 transition-colors"
                            >
                                <h4 className="font-semibold text-blue-400">Explore Their Suggestions</h4>
                                <p className="text-slate-300 text-sm">Research the less obvious options they mentioned</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 