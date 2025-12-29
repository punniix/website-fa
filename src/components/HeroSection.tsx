import { ChevronDown, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Image */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0"
      >
        <img 
          src={heroBg} 
          alt="Financial documents background" 
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Dark Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, 
            rgba(15, 20, 30, 0.85) 0%, 
            rgba(20, 25, 35, 0.80) 50%,
            rgba(15, 20, 30, 0.88) 100%
          )`
        }}
      />

      {/* Subtle Gold Gradient Accents */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 30% 20%, rgba(220, 190, 130, 0.08) 0%, transparent 50%),
                       radial-gradient(ellipse at 70% 80%, rgba(220, 190, 130, 0.05) 0%, transparent 50%)`
        }}
      />

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      <motion.div 
        style={{ y: textY, opacity }}
        className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-20"
      >
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-card mb-8"
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-primary text-sm font-medium">
            Professional Financial Advisor
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
          style={{ lineHeight: '1.3' }}
        >
          ปลดล็อกทุกความกังวลทางการเงิน
          <br />
          <span className="text-gold-gradient inline-block mt-2">
            พร้อมสร้างความมั่นคงให้ชีวิต
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto font-light leading-relaxed"
        >
          ให้คำปรึกษาการเงินรอบด้าน ทั้งการลงทุน ประกัน และภาษี
          <br className="hidden md:block" />
          ที่ออกแบบเฉพาะให้เหมาะกับไลฟ์สไตล์ของคุณ
        </motion.p>

        {/* CTA Button */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a
            href="#contact"
            className="gold-button text-lg inline-flex items-center gap-2 liquid-shine"
          >
            นัดปรึกษาฟรี!
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        className="scroll-indicator text-muted-foreground"
      >
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
