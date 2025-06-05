import SourceList from "./SourceList";
import SelectedSourcesPanel from "../../components/SelectedSourcesPanel";
import FilterControls from "../../components/FilterControls";

export default function SourcesPage() {
  return (
    <div className="space-y-4">
      <FilterControls />
      <SourceList />
      <SelectedSourcesPanel />
    </div>
  );
}
