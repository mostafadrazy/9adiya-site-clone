import Image from 'next/image';
import { ArrowLeft, Mail } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-12 bg-[#0B0B0D] text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: '56px 56px',
        }}></div>
        <div className="animate-float absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-primary/15 rounded-full blur-3xl"></div>
        <div className="animate-float absolute -bottom-60 -right-20 w-[700px] h-[700px] bg-accent/20 rounded-full blur-3xl" style={{ animationDelay: '2s', animationDuration: '8s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="flex flex-col items-center gap-4 mb-4 mt-6">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1ccec13f-f879-4f22-bc17-2c4f672ea681-9adiya-site/assets/svgs/logo-1.svg"
              alt="Logo"
              width={180}
              height={120}
              className="opacity-90"
              priority
            />
          </div>

          {/* Headline */}
          <div className="space-y-4">
            <p className="text-muted-foreground">مرحباً بكم في</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
              <span className="text-white">المجموعة القانونية</span>
              <span className="mx-2 inline-block relative">
                <span className="text-white">J. Firm</span>
                <span className="absolute -bottom-3 left-0 right-0 h-2 bg-primary/20 rounded-full"></span>
                <span className="absolute -bottom-3 left-1/4 right-1/4 h-1 bg-primary rounded-full"></span>
              </span>
              <span className="text-white">للمحاماة</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              منصة حديثة لإدارة القضايا والملفات ومتابعة العملاء بكفاءة عالية—بتصميم أنيق وألوان زرقاء حديثة.
            </p>
          </div>

          {/* Email pill CTA */}
          <div className="mx-auto max-w-xl">
            <form className="flex items-center gap-2 bg-muted/40 border border-white/10 rounded-full p-2 pr-4 pl-4 backdrop-blur">
              <Mail className="w-5 h-5 text-muted-foreground" />
              <input
                type="email"
                placeholder="بريدك الإلكتروني للدعم القانوني"
                className="flex-1 bg-transparent placeholder:text-muted-foreground/70 text-sm md:text-base focus:outline-none"
                autoComplete="off"
              />
              <button type="submit" className="rounded-full bg-primary hover:bg-primary/90 text-white px-5 py-2.5 text-sm md:text-base font-bold transition-colors">
                لنتحدث
              </button>
            </form>
          </div>

          {/* Primary CTA */}
          <div className="flex justify-center">
            <a
              href="#"
              className="group inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-primary rounded-full shadow-[0_10px_30px_-10px_rgba(59,130,246,0.8)] transition-all hover:bg-primary/90"
            >
              ابدأ الآن مجاناً
              <span className="ms-2 inline-flex overflow-hidden transition-all duration-300 w-0 group-hover:w-6">
                <ArrowLeft className="h-5 w-5" />
              </span>
            </a>
          </div>

          {/* Top Advocates preview */}
          <div className="mt-8">
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <span className="font-semibold text-white">أفضل المحامين</span>
              <span className="h-1 w-16 bg-primary rounded-full"></span>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
              {['أحمد', 'سارة', 'خالد', 'ليلى'].map((name, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="size-20 rounded-full border border-white/10 bg-gradient-to-b from-white/10 to-white/5 grid place-items-center">
                    <span className="text-lg font-bold">{name[0]}</span>
                  </div>
                  <span className="mt-2 text-sm text-muted-foreground">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;