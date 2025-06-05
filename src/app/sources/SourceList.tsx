'use client'
import sources from '../data/atomic_bomb_sources_dataset.json'
import SourceCard from './SourceCard'
import { Source } from './useSelectedSources'

interface Props {
  perspective: string
  type: string
}

export default function SourceList({ perspective, type }: Props) {
  const data = sources as Source[]
  const filtered = data.filter((s) => {
    const pMatch = perspective === 'All' || s.perspective === perspective
    const tMatch = type === 'All' || s.type === type
    return pMatch && tMatch
  })

  return (
    <div className="space-y-4">
      {filtered.map((source) => (
        <SourceCard key={source.id} source={source} />
      ))}
    </div>
  )
}
