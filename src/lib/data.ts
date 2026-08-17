// Central content + illustrative datasets for the marketing site.
// Chart data is clearly illustrative (not real customer data).

import {
  Activity,
  AppWindow,
  BarChart3,
  MonitorSmartphone,
  ShieldCheck,
  SlidersHorizontal,
  FileBarChart,
  Wallet,
  Users,
  Laptop,
  UserRound,
  Cpu,
  Database,
  Server,
  Building2,
} from "lucide-react";

export const nav = {
  product: [
    { label: "Employee Tracking", href: "/#agent", desc: "Activity signals from every endpoint" },
    { label: "Workforce Analytics", href: "/#analytics", desc: "Trends across people and teams" },
    { label: "Device Management", href: "/#showcase", desc: "Every enrolled device in one view" },
    { label: "Payroll", href: "/#payroll", desc: "Working-time straight into pay" },
    { label: "The Platform", href: "/#platform", desc: "How the pipeline fits together" },
  ],
  solutions: [
    { label: "For HR", href: "/#solutions", desc: "Working-time without the spreadsheets" },
    { label: "For Managers", href: "/#solutions", desc: "Team activity at a glance" },
    { label: "For Operations", href: "/#solutions", desc: "Workforce & devices, centralized" },
    { label: "Remote Teams", href: "/#solutions", desc: "Fair, consistent visibility anywhere" },
    { label: "Hybrid Orgs", href: "/#solutions", desc: "One layer, office and home" },
  ],
  top: [
    { label: "Platform", href: "/#platform" },
    { label: "Analytics", href: "/#analytics" },
    { label: "Payroll", href: "/#payroll" },
    { label: "Security", href: "/#privacy" },
    { label: "Pricing", href: "/#pricing" },
  ],
};

export const features = [
  {
    icon: Activity,
    title: "Activity tracking",
    desc: "Understand active and idle working time from real engagement signals, not guesswork.",
  },
  {
    icon: AppWindow,
    title: "Application visibility",
    desc: "See which applications teams use and for how long, aggregated into clean summaries.",
  },
  {
    icon: BarChart3,
    title: "Workforce analytics",
    desc: "Turn raw activity data into trends, patterns, and decisions leaders can act on.",
  },
  {
    icon: MonitorSmartphone,
    title: "Device management",
    desc: "Manage every enrolled endpoint centrally — status, health, and assignment in one view.",
  },
  {
    icon: SlidersHorizontal,
    title: "Policy management",
    desc: "Configure working hours, breaks, idle thresholds, and summary frequency per team.",
  },
  {
    icon: FileBarChart,
    title: "Reporting",
    desc: "Generate structured, time-windowed reports that are ready for review and audit.",
  },
  {
    icon: Wallet,
    title: "Payroll",
    desc: "Connect working-time, overtime, and attendance data with payroll workflows.",
  },
  {
    icon: Laptop,
    title: "Cross-platform",
    desc: "A lightweight agent for Windows and macOS endpoints, built on .NET 9.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy-conscious",
    desc: "Measure activity signals — never screenshots or the content of what people type.",
  },
  {
    icon: Users,
    title: "Role-based access",
    desc: "Super Admin, Admin, and Head of Department each see exactly what they should.",
  },
];

export const ecosystem = [
  { id: "employee", label: "Employee", sub: "Endpoint activity", icon: UserRound, desc: "Work happens on the endpoint — the starting point for every signal." },
  { id: "agent", label: "Tracker Agent", sub: ".NET 9 · Win / macOS", icon: Cpu, desc: "A lightweight background agent measures engagement, never content." },
  { id: "data", label: "Activity Data", sub: "30-min summaries", icon: Database, desc: "Signals are batched into privacy-safe, time-windowed summaries." },
  { id: "api", label: "Central API", sub: "Records · auth · policy", icon: Server, desc: "The secure core: authentication, records, and per-team policy." },
  { id: "analytics", label: "Analytics", sub: "Trends & signals", icon: BarChart3, desc: "Raw data becomes trends and patterns leaders can act on." },
  { id: "management", label: "Management", sub: "People & devices", icon: Users, desc: "One place to manage people, roles, and every enrolled device." },
  { id: "payroll", label: "Payroll", sub: "Working-time → pay", icon: Wallet, desc: "Working-time and overtime flow straight into payroll runs." },
];

// --- Illustrative chart datasets ---

export const activityTrend = [
  { day: "Mon", active: 342, idle: 78 },
  { day: "Tue", active: 388, idle: 62 },
  { day: "Wed", active: 361, idle: 71 },
  { day: "Thu", active: 402, idle: 58 },
  { day: "Fri", active: 356, idle: 84 },
  { day: "Sat", active: 121, idle: 22 },
  { day: "Sun", active: 64, idle: 12 },
];

export const appUsage = [
  { name: "IDEs & Editors", value: 34 },
  { name: "Browsers", value: 26 },
  { name: "Comms", value: 18 },
  { name: "Design", value: 12 },
  { name: "Other", value: 10 },
];

export const teamActivity = [
  { team: "Engineering", pct: 88 },
  { team: "Design", pct: 81 },
  { team: "Sales", pct: 74 },
  { team: "Support", pct: 69 },
  { team: "Ops", pct: 63 },
];

export const dashboardKpis = [
  { label: "Active employees", value: "184", delta: "+6", tone: "mint" as const },
  { label: "Avg active time", value: "6.4h", delta: "+0.3h", tone: "indigo" as const },
  { label: "Enrolled devices", value: "212", delta: "+11", tone: "indigo" as const },
  { label: "Idle threshold hits", value: "3.1%", delta: "-0.8%", tone: "mint" as const },
];

export const payrollKpis = [
  { label: "Total payroll", value: "$486,200" },
  { label: "Pending", value: "$52,400" },
  { label: "Processed", value: "$433,800" },
  { label: "Overtime", value: "$18,940" },
];

export const payrollRows = [
  { name: "A. Haddad", hours: "168h", ot: "6h", net: "$4,820", status: "Processed" },
  { name: "M. Rahal", hours: "160h", ot: "0h", net: "$4,150", status: "Processed" },
  { name: "S. Nasser", hours: "172h", ot: "9h", net: "$5,110", status: "Pending" },
  { name: "L. Odeh", hours: "156h", ot: "2h", net: "$3,980", status: "Processed" },
  { name: "K. Farouq", hours: "164h", ot: "4h", net: "$4,540", status: "Pending" },
];

export const employees = [
  { name: "Amira Haddad", role: "Senior Engineer", team: "Engineering", active: "6.8h", status: "active" },
  { name: "Marwan Rahal", role: "Product Designer", team: "Design", active: "5.9h", status: "active" },
  { name: "Sara Nasser", role: "Account Exec", team: "Sales", active: "4.2h", status: "idle" },
  { name: "Layla Odeh", role: "Support Lead", team: "Support", active: "6.1h", status: "active" },
];

export const devices = [
  { name: "MBP-14 · A.Haddad", os: "macOS", last: "2m ago", agent: "healthy" },
  { name: "WIN-DEV-04 · M.Rahal", os: "Windows", last: "just now", agent: "healthy" },
  { name: "WIN-SALES-11 · S.Nasser", os: "Windows", last: "41m ago", agent: "idle" },
  { name: "MBP-13 · L.Odeh", os: "macOS", last: "6m ago", agent: "healthy" },
];

export const steps = [
  {
    n: "01",
    title: "Install the agent",
    desc: "Deploy the lightweight .NET 9 agent to Windows and macOS endpoints — a few minutes per machine, no per-user setup.",
    detail: ["Windows & macOS", "Silent MSI / PKG rollout", "Auto-updates"],
  },
  {
    n: "02",
    title: "Collect activity signals",
    desc: "Active, idle, application, and break signals are measured locally on the device — never screenshots or keystroke content.",
    detail: ["Active / idle time", "App & window focus", "Breaks & overtime"],
  },
  {
    n: "03",
    title: "Centralize the data",
    desc: "Time-windowed 30-minute summaries flow to the central API with authentication and per-team policy applied.",
    detail: ["30-min summaries", "Authenticated sync", "Policy enforced"],
  },
  {
    n: "04",
    title: "Analyze trends",
    desc: "Dashboards surface productivity patterns across people, teams, and devices so leaders can act on real information.",
    detail: ["Team & person views", "Trends over time", "Exportable reports"],
  },
  {
    n: "05",
    title: "Manage & optimize",
    desc: "Set policies, run reports, and feed clean working-time data straight into payroll — one connected loop.",
    detail: ["Policy controls", "Audit-ready reports", "Payroll-ready data"],
  },
];

export const useCases = [
  { title: "HR Teams", desc: "Understand workforce patterns and working-time information without the spreadsheets." },
  { title: "Managers", desc: "See team activity at a glance and spot operational friction early." },
  { title: "Operations", desc: "Centralize workforce and device information across the whole organization." },
  { title: "Remote Teams", desc: "Keep visibility across distributed teams with consistent, fair signals." },
  { title: "Hybrid Orgs", desc: "One analytics layer that reads the same in the office and at home." },
  { title: "Payroll Teams", desc: "Use attendance, overtime, and working-time data to support every run." },
];

export const roles = [
  {
    role: "Super Admin",
    blurb: "Full control over the platform.",
    access: ["Full configuration", "Roles & access control", "System settings", "All analytics"],
  },
  {
    role: "Admin",
    blurb: "Runs day-to-day operations.",
    access: ["Devices & policies", "Directory management", "All analytics", "Reports & exports"],
  },
  {
    role: "Head of Department",
    blurb: "Manager view of their own team.",
    access: ["Team activity", "Team reports", "Working-time", "Policy view"],
  },
];

export const pricing = [
  {
    name: "Team",
    monthly: 6,
    yearly: 5,
    tagline: "For focused teams getting started with workforce visibility.",
    features: ["Up to 25 endpoints", "Activity & app analytics", "Core dashboards", "Email support"],
    cta: "Get started",
    featured: false,
  },
  {
    name: "Business",
    monthly: 10,
    yearly: 8,
    tagline: "For growing organizations that need policy and reporting depth.",
    features: [
      "Unlimited endpoints",
      "Advanced analytics & reports",
      "Device & policy management",
      "Role-based access",
      "Priority support",
    ],
    cta: "Get started",
    featured: true,
  },
  {
    name: "Enterprise",
    monthly: null,
    yearly: null,
    tagline: "For workforces that need payroll workflows and custom controls.",
    features: ["Everything in Business", "Payroll workflows", "SSO & audit records", "Dedicated success manager"],
    cta: "Talk to us",
    featured: false,
  },
];

export const footerCols = [
  {
    title: "Product",
    links: [
      { label: "Employee Tracking", href: "/#agent" },
      { label: "Workforce Analytics", href: "/#analytics" },
      { label: "Device Management", href: "/#showcase" },
      { label: "Payroll", href: "/#payroll" },
      { label: "The Platform", href: "/#platform" },
      { label: "Pricing", href: "/#pricing" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "For HR", href: "/#solutions" },
      { label: "For Managers", href: "/#solutions" },
      { label: "For Operations", href: "/#solutions" },
      { label: "Remote Teams", href: "/#solutions" },
      { label: "Hybrid Teams", href: "/#solutions" },
      { label: "Payroll Teams", href: "/#solutions" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "How it works", href: "/#platform" },
      { label: "Security & privacy", href: "/#privacy" },
      { label: "The ecosystem", href: "/#ecosystem" },
      { label: "Documentation", href: "/contact" },
      { label: "Changelog", href: "/contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/contact" },
      { label: "Contact", href: "/contact" },
      { label: "Careers", href: "/contact" },
      { label: "Privacy Policy", href: "/#privacy" },
      { label: "Terms of Service", href: "/contact" },
    ],
  },
];

export const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com" },
  { label: "X", href: "https://x.com" },
  { label: "GitHub", href: "https://github.com" },
];

// Contact page content (placeholder details — replace with real ones before launch)
export const contact = {
  email: "hello@employeetracker.app",
  sales: "sales@employeetracker.app",
  channels: [
    { label: "General", value: "hello@employeetracker.app" },
    { label: "Sales", value: "sales@employeetracker.app" },
    { label: "Support", value: "support@employeetracker.app" },
  ],
  topics: ["Product demo", "Pricing & plans", "Security & privacy", "Partnerships", "Something else"],
};
