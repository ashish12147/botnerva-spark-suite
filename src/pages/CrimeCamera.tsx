import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Camera,
  CheckCircle2,
  CloudUpload,
  Fingerprint,
  KeyRound,
  LockKeyhole,
  ShieldCheck,
  Smartphone,
  Video,
  WifiOff,
} from "lucide-react";
import SectionReveal from "../components/shared/SectionReveal";

const protections = [
  {
    icon: CloudUpload,
    title: "Secured while you record",
    description:
      "CrimeCamera is being built to protect footage continuously instead of waiting for a recording to finish before backing it up.",
  },
  {
    icon: LockKeyhole,
    title: "Encrypted evidence",
    description:
      "Recording chunks are designed to be encrypted before cloud storage, reducing the value of a stolen or damaged device to an attacker.",
  },
  {
    icon: ShieldCheck,
    title: "Protected after stopping",
    description:
      "Stopping, interrupting, or killing a recording is designed to lock the captured evidence rather than expose it for quick deletion.",
  },
  {
    icon: Fingerprint,
    title: "Tamper-evident integrity",
    description:
      "Chunk hashes and an ordered integrity chain are planned to make later alteration detectable and preserve a clearer evidence trail.",
  },
];

const scenarios = [
  "Road rage and traffic disputes",
  "Harassment, threats, or intimidation",
  "Accidents and public incidents",
  "Bullying or physical confrontations",
  "Situations where a phone may be seized or destroyed",
  "Any moment where preserving what happened matters",
];

const CrimeCamera = () => {
  return (
    <main className="relative overflow-hidden">
      <section className="min-h-screen flex items-center justify-center relative mesh-gradient pt-24">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="max-w-5xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-muted-foreground mb-7">
              <ShieldCheck size={14} className="text-primary" />
              A BotNerva Technologies product · In development
            </div>

            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center glow-cyan">
                <Camera size={28} className="text-primary-foreground" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
                Crime<span className="text-gradient">Camera</span>
              </h1>
            </div>

            <p className="text-2xl md:text-4xl font-semibold text-foreground mb-5 leading-tight">
              Record it. Secure it.
              <br />
              <span className="text-gradient">Even if your phone doesn't survive.</span>
            </p>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
              A safety-first camera app being built to preserve important footage beyond the device that captured it. If a phone is snatched, damaged, powered off, or the recording is interrupted, already-secured footage is designed to remain protected in the cloud.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold hover:opacity-90 transition-opacity glow-cyan"
              >
                Ask about early access <ArrowRight size={18} />
              </Link>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl glass text-foreground font-semibold hover:bg-secondary/50 transition-colors"
              >
                How it works
              </a>
            </div>

            <div className="mt-14 max-w-2xl mx-auto glass rounded-2xl p-5 text-left">
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                  <span className="font-semibold text-foreground">RECORDING</span>
                </div>
                <span className="font-mono text-muted-foreground">02:47</span>
              </div>
              <div className="grid sm:grid-cols-2 gap-3 text-sm">
                <div className="rounded-xl bg-primary/10 border border-primary/20 p-4">
                  <p className="text-primary font-semibold mb-1">Cloud protected</p>
                  <p className="text-muted-foreground">Secured through 02:45.8</p>
                </div>
                <div className="rounded-xl bg-secondary/40 border border-border p-4">
                  <p className="text-foreground font-semibold mb-1">Encrypted chunks</p>
                  <p className="text-muted-foreground">84 safely received</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <SectionReveal className="py-24" id="how-it-works">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">The idea</p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-5">
              The recording should survive the phone.
            </h2>
            <p className="text-muted-foreground text-lg">
              Traditional camera apps usually leave the complete recording on the device until the file is finished or backed up later. CrimeCamera is being designed around a different assumption: the device itself may become unavailable during the incident.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              { icon: Video, step: "01", title: "Record", text: "Open CrimeCamera and begin capturing immediately." },
              { icon: KeyRound, step: "02", title: "Encrypt", text: "Small video chunks are protected before leaving the device." },
              { icon: CloudUpload, step: "03", title: "Secure", text: "Chunks are uploaded continuously as connectivity allows." },
              { icon: ShieldCheck, step: "04", title: "Preserve", text: "Already-secured footage remains tied to the user's protected account." },
            ].map((item) => (
              <div key={item.step} className="glass rounded-2xl p-6 relative">
                <span className="text-xs font-mono text-primary/70">{item.step}</span>
                <item.icon size={28} className="text-primary my-5" />
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionReveal>

      <SectionReveal className="py-24 bg-navy-deep/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">Built around failure</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Protection shouldn't depend on a perfect ending.</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              CrimeCamera is being designed for the exact moment normal recording workflows become unreliable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {protections.map((item) => (
              <div key={item.title} className="glass rounded-2xl p-7">
                <item.icon size={28} className="text-primary mb-5" />
                <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionReveal>

      <SectionReveal className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">When it matters</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5">
                Not every dangerous situation looks like a crime scene.
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-7">
                The product is intentionally broader than crime reporting. It is for moments when a person wants an independent record of what happened and cannot assume their phone will remain safely in their hands.
              </p>
              <div className="space-y-3">
                {scenarios.map((scenario) => (
                  <div key={scenario} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground">{scenario}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass rounded-3xl p-8 md:p-10">
              <Smartphone size={36} className="text-primary mb-6" />
              <h3 className="text-2xl font-bold text-foreground mb-4">If the device disappears</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Destroying or taking the phone cannot erase video chunks that have already reached protected remote storage. If connectivity drops, the app is being designed to preserve pending chunks locally and resume securing them when a connection returns.
              </p>
              <div className="flex gap-3 rounded-xl border border-border bg-secondary/30 p-4">
                <WifiOff size={20} className="text-primary shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  No camera app can guarantee remote protection while a device has no network connection. CrimeCamera will show exactly how much footage has actually been secured.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionReveal>

      <SectionReveal className="py-24 bg-navy-deep/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto glass rounded-3xl p-8 md:p-12 text-center">
            <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">Privacy & recovery</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5">Protected from the person holding the phone.</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-7 max-w-3xl mx-auto">
              CrimeCamera is being built so an unlocked phone alone is not enough to delete, export, or expose protected evidence. Recovery is intended to require verified account ownership with an auditable process rather than an informal support backdoor.
            </p>
            <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <LockKeyhole size={16} className="text-primary" />
              Security architecture in active development
            </div>
          </div>
        </div>
      </SectionReveal>

      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">CrimeCamera</p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-5">
              Record it. Secure it.
              <br />
              <span className="text-gradient">Even if your phone doesn't survive.</span>
            </h2>
            <p className="text-muted-foreground mb-8">CrimeCamera is a product by BotNerva Technologies.</p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold hover:opacity-90 transition-opacity glow-cyan"
            >
              Contact BotNerva <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CrimeCamera;
