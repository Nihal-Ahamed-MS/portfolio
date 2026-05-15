import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import SoundProvider from './components/SoundProvider';
import './globals.css';

const dmSans = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Nihal Ahamed — Senior Software Engineer',
    description:
        'Senior Software Engineer and Tech Lead building high-performance web systems and scalable backends.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={dmSans.className}>
            <body className="bg-[#faf9f6] text-stone-900 antialiased">
                <SoundProvider />
                {children}
            </body>
        </html>
    );
}
