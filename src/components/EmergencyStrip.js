const emergencyNumbers = [
  { label: '🆘 Emergency', number: '112', description: 'National Emergency' },
  { label: '👩 Women Helpline', number: '181', description: 'Women in Distress' },
  { label: '💻 Cyber Crime', number: '1930', description: 'Report Cyber Crime' },
  { label: '👶 Child Helpline', number: '1098', description: 'Child Abuse' },
  { label: '🏥 Ambulance', number: '108', description: 'Medical Emergency' },
  { label: '🔥 Fire', number: '101', description: 'Fire Department' },
  { label: '👮 Police', number: '100', description: 'Police Emergency' },
  { label: '⚖️ Legal Aid', number: '15100', description: 'Free Legal Aid' },
];

export default function EmergencyStrip() {
  return (
    <section className="relative py-4 overflow-hidden bg-danger/5 border-y border-danger/20" aria-label="Emergency helplines">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center gap-3 mb-3 sm:mb-0 sm:absolute sm:left-6 sm:top-1/2 sm:-translate-y-1/2 sm:z-10">
          <span className="relative flex h-2.5 w-2.5 shrink-0">
            <span className="absolute inline-flex h-full w-full rounded-full bg-danger opacity-75 animate-ping" aria-hidden="true" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-danger" aria-hidden="true" />
          </span>
          <span className="text-xs font-bold uppercase tracking-wider text-danger">
            Emergency
          </span>
        </div>
      </div>

      <div className="overflow-x-auto no-scrollbar sm:pl-28">
        <div className="flex gap-3 px-4 sm:px-6 min-w-max">
          {emergencyNumbers.map((item) => (
            <a
              key={item.number}
              href={`tel:${item.number}`}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-danger/10 border border-danger/20 hover:bg-danger/20 hover:border-danger/30 transition-all duration-200 shrink-0"
              aria-label={`Call ${item.description} at ${item.number}`}
            >
              <span className="text-lg" aria-hidden="true">
                {item.label.split(' ')[0]}
              </span>
              <div>
                <div className="text-xs text-text-secondary leading-none mb-0.5">
                  {item.description}
                </div>
                <div className="text-sm font-bold text-danger font-[family-name:var(--font-outfit)]">
                  {item.number}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
