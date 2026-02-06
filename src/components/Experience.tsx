import { Briefcase, Building2 } from "lucide-react";

const experiences = [
  {
    role: "Software Engineer II",
    company: "Philips Innovation Campus",
    location: "Bangalore",
    period: "Sep 2025 - Present",
    description: "Working on password life-cycle management program for integrated security tool, responsible for authorization and entitlement using C++ and C#.",
  },
  {
    role: "Software Engineer I",
    company: "Philips Innovation Campus",
    location: "Bangalore", 
    period: "Jul 2023 - Sep 2025",
    highlights: [
      "Contributed to research-based projects for integrated security tool (Service Manual Protection) using C++ and C#",
      "Designed production-ready REST API with token-based authentication and corresponding gRPC service",
      "Developed cross-platform web application using React.js and TypeScript with SignalR WebSocket functionality",
    ],
  },
  {
    role: "R&D Intern",
    company: "Philips Innovation Campus",
    location: "Bangalore",
    period: "Aug 2022 - Jul 2023",
    highlights: [
      "Implemented multiple POCs including APIs, API gateways, and WPF applications",
      "Built tool search feature using WPF and installer using MVVM pattern",
    ],
  },
];

const Experience = () => {
  return (
    <section className="bg-card rounded-lg shadow-sm border border-border p-6" id="experience">
      <div className="flex items-center gap-3 mb-6">
        <Briefcase className="w-6 h-6 text-foreground" />
        <h2 className="text-xl font-semibold text-foreground">Experience</h2>
      </div>
      
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div 
            key={index}
            className="flex gap-4 pb-6 border-b border-border last:border-0 last:pb-0"
          >
            {/* Company icon */}
            <div className="w-12 h-12 rounded-md bg-accent/10 flex items-center justify-center flex-shrink-0">
              <Building2 className="w-6 h-6 text-accent" />
            </div>
            
            <div className="flex-1">
              <h3 className="text-base font-semibold text-foreground">
                {exp.role}
              </h3>
              <p className="text-sm text-foreground">{exp.company}</p>
              <p className="text-sm text-muted-foreground mt-0.5">
                {exp.period} · {exp.location}
              </p>
              
              {exp.description && (
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                  {exp.description}
                </p>
              )}
              
              {exp.highlights && (
                <ul className="mt-3 space-y-1.5">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                      <span className="text-accent mt-1.5">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
