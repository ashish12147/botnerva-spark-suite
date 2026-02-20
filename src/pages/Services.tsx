import { Globe, Bot, Zap, Code, Database, Shield, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageHeader from "../components/shared/PageHeader";
import SectionReveal from "../components/shared/SectionReveal";
import GlassCard from "../components/shared/GlassCard";
import ROICalculator from "../components/services/ROICalculator";

const services = [
  {
    icon: Globe,
    title: "Web Scraping & Data Extraction",
    desc: "Extract structured data from any website at scale. We handle dynamic content, pagination, anti-blocking, and data cleaning so you get clean, usable datasets.",
    examples: ["E-commerce price monitoring", "Lead generation from directories", "News & content aggregation", "Competitor analysis dashboards"],
  },
  {
    icon: Bot,
    title: "Process Automation",
    desc: "Eliminate repetitive manual tasks with intelligent Python automations. From data entry to report generation, we build systems that run 24/7.",
    examples: ["Automated data entry & validation", "Report generation & distribution", "File processing pipelines", "Scheduled task execution"],
  },
  {
    icon: Zap,
    title: "Integration Workflows",
    desc: "Connect your tools and systems seamlessly. We build bridges between your CRM, email, databases, and cloud services with reliable, monitored integrations.",
    examples: ["CRM ↔ email sync", "Database replication", "API gateway & middleware", "Webhook orchestration"],
  },
  {
    icon: Database,
    title: "Data Pipelines",
    desc: "Move, transform, and enrich data across systems. ETL/ELT pipelines designed for reliability, observability, and scale.",
    examples: ["ETL pipeline design", "Data warehouse loading", "Real-time streaming", "Data quality monitoring"],
  },
  {
    icon: Code,
    title: "Custom Tooling",
    desc: "Bespoke Python tools, CLIs, and scripts built to your exact specifications. When off-the-shelf doesn't cut it, we build what you need.",
    examples: ["Custom CLI utilities", "Internal dashboards", "API wrappers & SDKs", "Testing & QA automation"],
  },
  {
    icon: Shield,
    title: "Monitoring & Alerting",
    desc: "Keep eyes on what matters. Website uptime, price changes, stock availability, content updates — get notified instantly when things change.",
    examples: ["Uptime & health checks", "Price drop alerts", "Content change detection", "Performance monitoring"],
  },
];

const Services = () => (
  <main>
    <PageHeader
      title="Our Services"
      subtitle="End-to-end automation solutions built with Python, designed for reliability, and optimized for your workflow."
    />

    <div className="container mx-auto px-4 pb-24">
      <div className="space-y-16">
        {services.map((s, i) => (
          <SectionReveal key={i} delay={0.1}>
            <div className={`flex flex-col ${i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-8 items-start`}>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <s.icon size={24} className="text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">{s.title}</h2>
                </div>
                <p className="text-muted-foreground mb-6">{s.desc}</p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1 text-sm text-primary hover:underline font-medium"
                >
                  Discuss your project <ArrowRight size={14} />
                </Link>
              </div>
              <div className="flex-1 w-full">
                <GlassCard hover={false}>
                  <h4 className="text-sm font-semibold text-foreground mb-3">Example Use Cases</h4>
                  <ul className="space-y-2">
                    {s.examples.map((ex, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {ex}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </div>
            </div>
          </SectionReveal>
        ))}
      </div>

      {/* ROI Calculator */}
      <SectionReveal className="py-24">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Calculate Your Savings</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">See how much automation can save your team annually.</p>
        </div>
        <ROICalculator />
      </SectionReveal>
    </div>
  </main>
);

export default Services;
