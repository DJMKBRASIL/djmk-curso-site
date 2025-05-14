import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import AboutCourseSection from "@/components/AboutCourseSection";
import AboutInstructorSection from "@/components/AboutInstructorSection";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import WhatYouGetSection from "@/components/WhatYouGetSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import InvestmentSection from "@/components/InvestmentSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import FaqSection from "@/components/FaqSection";
import FinalCallSection from "@/components/FinalCallSection";
import Footer from "@/components/Footer";
import VideoPlayer from "@/components/VideoPlayer";
import { siteConfig } from "@/config/siteConfig";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-primary">
      {/* O Header já está no RootLayout, não precisa ser adicionado aqui */}
      <HeroSection id="hero" />
      <ProblemSolutionSection /> {/* Esta seção não está no menu, não precisa de ID para navegação por menu */}
      <AboutCourseSection id="about-course" />
      <AboutInstructorSection id="about-instructor" />
      <TargetAudienceSection /> {/* Esta seção não está no menu, não precisa de ID para navegação por menu */}
      <WhatYouGetSection /> {/* Esta seção não está no menu, não precisa de ID para navegação por menu */}
      {siteConfig.featuredVideoEmbedUrl && <VideoPlayer youtubeVideoEmbedUrl={siteConfig.featuredVideoEmbedUrl} />}
      <TestimonialsSection id="testimonials" />
      <InvestmentSection /> {/* Esta seção não está no menu (o link é direto para Hotmart), não precisa de ID para navegação por menu */}
      <GuaranteeSection /> {/* Esta seção não está no menu, não precisa de ID para navegação por menu */}
      <FaqSection /> {/* Esta seção não está no menu, não precisa de ID para navegação por menu */}
      <FinalCallSection id="contact" />
      <Footer />
    </main>
  );
}

