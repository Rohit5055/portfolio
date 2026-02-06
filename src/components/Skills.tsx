import { Code } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    skills: ["C#", "C++", "TypeScript", "JavaScript", "Python", "SQL"],
  },
  {
    title: "Frameworks & Libraries",
    skills: [".NET / ASP.NET Core", "React.js", "WPF", "SignalR"],
  },
  {
    title: "Architecture & APIs",
    skills: ["Microservices", "REST APIs", "gRPC", "MVVM"],
  },
  {
    title: "Security & Auth",
    skills: ["OAuth", "JWT", "Token-based Auth"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Git", "GitHub", "Jenkins", "CI/CD", "Agile"],
  },
  {
    title: "Data & ML",
    skills: ["SQL Server", "NoSQL", "Data Analysis", "Machine Learning"],
  },
];

const Skills = () => {
  return (
    <section className="bg-card rounded-lg shadow-sm border border-border p-6" id="skills">
      <div className="flex items-center gap-3 mb-6">
        <Code className="w-6 h-6 text-foreground" />
        <h2 className="text-xl font-semibold text-foreground">Skills</h2>
      </div>
      
      <div className="space-y-5">
        {skillCategories.map((category, index) => (
          <div key={index}>
            <h3 className="text-sm font-semibold text-foreground mb-2">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <span 
                  key={i}
                  className="px-3 py-1 text-sm bg-accent/10 text-accent rounded-full font-medium hover:bg-accent/20 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
