export default function ProjectStats() {
  const stats = [
    { label: "Total Area", value: "8,000", unit: "Acres" },
    { label: "Residential Units", value: "120,000", unit: "Units" },
    { label: "Population", value: "600,000", unit: "Residents" },
    { label: "Green Spaces", value: "40%", unit: "Coverage" },
    { label: "Development Period", value: "15", unit: "Years" },
    { label: "Investment", value: "$20B", unit: "USD" }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="mb-2">
            <span className="text-3xl md:text-4xl font-bold text-primary">
              {stat.value}
            </span>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">{stat.unit}</p>
            <p className="text-sm">{stat.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
