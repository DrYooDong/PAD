    // ════════════════════════════
    // CONFIG & STATE (ONCOLOGY)
    // ════════════════════════════
    
    const CANCER_TYPES = {
      lung: { name: '🫁 Lung', color: '#0ea5e9', bg: '#f0f9ff' },
      breast: { name: '🎀 Breast', color: '#ec4899', bg: '#fdf2f8' },
      gi: { name: 'GI', color: '#eab308', bg: '#fefce8' },
      gu: { name: 'GU', color: '#3b82f6', bg: '#eff6ff' },
      haem: { name: '💧 Haem', color: '#8b5cf6', bg: '#f5f3ff' },
      cns: { name: '🧠 CNS', color: '#c026d3', bg: '#fdf4ff' },
      gynae: { name: '🌸 Gynae', color: '#d946ef', bg: '#fdf4ff' },
      hn: { name: 'H&N', color: '#10b981', bg: '#ecfdf5' },
      skin: { name: '☀️ Skin', color: '#f59e0b', bg: '#fffbeb' },
      reg: { name: '📋 Reg', color: '#dc2626', bg: '#fef2f2' },
      guide: { name: '📖 Guide', color: '#0d9488', bg: '#ccfbf1' }
    };

    const SOURCE_TYPES = {
      'intl-study': { name: 'Nghiên cứu Quốc tế', color: '#6366f1', bg: '#e0e7ff' },
      'intl-guideline': { name: 'Guideline Quốc tế', color: '#0d9488', bg: '#ccfbf1' },
      'vn-moh': { name: 'Bộ Y tế Việt Nam', color: '#dc2626', bg: '#fee2e2' },
      'vn-association': { name: 'Hội chuyên khoa VN', color: '#16a34a', bg: '#dcfce7' },
      'fda': { name: 'FDA / EMA', color: '#7c3aed', bg: '#faf5ff' }
    };

    const DESIGNS = {
      'rct': { name: 'Thử nghiệm lâm sàng (RCT)' },
      'phase1': { name: 'Lâm sàng Giai đoạn I' },
      'phase2': { name: 'Lâm sàng Giai đoạn II' },
      'phase3': { name: 'Lâm sàng Giai đoạn III' },
      'meta': { name: 'Tổng quan / Meta-Analysis' },
      'cohort': { name: 'Nghiên cứu quan sát / Thuần tập' },
      'guideline': { name: 'Hướng dẫn / Khuyến cáo' },
      'review': { name: 'Bài tổng quan y khoa' },
      'other': { name: 'Khác' }
    };

    const IMPACTS = {
      'practice-changing': { name: 'Practice-Changing', color: '#dc2626', bg: '#fef2f2' },
      'regulatory': { name: 'Regulatory', color: '#7c3aed', bg: '#faf5ff' },
      'informative': { name: 'Informative', color: '#2563eb', bg: '#eff6ff' },
      'early-signal': { name: 'Early Signal', color: '#d97706', bg: '#fffbeb' },
      'negative': { name: 'Negative', color: '#4b5563', bg: '#f3f4f6' }
    };

    const SAMPLE_STUDIES = [];

    if (typeof module !== 'undefined' && module.exports) {
      module.exports = { CANCER_TYPES, SOURCE_TYPES, DESIGNS, IMPACTS, SAMPLE_STUDIES };
    }
