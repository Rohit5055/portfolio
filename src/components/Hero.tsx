import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import profileImage from "@/assets/profile.jfif";

const techWords = [
  { text: "C#", size: "text-lg", pos: "top-4 left-8" },
  { text: "React.js", size: "text-base", pos: "top-8 right-12" },
  { text: ".NET", size: "text-xl font-semibold", pos: "top-16 left-1/4" },
  { text: "TypeScript", size: "text-sm", pos: "top-6 left-1/2" },
  { text: "C++", size: "text-base", pos: "top-20 right-1/4" },
  { text: "Python", size: "text-sm", pos: "top-4 right-1/3" },
  { text: "SQL", size: "text-base", pos: "bottom-8 left-16" },
  { text: "REST APIs", size: "text-sm", pos: "bottom-12 right-20" },
  { text: "Microservices", size: "text-base", pos: "bottom-4 left-1/3" },
  { text: "Azure", size: "text-sm", pos: "bottom-16 right-1/3" },
  { text: "Git", size: "text-sm", pos: "top-12 left-12" },
  { text: "JWT", size: "text-xs", pos: "bottom-6 right-8" },
];

const Hero = () => {
  return (
    <section className="bg-card rounded-lg shadow-sm border border-border overflow-hidden relative">
      {/* Subtle tech word cloud background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none opacity-[0.08]">
        {techWords.map((word, index) => (
          <span
            key={index}
            className={`absolute ${word.size} ${word.pos} text-accent font-medium`}
          >
            {word.text}
          </span>
        ))}
      </div>
      
      {/* Profile section */}
      <div className="px-6 py-8 relative z-10">
        {/* Avatar with profile image */}
        <div className="w-36 h-36 md:w-44 md:h-44 rounded-full border-4 border-card bg-secondary overflow-hidden shadow-lg">
          <img 
            src={profileImage} 
            alt="Rohit Sharma" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="mt-4">
          <h1 className="text-2xl md:text-3xl font-semibold text-foreground">
            Rohit Sharma
          </h1>
          <p className="text-lg text-muted-foreground mt-1">
            Software Engineer II at Philips
          </p>
          <p className="text-base text-foreground mt-2 max-w-2xl leading-relaxed">
            Full-stack engineer crafting scalable, secure applications with 3+ years of experience in C#, C++, React.js, and cloud-native technologies.
          </p>
          
          <div className="flex items-center gap-2 mt-3 text-muted-foreground text-sm">
            <MapPin className="w-4 h-4" />
            <span>Bengaluru, India</span>
          </div>
          
          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-3 mt-5">
            <a 
              href="https://www.linkedin.com/in/profile-rohit-sharma/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-semibold hover:bg-accent/90 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              Connect
            </a>
            <a 
              href="mailto:off.rohit123@gmail.com" 
              className="flex items-center gap-2 px-4 py-2 border border-accent text-accent rounded-full text-sm font-semibold hover:bg-accent/5 transition-colors"
            >
              <Mail className="w-4 h-4" />
              Message
            </a>
            <a 
              href="https://github.com/Rohit5055" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border border-border text-foreground rounded-full text-sm font-semibold hover:bg-secondary transition-colors"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
