import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "../global.css"
import "./globals.scss";
// import "tailwindcss/tailwind.css";
import { Metadata } from "next";
import App from "./app";


export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return {
    title: "Fonaments",
    description: "New Site",
    icons: {
      icon: "/images/logo.png",
    },
    // robots: seoData.robots,
    openGraph: {
      title: "Fonaments",
      description: "New Site",
      siteName: "",
      locale: locale,
    },
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: 'en' | 'es' | 'de' };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <App locale={locale}>
            {children}
          </App>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
