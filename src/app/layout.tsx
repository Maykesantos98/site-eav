import type { Metadata } from "next";
import { Inter, Space_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://eav7.com"),
  title: "EAV Bank — Banco digital global à frente do tempo",
  description:
    "Conta digital gratuita, cartão internacional Visa, transferências para 150+ países em até 3 segundos. Sem IOF, sem taxas ocultas. Powered by EAV7 Smart Chain.",
  keywords: [
    "EAV Bank",
    "EAV7",
    "banco digital",
    "conta digital",
    "cartão internacional",
    "pix",
    "transferência internacional",
    "câmbio",
    "conta PJ",
    "inteligência artificial",
  ],
  icons: {
    icon: [{ url: "/site-eav/images/favicon.png", type: "image/png" }],
    apple: "/site-eav/images/favicon.png",
  },
  openGraph: {
    title: "EAV Bank — Banco digital global à frente do tempo",
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
    title: "EAV Bank — Banco digital global",
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
        className={`${inter.variable} ${spaceGrotesk.variable} ${geistMono.variable} antialiased min-h-screen bg-[#0c0a09] text-zinc-50`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
