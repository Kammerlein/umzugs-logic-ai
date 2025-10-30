import { Truck } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Truck className="w-5 h-5 text-secondary-glow" />
              </div>
              <span className="text-xl font-bold text-foreground">UmzugsLOGIK</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Інтелектуальна платформа для оптимізації логістики з використанням AI
            </p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Продукт</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-secondary transition-colors">Можливості</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Ціни</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">API</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Інтеграції</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Компанія</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-secondary transition-colors">Про нас</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Блог</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Кар'єра</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Контакти</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Правова інформація</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-secondary transition-colors">Умови використання</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Конфіденційність</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Cookies</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Ліцензії</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2025 UmzugsLOGIK. Всі права захищені.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-secondary transition-colors">Facebook</a>
              <a href="#" className="hover:text-secondary transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-secondary transition-colors">Twitter</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
