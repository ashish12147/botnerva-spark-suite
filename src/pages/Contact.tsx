import { useState } from "react";
import { Send, CheckCircle, Mail, MapPin, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import PageHeader from "../components/shared/PageHeader";
import GlassCard from "../components/shared/GlassCard";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email";
    if (!form.message.trim()) e.message = "Message is required";
    if (form.name.length > 100) e.name = "Name too long";
    if (form.message.length > 1000) e.message = "Message too long (max 1000 chars)";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    // Simulated submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <main>
      <PageHeader
        title="Get in Touch"
        subtitle="Have a project in mind? Let's talk about how we can automate your workflows."
      />

      <div className="container mx-auto px-4 pb-24">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Form */}
          <GlassCard hover={false}>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <CheckCircle size={48} className="text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Message Sent!</h3>
                <p className="text-muted-foreground">We'll get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">Name *</label>
                  <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-secondary/50 border border-border/30 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Your name"
                    aria-required="true"
                    maxLength={100}
                  />
                  {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Email *</label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-secondary/50 border border-border/30 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="you@company.com"
                    aria-required="true"
                    maxLength={255}
                  />
                  {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-1">Company</label>
                  <input
                    id="company"
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-secondary/50 border border-border/30 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Company name (optional)"
                    maxLength={100}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Message *</label>
                  <textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-secondary/50 border border-border/30 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                    placeholder="Tell us about your project..."
                    aria-required="true"
                    maxLength={1000}
                  />
                  {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
                  <p className="text-xs text-muted-foreground mt-1">{form.message.length}/1000</p>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>Send Message <Send size={16} /></>
                  )}
                </button>
              </form>
            )}
          </GlassCard>

          {/* Info + Calendly */}
          <div className="space-y-6">
            <GlassCard hover={false}>
              <h3 className="text-lg font-bold text-foreground mb-4">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Mail size={16} className="text-primary" />
                  hello@botnerva.in
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <MapPin size={16} className="text-primary" />
                  Remote-first · India
                </div>
              </div>
            </GlassCard>

            <GlassCard hover={false}>
              <div className="flex items-center gap-3 mb-4">
                <Calendar size={20} className="text-primary" />
                <h3 className="text-lg font-bold text-foreground">Schedule a Call</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Prefer a live conversation? Book a 30-minute discovery call to discuss your automation needs.
              </p>
              <div className="glass rounded-lg p-8 text-center">
                <p className="text-sm text-muted-foreground">Calendly integration placeholder</p>
                <p className="text-xs text-muted-foreground mt-1">Connect your Calendly to enable booking</p>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
