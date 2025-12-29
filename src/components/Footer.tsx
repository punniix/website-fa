const Footer = () => {
  return (
    <footer className="footer-gradient py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Disclaimer */}
        <div className="text-center">
          <p className="text-xs text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            <span className="text-primary font-medium">คำเตือน:</span> การลงทุนมีความเสี่ยง
            ผู้ลงทุนควรทำความเข้าใจลักษณะสินค้า เงื่อนไขผลตอบแทน และความเสี่ยงก่อนตัดสินใจลงทุน
            <br />
            ผลการดำเนินงานในอดีต มิได้เป็นสิ่งยืนยันถึงผลการดำเนินงานในอนาคต
          </p>
          
          {/* Copyright */}
          <div className="mt-6 pt-6 border-t border-border/30">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} CCPUN Financial Advisor. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
