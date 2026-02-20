import { Target, Heart, Cpu, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageHeader from "../components/shared/PageHeader";
import SectionReveal from "../components/shared/SectionReveal";
import GlassCard from "../components/shared/GlassCard";

const values = [
  { icon: Target, title: "Precision", desc: "Every automation is built to be reliable, accurate, and production-ready." },
  { icon: Heart, title: "Craft", desc: "We treat code as craft. Clean architecture, thorough testing, clear documentation." },
  { icon: Cpu, title: "Innovation", desc: "We explore new technologies and approaches to solve problems more elegantly." },
  { icon: Users, title: "Partnership", desc: "We work alongside our clients, not just for them. Your success is our success." },
];

const techStack = [
  "Python", "TypeScript", "React", "FastAPI", "Scrapy", "Playwright",
  "Celery", "Redis", "PostgreSQL", "Docker", "AWS", "GitHub Actions",
];

const timeline = [
  { year: "2023", title: "Founded", desc: "Botnerva Technologies started as a side project building web scrapers." },
  { year: "2023", title: "First Clients", desc: "Delivered automation solutions to 5 early clients in e-commerce and finance." },
  { year: "2024", title: "Product Suite", desc: "Launched the Web Scraper Suite and Automation Checkers as productized offerings." },
  { year: "2024", title: "Growth", desc: "Expanded to 20+ active clients and began R&D on the Workflow Orchestrator." },
  { year: "2025", title: "Today", desc: "Continuing to build, innovate, and help businesses automate the mundane." },
];

const About = () => (
  <main>
    <PageHeader
      title="About Botnerva"
      subtitle="We're a team of automation enthusiasts who believe in building tools that work while you sleep."
    />

    <div className="container mx-auto px-4 pb-24">
      {/* Mission */}
      <SectionReveal className="max-w-3xl mx-auto text-center mb-20">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Our Mission</h2>
        <p className="text-lg text-muted-foreground">
          To democratize automation by building Python-powered tools that are reliable, affordable, and accessible to businesses of all sizes. We automate the mundane so you can amplify the intelligent.
        </p>
      </SectionReveal>

      {/* Values */}
      <SectionReveal className="mb-20">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">Our Values</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <GlassCard key={i} delay={i * 0.1}>
              <v.icon size={24} className="text-primary mb-3" />
              <h3 className="text-lg font-semibold text-foreground mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </GlassCard>
          ))}
        </div>
      </SectionReveal>

      {/* Tech Stack */}
      <SectionReveal className="mb-20">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">Our Stack</h2>
        <div className="flex flex-wrap gap-3 justify-center max-w-2xl mx-auto">
          {techStack.map((t) => (
            <span key={t} className="px-4 py-2 rounded-lg glass text-sm font-mono text-foreground hover-lift">
              {t}
            </span>
          ))}
        </div>
      </SectionReveal>

      {/* Timeline */}
      <SectionReveal>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">Our Journey</h2>
        <div className="max-w-2xl mx-auto space-y-0">
          {timeline.map((t, i) => (
            <div key={i} className="flex gap-6 relative">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                {i < timeline.length - 1 && <div className="w-px flex-1 bg-border/50" />}
              </div>
              <div className="pb-8">
                <span className="text-xs font-mono text-primary">{t.year}</span>
                <h3 className="text-lg font-semibold text-foreground">{t.title}</h3>
                <p className="text-sm text-muted-foreground">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionReveal>

      <div className="text-center mt-12">
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold hover:opacity-90 transition-opacity glow-cyan"
        >
          Work with Us <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  </main>
);

export default About;
