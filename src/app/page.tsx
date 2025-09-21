import Header from '@/components/sections/header';
import HeroSection from '@/components/sections/hero';
import FeaturesOverview from '@/components/sections/features-overview';
import FeaturesGrid from '@/components/sections/features-grid';
import AiAssistantSection from '@/components/sections/ai-assistant';
import ServicesSection from '@/components/sections/services';
import TestimonialsSection from '@/components/sections/testimonials';
import FaqSection from '@/components/sections/faq';
import FinalCta from '@/components/sections/final-cta';
import Footer from '@/components/sections/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden" dir="rtl">
      {/* Decorative background accents - redesigned */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        {/* Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40" />
        {/* Radial glows */}
        <div className="absolute -top-40 -left-32 h-[46rem] w-[46rem] rounded-full bg-primary/25 blur-3xl" />
        <div className="absolute -bottom-40 -right-32 h-[46rem] w-[46rem] rounded-full bg-accent/25 blur-3xl" />
        {/* Diagonal beam */}
        <div
          className="absolute -top-1/3 right-0 h-[140vh] w-[40rem] rotate-12 bg-gradient-to-b from-primary/10 via-transparent to-transparent blur-2xl"
        />
        {/* Noise overlay - removed to avoid JSX parsing issues */}
        {/* <div
          className="absolute inset-0 opacity-[0.04] mix-blend-soft-light"
          style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 100 100\\\" preserveAspectRatio=\\\"none\\\"><filter id=\\\"n\\\"><feTurbulence type=\\\"fractalNoise\\\" baseFrequency=\\\"0.65\\\" numOctaves=\\\"3\\\" stitchTiles=\\\"stitch\\\"/></filter><rect width=\\\"100%\\\" height=\\\"100%\\\" filter=\\\"url(%23n)\\\" opacity=\\\"0.6\\\"/></svg>')" }}
        /> */}
      </div>

      <Header />
      
      <main className="relative z-10 space-y-16 md:space-y-24">
        <HeroSection />
        
        <section className="px-4">
          <div className="container">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur supports-[backdrop-filter]:bg-white/[0.04] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)] p-6 md:p-10">
              <FeaturesOverview />
              <div className="mt-10 md:mt-14">
                <FeaturesGrid />
              </div>
            </div>
          </div>
        </section>
        
        <section className="px-4">
          <div className="container">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent backdrop-blur-md p-6 md:p-10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)]">
              <AiAssistantSection />
            </div>
          </div>
        </section>

        <section className="px-4">
          <div className="container">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur p-6 md:p-10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)]">
              <ServicesSection />
            </div>
          </div>
        </section>

        <section className="px-4">
          <div className="container">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur p-6 md:p-10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)]">
              <TestimonialsSection />
            </div>
          </div>
        </section>

        <section className="px-4">
          <div className="container">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur p-6 md:p-10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)]">
              <FaqSection />
            </div>
          </div>
        </section>

        <section className="px-4 pb-10 md:pb-20">
          <div className="container">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-primary/10 to-transparent backdrop-blur p-6 md:p-10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)]">
              <FinalCta />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}