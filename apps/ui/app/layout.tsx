import './globals.css';
import type { Metadata } from 'next';
import { Roboto_Mono } from 'next/font/google';

import { buildClassList } from '@/utils';

const roboto_mono = Roboto_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'The Graph | GraphClient Demo',
  description: 'Exploring the graph-client created by The Guild onbehalf of The Graph Protocol',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="shortcut icon" type="image/x-icon" href="https://storage.googleapis.com/graph-web/favicon.png" />
      </head>
      <body className={buildClassList(roboto_mono.className, 'h-full m-0 p-0 font-mono')}>
        <div className="h-full">
          <div className="py-10">
            <header>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
                  Graph Client Demo
                </h1>
              </div>
            </header>
            <main>
              <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">{children}</div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
