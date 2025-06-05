'use client'
import { Source, useSelectedSources } from './useSelectedSources'

interface Props {
  source: Source
}

export default function SourceCard({ source }: Props) {
  const { selected, toggleSource } = useSelectedSources()
  const isSelected = selected.some((s) => s.id === source.id)
  const badgeColor =
    source.perspective === 'Justified'
      ? 'bg-green-100 text-green-800'
      : source.perspective === 'Unjustified'
      ? 'bg-red-100 text-red-800'
      : 'bg-yellow-100 text-yellow-800'

  return (
    <div className="border rounded p-4 space-y-2">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold">{source.title}</h3>
          <p className="text-sm text-gray-600">
            {source.author} &middot; {source.date}
          </p>
        </div>
        <span className={`px-2 py-1 text-xs rounded ${badgeColor}`}>{source.perspective}</span>
      </div>
      <p className="text-sm">Type: {source.type}</p>
      <button
        className="text-sm underline"
        onClick={() => toggleSource(source)}
      >
        {isSelected ? 'Remove' : 'Add to Outline'}
      </button>
      <details className="text-sm">
        <summary className="cursor-pointer">Details</summary>
        <div className="pl-4 mt-2 space-y-1">
          <p>{source.why}</p>
          <p className="italic">{source.citation.mla}</p>
          <a className="text-blue-600 underline" href={source.link} target="_blank" rel="noreferrer">
            View Source
          </a>
        </div>
      </details>
    </div>
  )
}
