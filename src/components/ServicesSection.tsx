import { Stethoscope, PieChart, Shield, HandCoins } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    icon: Stethoscope,
    title: "Financial Checkup",
    description: "ตรวจสุขภาพการเงิน วางแผนสร้างรากฐานอย่างมั่นคง พร้อมต่อยอดสู่ความมั่งคั่ง",
    accent: "primary",
  },
  {
    icon: PieChart,
    title: "Investment Advisor",
    description: "แนะนำการลงทุน ผ่านกองทุนรวมหรือหุ้น ให้สอดคล้องกับเป้าหมายและความเสี่ยง",
    accent: "gold",
  },
  {
    icon: Shield,
    title: "Risk Management",
    description: "วางแผนป้องกันความเสี่ยง ผ่านเครื่องมือทางการเงินที่เหมาะสมกับคุณ ปกป้องค่าใช้จ่ายจากเหตุไม่คาดฝัน",
    accent: "primary",
  },
  {
    icon: HandCoins,
    title: "Tax Planning",
    description: "วางแผนภาษีอย่างชาญฉลาด เปลี่ยนรายจ่ายเป็นเงินเก็บที่เติบโต",
    accent: "gold",
  },
];

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const lineWidth = useTransform(scrollYProgress, [0, 0.3], ["0%", "100%"]);

  return (
    <section ref={sectionRef} id="services" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, hsl(0, 25%, 14%) 0%, hsl(0, 30%, 8%) 100%)' }} />
      
      {/* Animated Decorative Line */}
      <motion.div 
        style={{ width: lineWidth }}
        className="absolute top-0 left-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" 
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ผมช่วยคุณได้อย่างไร
          </h2>
          <div className="section-divider" />
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ScrollReveal
              key={index}
              delay={index * 0.1}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <div className="service-card group relative liquid-shine h-full">
                {/* Top Accent Line */}
                <motion.div 
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl origin-left ${
                    service.accent === "gold" 
                      ? "bg-gradient-to-r from-primary via-gold-400 to-primary" 
                      : "bg-gradient-to-r from-red-900/50 via-primary to-red-900/50"
                  }`}
                />
                
                {/* Icon */}
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`mb-6 ${
                    service.accent === "gold" ? "text-primary" : "text-foreground"
                  }`}
                >
                  <service.icon className="w-12 h-12" strokeWidth={1.5} />
                </motion.div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-gold-gradient transition-all duration-300">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 rounded-2xl" style={{
                    background: service.accent === "gold" 
                      ? "radial-gradient(circle at 50% 0%, rgba(220, 190, 130, 0.15) 0%, transparent 70%)"
                      : "radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.05) 0%, transparent 70%)"
                  }} />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
