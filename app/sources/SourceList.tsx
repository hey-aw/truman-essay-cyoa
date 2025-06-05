'use client';
import sourcesData from '../data/atomic_bomb_sources_dataset.json';
import SourceCard from './SourceCard';
import useFilterStore from '../../components/filterStore';

export interface Source {
  id: string;
  title: string;
  author: string;
  date: string;
  type: string;
  perspective: string;
  who: string;
  why: string;
  link: string;
  citation: {
    mla: string;
  };
}

const allSources: Source[] = sourcesData as Source[];

export default function SourceList() {
  const { perspective, types } = useFilterStore();
  const filtered = allSources.filter((s) => {
    const pMatch = perspective.length === 0 || perspective.includes(s.perspective);
    const tMatch = types.length === 0 || types.includes(s.type);
    return pMatch && tMatch;
  });

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {filtered.map((source) => (
        <SourceCard key={source.id} source={source} />
      ))}
    </div>
  );
}
