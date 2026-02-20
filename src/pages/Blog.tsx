import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import PageHeader from "../components/shared/PageHeader";
import GlassCard from "../components/shared/GlassCard";

const posts = [
  {
    slug: "why-python-for-automation",
    title: "Why Python Is the Best Language for Business Automation",
    excerpt: "From web scraping to workflow orchestration, Python offers unmatched versatility, rich libraries, and rapid development. Here's why we build everything with it.",
    date: "Jan 15, 2025",
    readTime: "5 min read",
    tags: ["Python", "Automation"],
  },
  {
    slug: "web-scraping-best-practices",
    title: "Web Scraping Best Practices in 2025",
    excerpt: "Anti-blocking strategies, ethical considerations, and architecture patterns for building production-grade scrapers that last.",
    date: "Feb 2, 2025",
    readTime: "7 min read",
    tags: ["Scraping", "Best Practices"],
  },
];

const Blog = () => (
  <main>
    <PageHeader
      title="Blog"
      subtitle="Insights on automation, web scraping, and building reliable Python tools."
    />

    <div className="container mx-auto px-4 pb-24">
      <div className="max-w-3xl mx-auto space-y-6">
        {posts.map((post, i) => (
          <GlassCard key={i} delay={i * 0.1}>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs text-muted-foreground">{post.date}</span>
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <Clock size={12} /> {post.readTime}
              </span>
            </div>
            <h2 className="text-xl font-bold text-foreground mb-2">{post.title}</h2>
            <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                {post.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">{t}</span>
                ))}
              </div>
              <span className="text-sm text-primary font-medium inline-flex items-center gap-1 cursor-default">
                Read more <ArrowRight size={14} />
              </span>
            </div>
          </GlassCard>
        ))}

        <div className="glass rounded-xl p-8 text-center">
          <p className="text-muted-foreground mb-2">More posts coming soon</p>
          <p className="text-sm text-muted-foreground">We're working on in-depth guides about automation, scraping, and Python tooling. Stay tuned!</p>
        </div>
      </div>
    </div>
  </main>
);

export default Blog;
