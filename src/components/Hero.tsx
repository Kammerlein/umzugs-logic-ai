import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-truck.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Logistics optimization with AI" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero/90" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-secondary-glow/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 backdrop-blur-sm border border-secondary-glow/30 text-secondary-glow animate-pulse-glow">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Інтелектуальна логістика з AI</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground leading-tight">
            Оптимізуйте перевезення з{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              UmzugsLOGIK
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Штучний інтелект автоматично підбирає клієнтів та перевізників, оптимізує маршрути 
            і знижує витрати. Працюйте ефективніше з нашою AI-платформою.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 pt-4">
            <div className="flex items-center gap-2 text-primary-foreground/90">
              <TrendingUp className="w-5 h-5 text-secondary-glow" />
              <span className="text-lg font-semibold">До 40% економії</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/90">
              <Sparkles className="w-5 h-5 text-secondary-glow" />
              <span className="text-lg font-semibold">AI підбір за секунди</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button variant="hero" size="xl" className="group">
              Почати роботу
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl">
              Дізнатися більше
            </Button>
          </div>

          {/* Trust Indicator */}
          <p className="text-sm text-primary-foreground/60 pt-4">
            Реєстрація без зобов'язань • Підтримка 24/7 • Безкоштовний тестовий період
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
