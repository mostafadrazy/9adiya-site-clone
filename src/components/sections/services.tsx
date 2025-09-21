import React from 'react';
import { ArrowLeft } from 'lucide-react';

type Service = {
  title: string;
  description: string;
  actionText: string;
  href: string;
};

const servicesData: Service[] = [
  {
    title: "إدارة القضايا",
    description: "نظام متكامل لإدارة وتتبع جميع القضايا والملفات القانونية مع واجهة سهلة الاستخدام.",
    actionText: "اكتشف المزيد",
    href: "#",
  },
  {
    title: "متابعة المواعيد",
    description: "تنظيم وجدولة المواعيد والجلسات مع نظام تنبيهات متقدم لضمان عدم تفويت أي موعد.",
    actionText: "جرب الآن",
    href: "#",
  },
  {
    title: "إدارة الوثائق",
    description: "تخزين وتنظيم جميع الوثائق والمستندات القانونية مع إمكانية الوصول السريع والآمن.",
    actionText: "ابدأ الاستخدام",
    href: "#",
  },
];

const ServiceCard = ({ service }: { service: Service }) => (
  <div
    className="bg-card p-8 rounded-2xl flex flex-col border border-white/10 hover:border-primary/60 transition-all duration-300 hover:-translate-y-2 group text-right hover:shadow-2xl hover:shadow-primary/10"
  >
    <div className="flex-grow">
      <h3 className="text-2xl font-bold mb-4 text-card-foreground">{service.title}</h3>
      <p className="text-muted-foreground mb-8 leading-relaxed">{service.description}</p>
    </div>
    <a
      href={service.href}
      className="mt-auto w-full bg-primary text-primary-foreground text-center py-3 rounded-lg flex items-center justify-center gap-2 transform transition-all duration-300 hover:scale-[1.03] hover:bg-accent"
    >
      <span>{service.actionText}</span>
      <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
    </a>
  </div>
);

const ServicesSection = () => {
  return (
    <section className="py-20 bg-background" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">خدماتنا</h2>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed">
            نقدم مجموعة متكاملة من الخدمات لمساعدة المحامين والمكاتب القانونية في إدارة أعمالهم بكفاءة عالية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;