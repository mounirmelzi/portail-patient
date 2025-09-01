import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function FilterTabs<T>({
  data,
  query,
  setQuery,
  condition,
  tabs,
  render,
}: {
  data: T[];
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  condition: (item: T) => boolean;
  tabs: { value: string; label: string }[];
  render: (item: T) => React.ReactNode;
}) {
  const filter = query == "all" ? data : data.filter(condition);

  return (
    <Tabs value={query} onValueChange={setQuery} className="w-full">
      <TabsList className="grid grid-cols-4 bg-transparent p-0">
        <TabsTrigger
          value="all"
          className="w-full rounded-none px-4 py-2 text-center text-sm font-medium text-muted-foreground data-[state=active]:text-primary"
        >
          Toutes
        </TabsTrigger>

        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className="w-full rounded-none px-4 py-2 text-center text-sm font-medium text-muted-foreground data-[state=active]:text-primary"
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>

      <TabsContent value={query} className="mt-6">
        <div className="space-y-4">{filter.map((item) => render(item))}</div>
      </TabsContent>
    </Tabs>
  );
}
