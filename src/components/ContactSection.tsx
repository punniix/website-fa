import { Phone, Mail } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      {/* Decorative Orbs */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 8,
          ease: "easeInOut"
        }}
        className="bg-orb w-72 h-72 bg-primary/10 -top-36 -right-36" 
      />
      <motion.div 
        animate={{ 
          y: [0, 20, 0],
          x: [0, -10, 0],
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 10,
          ease: "easeInOut"
        }}
        className="bg-orb w-64 h-64 bg-primary/5 bottom-0 -left-32" 
      />
      
      <div className="relative z-10 max-w-3xl mx-auto px-4">
        {/* Header */}
        <ScrollReveal className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            สนใจรับคำปรึกษาทางการเงิน
          </h2>
          <p className="text-muted-foreground">
            เพียงกรอกข้อมูลที่ช่วยให้คุณได้คำแนะนำที่เหมาะสมที่สุดตามแบบฟอร์มด้านล่างได้เลยครับ
          </p>
        </ScrollReveal>

        {/* Form Container */}
        <ScrollReveal delay={0.2} direction="up">
          <motion.div 
            whileInView={{ boxShadow: "0 0 60px rgba(220, 190, 130, 0.1)" }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
            className="form-glass overflow-hidden"
          >
            <div className="w-full flex justify-center">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSfJdzDI7JOe-3MFidWYJM9IR2TWB1VWhDWO1Lfh6FxxSTXBSg/viewform?embedded=true"
                width="100%"
                height="1385"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                className="rounded-lg"
                title="Contact Form"
              >
                กำลังโหลด...
              </iframe>
            </div>
          </motion.div>
        </ScrollReveal>

        {/* Direct Contact */}
        <ScrollReveal delay={0.4} className="mt-12 text-center">
          <p className="text-foreground font-semibold mb-6">ติดต่อได้ที่</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a
              href="tel:0633438513"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass-button flex items-center justify-center gap-3 hover:border-primary/50 group"
            >
              <Phone className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
              <span className="text-foreground">063-343-8513</span>
            </motion.a>
            <motion.a
              href="mailto:chanatip.chid@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass-button flex items-center justify-center gap-3 hover:border-primary/50 group"
            >
              <Mail className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
              <span className="text-foreground">chanatip.chid@gmail.com</span>
            </motion.a>
            <motion.a
              href="https://lin.ee/FnMdNlb"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass-button flex items-center justify-center gap-3 hover:border-primary/50 group"
            >
              <svg 
                className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.105.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
              </svg>
              <span className="text-foreground">LINE</span>
            </motion.a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactSection;
