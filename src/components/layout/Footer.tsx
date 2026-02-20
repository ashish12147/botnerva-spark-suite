import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/50 bg-navy-deep/50">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center font-mono font-bold text-primary-foreground text-sm">
              B
            </div>
            <span className="text-lg font-bold text-foreground">Botnerva Technologies</span>
          </div>
          <p className="text-muted-foreground text-sm max-w-md mb-4">
            Automate the mundane. Amplify the intelligent. Python-powered automations, scrapers, and integration workflows that save time and reduce errors.
          </p>
          <div className="flex gap-3">
            {[
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Twitter, href: "#", label: "Twitter" },
              { icon: Mail, href: "mailto:hello@botnerva.in", label: "Email" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <s.icon size={18} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-foreground mb-3 text-sm">Company</h4>
          <div className="flex flex-col gap-2">
            {[
              { to: "/about", label: "About" },
              { to: "/services", label: "Services" },
              { to: "/projects", label: "Projects" },
              { to: "/blog", label: "Blog" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-foreground mb-3 text-sm">Get in Touch</h4>
          <div className="flex flex-col gap-2">
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact Form</Link>
            <a href="mailto:hello@botnerva.in" className="text-sm text-muted-foreground hover:text-primary transition-colors">hello@botnerva.in</a>
            <span className="text-sm text-muted-foreground">botnerva.in</span>
          </div>
        </div>
      </div>
      <div className="border-t border-border/30 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Botnerva Technologies. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
