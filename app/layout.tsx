import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "총사모 - 대한민국 No.1 에어소프트 전문 쇼핑몰",
  description: "가스건, 전동건, 스나이퍼, 샷건 및 에어소프트 액세서리 전문 쇼핑몰. 정품 보장, 빠른 배송, 전문 상담 서비스.",
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-icon.svg', type: 'image/svg+xml' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${notoSansKR.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
