import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import AOSProvider from '@/app/aos-provider';
import Footer from '@/app/components/common/footer';
import Header from '@/app/components/common/header';

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <AOSProvider>
            <div className="content">{children}</div>
          </AOSProvider>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
