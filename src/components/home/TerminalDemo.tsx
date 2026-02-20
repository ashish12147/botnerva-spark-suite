import { useState, useEffect, useRef } from "react";
import { Play, Pause } from "lucide-react";

const lines = [
  { type: "input" as const, text: "$ botnerva scrape --url https://example.com --format json" },
  { type: "output" as const, text: "⏳ Initializing scraper engine..." },
  { type: "output" as const, text: "✓ Connected to target. Extracting data..." },
  { type: "output" as const, text: "✓ Found 247 records across 12 pages." },
  { type: "output" as const, text: '✓ Exported to output/data.json (1.2 MB)' },
  { type: "input" as const, text: "$ botnerva automate --task check-prices --interval 6h" },
  { type: "output" as const, text: "⏳ Setting up price monitoring automation..." },
  { type: "output" as const, text: "✓ Monitoring 34 products. Next check in 6 hours." },
  { type: "output" as const, text: '✓ Alert rules configured: price drop > 10%' },
  { type: "input" as const, text: "$ botnerva status" },
  { type: "output" as const, text: "📊 Active tasks: 3 | Completed today: 127 | Errors: 0" },
  { type: "output" as const, text: "🚀 All systems operational. Uptime: 99.97%" },
];

const TerminalDemo = () => {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [isPaused, setIsPaused] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isPaused || visibleLines >= lines.length) return;
    const delay = lines[visibleLines]?.type === "input" ? 1200 : 600;
    const timer = setTimeout(() => {
      setVisibleLines((v) => v + 1);
    }, delay);
    return () => clearTimeout(timer);
  }, [visibleLines, isPaused]);

  useEffect(() => {
    if (visibleLines >= lines.length && !isPaused) {
      const timer = setTimeout(() => setVisibleLines(0), 3000);
      return () => clearTimeout(timer);
    }
  }, [visibleLines, isPaused]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [visibleLines]);

  return (
    <div className="glass rounded-xl overflow-hidden max-w-2xl mx-auto">
      <div className="flex items-center justify-between px-4 py-3 border-b border-border/30">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-destructive/60" />
          <div className="w-3 h-3 rounded-full bg-accent/40" />
          <div className="w-3 h-3 rounded-full bg-primary/40" />
        </div>
        <span className="text-xs text-muted-foreground font-mono">botnerva-cli</span>
        <button
          onClick={() => setIsPaused(!isPaused)}
          className="p-1 text-muted-foreground hover:text-foreground transition-colors"
          aria-label={isPaused ? "Resume" : "Pause"}
        >
          {isPaused ? <Play size={14} /> : <Pause size={14} />}
        </button>
      </div>
      <div ref={terminalRef} className="p-4 font-mono text-sm h-64 overflow-y-auto bg-navy-deep/50">
        {lines.slice(0, visibleLines).map((line, i) => (
          <div
            key={i}
            className={`mb-1 animate-fade-in ${
              line.type === "input" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            {line.text}
          </div>
        ))}
        {visibleLines < lines.length && (
          <span className="inline-block w-2 h-4 bg-primary animate-blink" />
        )}
      </div>
    </div>
  );
};

export default TerminalDemo;
