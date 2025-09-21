import React from 'react';
import {
  FileText,
  Calendar,
  Users,
  Shield,
  BarChart2,
  CheckCircle2,
  ArrowLeft,
} from "lucide-react";
import type { ElementType } from 'react';

type Feature = {
  icon: ElementType;
  title: string;
  description: string;
};

const featuresData: Feature[] = [
  {
    icon: FileText,
    title: "إدارة القضايا المتقدمة",
    description: "نظام شامل لإدارة وتتبع جميع القضايا والملفات القانونية بكفاءة عالية",
  },
  {
    icon: Calendar,
    title: "جدولة المواعيد الذكية",
    description: "متابعة تلقائية للجلسات والمواعيد مع تذكيرات فورية",
  },
  {
    icon: Users,
    title: "إدارة العملاء",
    description: "بوابة آمنة ومتكاملة لإدارة معلومات العملاء والتواصل معهم",
  },
  {
    icon: Shield,
    title: "أمان المعلومات",
    description: "حماية متقدمة للبيانات القانونية الحساسة والوثائق السرية",
  },
  {
    icon: BarChart2,
    title: "تقارير تفصيلية",
    description: "إنشاء تقارير شاملة وتحليلات دقيقة لأداء المكتب القانوني",
  },
  {
    icon: CheckCircle2,
    title: "تتبع حالة القضايا",
    description: "مراقبة مستمرة لتطورات القضايا مع إشعارات فورية",
  },
];

const FeatureCard = ({ feature }: { feature: Feature }) => {
  const Icon = feature.icon;
  return (
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-r from-[#4CD6B4]/40 to-[#4CD6B4]/20 rounded-3xl blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
      <div className="relative bg-[#2A2A2A]/50 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:border-[#4CD6B4]/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#4CD6B4]/25 h-full flex flex-col text-right">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#4CD6B4]/25 to-[#4CD6B4]/15 p-4 mb-6 group-hover:scale-110 group-hover:from-[#4CD6B4]/35 group-hover:to-[#4CD6B4]/25 transition-all duration-300 flex items-center justify-center">
          <Icon className="w-8 h-8 text-[#4CD6B4]" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#4CD6B4] transition-colors duration-300">
          {feature.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed text-lg mb-6">
          {feature.description}
        </p>
        <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 mt-auto self-start">
          <ArrowLeft className="w-6 h-6 text-[#4CD6B4]" />
        </div>
      </div>
    </div>
  );
};

const FeaturesGrid = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {featuresData.map((feature, index) => (
          <FeatureCard key={index} feature={feature} />
        ))}
      </div>
      <div className="text-center">
        <a
          href="#"
          className="inline-flex items-center justify-center gap-2 rounded-full text-lg font-bold bg-primary text-primary-foreground hover:bg-accent transition-all duration-300 h-14 px-8 shadow-lg shadow-primary/30 hover:shadow-accent/40"
        >
          <span>ابدأ تجربتك المجانية الآن</span>
          <ArrowLeft className="w-5 h-5" />
        </a>
        <p className="mt-4 text-muted-foreground text-sm">
          لا حاجة لبطاقة ائتمان • إعداد فوري • دعم مجاني
        </p>
      </div>
    </>
  );
}

export default FeaturesGrid;