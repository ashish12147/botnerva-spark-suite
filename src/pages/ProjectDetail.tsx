import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import GlassCard from "../components/shared/GlassCard";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Project not found</h1>
          <Link to="/projects" className="text-primary hover:underline">← Back to Projects</Link>
        </div>
      </div>
    );
  }

  return (
    <main className="pt-28 pb-24">
      <div className="container mx-auto px-4">
        <Link to="/projects" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary mb-8">
          <ArrowLeft size={14} /> Back to Projects
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="flex items-start gap-4 mb-8">
            <div className="p-3 rounded-xl bg-primary/10">
              <project.icon size={32} className="text-primary" />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h1 className="text-3xl md:text-4xl font-bold text-foreground">{project.title}</h1>
                {project.isConcept && (
                  <span className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent font-medium">Concept</span>
                )}
              </div>
              <p className="text-muted-foreground max-w-2xl">{project.longDescription}</p>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Features */}
          <GlassCard hover={false}>
            <h2 className="text-xl font-bold text-foreground mb-4">Key Features</h2>
            <ul className="space-y-3">
              {project.features.map((f, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle size={16} className="text-primary flex-shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
          </GlassCard>

          {/* Tech Stack + Workflow */}
          <div className="space-y-6">
            <GlassCard hover={false}>
              <h2 className="text-xl font-bold text-foreground mb-4">Tech Stack</h2>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((t) => (
                  <span key={t} className="px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground text-sm font-mono">{t}</span>
                ))}
              </div>
            </GlassCard>

            <GlassCard hover={false}>
              <h2 className="text-xl font-bold text-foreground mb-4">Workflow</h2>
              {/* SVG workflow diagram */}
              <svg viewBox="0 0 400 80" className="w-full" aria-label="Workflow diagram">
                {["Configure", "Execute", "Process", "Export"].map((step, i) => (
                  <g key={step}>
                    <rect x={i * 100 + 5} y={20} width={80} height={40} rx={8} fill="hsl(185, 72%, 48%)" fillOpacity={0.15} stroke="hsl(185, 72%, 48%)" strokeOpacity={0.4} strokeWidth={1} />
                    <text x={i * 100 + 45} y={44} textAnchor="middle" fill="hsl(185, 72%, 48%)" fontSize={11} fontFamily="Inter">{step}</text>
                    {i < 3 && (
                      <line x1={i * 100 + 88} y1={40} x2={i * 100 + 105} y2={40} stroke="hsl(185, 72%, 48%)" strokeOpacity={0.4} strokeWidth={1.5} markerEnd="url(#arrowhead)" />
                    )}
                  </g>
                ))}
                <defs>
                  <marker id="arrowhead" markerWidth="6" markerHeight="4" refX="6" refY="2" orient="auto">
                    <polygon points="0 0, 6 2, 0 4" fill="hsl(185, 72%, 48%)" fillOpacity={0.6} />
                  </marker>
                </defs>
              </svg>
            </GlassCard>

            <GlassCard hover={false}>
              <h2 className="text-xl font-bold text-foreground mb-3">Categories</h2>
              <div className="flex flex-wrap gap-2">
                {project.categories.map((c) => (
                  <span key={c} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">{c}</span>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold hover:opacity-90 transition-opacity glow-cyan"
          >
            Request a Demo <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </main>
  );
};

export default ProjectDetail;
