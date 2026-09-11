import React from 'react';
import { Hero } from '../components/hero/Hero';
import { StatsSection } from '../components/stats/StatsSection';
import { ServicesSection } from '../components/services/ServicesSection';
import { WhyChooseUs } from '../components/about/WhyChooseUs';
import { DevelopmentProcess } from '../components/process/DevelopmentProcess';
import { PortfolioSection } from '../components/portfolio/PortfolioSection';
import { PricingSection } from '../components/pricing/PricingSection';
import { TestimonialsSection } from '../components/testimonials/TestimonialsSection';
import { FaqSection } from '../components/faq/FaqSection';
import { ContactSection } from '../components/contact/ContactSection';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsSection />

      {/* Company Introduction Section */}
      <section className="py-20 bg-slate-900/30 border-b border-slate-800/80 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-xs font-semibold text-sky-400 mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>South India's Modern Web &amp; Software Agency</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-heading text-white tracking-tight leading-tight mb-6">
            Delivering Production Excellence From Bhavani Nagar, Tirupati
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl mx-auto mb-8 font-normal">
            At <strong>SDX Software Development</strong>, founded by <strong>SASIDHAR</strong>,
            we remove agency friction and bloated quotes. We build high-speed, SEO-engineered
            digital platforms for emerging founders, local retail businesses, and established
            enterprises across Andhra Pradesh, India, and worldwide.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 font-bold"
            >
              <span>Learn More About Our Story &amp; Values</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      <ServicesSection />
      <WhyChooseUs />
      <DevelopmentProcess />
      <PortfolioSection />
      <PricingSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}
