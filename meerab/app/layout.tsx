import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import TrafficTracker from "./components/TrafficTracker";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default: "Meerab Enterprises | Premium Silica Gel Supplier in Pakistan",
    template: "%s | Meerab Enterprises",
  },
  description:
    "Meerab Enterprises supplies ISO 9001:2015 certified silica gel pouches, desiccant bags and moisture absorbers in Pakistan. Competitive pricing, on-time delivery, quality guaranteed.",
  keywords: [
    "silica gel Pakistan",
    "silica gel pouches",
    "desiccant bags Pakistan",
    "moisture absorber Pakistan",
    "silica gel supplier in Karachi",
    "silica gel 1gm pouches",
    "silica gel 5gm pouches",
    "industrial desiccant Pakistan",
    "Meerab Enterprises",
    "silica gel wholesale Pakistan",
  ],
  authors: [{ name: "Meerab Enterprises", url: "https://www.meerabenterprises.com.pk" }],
  creator: "Meerab Enterprises",
  publisher: "Meerab Enterprises",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.meerabenterprises.com.pk",
  },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: "https://www.meerabenterprises.com.pk",
    siteName: "Meerab Enterprises",
    title: "Meerab Enterprises | Premium Silica Gel Supplier in Pakistan",
    description:
      "ISO 9001:2015 certified silica gel products. Quality guaranteed, competitive pricing, on-time delivery across Pakistan.",
    images: [
      {
        url: "https://www.meerabenterprises.com.pk/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Meerab Enterprises - Premium Silica Gel Supplier Pakistan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meerab Enterprises | Premium Silica Gel Supplier in Pakistan",
    description:
      "ISO 9001:2015 certified silica gel products. Quality guaranteed, competitive pricing, on-time delivery across Pakistan.",
    images: ["https://www.meerabenterprises.com.pk/og-image.jpg"],
  },
  verification: {
    google: "YAHAN_APNA_GOOGLE_VERIFICATION_CODE_DALO",
  },
  icons: {
    icon: "/faviconicon.png",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  category: "business",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Meerab Enterprises",
  url: "https://www.meerabenterprises.com.pk",
  logo: "https://www.meerabenterprises.com.pk/logo.png",
  description: "Premium quality silica gel products supplier in Pakistan. ISO 9001:2015 certified.",
  telephone: "+923242358791",
  address: {
    "@type": "PostalAddress",
    addressCountry: "PK",
    addressRegion: "Sindh",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+923242358791",
    contactType: "customer service",
    availableLanguage: ["English", "Urdu"],
  },
  sameAs: ["https://wa.me/923242358791"],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Meerab Enterprises",
  image: "https://www.meerabenterprises.com.pk/og-image.jpg",
  telephone: "+923242358791",
  address: {
    "@type": "PostalAddress",
    addressCountry: "PK",
    addressRegion: "Sindh",
  },
  url: "https://www.meerabenterprises.com.pk",
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "18:00",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={poppins.className}>
        {/* Traffic Tracker — har page visit record karega */}
        <TrafficTracker />
        {children}
      </body>
    </html>
  );
}