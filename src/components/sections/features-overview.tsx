import Image from "next/image";
import {
  Sparkles,
  Target,
  Zap,
  Users,
  Shield,
  BarChart,
  Calendar,
} from "lucide-react";

const stats = [
  {
    icon: Target,
    value: "500+",
    label: "قضية نشطة",
  },
  {
    icon: Sparkles,
    value: "98%",
    label: "معدل النجاح",
  },
  {
    icon: Zap,
    value: "24/7",
    label: "دعم فني",
  },
  {
    icon: Users,
    value: "10K+",
    label: "عميل راضي",
  },
  {
    icon: Shield,
    value: "50+",
    label: "محامي نشط",
  },
  {
    icon: BarChart,
    value: "99.9%",
    label: "أمان البيانات",
  },
  {
    icon: Calendar,
    value: "15+",
    label: "سنة خبرة",
  },
];

interface StatCardProps {
  icon: React.ElementType;
  value: string;
  label: string;
  isMobile?: boolean;
}

const StatCard = ({ icon: Icon, value, label, isMobile = false }: StatCardProps) => (
  <div className="text-center group">
    <div className="bg-gradient-to-br from-primary/25 to-primary/15 backdrop-blur-xl p-4 rounded-xl border border-primary/40 group-hover:border-primary/70 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-primary/20">
      <Icon className="lucide-icon w-6 h-6 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
      <div className={`${isMobile ? 'text-xl' : 'text-xl md:text-2xl'} font-bold text-white mb-1 group-hover:text-primary transition-colors duration-300`}>
        {value}
      </div>
      <div className={`text-muted-foreground font-medium ${isMobile ? 'text-xs' : 'text-xs md:text-sm'}`}>
        {label}
      </div>
    </div>
  </div>
);

export default function FeaturesOverview() {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/20 px-6 py-3 rounded-full mb-8 backdrop-blur-sm border border-primary/30">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-primary font-semibold">خدماتنا المتميزة</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              ما نقدمه لك
            </span>
          </h2>
          <p className="text-muted-foreground text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            حلول تقنية متطورة ومبتكرة تعيد تعريف إدارة المكاتب القانونية
            <br />
            <span className="text-primary font-semibold">
              بكفاءة استثنائية وأمان مطلق
            </span>
          </p>
        </div>

        <div className="mb-20">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <div className="aspect-[16/9] md:aspect-[21/9] relative">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1ccec13f-f879-4f22-bc17-2c4f672ea681-9adiya-site/assets/images/professional-legal-team-CRjIJPRA-1.jpg"
                alt="Professional Legal Technology Team - Modern Office Environment"
                fill
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 hidden md:flex items-center justify-start p-8">
                <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6 max-w-5xl">
                  {stats.map((stat, index) => (
                    <StatCard
                      key={index}
                      icon={stat.icon}
                      value={stat.value}
                      label={stat.label}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20 md:hidden">
          <div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                icon={stat.icon}
                value={stat.value}
                label={stat.label}
                isMobile={true}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}