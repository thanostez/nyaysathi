export default function ActionSteps({ steps }) {
  if (!steps || steps.length === 0) return null;

  return (
    <div className="relative" role="list" aria-label="Action steps">
      {steps.map((step, index) => (
        <div
          key={index}
          className="relative flex gap-4 pb-8 last:pb-0"
          role="listitem"
        >
          {/* Connecting line */}
          {index < steps.length - 1 && (
            <div
              className="absolute left-5 top-10 w-0.5 h-full bg-gradient-to-b from-primary/40 to-primary/10"
              aria-hidden="true"
            />
          )}

          {/* Step number circle */}
          <div className="relative z-10 flex items-center justify-center w-10 h-10 shrink-0 rounded-full bg-primary/20 border border-primary/30 text-primary font-bold text-sm font-[family-name:var(--font-outfit)]">
            {index + 1}
          </div>

          {/* Step content */}
          <div className="flex-1 pt-1.5">
            <p className="text-sm sm:text-base text-text-primary leading-relaxed">
              {step}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
