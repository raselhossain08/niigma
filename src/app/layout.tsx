import type { Metadata } from 'next';
import { Inter, Rethink_Sans, Oswald } from 'next/font/google';
import './globals.css';
import AOSInit from '@/components/common/AOSInit';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const rethink_Sans = Rethink_Sans({
  subsets: ['latin'],
  variable: '--font-rethink_Sans',
});

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
});

export const metadata: Metadata = {
  title: 'Niigma',
  description:
    'Niigma is your ultimate health and wellness companion, providing personalized tools and insights for a healthier lifestyle.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${rethink_Sans.variable} ${oswald.variable} antialiased bg-[#F6FCFF]`}
      >
        <AOSInit />
        {children}
      </body>
    </html>
  );
}
