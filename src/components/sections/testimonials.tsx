import React from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  title: string;
  review: string;
  initial: string;
}

const testimonialsData: Testimonial[] = [
  {
    name: 'أحمد محمد',
    title: 'محامي',
    review: 'نظام متكامل ساعدني في تنظيم وإدارة قضاياي بشكل احترافي. أنصح به بشدة لكل محامي يريد تطوير مكتبه.',
    initial: 'أ',
  },
  {
    name: 'سارة أحمد',
    title: 'مستشار قانوني',
    review: 'واجهة سهلة الاستخدام وميزات متقدمة تساعد في تتبع القضايا والمواعيد. تجربة رائعة!',
    initial: 'س',
  },
  {
    name: 'محمد علي',
    title: 'مدير مكتب محاماة',
    review: 'ساعدنا النظام في تحسين كفاءة العمل وتوفير الوقت. الدعم الفني ممتاز والتحديثات مستمرة.',
    initial: 'م',
  },
];

const TestimonialsSection = () => {
  return (
    <section dir="rtl" className="py-16 md:py-32 bg-background font-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            ماذا يقول عملاؤنا
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            آراء عملائنا تعكس جودة خدماتنا وتميزنا في مجال إدارة القضايا القانونية
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-8 shadow-lg transition-all duration-300 hover:shadow-primary/20 hover:border-primary/50 hover:-translate-y-2 flex flex-col h-full"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary fill-current ml-1" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                {testimonial.review}
              </p>
              <div className="flex items-center mt-auto">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-2xl font-bold text-background shrink-0">
                  {testimonial.initial}
                </div>
                <div className="ms-4">
                  <h4 className="font-bold text-foreground text-lg">{testimonial.name}</h4>
                  <span className="text-sm text-muted-foreground">{testimonial.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;