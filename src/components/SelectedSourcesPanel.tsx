'use client'
import { useSelectedSources } from '../app/sources/useSelectedSources'

export default function SelectedSourcesPanel() {
  const { selected, toggleSource, clear } = useSelectedSources()

  const copyBibliography = async () => {
    const text = selected.map((s) => s.citation.mla).join('\n')
    await navigator.clipboard.writeText(text)
    alert('Bibliography copied to clipboard')
  }

  return (
    <div className="border rounded p-4 space-y-2">
      <h2 className="font-semibold">Selected Sources ({selected.length})</h2>
      {selected.map((s) => (
        <div key={s.id} className="flex justify-between items-start text-sm">
          <span>{s.citation.mla}</span>
          <button className="underline" onClick={() => toggleSource(s)}>
            Remove
          </button>
        </div>
      ))}
      <div className="flex gap-2 mt-2">
        <button
          className="px-2 py-1 border rounded"
          onClick={copyBibliography}
          disabled={selected.length === 0}
        >
          Copy MLA Bibliography
        </button>
        <button
          className="px-2 py-1 border rounded"
          disabled={selected.length < 3}
          onClick={() => alert('Exported')}
        >
          Export to Essay Outline
        </button>
        <button
          className="px-2 py-1 border rounded"
          onClick={clear}
          disabled={selected.length === 0}
        >
          Clear
        </button>
      </div>
    </div>
  )
}
