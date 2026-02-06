import { Mail, Linkedin, Phone, MapPin, User } from "lucide-react";

const Contact = () => {
  return (
    <section className="bg-card rounded-lg shadow-sm border border-border p-6" id="contact">
      <div className="flex items-center gap-3 mb-6">
        <User className="w-6 h-6 text-foreground" />
        <h2 className="text-xl font-semibold text-foreground">Contact</h2>
      </div>
      
      <div className="space-y-4">
        <a 
          href="mailto:off.rohit123@gmail.com"
          className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary transition-colors group"
        >
          <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
            <Mail className="w-5 h-5 text-accent" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Email</p>
            <p className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">
              off.rohit123@gmail.com
            </p>
          </div>
        </a>
        
        <a 
          href="tel:+919085868029"
          className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary transition-colors group"
        >
          <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
            <Phone className="w-5 h-5 text-accent" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Phone</p>
            <p className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">
              +91 9085868029
            </p>
          </div>
        </a>
        
        <a 
          href="https://www.linkedin.com/in/profile-rohit-sharma/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary transition-colors group"
        >
          <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
            <Linkedin className="w-5 h-5 text-accent" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">LinkedIn</p>
            <p className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">
              profile-rohit-sharma
            </p>
          </div>
        </a>
        
        <div className="flex items-center gap-4 p-3 rounded-lg">
          <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
            <MapPin className="w-5 h-5 text-accent" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Location</p>
            <p className="text-sm font-medium text-foreground">
              Bengaluru, India
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
