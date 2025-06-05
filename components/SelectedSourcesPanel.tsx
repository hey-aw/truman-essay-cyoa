'use client';
import useSelectedSources from '../app/sources/useSelectedSources';
import { Button } from '@/components/ui/button';

export default function SelectedSourcesPanel() {
  const { selected, toggleSource, clear } = useSelectedSources();

  const copyBibliography = () => {
    const text = selected.map((s) => s.citation.mla).join('\n');
    navigator.clipboard.writeText(text);
  };

  if (selected.length === 0) return null;

  return (
    <div className="border p-4 space-y-2">
      <h2 className="font-bold">Selected Sources</h2>
      <ul className="list-disc pl-5 space-y-1">
        {selected.map((s) => (
          <li key={s.id} className="flex justify-between items-start">
            <span className="text-sm">{s.citation.mla}</span>
            <Button variant="ghost" onClick={() => toggleSource(s)}>Remove</Button>
          </li>
        ))}
      </ul>
      <div className="flex gap-2">
        <Button onClick={copyBibliography}>Copy MLA Bibliography</Button>
        <Button variant="outline" onClick={clear}>Clear</Button>
      </div>
    </div>
  );
}
