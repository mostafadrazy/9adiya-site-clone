import { ArrowLeft } from 'lucide-react';

const FinalCta = () => {
  return (
    <section className="py-20 text-center bg-gradient-to-t from-[#1A1A1A] to-[#2A2A2A]">
      <div className="container px-4 mx-auto">
        <h2 className="text-4xl font-bold text-foreground md:text-5xl mb-4">
          ابدأ في تنظيم وإدارة قضاياك اليوم
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg leading-relaxed text-muted-foreground md:text-xl">
          انضم إلى آلاف المحامين الذين يستخدمون نظامنا لإدارة مكاتبهم بكفاءة عالية
        </p>
        <a
          href="#_"
          className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-primary-foreground bg-primary rounded-lg hover:bg-accent transition-colors duration-300"
        >
          <ArrowLeft className="w-6 h-6 mr-3" />
          ابدأ الآن مجاناً
        </a>
      </div>
    </section>
  );
};

export default FinalCta;