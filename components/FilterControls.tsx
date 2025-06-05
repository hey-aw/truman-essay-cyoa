'use client';
import { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import useFilterStore from './filterStore';

const perspectives = ['Justified', 'Unjustified', 'Complex'];
const types = ['Primary Source', 'Secondary Source'];

export default function FilterControls() {
  const { perspective, types: selectedTypes, setFilters } = useFilterStore();
  const [pState, setPState] = useState<string[]>(perspective);
  const [tState, setTState] = useState<string[]>(selectedTypes);

  const toggle = (arr: string[], value: string, setter: (v: string[]) => void) => {
    if (arr.includes(value)) {
      setter(arr.filter((v) => v !== value));
    } else {
      setter([...arr, value]);
    }
  };

  const apply = () => setFilters(pState, tState);

  return (
    <div className="space-y-2">
      <div>
        <p className="font-medium">Perspective</p>
        {perspectives.map((p) => (
          <Label key={p} className="mr-4">
            <Checkbox checked={pState.includes(p)} onCheckedChange={() => toggle(pState, p, setPState)} /> {p}
          </Label>
        ))}
      </div>
      <div>
        <p className="font-medium">Type</p>
        {types.map((t) => (
          <Label key={t} className="mr-4">
            <Checkbox checked={tState.includes(t)} onCheckedChange={() => toggle(tState, t, setTState)} /> {t}
          </Label>
        ))}
      </div>
      <button className="px-2 py-1 bg-blue-600 text-white" onClick={apply}>Apply Filters</button>
    </div>
  );
}
