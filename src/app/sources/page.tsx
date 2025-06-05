import Link from 'next/link'
import SourceBrowser from './SourceBrowser'

export default function SourcesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="mb-8">
          <Link href="/" className="text-blue-400 hover:text-blue-300 transition-colors">
            ← Back to Adventure Start
          </Link>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 mb-8 border border-slate-700">
          <h1 className="text-3xl font-bold mb-4 text-blue-400">📚 Source Research Hub</h1>
          <p className="text-lg text-slate-300 mb-6">
            Great choice! You&apos;re taking the research-first approach. These sources will help you build
            a compelling argument for your Truman essay. Remember: strong sources = strong arguments.
          </p>

          <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600">
            <h3 className="font-semibold text-yellow-400 mb-2">💡 Research Strategy Tips</h3>
            <ul className="text-slate-300 text-sm space-y-1">
              <li>• Look for both primary sources (from the time period) and secondary sources (historians&apos; analysis)</li>
              <li>• Consider multiple perspectives - even if you disagree, acknowledging counterarguments strengthens your essay</li>
              <li>• Pay attention to the &quot;who&quot; and &quot;why&quot; for each source to understand potential bias</li>
              <li>• Select sources that directly support your thesis, but don&apos;t ignore complexity</li>
            </ul>
          </div>
        </div>

        <main className="bg-slate-800/30 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
          <SourceBrowser />
        </main>

        <div className="mt-8 text-center">
          <div className="bg-slate-700/30 rounded-lg p-6 border border-slate-600 mb-6">
            <h3 className="text-lg font-semibold mb-4 text-green-400">Ready to Start Writing?</h3>
            <p className="text-slate-300 mb-4">
              Once you&apos;ve selected enough sources to support your argument, it&apos;s time to start crafting your essay.
              Remember: you need a clear thesis and evidence to support it.
            </p>
          </div>

          <div className="space-x-4">
            <Link
              href="/write-immediately"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              📝 Start Writing Your Essay
            </Link>
            <Link
              href="/research-first"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              🔍 Explore More Topics
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
