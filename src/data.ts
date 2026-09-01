export interface NavLink {
  href: string;
  num: string;
  label: string;
}

export const navLinks: NavLink[] = [
  { href: '#top', num: '00', label: 'Start' },
  { href: '#now', num: '01', label: 'Current work' },
  { href: '#verified', num: '02', label: 'Verified results' },
  { href: '#projects', num: '03', label: 'Project log' },
  { href: '#experience', num: '04', label: 'Experience' },
  { href: '#skills', num: '05', label: 'Stack' },
  { href: '#more', num: '06', label: 'Leadership / Ed.' },
  { href: '#contact', num: '07', label: 'Contact' },
];

export interface Metric {
  val: string;
  lbl: string;
}

export const metrics: Metric[] = [
  { val: '71%', lbl: 'FER-2013 test accuracy, ResNet18' },
  { val: '12.6', lbl: 'Betweenness centrality, 61-org network' },
  { val: '3', lbl: 'Internships, summer 2025' },
  { val: '22', lbl: 'Languages in current NIT-K pipeline' },
];

export interface FactRow {
  k: string;
  v: string;
}

export const nowFacts: FactRow[] = [
  { k: 'Supervisor', v: 'Dr. Nidhi Gupta, NIT Kurukshetra' },
  { k: 'Track', v: 'iDEX-DIO, Ministry of Defence' },
  { k: 'Stage', v: 'Submitted — outcome pending' },
  { k: 'Compression targets', v: 'JPEG, H.264' },
  { k: 'Language coverage', v: '22 via Bhashini API' },
  { k: 'Started', v: '2025 — present' },
];

export interface VerifiedProject {
  tag: string;
  title: string;
  desc: string;
  stack: string;
  viz: 'prophet' | 'resnet' | 'network';
  captionLeft: string;
  captionRight: string;
}

export const verifiedProjects: VerifiedProject[] = [
  {
    tag: 'TIME-SERIES · FACEBOOK PROPHET',
    title: 'Tesla stock forecast vs. ARIMA baseline',
    desc: 'Forecasted TSLA price using Prophet, benchmarked directly against an ARIMA baseline on the same window and error metrics.',
    stack: 'Prophet · ARIMA · pandas · MAE / RMSE',
    viz: 'prophet',
    captionLeft: 'MAE 4.2 · RMSE 6.8',
    captionRight: '12% lower RMSE than ARIMA',
  },
  {
    tag: 'COMPUTER VISION · RESNET18',
    title: 'Facial expression recognition, FER-2013',
    desc: 'Fine-tuned ResNet18 for 7-class facial expression classification, outperforming a baseline CNN trained on the same split.',
    stack: 'PyTorch · ResNet18 · FER-2013 · 7-class',
    viz: 'resnet',
    captionLeft: 'Test accuracy 71%',
    captionRight: '+9pp over baseline CNN',
  },
  {
    tag: 'NETWORK SCIENCE · GRAPH THEORY',
    title: 'Structural analysis of a 61-org network',
    desc: 'Mapped a 61-organization Indian network and computed betweenness centrality to surface structurally critical nodes and chokepoints.',
    stack: 'NetworkX · Betweenness centrality · Graph theory',
    viz: 'network',
    captionLeft: '61 organizations mapped',
    captionRight: 'Betweenness centrality 12.6',
  },
];

export interface LogRow {
  project: string;
  what: string;
  stack: string;
  status: string;
}

export const projectLog: LogRow[] = [
  { project: 'Customer Segmentation', what: 'K-Means clustering on transaction data to group customers for targeted marketing.', stack: 'scikit-learn · pandas', status: 'no benchmark logged' },
  { project: 'E-Commerce Data Insights', what: 'EDA and dashboards surfacing revenue and product-performance trends.', stack: 'Power BI · pandas', status: 'no benchmark logged' },
  { project: 'Sales Forecasting', what: 'Linear regression over historical sales for demand planning.', stack: 'scikit-learn', status: 'no accuracy/R² logged' },
  { project: 'Student Performance Dashboard', what: 'Interactive dashboard on factors behind academic outcomes.', stack: 'Power BI · pandas', status: 'no benchmark logged' },
  { project: 'Greenhouse Gas Emission Prediction', what: 'Compared Linear Regression / Decision Tree / Random Forest for emissions forecasting.', stack: 'scikit-learn', status: 'best model unquantified' },
  { project: 'COVID-19 Analysis & Prediction', what: 'Time-series modeling of global case trends.', stack: 'pandas · ML', status: 'no accuracy logged' },
  { project: 'SNA in Public Health', what: 'Centrality and connectivity metrics applied to health/security relationship networks.', stack: 'NetworkX', status: 'no benchmark logged' },
  { project: 'Diabetes Risk Prediction', what: 'Classification on patient indicators; compared Gini vs. entropy splits.', stack: 'scikit-learn', status: 'accuracy/F1 unquantified' },
];

export interface Experience {
  when: string;
  role: string;
  org: string;
  bullets: string[];
}

export const experience: Experience[] = [
  {
    when: '2025 — Present',
    role: 'Summer Research Intern',
    org: 'NIT Kurukshetra, under Dr. Nidhi Gupta',
    bullets: [
      'Real-time deepfake detection under social-media compression (JPEG, H.264)',
      'Architecting SATYA-ASTRA, submitted to iDEX Open Challenge',
      'Multilingual pipeline across 22 Indian languages via Bhashini API',
    ],
  },
  {
    when: 'Jun 2025 — Aug 2025',
    role: 'AI/ML Intern',
    org: 'Edunet Foundation — IBM SkillsBuild & Shell-AICTE',
    bullets: [
      'Completed IBM SkillsBuild AI/ML program',
      'Built ML models applied to sustainable-technology use cases',
    ],
  },
  {
    when: 'Jun 2025 — Jul 2025',
    role: 'Data Science & Analytics Intern',
    org: 'Tamizhan Skills — RISE Internship Program',
    bullets: [
      'Practical training in data analysis and visualization',
      'Worked on customer and sales analytics datasets',
    ],
  },
];

export interface SkillGroup {
  k: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  { k: 'ML / DL', items: ['PyTorch', 'TensorFlow/Keras', 'scikit-learn', 'ResNet18', 'Random Forest', 'Decision Tree', 'K-Means', 'Facebook Prophet'] },
  { k: 'CV / NLP / Network', items: ['OpenCV', 'NLTK', 'spaCy', 'NetworkX', 'Bhashini API'] },
  { k: 'Data & Tools', items: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Power BI', 'SQL', 'Git'] },
];

export interface LeadItem {
  role: string;
  org: string;
  desc: string;
}

export const leadership: LeadItem[] = [
  { role: 'President', org: "CyberNaut CS Society, Deshbandhu College — Sep 2024 – Jun 2025", desc: "Led a 30-member team; organized SYNTAX'24, the society's annual tech fest." },
  { role: 'Secretary', org: 'CyberNaut CS Society — Jan 2024 – Sep 2024', desc: 'Managed event operations and cross-team coordination for technical events.' },
  { role: 'Head of IT', org: 'Unnat Bharat Abhiyan — Apr 2024 – Jun 2025', desc: 'Oversaw IT operations and digitization for the rural development program.' },
];

export const education = {
  deg: 'B.Sc. Computer Science',
  school: 'Deshbandhu College, University of Delhi',
  when: 'Nov 2022 — Jul 2026',
};

export const certs: string[] = [
  'Introduction to Data Science',
  'Fundamental AI Concepts',
  'Python with Advanced AI',
  'Introduction to Generative AI',
  'Introduction to Responsible AI',
];

export const contact = {
  email: 'rajbhadani9897@gmail.com',
  phone: '9572768016',
  linkedin: 'https://www.linkedin.com/in/raj-bhadani-b4b729258/',
  github: 'https://github.com/RajBhadani',
};
