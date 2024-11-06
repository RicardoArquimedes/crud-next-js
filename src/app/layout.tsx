import 'tailwindcss/tailwind.css';
import { Metadata } from 'next';
import type { CommonProps } from '@/lib/props';

export const metadata: Metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
};

interface RootLayoutProps extends CommonProps {}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
