import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pet Jet - Global Pet Care Advisory Firm | Strategic Innovation & Technology",
  description: "Pet Jet combines strategic consulting, advanced technology, and operational excellence to transform how pet service businesses serve pet parents worldwide. Expert advisory for veterinary, retail, and pet tech companies.",
  keywords: [
    "pet care consulting",
    "pet industry advisory",
    "pet tech investment",
    "veterinary business consulting",
    "pet retail strategy",
    "pet care M&A",
    "pet industry expert",
    "Joey Villani",
    "The Dogfather"
  ],
  authors: [{ name: "Pet Jet" }],
  openGraph: {
    title: "Pet Jet - Reimagining Pet Care Through Strategic Innovation & Technology",
    description: "Global pet care advisory firm providing strategy, technology, and operational excellence for veterinary, retail, and pet tech businesses.",
    url: "https://petjet.com",
    siteName: "Pet Jet",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pet Jet Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pet Jet - Global Pet Care Advisory Firm",
    description: "Strategic consulting, technology innovation, and operational excellence for the pet care industry.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script src="https://apps.abacus.ai/chatllm/appllm-lib.js"></script>
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navigation />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
