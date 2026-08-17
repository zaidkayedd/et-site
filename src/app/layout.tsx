import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Single typeface across the whole site (per brief): Onest.
// Self-hosted (from the Onest OFL release) so it builds offline and ships
// with the project — no runtime Google Fonts dependency.
const onest = localFont({
  src: [
    { path: "../fonts/onest-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../fonts/onest-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../fonts/onest-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "../fonts/onest-latin-700-normal.woff2", weight: "700", style: "normal" },
    { path: "../fonts/onest-latin-800-normal.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-onest",
  display: "swap",
});

const title = "Employee Tracker — Workforce visibility, minus the guesswork";
const description =
  "Understand how work actually happens. A privacy-conscious workforce platform that measures activity signals — never screenshots or keystrokes — and turns them into analytics, device management, and payroll-ready data.";

export const metadata: Metadata = {
  metadataBase: new URL("https://employee-tracker.example.com"),
  title,
  description,
  keywords: [
    "employee tracking",
    "workforce analytics",
    "activity monitoring",
    "device management",
    "payroll",
    "productivity insights",
  ],
  openGraph: {
    title,
    description,
    type: "website",
    siteName: "Employee Tracker",
  },
  twitter: { card: "summary_large_image", title, description },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={onest.variable}>
      <body>{children}</body>
    </html>
  );
}
