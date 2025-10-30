import { Truck, Users, Sparkles, CheckCircle } from "lucide-react";

const stepsCarrier = [
  {
    icon: Truck,
    title: "Введіть маршрут",
    description: "Вкажіть де ви їдете порожнім та коли"
  },
  {
    icon: Sparkles,
    title: "AI знаходить клієнтів",
    description: "Система автоматично підбирає відповідні замовлення"
  },
  {
    icon: CheckCircle,
    title: "Заробляйте більше",
    description: "Отримуйте дохід з кожного кілометра"
  }
];

const stepsClient = [
  {
    icon: Users,
    title: "Опишіть потребу",
    description: "Вкажіть що треба перевезти і куди"
  },
  {
    icon: Sparkles,
    title: "AI підбирає перевізника",
    description: "Система знайде оптимальний варіант за ціною та часом"
  },
  {
    icon: CheckCircle,
    title: "Економте кошти",
    description: "Платіть менше за швидке та надійне перевезення"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--secondary)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container px-4 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 animate-fade-in">
          <div className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary font-medium text-sm">
            Як це працює
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Просто, швидко,{" "}
            <span className="bg-gradient-secondary bg-clip-text text-transparent">
              інтелектуально
            </span>
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* For Carriers */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
                <Truck className="w-6 h-6 text-secondary" />
                Для перевізників
              </h3>
              <p className="text-muted-foreground">
                Перетворіть порожні маршрути на прибуток
              </p>
            </div>
            
            <div className="space-y-6">
              {stepsCarrier.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div 
                    key={index}
                    className="flex gap-4 group"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-soft">
                        <Icon className="w-6 h-6 text-secondary-foreground" />
                      </div>
                    </div>
                    <div className="space-y-1 pt-1">
                      <h4 className="font-semibold text-lg text-foreground">
                        {index + 1}. {step.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* For Clients */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
                <Users className="w-6 h-6 text-secondary" />
                Для клієнтів
              </h3>
              <p className="text-muted-foreground">
                Знайдіть перевізника швидко і вигідно
              </p>
            </div>
            
            <div className="space-y-6">
              {stepsClient.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div 
                    key={index}
                    className="flex gap-4 group"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-soft">
                        <Icon className="w-6 h-6 text-secondary-foreground" />
                      </div>
                    </div>
                    <div className="space-y-1 pt-1">
                      <h4 className="font-semibold text-lg text-foreground">
                        {index + 1}. {step.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
