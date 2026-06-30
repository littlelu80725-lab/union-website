// ===== i18n.js — Union Website Language Switcher =====

const translations = {
  en: {
    // Nav
    "nav.work": "Work",
    "nav.capabilities": "Capabilities",
    "nav.insights": "Insights",
    "nav.contact": "Contact",
    "nav.letstalk": "Let's Talk",

    // Hero
    "hero.badge": "Creative & Performance Marketing",
    "hero.title.1": "We build",
    "hero.title.accent": "brands that move",
    "hero.title.2": "people",
    "hero.subtitle": "A full-service creative and performance marketing agency helping ambitious brands grow, connect, and lead in a changing world.",
    "hero.cta.see": "See Our Work ↓",
    "hero.cta.talk": "Let's Talk →",
    "hero.scroll": "Scroll",

    // Case Studies
    "work.badge": "Featured Work",
    "work.title.1": "Our latest",
    "work.title.2": "case studies",
    "work.cta.all": "All Case Studies →",
    "work.view": "View Case Study →",

    // Cases
    "case.insurance": "Insurance",
    "case.energy": "Energy",
    "case.security": "Security",
    "case.tourism": "Tourism",
    "case.tools": "Tools",
    "case.outdoor": "Outdoor",

    // Brands
    "brands.badge": "Brands We've Worked With",

    // Capabilities
    "cap.badge": "Our Capabilities",
    "cap.title.1": "Global solutions",
    "cap.title.2": "for a",
    "cap.title.accent": "changing world",
    "cap.subtitle": "As part of Valtech, we bring together creative storytelling, data-driven performance, and global reach to help brands grow sustainably. Our cross-disciplinary teams deliver breakthrough results.",
    "cap.learn": "Learn More →",
    "cap.brand.title": "Brand Strategy",
    "cap.brand.desc": "Positioning, identity, and narrative that resonates.",
    "cap.perf.title": "Performance",
    "cap.perf.desc": "Data-driven campaigns that convert and scale.",
    "cap.content.title": "Content & Video",
    "cap.content.desc": "Storytelling that captivates and connects.",
    "cap.digital.title": "Digital Experience",
    "cap.digital.desc": "Websites and apps that delight users.",

    // Insights
    "insights.badge": "News & Insights",
    "insights.title.1": "Latest thinking",
    "insights.title.2": "Real impact",
    "insights.tag.production": "Production",
    "insights.tag.ai": "AI & Technology",
    "insights.tag.news": "Company News",
    "insights.1.title": "Mastering Production Logistics: From Trained Porcupines to Creative Storytelling",
    "insights.1.desc": "How we bring complex creative visions to life at scale.",
    "insights.2.title": "3 Ways AI-Powered Art Will Impact Advertising",
    "insights.2.desc": "Exploring the creative revolution happening right now.",
    "insights.3.title": "Valtech Acquires Union as it Scales End-to-End Capabilities",
    "insights.3.desc": "A new chapter in our journey to redefine marketing.",

    // CTA / Contact
    "cta.badge": "Let's Work Together",
    "cta.title.1": "Unlock growth",
    "cta.title.2": "Drive results",
    "cta.subtitle": "Ready to take your brand to the next level? Let's start a conversation about what's possible.",
    "cta.btn": "Let's Talk →",
    "cta.office": "Office",
    "cta.contact": "Contact",
    "cta.follow": "Follow Us",

    // Footer
    "footer.copyright": "© 2026 Valtech Solutions, LLC. All Rights Reserved.",
    "footer.privacy": "Privacy Policy",
    "footer.cookies": "Cookie Policy",

    // Contact Page
    "contact.badge": "Get in Touch",
    "contact.title.1": "Let's build",
    "contact.title.accent": "something great",
    "contact.title.2": "together",
    "contact.subtitle": "Have a project in mind? We'd love to hear about it. Fill out the form below and our team will get back to you within 24 hours.",
    "contact.info": "Contact Info",
    "contact.name.label": "Full Name",
    "contact.name.placeholder": "John Carter",
    "contact.name.error": "Please enter your full name.",
    "contact.email.label": "Work Email",
    "contact.email.placeholder": "john@company.com",
    "contact.email.error": "Please enter a valid work email.",
    "contact.company.label": "Company",
    "contact.company.placeholder": "Your company name",
    "contact.interest": "I'm interested in",
    "contact.message.label": "Tell us about your project",
    "contact.message.placeholder": "Describe your goals, timeline, budget, and how we can help...",
    "contact.message.error": "Please tell us about your project (at least 20 characters).",
    "contact.submit": "Send Message",
    "contact.sending": "Sending...",
    "contact.disclaimer": 'By submitting this form, you agree to our <a href="#" class="underline hover:text-[#e94560]">Privacy Policy</a>.',
    "contact.success.title": "Message Sent!",
    "contact.success.subtitle": "Thanks for reaching out. Our team will review your message and get back to you within 24 hours.",
    "contact.success.next": "What happens next?",
    "contact.success.step1": "We'll review your message — typically within a few hours.",
    "contact.success.step2": "Someone from our team will reach out to schedule a discovery call.",
    "contact.success.step3": "We'll craft a tailored proposal for your project.",
    "contact.success.back": "← Back to Home",
    "contact.success.another": "Send Another Message",

    // Contact sidebar
    "contact.office.address": "55 Loushanguan Rd, Changning, Shanghai",
    "contact.phone": "+86 21 1234 5678",
    "contact.hours.time": "Mon – Fri<br/>9:00 AM – 6:00 PM CST",
    "contact.hours.desc": "We typically respond within 2–4 business hours. For urgent matters, give us a call.",
    "contact.info.email": "Email",
    "contact.info.phone": "Phone",

    // Map
    "map.office": "Xin Hongqiao",
    "map.address": "55 Loushanguan Rd, Changning, Shanghai",

    // Case Flow Page
    "caseflow.badge": "Interactive Showcase",
    "caseflow.title.1": "Case",
    "caseflow.title.accent": "Flow",
    "caseflow.subtitle": "Swipe, drag, or use arrow keys to explore our featured work.",
    "caseflow.hint": "or drag to navigate",
    "caseflow.detail.cta": "Get in Touch →",

    // Case Flow — case tags
    "caseflow.case0.tag": "Insurance",
    "caseflow.case0.title": "Quility",
    "caseflow.case0.desc": "Shopping for insurance doesn't have to be prickly. We redesigned the entire customer journey for a leading insurtech brand.",
    "caseflow.case1.tag": "Energy",
    "caseflow.case1.title": "NRG",
    "caseflow.case1.desc": "What Power Should Be. A bold brand transformation for one of America's largest energy providers.",
    "caseflow.case2.tag": "Security",
    "caseflow.case2.title": "Yale",
    "caseflow.case2.desc": "A New Anthem For Smarter Security. Reimagining the Yale brand for the connected home era.",
    "caseflow.case3.tag": "Tourism",
    "caseflow.case3.title": "CRVA",
    "caseflow.case3.desc": "Charlotte's Got A Lot. Driving tourism and economic growth through integrated campaign design.",
    "caseflow.case4.tag": "Tools",
    "caseflow.case4.title": "WORX",
    "caseflow.case4.desc": "Proven Power at retail. Building a direct-to-consumer platform that drives measurable growth.",
    "caseflow.case5.tag": "Outdoor",
    "caseflow.case5.title": "Husqvarna",
    "caseflow.case5.desc": "Working at the cutting edge. A digital-first approach to outdoor equipment marketing.",
  },

  zh: {
    // Nav
    "nav.work": "案例",
    "nav.capabilities": "能力",
    "nav.insights": "洞察",
    "nav.contact": "联系",
    "nav.letstalk": "联系我们",

    // Hero
    "hero.badge": "创意与效果营销",
    "hero.title.1": "我们打造",
    "hero.title.accent": "触动人心",
    "hero.title.2": "的品牌",
    "hero.subtitle": "一家全方位的创意与效果营销机构，助力有雄心的品牌在不断变化的世界中成长、连接并引领。",
    "hero.cta.see": "查看案例 ↓",
    "hero.cta.talk": "联系我们 →",
    "hero.scroll": "滚动",

    // Case Studies
    "work.badge": "精选案例",
    "work.title.1": "我们最新的",
    "work.title.2": "案例研究",
    "work.cta.all": "查看全部案例 →",
    "work.view": "查看案例详情 →",

    // Cases
    "case.insurance": "保险",
    "case.energy": "能源",
    "case.security": "安防",
    "case.tourism": "旅游",
    "case.tools": "工具",
    "case.outdoor": "户外",

    // Brands
    "brands.badge": "合作品牌",

    // Capabilities
    "cap.badge": "我们的能力",
    "cap.title.1": "全球化解决方案",
    "cap.title.2": "拥抱",
    "cap.title.accent":" 变化中的世界",
    "cap.subtitle": "作为 Valtech 旗下机构，我们汇聚创意叙事、数据驱动的效果营销和全球资源，帮助品牌实现可持续增长。我们的跨学科团队持续交付突破性成果。",
    "cap.learn": "了解更多 →",
    "cap.brand.title": "品牌策略",
    "cap.brand.desc": "定位、品牌形象与叙事，直击人心。",
    "cap.perf.title": "效果营销",
    "cap.perf.desc": "数据驱动的营销活动，高效转化、可规模化。",
    "cap.content.title": "内容与视频",
    "cap.content.desc": "引人入胜的叙事，打动人心、建立连接。",
    "cap.digital.title": "数字体验",
    "cap.digital.desc": "令人愉悦的网站与应用体验。",

    // Insights
    "insights.badge": "新闻与洞察",
    "insights.title.1": "最新思考",
    "insights.title.2": "真实影响力",
    "insights.tag.production": "制作",
    "insights.tag.ai": "AI 与技术",
    "insights.tag.news": "公司新闻",
    "insights.1.title": "精通制作物流：从训练豪猪到创意叙事",
    "insights.1.desc": "我们如何大规模实现复杂的创意愿景。",
    "insights.2.title": "AI 生成艺术影响广告的 3 种方式",
    "insights.2.desc": "探索当下正在发生的创意革命。",
    "insights.3.title": "Valtech 收购 Union，全面升级端到端能力",
    "insights.3.desc": "我们重新定义营销之旅的新篇章。",

    // CTA / Contact
    "cta.badge": "让我们合作",
    "cta.title.1": "释放增长潜力",
    "cta.title.2": "驱动成果",
    "cta.subtitle": "准备好将品牌提升到新高度了吗？让我们开始一次关于可能性的对话。",
    "cta.btn": "联系我们 →",
    "cta.office": "办公室",
    "cta.contact": "联系方式",
    "cta.follow": "关注我们",

    // Footer
    "footer.copyright": "© 2026 Valtech Solutions, LLC. 保留所有权利。",
    "footer.privacy": "隐私政策",
    "footer.cookies": "Cookie 政策",

    // Contact Page
    "contact.badge": "联系我们",
    "contact.title.1": "让我们一起",
    "contact.title.accent": "创造伟大的",
    "contact.title.2": "作品",
    "contact.subtitle": "有项目想法？我们很乐意倾听。请填写以下表单，我们的团队将在 24 小时内回复您。",
    "contact.info": "联系信息",
    "contact.name.label": "姓名",
    "contact.name.placeholder": "张三",
    "contact.name.error": "请输入您的姓名。",
    "contact.email.label": "工作邮箱",
    "contact.email.placeholder": "zhang@company.com",
    "contact.email.error": "请输入有效的邮箱地址。",
    "contact.company.label": "公司",
    "contact.company.placeholder": "公司名称",
    "contact.interest": "我感兴趣的服务",
    "contact.message.label": "描述您的项目",
    "contact.message.placeholder": "请描述您的目标、时间线、预算以及我们可以如何帮助您...",
    "contact.message.error": "请描述您的项目（至少 20 个字符）。",
    "contact.submit": "发送消息",
    "contact.sending": "发送中...",
    "contact.disclaimer": '提交此表单即表示您同意我们的 <a href="#" class="underline hover:text-[#e94560]">隐私政策</a>。',
    "contact.success.title": "消息已发送！",
    "contact.success.subtitle": "感谢您的联系。我们的团队将审阅您的消息并在 24 小时内回复。",
    "contact.success.next": "接下来会发生什么？",
    "contact.success.step1": "我们会审阅您的消息 — 通常在几小时内。",
    "contact.success.step2": "我们的团队成员将联系您安排初步沟通。",
    "contact.success.step3": "我们将为您的项目量身定制方案。",
    "contact.success.back": "← 返回首页",
    "contact.success.another": "再发一条消息",

    // Contact sidebar
    "contact.office.address": "上海市长宁区娄山关路55号",
    "contact.phone": "+86 21 1234 5678",
    "contact.hours.time": "周一 – 周五<br/>9:00 – 18:00",
    "contact.hours.desc": "通常会在 2-4 小时内回复。如有紧急情况，请直接致电。",
    "contact.info.email": "邮箱",
    "contact.info.phone": "电话",

    // Map
    "map.office": "新虹桥大厦",
    "map.address": "上海市长宁区娄山关路55号",

    // Case Flow Page
    "caseflow.badge": "互动展示",
    "caseflow.title.1": "案例",
    "caseflow.title.accent": "流程",
    "caseflow.subtitle": "滑动、拖拽或使用方向键浏览我们的精选案例。",
    "caseflow.hint": "或拖拽导航",
    "caseflow.detail.cta": "联系我们 →",

    // Case Flow — case tags
    "caseflow.case0.tag": "保险",
    "caseflow.case0.title": "Quility",
    "caseflow.case0.desc": "买保险不必像被扎一样难受。我们为一家领先的保险科技公司重新设计了整个客户旅程。",
    "caseflow.case1.tag": "能源",
    "caseflow.case1.title": "NRG",
    "caseflow.case1.desc": "电力本该如此。为美国最大的能源供应商之一进行大胆的品牌转型。",
    "caseflow.case2.tag": "安防",
    "caseflow.case2.title": "Yale",
    "caseflow.case2.desc": "更智能安防的新赞歌。为智能家居时代重新定义 Yale 品牌。",
    "caseflow.case3.tag": "旅游",
    "caseflow.case3.title": "CRVA",
    "caseflow.case3.desc": "夏洛特的精彩无限。通过整合营销活动设计推动旅游和经济增长。",
    "caseflow.case4.tag": "工具",
    "caseflow.case4.title": "WORX",
    "caseflow.case4.desc": "零售端的硬实力。打造驱动可衡量增长的直接面向消费者的平台。",
    "caseflow.case5.tag": "户外",
    "caseflow.case5.title": "Husqvarna",
    "caseflow.case5.desc": "走在前沿。户外设备营销的数字化优先策略。",
  }
};

let currentLang = localStorage.getItem('union-lang') || 'en';

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('union-lang', lang);

  // Update all [data-i18n] elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const text = translations[lang]?.[key];
    if (text) {
      // Use innerHTML if translation contains HTML tags (e.g. <br/>, <a>)
      if (/<[^>]+>/.test(text)) {
        el.innerHTML = text;
      } else {
        el.textContent = text;
      }
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const text = translations[lang]?.[key];
    if (text) el.placeholder = text;
  });

  // Update error texts
  document.querySelectorAll('[data-i18n-error]').forEach(el => {
    const key = el.getAttribute('data-i18n-error');
    const text = translations[lang]?.[key];
    if (text) {
      // Keep the SVG icon, update text
      const svg = el.querySelector('svg');
      if (svg) {
        el.innerHTML = '';
        el.appendChild(svg);
        el.appendChild(document.createTextNode(' ' + text));
      }
    }
  });

  // Update toggle button text — only change the label span, preserve dot
  document.querySelectorAll('.lang-toggle .lang-label').forEach(label => {
    label.textContent = lang === 'en' ? '中文' : 'EN';
  });

  // Update char counter label
  const counter = document.getElementById('char-count');
  if (counter) {
    const msg = document.getElementById('message');
    if (msg) {
      const suffix = lang === 'en' ? ' / 500' : ' / 500';
      counter.textContent = msg.value.length + suffix;
    }
  }

  // Update submit button
  const btnText = document.getElementById('btn-text');
  if (btnText && btnText.textContent !== translations[lang]['contact.sending']) {
    btnText.textContent = translations[lang]['contact.submit'];
  }

  // Update map marker popup if it exists
  if (window._updateMarkerPopup) {
    window._updateMarkerPopup();
  }

  // Update html lang attribute
  document.documentElement.lang = lang === 'en' ? 'en' : 'zh-CN';

  // Update coverflow card overlays (dynamic content on case-flow page)
  document.querySelectorAll('.coverflow-card .card-overlay .tag[data-i18n-idx]').forEach(el => {
    const idx = el.getAttribute('data-i18n-idx');
    const text = translations[lang]?.['caseflow.case' + idx + '.tag'];
    if (text) el.textContent = text;
  });
  document.querySelectorAll('.coverflow-card .card-overlay h3').forEach(el => {
    // Find sibling tag to get index
    const tagEl = el.previousElementSibling;
    if (tagEl && tagEl.hasAttribute('data-i18n-idx')) {
      const idx = tagEl.getAttribute('data-i18n-idx');
      const text = translations[lang]?.['caseflow.case' + idx + '.title'];
      if (text) el.textContent = text;
    }
  });

  // Update case-flow detail section if it exists
  const detailTag = document.getElementById('detail-tag');
  const detailTitle = document.getElementById('detail-title');
  const detailDesc = document.getElementById('detail-desc');
  if (detailTag && detailTitle && detailDesc) {
    // Find which case is currently active by checking the active card
    const activeCard = document.querySelector('.coverflow-card.active');
    if (activeCard) {
      const tagSpan = activeCard.querySelector('.tag[data-i18n-idx]');
      if (tagSpan) {
        const idx = tagSpan.getAttribute('data-i18n-idx');
        const tagText = translations[lang]?.['caseflow.case' + idx + '.tag'];
        const titleText = translations[lang]?.['caseflow.case' + idx + '.title'];
        const descText = translations[lang]?.['caseflow.case' + idx + '.desc'];
        if (tagText) detailTag.textContent = tagText;
        if (titleText) detailTitle.textContent = titleText;
        if (descText) detailDesc.textContent = descText;
      }
    }
  }

  // Adjust heading line-height & letter-spacing for Chinese
  const headings = document.querySelectorAll('h1, section h2, section h3');
  headings.forEach(el => {
    el.style.lineHeight = lang === 'zh' ? '1.35' : '';
    el.style.letterSpacing = lang === 'zh' ? '0.1em' : '';
  });
}

// Init on DOM ready
document.addEventListener('DOMContentLoaded', () => setLang(currentLang));

// Expose for onclick handlers
window.setLang = setLang;
window.toggleLang = () => setLang(currentLang === 'en' ? 'zh' : 'en');
