import { useState } from "react";
import { Calculator, TrendingUp } from "lucide-react";
import GlassCard from "../shared/GlassCard";

const ROICalculator = () => {
  const [hours, setHours] = useState(10);
  const [rate, setRate] = useState(50);

  const weeklySavings = hours * rate;
  const annualSavings = weeklySavings * 52;

  return (
    <GlassCard hover={false} className="max-w-lg mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-primary/10">
          <Calculator size={20} className="text-primary" />
        </div>
        <h3 className="text-xl font-bold text-foreground">ROI Calculator</h3>
      </div>

      <div className="space-y-5">
        <div>
          <label className="block text-sm text-muted-foreground mb-2">
            Hours saved per week: <span className="text-primary font-semibold">{hours}h</span>
          </label>
          <input
            type="range"
            min="1"
            max="40"
            value={hours}
            onChange={(e) => setHours(Number(e.target.value))}
            className="w-full accent-primary h-2 bg-secondary rounded-full appearance-none cursor-pointer"
            aria-label="Hours saved per week"
          />
        </div>

        <div>
          <label className="block text-sm text-muted-foreground mb-2">
            Hourly rate ($): <span className="text-primary font-semibold">${rate}</span>
          </label>
          <input
            type="range"
            min="10"
            max="200"
            step="5"
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className="w-full accent-primary h-2 bg-secondary rounded-full appearance-none cursor-pointer"
            aria-label="Hourly rate"
          />
        </div>

        <div className="border-t border-border/30 pt-4 mt-4">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp size={18} className="text-primary" />
            <span className="text-sm text-muted-foreground">Estimated Annual Savings</span>
          </div>
          <p className="text-4xl font-bold text-gradient">
            ${annualSavings.toLocaleString()}
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            ${weeklySavings.toLocaleString()}/week × 52 weeks
          </p>
        </div>
      </div>
    </GlassCard>
  );
};

export default ROICalculator;
