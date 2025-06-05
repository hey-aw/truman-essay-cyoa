'use client'
import { useState } from 'react'
import SourceList from './SourceList'
import { SelectedSourcesProvider } from './useSelectedSources'
import FilterControls from '../../components/FilterControls'
import SelectedSourcesPanel from '../../components/SelectedSourcesPanel'

export default function SourceBrowser() {
  const [perspective, setPerspective] = useState('All')
  const [type, setType] = useState('All')

  return (
    <SelectedSourcesProvider>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <FilterControls
            perspective={perspective}
            setPerspective={setPerspective}
            type={type}
            setType={setType}
          />
          <SourceList perspective={perspective} type={type} />
        </div>
        <SelectedSourcesPanel />
      </div>
    </SelectedSourcesProvider>
  )
}
