'use client'
import { Dispatch, SetStateAction } from 'react'

interface Props {
  perspective: string
  setPerspective: Dispatch<SetStateAction<string>>
  type: string
  setType: Dispatch<SetStateAction<string>>
}

export default function FilterControls({ perspective, setPerspective, type, setType }: Props) {
  return (
    <div className="flex gap-4 mb-4">
      <div>
        <label className="mr-1">Perspective:</label>
        <select
          className="border px-2 py-1"
          value={perspective}
          onChange={(e) => setPerspective(e.target.value)}
        >
          <option>All</option>
          <option>Justified</option>
          <option>Unjustified</option>
          <option>Complex</option>
        </select>
      </div>
      <div>
        <label className="mr-1">Type:</label>
        <select className="border px-2 py-1" value={type} onChange={(e) => setType(e.target.value)}>
          <option>All</option>
          <option>Primary Source</option>
          <option>Secondary Source</option>
        </select>
      </div>
    </div>
  )
}
