"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    value: "item-1",
    question: "كيف يمكنني البدء باستخدام النظام؟",
    answer:
      "يمكنك البدء بسهولة عن طريق التسجيل في المنصة وإنشاء حساب جديد. بعد ذلك، يمكنك استيراد قضاياك الحالية أو البدء في إضافة قضايا جديدة مباشرة من لوحة التحكم.",
  },
  {
    value: "item-2",
    question: "هل النظام آمن لحفظ بيانات القضايا؟",
    answer:
      "نعم، نستخدم أحدث تقنيات التشفير وأفضل ممارسات الأمان لحماية بياناتك. جميع المعلومات مخزنة بشكل آمن ومشفر لضمان خصوصية وسرية قضاياك.",
  },
  {
    value: "item-3",
    question: "هل يمكنني مشاركة القضايا مع زملائي في المكتب؟",
    answer:
      "بالتأكيد. يتيح لك النظام إضافة أعضاء فريقك وتعيين صلاحيات مختلفة لكل منهم، مما يسمح بالتعاون السلس على القضايا ومشاركة المستندات والملاحظات بسهولة.",
  },
  {
    value: "item-4",
    question: "كيف يمكنني الحصول على الدعم الفني؟",
    answer:
      "نحن نوفر دعمًا فنيًا على مدار الساعة طوال أيام الأسبوع. يمكنك التواصل معنا عبر البريد الإلكتروني أو الدردشة المباشرة من داخل النظام للحصول على مساعدة فورية.",
  },
];

const FaqSection = () => {
  return (
    <section className="py-20 bg-background" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            الأسئلة الشائعة
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            إجابات على الأسئلة الأكثر شيوعاً حول نظام إدارة القضايا
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((item) => (
              <AccordionItem
                key={item.value}
                value={item.value}
                className="bg-card border border-border rounded-lg"
              >
                <AccordionTrigger className="w-full text-right text-lg font-bold text-foreground p-6 hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {item.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;