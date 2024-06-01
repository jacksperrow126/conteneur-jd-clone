import '@/app/globals.css';

import localFont from 'next/font/local';

const myFont = localFont({
  src: [
    {
      path: '../font/fa-brands-400.woff2',
    },
    {
      path: '../font/fa-solid-900.woff2',
    },
    {
      path: '../font/fa-regular-400.woff2',
    },
    {
      path: '../font/porto.woff2',
    },
    {
      path: '../font/Simple-Line-Icons.ttf',
    },
  ],
  variable: '--myFont',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
