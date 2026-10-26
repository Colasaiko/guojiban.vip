// 主推品牌测评数据结构（对应 src/content/reviews/*.md 的 frontmatter）
export interface ReviewSectionWhat {
  title: string;
  background: string;
  serviceScope: string;
  mainUsers: string;
}

export interface ReviewSectionWhy {
  title: string;
  painPoints: string[];
  solutions: string[];
}

export interface ReviewSectionFeatures {
  title: string;
  lineType: string;
  protocols: string;
  nodes: string;
  deviceLimit: string;
  speedLimit: string;
  multipliers: string;
  highlights: string[];
}

export interface ReviewPricingPlan {
  name: string;
  traffic: string;
  period: string;
  originalPrice: string;
  discountPrice?: string;
  note?: string;
}

export interface PackagePeriodPricing {
  period: string;
  originalPrice: string;
  discountPrice?: string;
  monthlyAverage: string;
  note?: string;
}

export interface ReviewPackageGroup {
  name: string;
  traffic: string;
  defaultPeriodIndex: number;
  periods: PackagePeriodPricing[];
}

export interface LowestPlanSummary {
  name: string;
  traffic: string;
  period: string;
  originalPrice: string;
  discountPrice?: string;
  displayPrice: string;
}

export interface ReviewSectionPricing {
  title: string;
  intro: string;
  plans: ReviewPricingPlan[];
  packageGroups?: ReviewPackageGroup[];
  lowestPlanSummary?: LowestPlanSummary;
  couponInfo: {
    code: string;
    discount: string;
    scope: string;
    note: string;
  };
  billingNote: string;
}

export interface ReviewSectionExperience {
  title: string;
  speedResult: string;
  latencyResult: string;
  packetLossResult: string;
  streamingResult: string;
  aiResult: string;
  dataSource: string;
}

export interface ReviewSectionProsAndCons {
  pros: string[];
  cons: string[];
}

export interface ReviewSectionWho {
  title: string;
  suitable: string[];
  unsuitable: string[];
}

export interface ReviewStep {
  stepNumber: number;
  title: string;
  description: string;
}

export interface ReviewClient {
  platform: string;
  recommendApp: string;
  guide: string;
}

export interface ReviewSectionHow {
  title: string;
  steps: ReviewStep[];
  clients: ReviewClient[];
}

export interface ReviewFAQ {
  question: string;
  answer: string;
}

// 本站实际测试记录（有截图佐证时才填写）
export interface ReviewLatestTest {
  date: string;
  time?: string;
  node: string;
  tool: string;
  environment: string;
  metrics: { label: string; value: string; source?: string }[];
  services: { name: string; latency: string }[];
  servicesNote?: string;
  dnsResult?: string;
  checks?: { tool: string; result: string }[];
  images: { src: string; alt: string; caption: string }[];
  note: string;
}

export interface BrandReviewDetail {
  slug: string;
  name: string;
  h1: string;
  subtitle: string;
  seoTitle: string;
  seoDescription: string;
  leadSummary: string;
  what: ReviewSectionWhat;
  why: ReviewSectionWhy;
  features: ReviewSectionFeatures;
  pricing: ReviewSectionPricing;
  experience: ReviewSectionExperience;
  latestTest?: ReviewLatestTest;
  // 还没有测试时显示的进度说明，例如「正在与官方洽谈合作」
  testStatus?: string;
  prosAndCons: ReviewSectionProsAndCons;
  who: ReviewSectionWho;
  how: ReviewSectionHow;
  faq?: ReviewFAQ[];
  faqs?: ReviewFAQ[];
  verdict: {
    title: string;
    scoreExplanation?: string;
    summary?: string;
    recommendation?: string;
    reasons?: string[];
    cautions?: string[];
    actionLabel?: string;
  };
}
