import { Lightbulb, Sparkles, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageHeader from "../components/shared/PageHeader";
import GlassCard from "../components/shared/GlassCard";

const ideas = [
  {
    title: "AI-Powered Content Curator",
    desc: "An intelligent agent that scans multiple sources, summarizes content by topic, and delivers personalized briefings to your inbox.",
    status: "Researching",
    tags: ["AI", "NLP", "Automation"],
  },
  {
    title: "Visual Regression Tester",
    desc: "Automated screenshot comparison tool for websites. Detect unintended UI changes across deployments with pixel-level diffing.",
    status: "Prototyping",
    tags: ["Testing", "Computer Vision", "CI/CD"],
  },
  {
    title: "API Health Dashboard",
    desc: "Real-time monitoring of third-party API health, latency, and error rates. Aggregated status page for all your integrations.",
    status: "Ideation",
    tags: ["Monitoring", "APIs", "DevOps"],
  },
  {
    title: "Data Anonymizer Pipeline",
    desc: "Automated PII detection and anonymization for datasets. GDPR-compliant data masking for dev/test environments.",
    status: "Researching",
    tags: ["Privacy", "Data", "Compliance"],
  },
];

const statusColors: Record<string, string> = {
  Ideation: "bg-accent/10 text-accent",
  Researching: "bg-primary/10 text-primary",
  Prototyping: "bg-glow-cyan/10 text-primary",
};

const Labs = () => (
  <main>
    <PageHeader
      title="Labs"
      subtitle="Ideas in progress — experimental concepts and future directions we're exploring."
    />

    <div className="container mx-auto px-4 pb-24">
      <div className="flex items-center gap-2 mb-8 justify-center">
        <Sparkles size={18} className="text-primary" />
        <p className="text-sm text-muted-foreground">These are early-stage ideas. Some may become full products, others may evolve or merge.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {ideas.map((idea, i) => (
          <GlassCard key={i} delay={i * 0.1}>
            <div className="flex items-start justify-between mb-3">
              <Lightbulb size={20} className="text-primary" />
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${statusColors[idea.status] || ""}`}>
                {idea.status}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{idea.title}</h3>
            <p className="text-sm text-muted-foreground mb-4">{idea.desc}</p>
            <div className="flex flex-wrap gap-1.5">
              {idea.tags.map((t) => (
                <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground font-mono">{t}</span>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-muted-foreground mb-4">Have an idea? We'd love to hear it.</p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
        >
          Share your idea <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  </main>
);

export default Labs;
