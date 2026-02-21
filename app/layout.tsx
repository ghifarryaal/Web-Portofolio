import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Isa Al Ghifary Ahmad — IT Project & Product Manager",
  description:
    "Personal portfolio of Isa Al Ghifary Ahmad — IT Project & Product Manager, Business-Technology Professional specializing in digital platforms, workflow automation, and organizational leadership.",
  keywords: [
    "IT Project Manager",
    "Product Manager",
    "Workflow Automation",
    "Blockchain",
    "Business Technology",
    "Isa Al Ghifary Ahmad",
  ],
  authors: [{ name: "Isa Al Ghifary Ahmad" }],
  openGraph: {
    title: "Isa Al Ghifary Ahmad — IT Project & Product Manager",
    description:
      "Business and technology-oriented professional bridging strategy with execution.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
