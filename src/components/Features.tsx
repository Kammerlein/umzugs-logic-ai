import { Brain, Route, DollarSign, TrendingUp, Zap, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Brain,
    title: "AI Підбір Клієнтів",
    description: "Штучний інтелект автоматично знаходить клієнтів, чиї маршрути збігаються з вашими порожніми ділянками.",
    color: "text-secondary-glow"
  },
  {
    icon: Route,
    title: "Динамічна Оптимізація",
    description: "Маршрути оптимізуються в реальному часі з урахуванням трафіку, стану доріг та завантаженості.",
    color: "text-secondary"
  },
  {
    icon: DollarSign,
    title: "Розумне Ціноутворення",
    description: "AI аналізує попит, відстань, завантаженість та ринкові умови для оптимального ціноутворення.",
    color: "text-accent"
  },
  {
    icon: TrendingUp,
    title: "Прогнозування Попиту",
    description: "Передбачайте піки завантаження та плануйте маршрути завчасно для максимальної ефективності.",
    color: "text-secondary-glow"
  },
  {
    icon: Zap,
    title: "Миттєве З'єднання",
    description: "Автоматичне з'єднання перевізників і клієнтів за секунди. Без зайвих кроків та очікування.",
    color: "text-accent"
  },
  {
    icon: Shield,
    title: "Безпека і Надійність",
    description: "Верифікація учасників, відстеження вантажів та гарантії виконання замовлень.",
    color: "text-secondary"
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-accent opacity-50" />
      
      <div className="container px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 animate-fade-in">
          <div className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary font-medium text-sm">
            Можливості платформи
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Інтелектуальні рішення для{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              ефективної логістики
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Використовуйте потужність штучного інтелекту для оптимізації кожного аспекту перевезень
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="p-6 hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-card border-border group cursor-pointer"
              >
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
