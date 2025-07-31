import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import AnimatedBackground from '@/components/ui/AnimatedBackground';

export const metadata: Metadata = {
  title: 'Lean Ethereum Roadmap',
  description: 'Track research progress across all Lean Ethereum workstreams',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-blue-50 min-h-screen">
        <AnimatedBackground />
        {children}
        <script
          defer
          data-domain="leanroadmap.org"
          src="https://analytics.leanroadmap.org/js/script.outbound-links.tagged-events.js"
        ></script>
      </body>
    </html>
  );
}
