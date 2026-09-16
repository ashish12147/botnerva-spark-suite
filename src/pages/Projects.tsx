import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import PageHeader from "../components/shared/PageHeader";
import GlassCard from "../components/shared/GlassCard";
import { projects, categories, type ProjectCategory } from "../data/projects";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | "All">("All");

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.categories.includes(activeFilter));

  return (
    <main>
      <PageHeader
        title="Our Projects"
        subtitle="Battle-tested tools and forward-looking concepts that drive real results."
      />

      <div className="container mx-auto px-4 pb-24">
        {/* Filter chips */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {["All", ...categories].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat as ProjectCategory | "All")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === cat
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <GlassCard>
                  <div className="flex items-start justify-between mb-4">
                    <p.icon size={24} className="text-primary" />
                    {p.isConcept && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-accent/10 text-accent font-medium">Concept</span>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{p.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.categories.map((c) => (
                      <span key={c} className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">{c}</span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.techStack.slice(0, 3).map((t) => (
                      <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground font-mono">{t}</span>
                    ))}
                  </div>
                  <Link
                    to={p.id === "crimecamera" ? "/crimecamera" : `/projects/${p.id}`}
                    className="inline-flex items-center gap-1 text-sm text-primary hover:underline font-medium"
                  >
                    View Details <ArrowRight size={14} />
                  </Link>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </main>
  );
};

export default Projects;
