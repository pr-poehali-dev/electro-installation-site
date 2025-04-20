
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-primary py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link to="/" className="text-2xl font-bold text-primary-foreground">
          НАМ ЭЛЕКТРИК
        </Link>
        
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-primary-foreground hover:text-primary-foreground/80 transition-colors">
            Главная
          </Link>
          <a href="#services" className="text-primary-foreground hover:text-primary-foreground/80 transition-colors">
            Услуги
          </a>
          <a href="#advantages" className="text-primary-foreground hover:text-primary-foreground/80 transition-colors">
            Преимущества
          </a>
          <a href="#contacts" className="text-primary-foreground hover:text-primary-foreground/80 transition-colors">
            Контакты
          </a>
        </div>
        
        <Button variant="secondary" className="gap-2">
          <Phone className="h-4 w-4" />
          <span className="hidden sm:inline">+7 (XXX) XXX-XX-XX</span>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
