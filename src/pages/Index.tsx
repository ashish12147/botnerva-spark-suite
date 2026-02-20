import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Code, Zap, BarChart3, Bot, Globe, Mail, Star, Quote } from "lucide-react";
import SectionReveal from "../components/shared/SectionReveal";
import GlassCard from "../components/shared/GlassCard";
import TerminalDemo from "../components/home/TerminalDemo";
import ScraperDemo from "../components/home/ScraperDemo";
import { projects } from "../data/projects";

const stats = [
  { value: "99.9%", label: "Uptime" },
  { value: "10M+", label: "Records Processed" },
  { value: "50+", label: "Automations Deployed" },
  { value: "<2s", label: "Avg Response Time" },
];

const services = [
  { icon: Globe, title: "Web Scraping", desc: "Extract structured data from any website with anti-blocking & scheduling." },
  { icon: Bot, title: "Automation", desc: "Eliminate repetitive tasks with intelligent Python-powered workflows." },
  { icon: Code, title: "Custom Tooling", desc: "Bespoke scripts, APIs, and integrations tailored to your stack." },
  { icon: Zap, title: "Integrations", desc: "Connect your tools: CRMs, email, databases, cloud services." },
];

const testimonials = [
  { name: "Sarah Chen", role: "CTO, DataFlow Inc.", quote: "Botnerva's scraping suite saved us 40+ hours per week. The anti-blocking tech is top-notch.", rating: 5 },
  { name: "James Okwu", role: "Operations Lead, RetailSync", quote: "Their price monitoring automation caught a supplier error that would've cost us $50K. Incredible ROI.", rating: 5 },
];

const Index = () => {
  return (
    <main className="relative">
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden mesh-gradient">
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-muted-foreground mb-8">
              <Zap size={14} className="text-primary" />
              Python-powered automation studio
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-foreground">Automate the mundane.</span>
              <br />
              <span className="text-gradient">Amplify the intelligent.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              We build Python-powered automations, scrapers, checkers, and integration workflows that save time, reduce errors, and let you focus on what matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold hover:opacity-90 transition-opacity glow-cyan"
              >
                Explore Projects <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl glass text-foreground font-semibold hover:bg-secondary/50 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 max-w-3xl mx-auto"
          >
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gradient">{s.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <SectionReveal className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What We Do</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">End-to-end automation solutions from data extraction to intelligent workflows.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <GlassCard key={i} delay={i * 0.1}>
                <s.icon size={28} className="text-primary mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </GlassCard>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="text-primary hover:underline text-sm font-medium inline-flex items-center gap-1">
              View all services <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </SectionReveal>

      {/* Featured Projects */}
      <SectionReveal className="py-24 bg-navy-deep/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Battle-tested tools and concepts that drive real results.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.slice(0, 3).map((p, i) => (
              <GlassCard key={p.id} delay={i * 0.1}>
                <div className="flex items-start justify-between mb-4">
                  <p.icon size={24} className="text-primary" />
                  {p.isConcept && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-accent/10 text-accent">Concept</span>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{p.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.categories.map((c) => (
                    <span key={c} className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">{c}</span>
                  ))}
                </div>
                <Link
                  to={`/projects/${p.id}`}
                  className="inline-flex items-center gap-1 mt-4 text-sm text-primary hover:underline font-medium"
                >
                  View Details <ArrowRight size={14} />
                </Link>
              </GlassCard>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/projects" className="text-primary hover:underline text-sm font-medium inline-flex items-center gap-1">
              View all projects <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </SectionReveal>

      {/* Terminal Demo */}
      <SectionReveal className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">See It in Action</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Watch our CLI process tasks in real-time.</p>
          </div>
          <TerminalDemo />
        </div>
      </SectionReveal>

      {/* Scraper Demo */}
      <SectionReveal className="py-24 bg-navy-deep/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Interactive Demo</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Try a simulated data extraction — paste any URL below.</p>
          </div>
          <ScraperDemo />
        </div>
      </SectionReveal>

      {/* Testimonials */}
      <SectionReveal className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {testimonials.map((t, i) => (
              <GlassCard key={i} delay={i * 0.15}>
                <Quote size={20} className="text-primary/40 mb-3" />
                <p className="text-foreground mb-4 italic">"{t.quote}"</p>
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={14} className="fill-primary text-primary" />
                    ))}
                  </div>
                </div>
                <p className="text-sm font-semibold text-foreground mt-2">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </SectionReveal>
    </main>
  );
};

export default Index;
