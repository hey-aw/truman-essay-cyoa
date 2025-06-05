import Link from "next/link";

export default function GetCoffee() {
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
                        <h1 className="text-3xl font-bold mb-6 text-purple-400">☕ Coffee Break Adventure</h1>

                        <div className="prose prose-invert max-w-none">
                            <p className="text-lg leading-relaxed mb-6">
                                You grab your jacket and head into the crisp 3 AM air. The 24-hour café down the street has saved
                                you before during all-nighters. Sometimes a change of scenery is exactly what you need to think clearly.
                            </p>

                            <p className="text-lg leading-relaxed mb-6">
                                The walk helps clear your head. As you push open the café door, you&apos;re greeted by warm light,
                                the gentle hum of the espresso machine, and... surprisingly, a handful of other night owls hunched
                                over laptops just like you.
                            </p>

                            <p className="text-lg leading-relaxed mb-8">
                                You order your usual - a large dark roast with an extra shot - and notice something interesting
                                happening around you...
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-gradient-to-br from-amber-600/20 to-amber-700/20 border border-amber-500/30 rounded-lg p-6">
                            <h3 className="text-xl font-semibold mb-3 text-amber-400">📚 Study Group Spotted</h3>
                            <p className="text-slate-300 mb-4">
                                A group of students at the corner table are working on what looks like... history essays?
                                You catch fragments: &quot;Truman... Marshall Plan... Cold War...&quot; They seem to have their act together.
                            </p>
                            <Link
                                href="/study-group"
                                className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 px-4 rounded transition-colors"
                            >
                                Approach them
                            </Link>
                        </div>

                        <div className="bg-gradient-to-br from-green-600/20 to-green-700/20 border border-green-500/30 rounded-lg p-6">
                            <h3 className="text-xl font-semibold mb-3 text-green-400">🎧 Focus Time</h3>
                            <p className="text-slate-300 mb-4">
                                You find a quiet corner table, put in your earbuds, and get in the zone. The coffee kicks in,
                                and suddenly your brain feels sharper. Time to tackle this essay head-on.
                            </p>
                            <Link
                                href="/write-immediately"
                                className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded transition-colors"
                            >
                                Start writing
                            </Link>
                        </div>
                    </div>

                    <div className="bg-slate-700/30 rounded-lg p-6 border border-slate-600 mb-6">
                        <h3 className="text-lg font-semibold mb-4 text-yellow-400">💭 Plot Twist!</h3>
                        <p className="text-slate-300 mb-4">
                            As you sip your coffee, you overhear the barista talking to another customer: &quot;Yeah, my professor
                            always says the most interesting essays come from the less obvious topics. Everyone writes about
                            the atomic bomb...&quot;
                        </p>
                        <p className="text-slate-300">
                            Hmm. Food for thought. Maybe there&apos;s wisdom in exploring beyond the obvious choices?
                        </p>
                    </div>

                    <div className="text-center space-x-4">
                        <Link
                            href="/research-first"
                            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                        >
                            🔍 Reconsider your topic options
                        </Link>
                        <Link
                            href="/email-professor"
                            className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                        >
                            📧 Actually... maybe ask for an extension?
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
} 