import type { Metadata } from 'next';

import './styles/globals.css';
import 'modern-normalize/modern-normalize.css';
import styles from './layout.module.css';

export const metadata: Metadata = {
  title: 'App Blog',
  description: 'App Blog with Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  );
}
