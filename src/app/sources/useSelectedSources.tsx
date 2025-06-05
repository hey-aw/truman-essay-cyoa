'use client'
import { createContext, useContext, useState, ReactNode } from 'react'

export interface Source {
  id: string
  title: string
  author: string
  date: string
  type: string
  perspective: string
  who: string
  why: string
  link: string
  citation: {
    mla: string
  }
}

interface SelectedSourcesContextValue {
  selected: Source[]
  toggleSource: (source: Source) => void
  clear: () => void
}

const SelectedSourcesContext = createContext<SelectedSourcesContextValue | undefined>(undefined)

export function SelectedSourcesProvider({ children }: { children: ReactNode }) {
  const [selected, setSelected] = useState<Source[]>([])

  const toggleSource = (source: Source) => {
    setSelected((prev) => {
      const exists = prev.find((s) => s.id === source.id)
      if (exists) {
        return prev.filter((s) => s.id !== source.id)
      }
      if (prev.length >= 5) {
        alert('You can only select up to 5 sources.')
        return prev
      }
      return [...prev, source]
    })
  }

  const clear = () => setSelected([])

  return (
    <SelectedSourcesContext.Provider value={{ selected, toggleSource, clear }}>
      {children}
    </SelectedSourcesContext.Provider>
  )
}

export const useSelectedSources = () => {
  const ctx = useContext(SelectedSourcesContext)
  if (!ctx) {
    throw new Error('useSelectedSources must be used within SelectedSourcesProvider')
  }
  return ctx
}
