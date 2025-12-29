import { Wallet, Shield, FileText, PiggyBank, TrendingDown } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const painPoints = [
  {
    icon: Wallet,
    title: "เงินเดือนหมดก่อนสิ้นเดือน",
    description: "เงินเดือนออกเพียงไม่กี่วัน ก็ใช้ไปจนหมด ไม่เหลือออม",
  },
  {
    icon: Shield,
    title: "ไม่มีประกัน หรือมีแต่ไม่พอ",
    description: "ไม่มีประกันติดตัว หรือมีแต่ไม่แน่ใจว่าเพียงพอต่อการรับมือกับเหตุไม่คาดฝันหรือไม่",
  },
  {
    icon: FileText,
    title: "เสียภาษีมากเกินไป",
    description: "มีรายได้มากมาย แต่ต้องจ่ายภาษีมากเกินความจำเป็น",
  },
  {
    icon: PiggyBank,
    title: "กังวลเรื่องเกษียณ",
    description: "กลัวเงินเก็บที่มีไม่พอใช้ในวันที่ต้องเกษียณ",
  },
  {
    icon: TrendingDown,
    title: "ขาดทุนจากการลงทุน",
    description: "ลงทุนตามกระแส ไม่มีแผนการลงทุนที่ชัดเจน",
  },
];

const PainPointsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <motion.div 
        style={{ opacity: backgroundOpacity }}
        className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" 
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            คุณกำลังเจอปัญหาเหล่านี้อยู่ไหม?
          </h2>
          <div className="section-divider" />
        </ScrollReveal>

        {/* Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {painPoints.slice(0, 3).map((point, index) => (
            <ScrollReveal
              key={index}
              delay={index * 0.15}
              direction="up"
            >
              <div className="pain-card group h-full">
                <div className="icon-glow group-hover:animate-pulse-glow transition-all duration-300">
                  <point.icon className="w-7 h-7 text-primary relative z-10" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-gold-gradient transition-all duration-300">
                  {point.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {point.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Second Row - Centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:max-w-3xl md:mx-auto">
          {painPoints.slice(3).map((point, index) => (
            <ScrollReveal
              key={index + 3}
              delay={(index + 3) * 0.15}
              direction="up"
            >
              <div className="pain-card group h-full">
                <div className="icon-glow group-hover:animate-pulse-glow transition-all duration-300">
                  <point.icon className="w-7 h-7 text-primary relative z-10" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-gold-gradient transition-all duration-300">
                  {point.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {point.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
