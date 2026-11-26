// Keep each English entry beside its Chinese translation.
window.profileData = {
  bio: {
    en: [
      'I am a Ph.D. student in computer science at Nankai University, where I also earned my bachelor’s degree. At the Nankai-Baidu Joint Lab, I study how learning algorithms can help computer systems make better use of limited resources.',
      'My work starts with concrete decisions. Which index and system settings let a vector database answer more queries while preserving retrieval quality? Which cache lines should a processor retain when several programs compete for space? These questions connect my work on LLM-guided database tuning and adaptive cache replacement to my broader interests in language model agents and resource scheduling.',
    ],
    zh: [
      '我在南开大学获得计算机科学与技术学士学位，目前在南开大学计算机学院攻读博士学位，在南开－百度联合实验室开展研究。我关注如何利用学习算法，在资源有限的条件下改善计算机系统的性能。',
      '我的研究从系统中的具体决策出发。例如，怎样选择向量数据库的索引和系统参数，才能在保证检索质量的同时提高吞吐量？多个程序共享缓存时，哪些数据值得保留？围绕这些问题，我研究大模型辅助的数据库调优与自适应缓存替换，也关注大模型智能体与资源调度。',
    ],
  },
  news: [
    {
      date: '2026-09',
      text: {
        en: 'Joined my lab at the 32nd CCF National Conference of Information Storage (NCIS 2026) in Tianjin and volunteered for 16 hours. Nankai University helped organize the conference.',
        zh: '随实验室参加在天津举行的第 32 届 CCF 全国信息存储技术学术会议（NCIS 2026），担任志愿者，累计服务 16 小时。南开大学为大会协办单位之一。',
      },
      url: 'https://www.tjut.edu.cn/info/1029/12800.htm',
      linkLabel: { en: 'Conference report', zh: '会议报道' },
    },
    {
      date: '2026-08',
      text: {
        en: 'Presented LLM-Tuner in an oral session at WISA 2026 in Kunming.',
        zh: '在昆明举行的 WISA 2026 上作口头报告，介绍 LLM-Tuner 的研究工作。',
      },
      url: 'https://www.kmust.edu.cn/info/1011/57379.htm',
      linkLabel: { en: 'Conference report', zh: '会议报道' },
    },
    {
      date: '2026-07',
      text: {
        en: 'WISA 2026 accepted our full paper on LLM-guided tuning for vector databases.',
        zh: '大模型辅助向量数据库调优的研究获 WISA 2026 全文录用。',
      },
    },
    {
      date: '2026-06',
      text: {
        en: 'Our Chinese invention patent on adaptive cache replacement for mixed workloads was granted.',
        zh: '我们关于混合程序负载自适应缓存替换的发明专利获得授权。',
      },
      url: 'https://patents.google.com/patent/CN122044887B/zh',
      linkLabel: { en: 'Patent record', zh: '专利公告' },
    },
    {
      date: '2025-10',
      text: {
        en: 'Completed the sixth InternLM Practical Camp and received its Outstanding Trainee distinction.',
        zh: '完成上海人工智能实验室第六期书生大模型实战营学习，获评优秀学员。',
      },
    },
  ],
  experience: [
    {
      dates: { en: 'Sep 2023 – present', zh: '2023.09 至今' },
      institution: { en: 'Nankai University', zh: '南开大学' },
      role: { en: 'Ph.D. student in Computer Science', zh: '计算机科学与技术 · 博士研究生' },
      description: {
        en: 'College of Computer Science · Nankai-Baidu Joint Lab',
        zh: '计算机学院 · 南开－百度联合实验室',
      },
    },
    {
      dates: { en: 'Sep 2019 – Jun 2023', zh: '2019.09 – 2023.06' },
      institution: { en: 'Nankai University', zh: '南开大学' },
      role: { en: 'B.S. in Computer Science', zh: '计算机科学与技术 · 学士' },
      description: { en: 'College of Computer Science', zh: '计算机学院' },
    },
  ],
  honors: [
    {
      category: { en: 'Scholarships', zh: '奖学金' },
      items: [
        {
          date: '2023–2025',
          name: {
            en: 'Gongneng Scholarship, two consecutive academic years',
            zh: '公能奖学金（连续两学年）',
          },
          issuer: { en: 'Nankai University', zh: '南开大学' },
        },
        { date: '2022', name: { en: 'Huawei Scholarship, top 5%', zh: '华为奖学金（前 5%）' } },
        {
          date: '2019–2022',
          name: {
            en: 'National Scholarship for Encouragement, three consecutive academic years',
            zh: '国家励志奖学金（连续三学年）',
          },
        },
      ],
    },
    {
      category: { en: 'Academic awards', zh: '学业荣誉' },
      items: [
        {
          date: '2023–2024',
          name: { en: 'Nankai University Outstanding Student Award', zh: '南开大学“三好学生”' },
        },
        {
          date: '2022',
          name: { en: 'Future Star Award', zh: '“未来之星”' },
          issuer: { en: 'Ministry of Education–Huawei', zh: '教育部－华为' },
        },
      ],
    },
    {
      category: { en: 'Competition awards', zh: '竞赛奖项' },
      items: [
        {
          date: '2025',
          name: {
            en: 'Runner-up, Jiwang Cup Faculty–Student Mixed Team Table Tennis Tournament',
            zh: '“计网杯”师生乒乓球混合团体赛亚军',
          },
        },
      ],
    },
    {
      category: { en: 'Technical certifications', zh: '技术认证' },
      items: [
        {
          date: '2025',
          name: {
            en: 'Huawei Ascend C Operator Development Capability Certification, Intermediate Level',
            zh: '华为昇腾微认证：Ascend C 算子开发能力认证（中级）',
          },
        },
      ],
    },
    {
      category: { en: 'Other honors', zh: '其他荣誉' },
      items: [
        {
          date: '2025',
          name: {
            en: 'Graduate and Outstanding Trainee, Sixth InternLM Practical Camp',
            zh: '第六期书生大模型实战营结营暨优秀学员',
          },
          issuer: { en: 'Shanghai AI Laboratory', zh: '上海人工智能实验室' },
        },
      ],
    },
  ],
  patents: [
    {
      title: {
        en: 'Adaptive cache replacement method and system for mixed-program workloads',
        zh: '一种混合程序负载自适应缓存替换方法及系统',
      },
      details: {
        en: 'Xiaoguang Liu, Wenjie Li, Yusen Li and Gang Wang. Nankai University. Chinese invention patent CN122044887B, granted 19 June 2026. Application 202610476426.7, filed 13 April 2026.',
        zh: '发明人：刘晓光、李文婕、李雨森、王刚。专利权人：南开大学。申请号 202610476426.7，申请日 2026 年 4 月 13 日；授权公告号 CN122044887B，授权公告日 2026 年 6 月 19 日。',
      },
      url: 'https://patents.google.com/patent/CN122044887B/zh',
    },
  ],
};
