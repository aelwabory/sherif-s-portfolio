interface Stat {
  label: string;
  value: string;
  unit?: string;
}

interface ProjectStatsProps {
  stats?: Stat[];
}

export default function ProjectStats({ stats }: ProjectStatsProps) {
  const defaultStats = [
    { label: "Total Area", value: "8,000", unit: "Acres" },
    { label: "Residential Units", value: "120,000", unit: "Units" },
    { label: "Population", value: "600,000", unit: "Residents" },
    { label: "Green Spaces", value: "40%", unit: "Coverage" },
    { label: "Development Period", value: "15", unit: "Years" },
    { label: "Investment", value: "$20B", unit: "USD" }
  ];

  const displayStats = stats || defaultStats;

  return (
    <div className={`grid gap-8 justify-items-center ${
      displayStats.length === 1 ? 'grid-cols-1' :
      displayStats.length === 2 ? 'grid-cols-1 md:grid-cols-2' :
      displayStats.length === 3 ? 'grid-cols-1 md:grid-cols-3' :
      displayStats.length === 4 ? 'grid-cols-2 md:grid-cols-4' :
      displayStats.length === 5 ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-5' :
      'grid-cols-2 md:grid-cols-3 lg:grid-cols-6'
    }`}>
      {displayStats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="mb-2">
            <span className="text-3xl md:text-4xl font-bold text-primary">
              {stat.value}
            </span>
          </div>
          <div>
            {stat.unit && <p className="text-sm text-muted-foreground">{stat.unit}</p>}
            <p className="text-sm">{stat.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
