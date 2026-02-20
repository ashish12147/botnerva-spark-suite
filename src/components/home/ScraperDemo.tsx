import { useState } from "react";
import { Search, ArrowRight } from "lucide-react";
import GlassCard from "../shared/GlassCard";

const mockResults = [
  { title: "Product Alpha", price: "$29.99", rating: "4.8", availability: "In Stock" },
  { title: "Product Beta", price: "$49.50", rating: "4.5", availability: "In Stock" },
  { title: "Product Gamma", price: "$19.00", rating: "4.9", availability: "Low Stock" },
  { title: "Product Delta", price: "$89.99", rating: "4.2", availability: "In Stock" },
];

const ScraperDemo = () => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<typeof mockResults | null>(null);

  const handleExtract = () => {
    if (!url.trim()) return;
    setLoading(true);
    setResults(null);
    setTimeout(() => {
      setLoading(false);
      setResults(mockResults);
    }, 1500);
  };

  return (
    <GlassCard hover={false} className="max-w-2xl mx-auto">
      <h3 className="text-lg font-bold text-foreground mb-4">🔍 Try the Scraper (Simulated)</h3>
      <div className="flex gap-2 mb-4">
        <div className="flex-1 relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="url"
            placeholder="Paste any URL to simulate extraction..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleExtract()}
            className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-secondary/50 border border-border/30 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
            aria-label="URL to scrape"
          />
        </div>
        <button
          onClick={handleExtract}
          disabled={loading}
          className="px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center gap-2"
        >
          Extract <ArrowRight size={14} />
        </button>
      </div>

      {loading && (
        <div className="text-center py-6">
          <div className="inline-block w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          <p className="text-sm text-muted-foreground mt-2">Extracting data...</p>
        </div>
      )}

      {results && (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/30">
                <th className="text-left py-2 text-muted-foreground font-medium">Title</th>
                <th className="text-left py-2 text-muted-foreground font-medium">Price</th>
                <th className="text-left py-2 text-muted-foreground font-medium">Rating</th>
                <th className="text-left py-2 text-muted-foreground font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {results.map((r, i) => (
                <tr key={i} className="border-b border-border/10">
                  <td className="py-2 text-foreground">{r.title}</td>
                  <td className="py-2 text-primary">{r.price}</td>
                  <td className="py-2 text-foreground">⭐ {r.rating}</td>
                  <td className="py-2">
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      r.availability === "In Stock" ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"
                    }`}>
                      {r.availability}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-xs text-muted-foreground mt-3">
            ⚠️ This is a simulated demo using predefined data. No actual scraping occurs.
          </p>
        </div>
      )}
    </GlassCard>
  );
};

export default ScraperDemo;
