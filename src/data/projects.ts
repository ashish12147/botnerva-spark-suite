import { Globe, Bot, Mail, FileText, Workflow, Shield, Camera } from "lucide-react";

export type ProjectCategory = "Products" | "Scraping" | "Automation" | "Integrations" | "Monitoring" | "Concepts";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  categories: ProjectCategory[];
  icon: typeof Globe;
  techStack: string[];
  features: string[];
  isConcept: boolean;
}

export const projects: Project[] = [
  {
    id: "crimecamera",
    title: "CrimeCamera",
    description: "Record it. Secure it. Even if your phone doesn't survive.",
    longDescription: "CrimeCamera by BotNerva Technologies is a safety-first recording product in active development. It is designed to encrypt and secure small recording chunks continuously so footage that has already reached protected remote storage can survive a phone being snatched, damaged, powered off, or otherwise made unavailable during an incident.",
    categories: ["Products", "Monitoring"],
    icon: Camera,
    techStack: ["Android", "Kotlin", "Supabase", "Encrypted Cloud Storage"],
    features: [
      "Continuous encrypted recording chunks",
      "Cloud protection while recording",
      "PIN-protected evidence access",
      "Server-side deletion protection",
      "Tamper-evident integrity chain",
      "Verified evidence recovery workflow",
    ],
    isConcept: false,
  },
  {
    id: "web-scraper-suite",
    title: "Web Scraper Suite",
    description: "Configurable scrapers with scheduling, data export (CSV/JSON), and anti-blocking best practices.",
    longDescription: "A comprehensive scraping toolkit designed for reliability and scale. Configure targets via YAML or UI, schedule recurring jobs, handle pagination and dynamic content, and export clean data to CSV, JSON, or directly to databases. Includes rotating proxies, request throttling, and fingerprint randomization.",
    categories: ["Scraping"],
    icon: Globe,
    techStack: ["Python", "Scrapy", "Playwright", "Redis", "PostgreSQL"],
    features: [
      "YAML-based scraper configuration",
      "Scheduled & on-demand execution",
      "Anti-blocking: proxy rotation, throttling, header randomization",
      "Multi-format export: CSV, JSON, database",
      "Dashboard with job status & logs",
      "Webhook notifications on completion",
    ],
    isConcept: false,
  },
  {
    id: "automation-checkers",
    title: "Automation Checkers",
    description: "Monitoring automations: uptime checks, price tracking, stock alerts, and website change detection.",
    longDescription: "Always-on monitoring agents that watch what matters. Track website uptime, detect price drops on e-commerce sites, receive stock availability alerts, and get notified when web pages change. Configure thresholds, intervals, and notification channels via a clean dashboard.",
    categories: ["Automation", "Monitoring"],
    icon: Bot,
    techStack: ["Python", "Celery", "BeautifulSoup", "SQLite", "SMTP"],
    features: [
      "Uptime monitoring with latency tracking",
      "Price drop detection with threshold alerts",
      "Stock availability notifications",
      "Website change detection with diff view",
      "Multi-channel alerts: email, Slack, webhook",
      "Historical data & trend charts",
    ],
    isConcept: false,
  },
  {
    id: "outlook-mail-automation",
    title: "Outlook Mail Automation",
    description: "Rule-driven mailbox triage, auto-replies, attachment handling, and reporting.",
    longDescription: "Tame your inbox with intelligent automation. Define rules based on sender, subject, body content, or attachments. Auto-sort, auto-reply, extract and save attachments, and generate daily digest reports. Integrates with Microsoft Graph API for secure, modern access.",
    categories: ["Automation", "Integrations"],
    icon: Mail,
    techStack: ["Python", "Microsoft Graph API", "OAuth2", "Pandas"],
    features: [
      "Rule-based email classification",
      "Automated replies with templates",
      "Attachment extraction & cloud storage",
      "Daily/weekly digest reports",
      "Priority inbox scoring",
      "Audit trail for all actions",
    ],
    isConcept: false,
  },
  {
    id: "smart-document-parser",
    title: "Smart Document Parser",
    description: "Extract fields from PDFs/emails, normalize data, and export to sheets or CRM systems.",
    longDescription: "Intelligent document processing that understands structure. Upload invoices, contracts, or emails and extract key fields automatically using NLP and layout analysis. Normalize extracted data and push it to Google Sheets, Airtable, or your CRM. Supports batch processing.",
    categories: ["Automation", "Concepts"],
    icon: FileText,
    techStack: ["Python", "spaCy", "PyMuPDF", "OpenAI API", "REST APIs"],
    features: [
      "PDF & email parsing with layout detection",
      "Named entity recognition for key fields",
      "Template matching for recurring document types",
      "Batch upload & processing queue",
      "Export to Sheets, Airtable, Salesforce",
      "Confidence scoring & manual review queue",
    ],
    isConcept: true,
  },
  {
    id: "workflow-orchestrator",
    title: "Workflow Orchestrator",
    description: "Low-code UI to chain Python tasks, set triggers, and manage notifications.",
    longDescription: "Build automation pipelines without deep coding. Drag-and-drop Python task blocks, connect them with triggers (cron, webhook, event), and add notification steps. Monitor runs in real-time, retry failures, and version your workflows. Think Zapier, but Python-native.",
    categories: ["Automation", "Integrations", "Concepts"],
    icon: Workflow,
    techStack: ["Python", "FastAPI", "React", "Celery", "PostgreSQL"],
    features: [
      "Visual workflow builder with drag-and-drop",
      "Trigger types: cron, webhook, file watcher, event",
      "Built-in Python task library",
      "Real-time execution monitoring",
      "Automatic retry & error handling",
      "Workflow versioning & rollback",
    ],
    isConcept: true,
  },
  {
    id: "compliance-audit-logger",
    title: "Compliance & Audit Logger",
    description: "Immutable logs for automations with alerting, traceability, and compliance reporting.",
    longDescription: "Every automation action logged immutably. Track who triggered what, when, and what changed. Generate compliance reports for audits, set up real-time alerts for anomalies, and maintain a complete chain of custody for all automated operations.",
    categories: ["Monitoring", "Concepts"],
    icon: Shield,
    techStack: ["Python", "Elasticsearch", "PostgreSQL", "FastAPI"],
    features: [
      "Immutable append-only log storage",
      "Full chain of custody tracking",
      "Real-time anomaly detection & alerts",
      "Compliance report generation (PDF)",
      "Role-based access to logs",
      "Data retention policy management",
    ],
    isConcept: true,
  },
];

export const categories: ProjectCategory[] = ["Products", "Scraping", "Automation", "Integrations", "Monitoring", "Concepts"];
