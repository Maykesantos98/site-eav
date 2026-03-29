import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://eav7.com"),
  title: "EAV Bank | Smart Chain — Banco digital à frente do tempo",
  description:
    "Moedas, países e momento da transação sob seu controle. Rede com inteligência artificial e EAV7 Smart Chain. Cartão internacional, Pix e muito mais.",
  keywords: [
    "EAV Bank",
    "EAV7",
    "cripto",
    "banco digital",
    "Smart Chain",
    "cartão internacional",
    "pix",
    "transferência internacional",
    "blockchain",
    "inteligência artificial",
  ],
  icons: {
    icon: [{ url: "/site-eav/images/favicon.png", type: "image/png" }],
    apple: "/site-eav/images/favicon.png",
  },
  openGraph: {
    title: "EAV Bank | Smart Chain — Banco digital à frente do tempo",
    description:
      "A maior sofisticação que um banco poderia chegar. Moedas, países e momento da transação sob seu controle.",
    url: "https://eav7.com",
    siteName: "EAV Bank",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/icone.png", width: 512, height: 512, alt: "EAV Bank" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "EAV Bank | Smart Chain",
    description: "A maior sofisticação que um banco poderia chegar.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-[#0c0a09] text-zinc-50 eav-noise`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
