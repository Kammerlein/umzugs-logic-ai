import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Animated Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-96 h-96 bg-secondary-glow/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="container px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
            Готові оптимізувати ваші перевезення?
          </h2>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-primary-foreground/80 max-w-2xl mx-auto">
            Приєднуйтесь до UmzugsLOGIK сьогодні і відчуйте силу AI в логістиці. 
            Безкоштовний тестовий період на 14 днів.
          </p>

          {/* Benefits List */}
          <div className="flex flex-wrap justify-center gap-6 text-primary-foreground/90 text-sm pt-4">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-secondary-glow/30 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-secondary-glow" />
              </div>
              <span>Без кредитної картки</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-secondary-glow/30 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-secondary-glow" />
              </div>
              <span>Швидке налаштування</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-secondary-glow/30 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-secondary-glow" />
              </div>
              <span>Підтримка 24/7</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button variant="hero" size="xl" className="group">
              Розпочати безкоштовно
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground/50"
            >
              <Mail className="w-5 h-5" />
              Зв'язатися з нами
            </Button>
          </div>

          {/* Trust Statement */}
          <p className="text-sm text-primary-foreground/60 pt-8">
            Приєднуйтесь до сотень компаній, які вже оптимізували свої перевезення з UmzugsLOGIK
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
