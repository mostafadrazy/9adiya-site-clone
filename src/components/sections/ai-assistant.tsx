import React from 'react';
import { Sparkles, Bot, FileSearch2, FileSignature, MessageSquareQuote, Send } from 'lucide-react';

const features = [
  {
    icon: FileSearch2,
    title: "تحليل الوثائق",
    description: "تحليل ذكي للوثائق القانونية واكتشاف المخاطر",
  },
  {
    icon: FileSignature,
    title: "صياغة العقود",
    description: "صياغة تلقائية للعقود والوثائق القانونية",
  },
  {
    icon: MessageSquareQuote,
    title: "الاستشارات القانونية",
    description: "إجابات فورية للاستفسارات القانونية المعقدة",
  },
];

const AiAssistantSection = () => {
  return (
    <section className="py-20 bg-transparent" dir="rtl">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/20 px-6 py-3 rounded-full mb-6 backdrop-blur-sm border border-primary/30">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="font-semibold text-primary">الذكاء الاصطناعي القانوني</span>
          </div>

          <h2 className="text-5xl font-bold text-white md:text-6xl mb-4">
            مساعدك القانوني <span className="text-primary">الذكي</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground md:text-xl leading-relaxed">
            استفد من قوة الذكاء الاصطناعي في إدارة قضاياك القانونية بكفاءة ودقة استثنائية
          </p>
        </div>

        {/* Chat Interface Mockup */}
        <div className="max-w-4xl mx-auto mb-16 rounded-2xl border border-white/10 bg-black/50 p-4 shadow-2xl shadow-black/50 backdrop-blur-xl md:p-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-2">
              <span className="block h-3 w-3 rounded-full bg-red-500"></span>
              <span className="block h-3 w-3 rounded-full bg-yellow-500"></span>
              <span className="block h-3 w-3 rounded-full bg-green-500"></span>
            </div>
            <div className="text-sm font-medium text-muted-foreground">المساعد القانوني الذكي</div>
            {/* The empty div below is intentional to help with justify-between alignment */}
            <div className="w-16 hidden sm:block"></div>
          </div>

          <div className="h-96 space-y-6 overflow-y-auto p-4 font-primary text-right">
            {/* AI Message */}
            <div className="flex items-start justify-start gap-4">
              <div className="relative flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent shadow-lg">
                  <Bot className="h-7 w-7 text-white" />
                </div>
                <span className="absolute -bottom-1 -right-1 block h-4 w-4 rounded-full border-2 border-background bg-green-500"></span>
              </div>
              <div className="max-w-md rounded-xl rounded-bl-none bg-card p-4">
                <p className="text-foreground">مرحبا، كيف يمكنني مساعدتك؟</p>
              </div>
            </div>

            {/* User Message */}
            <div className="flex justify-end">
              <div className="max-w-md rounded-xl rounded-br-none bg-primary/90 p-4 text-white">
                <p>مرحبا</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 border-t border-white/10 pt-4">
            <input
              type="text"
              placeholder="اكتب رسالتك هنا..."
              className="flex-1 rounded-lg border border-white/10 bg-input px-4 py-3 text-right text-white placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="rounded-lg bg-primary p-3 text-white transition-colors hover:bg-accent flex-shrink-0">
              <Send className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-white/10 bg-card/50 p-8 text-center backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:bg-primary/10"
            >
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 transition-transform group-hover:scale-110">
                <feature.icon className="h-10 w-10 text-primary" />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-white transition-colors group-hover:text-primary">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AiAssistantSection;