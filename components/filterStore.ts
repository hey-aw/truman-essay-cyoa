'use client';
import { createContext, useContext, useState } from 'react';

interface FilterContext {
  perspective: string[];
  types: string[];
  setFilters: (p: string[], t: string[]) => void;
}

const Ctx = createContext<FilterContext | null>(null);

export function FilterProvider({ children }: { children: React.ReactNode }) {
  const [perspective, setPerspective] = useState<string[]>([]);
  const [types, setTypes] = useState<string[]>([]);

  const setFilters = (p: string[], t: string[]) => {
    setPerspective(p);
    setTypes(t);
  };

  return (
    <Ctx.Provider value={{ perspective, types, setFilters }}>
      {children}
    </Ctx.Provider>
  );
}

export default function useFilterStore() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('useFilterStore must be within provider');
  return ctx;
}
