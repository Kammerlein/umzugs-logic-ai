import { useState } from "react";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import AuthModal from "./AuthModal";

const Header = () => {
  const [authModalOpen, setAuthModalOpen] = useState(false);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
      <div className="bg-background/80 backdrop-blur-md border-2 border-primary/20 rounded-2xl px-6 py-4 shadow-card transition-all duration-300 hover:shadow-glow hover:border-primary/40 hover:bg-background/90">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold bg-gradient-accent bg-clip-text text-transparent">
              UmzugsLOGIK
            </div>
          </div>

          {/* Auth Button */}
          <Button 
            variant="hero" 
            size="default" 
            className="gap-2"
            onClick={() => setAuthModalOpen(true)}
          >
            <LogIn className="h-4 w-4" />
            Реєстрація / Вхід
          </Button>
        </div>
      </div>

      <AuthModal open={authModalOpen} onOpenChange={setAuthModalOpen} />
    </header>
  );
};

export default Header;
