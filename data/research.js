// Parallel translations share one record so links, names and dates stay in sync.
// Leave the author array empty until the complete citation is available.
window.researchData = (() => {
  const pair = (en, zh) => ({ en, zh });
  const projectLink = {
    label: pair('Project details', '项目详解'),
    url: '#llm-tuner-project',
  };

  return {
    interests: [
      {
        title: pair('LLM training & alignment', '大语言模型训练与对齐'),
        description: pair(
          'How does training shape a model’s ability to follow a task specification? My interest in this question builds on hands-on work in the InternLM program.',
          '我关注训练过程如何让模型学会遵循任务要求，并在书生大模型实战营中积累了实践经验。',
        ),
      },
      {
        title: pair('LLM inference & systems', '大模型推理与系统'),
        description: pair(
          'How do compiler choices and resource scheduling affect the cost of running a model? I am interested in the connection between individual accelerator operators and end-to-end inference.',
          '编译优化和资源调度如何影响模型的运行成本？我关注加速器算子的实现，以及算子性能如何影响端到端推理。',
        ),
      },
      {
        title: pair('Agentic systems', '智能体系统'),
        description: pair(
          'I explore how agents divide a task, review one another’s output and carry useful context from one run to the next. Long-form writing provides a practical test case.',
          '我以长篇写作为实践场景，探索智能体如何分工、审阅彼此的输出，以及如何在不同任务之间保留和使用历史信息。',
        ),
      },
      {
        title: pair('AI for systems', '面向系统优化的人工智能'),
        description: pair(
          'I use measured system behavior to guide configuration choices. In vector search, that means finding index and system settings that trade retrieval quality against throughput.',
          '我研究如何利用系统的实测表现指导配置选择。在向量检索中，这意味着联合调整索引和系统参数，寻找兼顾检索质量与吞吐量的配置。',
        ),
      },
    ],
    publications: [
      {
        id: 'llm-tuner',
        title: 'LLM-Tuner: Large Language Model-Driven Vector Database Tuning',
        authors: [],
        role: pair('Wenjie Li · First author', '李文婕 · 第一作者'),
        venue: 'WISA',
        year: 2026,
        status: pair('Accepted', '已录用'),
        description: pair(
          'An LLM uses feedback from Milvus to guide a joint search over index and system parameters. The method identifies configurations that offer different trade-offs between retrieval quality and throughput.',
          '利用 Milvus 实测反馈，引导大语言模型联合搜索索引参数与系统参数，找出在检索质量和吞吐量之间具有不同权衡的配置。',
        ),
        links: [projectLink],
      },
    ],
    projects: [
      {
        id: 'llm-tuner-project',
        title: pair('LLM-Tuner', 'LLM-Tuner'),
        category: pair('Vector databases', '向量数据库'),
        intro: pair(
          'Vector databases expose many interacting controls. LLM-Tuner searches 16 index and system parameters in Milvus under a fixed evaluation budget, measuring both retrieval quality and throughput.',
          '向量数据库的多个参数相互影响。LLM-Tuner 在给定的测试预算下，联合搜索 Milvus 的 16 个索引与系统参数，同时考察检索质量和吞吐量。',
        ),
        details: [
          {
            label: pair('Search strategy', '搜索策略'),
            text: pair(
              'The search measures each index at its default settings, then uses a language model to propose configurations across index families. Later trials concentrate on indexes likely to extend the Pareto frontier, where improving one objective comes at the expense of the other.',
              '首先测量各类索引在默认配置下的表现，再由大语言模型跨索引类型提出候选配置。后续将测试预算集中于更有希望拓展帕累托前沿的索引，即寻找在不牺牲一项目标的前提下难以继续改进另一项目标的配置。',
            ),
          },
          {
            label: pair('Model feedback', '模型反馈'),
            text: pair(
              'The model receives the best trade-offs measured so far and a JSON Schema describing valid index parameters. Each proposal is parsed and checked against these constraints before a database run.',
              '提示中包含当前测得的帕累托前沿，以及用 JSON Schema 表示的索引参数约束。每组候选参数都经过解析和约束校验后才进入数据库测试。',
            ),
          },
          {
            label: pair('Evaluation', '实验结果'),
            text: pair(
              'Across three approximate nearest-neighbor benchmarks with budgets of 10–100 trials, LLM-Tuner found 1.3–1.8 times as many Pareto-optimal configurations as VDTuner on average. Removing joint index and system tuning reduced final hypervolume by 25.4% in the ablation study.',
              '在三个近似最近邻检索基准上，给定 10 至 100 轮测试预算，LLM-Tuner 找到的帕累托最优配置数平均为 VDTuner 的 1.3 至 1.8 倍。消融实验中，取消索引与系统参数联合调优后，最终超体积下降了 25.4%。',
            ),
          },
          {
            label: pair('My contribution', '个人贡献'),
            text: pair(
              'I led the project and presented the work in Kunming as first author of the full paper accepted at WISA 2026.',
              '我负责该项目，并作为第一作者在昆明作口头报告。相关论文获 WISA 2026 全文录用。',
            ),
          },
        ],
        links: [{ label: pair('Publication record', '论文条目'), url: '#llm-tuner' }],
      },
      {
        id: 'adaptive-cache-replacement',
        title: pair('Adaptive cache replacement', '自适应缓存替换'),
        category: pair('AI for systems', '智能系统优化'),
        intro: pair(
          'Programs sharing a cache compete for a finite number of cache lines. This patented policy learns groups of memory accesses online and uses their changing behavior to decide which line to evict.',
          '多个程序共享缓存时会争用有限的缓存行。这项已获授权的技术在运行时对访存请求进行分组，并根据各组访问行为的变化决定驱逐哪一行。',
        ),
        details: [
          {
            label: pair('Access patterns', '访问模式'),
            text: pair(
              'The policy groups accesses using both the program counter and the physical memory address. It updates a cluster’s activity as new requests arrive and gradually forgets groups that stop receiving requests.',
              '替换策略结合程序计数器和物理内存地址对访存请求聚类。收到新请求时，算法更新相应微簇的活跃度，并通过周期性衰减淘汰长期不活跃的微簇。',
            ),
          },
          {
            label: pair('Eviction policy', '驱逐策略'),
            text: pair(
              'The algorithm tracks hit rate and excess cache occupancy for each active group. It selects a group using these measurements and evicts the oldest line within that group.',
              '算法跟踪每个活跃微簇的命中率和超额占用量，据此选择牺牲簇，再驱逐该簇中行龄最大的缓存行。',
            ),
          },
          {
            label: pair('Evaluation', '实验结果'),
            text: pair(
              'For the workload mixes tested in the patent, the reported average cache hit rate was 72.24% higher than least-recently-used replacement with two programs and 88.33% higher with three programs.',
              '在专利说明书列出的混合负载测试中，与最近最少使用（LRU）替换策略相比，双程序和三程序场景下的平均缓存命中率分别相对提升了 72.24% 和 88.33%。',
            ),
          },
          {
            label: pair('My contribution', '个人贡献'),
            text: pair(
              'I am the second-listed inventor on Nankai University’s Chinese patent for this method, granted in June 2026.',
              '我是这项南开大学中国发明专利的第二发明人。专利于 2026 年 6 月获授权。',
            ),
          },
        ],
        links: [
          { label: pair('Patent record', '专利条目'), url: '#patents' },
          {
            label: pair('Specification', '专利说明书'),
            url: 'https://patents.google.com/patent/CN122044887B/zh',
          },
        ],
      },
      {
        id: 'multi-agent-writing',
        title: pair('Fanqie Multi-Agent Creator', '番茄多智能体创作工具'),
        category: pair('Agent workflows & memory', '智能体协作与记忆'),
        intro: pair(
          'A public software prototype for coordinating agents on a long-form writing task. A shared outline connects chapter planning to drafting and revision, while a local database preserves context across writing sessions.',
          '这是一个面向长篇写作的公开软件原型。多个智能体围绕同一份大纲完成章节规划、起草和修订，本地数据库则在不同写作任务间保留历史信息。',
        ),
        details: [
          {
            label: pair('Workflow', '任务分工'),
            text: pair(
              'A LangGraph workflow moves each manuscript from topic selection and outlining through drafting, review and revision. The review is saved alongside the manuscript so a reader can inspect the feedback.',
              '基于 LangGraph 的工作流将选题、大纲、起草、审稿和修订串联起来。审稿意见随成稿一并保存，便于读者回看修改依据。',
            ),
          },
          {
            label: pair('Memory & output', '记忆与输出'),
            text: pair(
              'SQLite stores earlier writing projects to help the planner avoid repeating titles and topics. The tool exports a structured JSON manuscript and a readable Markdown draft.',
              'SQLite 保存过往作品的信息，供策划环节查重选题和标题。工具可导出结构化的 JSON 稿件，以及方便阅读的 Markdown 文稿。',
            ),
          },
        ],
        links: [
          {
            label: pair('Source code', '源代码'),
            url: 'https://github.com/AmorFatiliwenjie/fanqie-multi-agent-creator',
          },
        ],
      },
    ],
  };
})();
