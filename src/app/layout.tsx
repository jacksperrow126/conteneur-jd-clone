import '@/app/globals.css';
import '@mantine/carousel/styles.css';
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
