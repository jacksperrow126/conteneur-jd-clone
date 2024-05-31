import { redirect } from 'next/navigation';
import Script from 'next/script';

export default function RootPage() {
  redirect('/en');
  return (
    <>
      <Script src="../../node_modules/flowbite/dist/flowbite.min.js" strategy="beforeInteractive" />
    </>
  );
}
