import profileImage from "@/assets/pun.jpg";
import ScrollReveal from "./ScrollReveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const imageRotate = useTransform(scrollYProgress, [0, 0.5], [-5, 0]);

  return (
    <section ref={sectionRef} id="about" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, hsl(0, 30%, 8%) 0%, hsl(0, 25%, 14%) 50%, hsl(0, 25%, 14%) 100%)' }} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Profile Image with Parallax */}
          <ScrollReveal 
            className="w-full lg:w-1/2 flex justify-center"
            direction="left"
            duration={0.8}
          >
            <motion.div 
              style={{ scale: imageScale, rotate: imageRotate }}
              className="profile-frame max-w-md relative"
            >
              {/* Glass Frame */}
              <div className="glass-card p-3">
                <img
                  src={profileImage}
                  alt="ปั้น - ที่ปรึกษาทางการเงิน"
                  className="rounded-xl w-full object-cover"
                />
              </div>
              
              {/* Floating Badge */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -bottom-4 -right-4 glass-card px-5 py-3"
              >
                <div className="flex items-center gap-2">
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-3 h-3 rounded-full bg-green-400" 
                  />
                  <span className="text-sm text-foreground font-medium">พร้อมให้คำปรึกษา</span>
                </div>
              </motion.div>
            </motion.div>
          </ScrollReveal>

          {/* Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <ScrollReveal direction="right" delay={0.2}>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                สวัสดีครับ ผม{" "}
                <span className="text-gold-gradient">ปั้น</span>
              </h2>
            </ScrollReveal>

            {/* Quote */}
            <ScrollReveal direction="right" delay={0.3}>
              <div className="glass-card p-6 mb-8">
                <p className="text-lg text-foreground leading-relaxed italic">
                  ผมเชื่อว่า แผนการเงินที่ดีที่สุด คือแผนที่สามารถสร้างความมั่นคง มั่งคั่ง และเหมาะสมกับลูกค้ามากที่สุด
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.4}>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                ด้วยประสบการณ์การทำงานที่เกี่ยวข้องกับการเงินการลงทุนมากกว่า 5 ปี
                ผมมุ่งเน้นการให้คำแนะนำที่เป็นกลาง ยึดประโยชน์ของลูกค้าเป็นหลัก
                ไม่ว่าเป้าหมายของคุณจะเป็น การสร้างความมั่นคง การเกษียณสุข
                การศึกษาบุตร หรือการส่งต่อมรดก ผมพร้อมที่จะเคียงข้างลูกค้าคนสำคัญเช่นคุณ
              </p>
            </ScrollReveal>

            {/* Expertise Tags */}
            <ScrollReveal direction="right" delay={0.5}>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {["การลงทุน", "ประกันชีวิต", "วางแผนภาษี", "เกษียณ"].map((tag, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="glass-card px-4 py-2 text-sm text-primary font-medium cursor-default"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
