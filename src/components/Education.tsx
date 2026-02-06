import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Master of Technology",
    field: "Computer Science Engineering",
    institution: "NIT Silchar",
    period: "2021 - 2023",
    grade: "CGPA: 9.9",
  },
  {
    degree: "Bachelor of Technology",
    field: "Computer Science Engineering",
    institution: "Kurukshetra University",
    period: "2017 - 2021",
  },
];

const Education = () => {
  return (
    <section className="bg-card rounded-lg shadow-sm border border-border p-6" id="education">
      <div className="flex items-center gap-3 mb-6">
        <GraduationCap className="w-6 h-6 text-foreground" />
        <h2 className="text-xl font-semibold text-foreground">Education</h2>
      </div>
      
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div 
            key={index}
            className="flex gap-4 pb-6 border-b border-border last:border-0 last:pb-0"
          >
            {/* Institution logo placeholder */}
            <div className="w-12 h-12 rounded-md bg-secondary flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-6 h-6 text-accent" />
            </div>
            
            <div className="flex-1">
              <h3 className="text-base font-semibold text-foreground">
                {edu.institution}
              </h3>
              <p className="text-sm text-foreground">
                {edu.degree}, {edu.field}
              </p>
              <p className="text-sm text-muted-foreground mt-0.5">
                {edu.period}
              </p>
              {edu.grade && (
                <p className="text-sm text-accent font-medium mt-1">
                  {edu.grade}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
