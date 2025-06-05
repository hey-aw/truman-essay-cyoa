'use client';
import { createContext, useContext, useState } from 'react';
import { Source } from './SourceList';
import { useToast } from '@/components/ui/use-toast';

interface Context {
  selected: Source[];
  toggleSource: (source: Source) => void;
  clear: () => void;
}

const SelectedSourcesContext = createContext<Context | null>(null);

export function SelectedSourcesProvider({ children }: { children: React.ReactNode }) {
  const [selected, setSelected] = useState<Source[]>([]);
  const { toast } = useToast();

  const toggleSource = (source: Source) => {
    const exists = selected.some((s) => s.id === source.id);
    if (exists) {
      setSelected(selected.filter((s) => s.id !== source.id));
    } else {
      if (selected.length >= 5) {
        toast({ title: 'You can select up to 5 sources' });
        return;
      }
      setSelected([...selected, source]);
    }
  };

  const clear = () => setSelected([]);

  return (
    <SelectedSourcesContext.Provider value={{ selected, toggleSource, clear }}>
      {children}
    </SelectedSourcesContext.Provider>
  );
}

export default function useSelectedSources() {
  const ctx = useContext(SelectedSourcesContext);
  if (!ctx) throw new Error('useSelectedSources must be within provider');
  return ctx;
}
