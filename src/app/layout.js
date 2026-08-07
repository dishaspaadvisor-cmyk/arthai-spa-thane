import Script from "next/script";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import OfferPopup from "@/components/OfferPopup";

import { footerData, contactData } from "@/data/data";

export const metadata = {
  metadataBase: new URL("https://www.royalspa.com"), // Replace with your domain

  title: {
    default: "Spa Berry | Premium Luxury Spa & Massage Center",
    template: "%s | Spa Berry",
  },

  description:
    "Experience premium spa therapies, relaxing body massages, aromatherapy, deep tissue massage, Thai massage, and wellness treatments at Spa Berry. Book your appointment today.",

  keywords: [
    "Spa Berry",
    "Luxury Spa",
    "Massage Spa",
    "Thai Massage",
    "Body Massage",
    "Aromatherapy",
    "Spa Near Me",
    "Wellness Center",
    "Relaxation Spa",
    "Professional Spa",
  ],

  authors: [
    {
      name: "Spa Berry",
    },
  ],

  creator: "Spa Berry",

  publisher: "Spa Berry",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/logo/1.png",
    shortcut: "/logo/1.png",
    apple: "/logo/1.png",
  },

  openGraph: {
    title: "Spa Berry | Premium Luxury Spa & Massage Center",
    description:
      "Relax, refresh, and rejuvenate with luxurious spa treatments and professional massage therapies.",
    url: "https://www.royalspa.com", // Replace with your domain
    siteName: "Spa Berry",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Spa Berry",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Spa Berry | Premium Luxury Spa & Massage Center",
    description:
      "Luxury spa treatments, body massages, and wellness therapies.",
    images: ["/og-image.jpg"],
  },

  alternates: {
    canonical: "https://www.royalspa.com",
  },

  verification: {
    google: "YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE",
  },

  category: "Spa & Wellness",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        {children}

        <Footer data={footerData} />

        <FloatingButtons
          phone={contactData.phone}
          whatsapp={contactData.whatsapp}
        />

        <OfferPopup contact={contactData} />

        {/* Google Ads Tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16917241254"
          strategy="afterInteractive"
        />

        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', 'AW-16917241254');
          `}
        </Script>

        {/* Google Ads Conversion Event */}
        <Script id="google-conversion" strategy="afterInteractive">
          {`
            gtag('event', 'conversion', {
              send_to: 'AW-16917241254/mJqOCJjTn6gaEKa74oI_',
              value: 1.0,
              currency: 'INR',
              transaction_id: ''
            });
          `}
        </Script>

        {/* BookingBot Chat Widget */}
        <Script id="bookingbot-widget" strategy="afterInteractive">
          {`
            (function () {
              const spaId = "622";
              const script = document.createElement("script");
              script.src = "https://chatbot.bookingbot.in/bot.js?spa=" + spaId;
              script.async = true;
              script.setAttribute("data-spa", spaId);
              document.head.appendChild(script);
            })();
          `}
        </Script>

        {/* BookingBot Tracker */}
        <Script
          src="https://api.bookingbot.in/tracker.js"
          strategy="afterInteractive"
          data-business-id="622"
        />
      </body>
    </html>
  );
}