import { LogIn } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
      <div className="glass-card rounded-2xl px-6 py-4 shadow-card transition-all duration-300 hover:shadow-glow">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold bg-gradient-accent bg-clip-text text-transparent">
              UmzugsLOGIK
            </div>
          </div>
          
          {/* Auth Button with glassmorphism effect */}
          <div className="button-wrap-modern">
            <div className="button-shadow-modern"></div>
            <button 
              className="modern-button"
              onClick={() => navigate('/auth')}
            >
              <span className="flex items-center gap-2">
                <LogIn className="h-4 w-4" />
                Реєстрація / Вхід
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
