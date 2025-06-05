import "../globals.css";
import { ReactNode } from "react";
import { SelectedSourcesProvider } from "./sources/useSelectedSources";
import { FilterProvider } from "../components/filterStore";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <FilterProvider>
          <SelectedSourcesProvider>
            {children}
          </SelectedSourcesProvider>
        </FilterProvider>
      </body>
    </html>
  );
}
