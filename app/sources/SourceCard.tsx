'use client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Source } from './SourceList';
import useSelectedSources from './useSelectedSources';

export default function SourceCard({ source }: { source: Source }) {
  const { selected, toggleSource } = useSelectedSources();
  const isSelected = selected.some((s) => s.id === source.id);

  return (
    <Card>
      <CardHeader>
        <CardTitle>{source.title}</CardTitle>
        <div className="flex items-center gap-2 text-sm">
          <span>{source.author}</span>
          <Badge variant="secondary">{source.type}</Badge>
          <Badge>{source.perspective}</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        <Button variant={isSelected ? 'destructive' : 'default'} onClick={() => toggleSource(source)}>
          {isSelected ? 'Remove' : 'Add to Outline'}
        </Button>
        <Accordion type="single" collapsible>
          <AccordionItem value="info">
            <AccordionTrigger>Details</AccordionTrigger>
            <AccordionContent>
              <p className="text-sm mb-2">{source.why}</p>
              <p className="text-xs italic">{source.citation.mla}</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
}
