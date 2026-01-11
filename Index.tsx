import JSLogo from "@/components/JSLogo";
import Quiz from "@/components/Quiz";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/context/LanguageContext";

const Index = () => {
  const { t, dir } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4" dir={dir}>
            <JSLogo />
            <div className={dir === "rtl" ? "text-right" : "text-left"}>
              <h1 className="text-xl md:text-2xl font-bold text-foreground">{t.header.title}</h1>
              <p className="text-sm text-muted-foreground">{t.header.subtitle}</p>
            </div>
          </div>
          <LanguageSwitcher />
        </div>
      </header>
      <main className="container mx-auto px-4 py-8 md:py-12">
        <Quiz />
      </main>
      <footer className="border-t border-border py-6 mt-auto">
        <div className="container mx-auto px-4 text-center space-y-2">
          <p className="text-sm text-muted-foreground">{t.footer}</p>
          <p className="text-xs text-muted-foreground/70">
            Made by <span className="font-semibold text-accent">ADAM</span> — a NewTech student
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
