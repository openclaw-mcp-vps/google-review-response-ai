import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ReviewReply AI — Respond to Google Reviews Instantly",
  description: "AI-powered Google review response generator for local businesses. Generate personalized, brand-appropriate replies in seconds."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="96bc3e52-8664-43c5-be46-156ec2ff5bae"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
