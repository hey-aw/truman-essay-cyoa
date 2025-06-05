import Link from "next/link";

export default function EmailProfessor() {
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
                        <h1 className="text-3xl font-bold mb-6 text-red-400">📧 The Hail Mary Email</h1>

                        <div className="prose prose-invert max-w-none">
                            <p className="text-lg leading-relaxed mb-6">
                                Your finger hovers over the mouse. Should you really do this? Professor Martinez has been clear
                                about deadlines all semester. But... maybe she&apos;ll understand? Everyone has emergencies, right?
                            </p>

                            <p className="text-lg leading-relaxed mb-6">
                                You open your email and start typing the most carefully crafted, desperate plea of your academic career...
                            </p>
                        </div>
                    </div>

                    <div className="bg-slate-700/30 rounded-lg p-6 border border-slate-600 mb-8">
                        <h3 className="text-lg font-semibold mb-4 text-gray-300">Draft Email</h3>
                        <div className="bg-slate-800 rounded p-4 font-mono text-sm">
                            <p className="text-blue-300">To: prof.martinez@university.edu</p>
                            <p className="text-blue-300">Subject: Emergency Extension Request - Truman Essay</p>
                            <br />
                            <p className="text-gray-200">Dear Professor Martinez,</p>
                            <br />
                            <p className="text-gray-200">
                                I am writing to request an emergency extension for the Truman essay due today. I have been experiencing
                                [FAMILY EMERGENCY / TECHNICAL DIFFICULTIES / SUDDEN ILLNESS - pick one] and...
                            </p>
                            <br />
                            <p className="text-yellow-300 italic">[Cursor blinking...]</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-gradient-to-br from-green-600/20 to-green-700/20 border border-green-500/30 rounded-lg p-6">
                            <h3 className="text-lg font-semibold mb-3 text-green-400">😇 Be Honest</h3>
                            <p className="text-slate-300 mb-4 text-sm">
                                &quot;I procrastinated and realize I made a mistake. I take full responsibility and would be grateful
                                for a chance to submit late with penalty.&quot;
                            </p>
                            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded transition-colors text-sm">
                                Send honest email
                            </button>
                        </div>

                        <div className="bg-gradient-to-br from-yellow-600/20 to-yellow-700/20 border border-yellow-500/30 rounded-lg p-6">
                            <h3 className="text-lg font-semibold mb-3 text-yellow-400">🎭 Make Up an Excuse</h3>
                            <p className="text-slate-300 mb-4 text-sm">
                                &quot;My grandmother is in the hospital and I&apos;ve been by her side...&quot; (Your grandmother is fine
                                and probably asleep right now.)
                            </p>
                            <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2 px-4 rounded transition-colors text-sm">
                                Send dramatic email
                            </button>
                        </div>

                        <div className="bg-gradient-to-br from-gray-600/20 to-gray-700/20 border border-gray-500/30 rounded-lg p-6">
                            <h3 className="text-lg font-semibold mb-3 text-gray-400">❌ Don&apos;t Send</h3>
                            <p className="text-slate-300 mb-4 text-sm">
                                Actually, this is a terrible idea. You remember she said &quot;no late submissions&quot; at least
                                five times this semester.
                            </p>
                            <Link
                                href="/write-immediately"
                                className="inline-block bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded transition-colors text-sm"
                            >
                                Delete draft
                            </Link>
                        </div>
                    </div>

                    <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6 mb-6">
                        <h3 className="text-lg font-semibold mb-4 text-red-400">⚠️ Wait... what&apos;s this?</h3>
                        <p className="text-slate-300 mb-4">
                            As you&apos;re about to hit send, you notice something in your email inbox. A message from 2 hours ago
                            from... Professor Martinez?
                        </p>
                        <div className="bg-slate-800 rounded p-4 mt-4">
                            <p className="text-blue-300 text-sm">From: prof.martinez@university.edu</p>
                            <p className="text-blue-300 text-sm">Subject: Essay Reminder + Important Announcement</p>
                            <br />
                            <p className="text-gray-200 text-sm">
                                &quot;Due to the campus server issues this week, I&apos;m extending the Truman essay deadline by 48 hours.
                                New due date: Friday at 11:59 PM. Use this extra time wisely! - Prof. M&quot;
                            </p>
                        </div>
                    </div>

                    <div className="text-center space-y-4">
                        <h3 className="text-2xl font-semibold text-green-400">🎉 Plot Twist: You Got Lucky!</h3>
                        <p className="text-slate-300 mb-6">
                            The universe has given you a second chance. You have 48 more hours, but don&apos;t waste them!
                        </p>
                        <div className="space-x-4">
                            <Link
                                href="/research-first"
                                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                            >
                                🔍 Use the time to research properly
                            </Link>
                            <Link
                                href="/get-coffee"
                                className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                            >
                                ☕ Celebrate with coffee and plan
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 