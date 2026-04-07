"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function TrafficTracker() {
  const pathname = usePathname();

  useEffect(() => {
    // Admin pages track mat karo
    if (pathname.startsWith("/admin")) return;

    const trackVisit = async () => {
      try {
        // Referrer detect karo (kahan se aaya)
        const referrer = document.referrer;
        let source = "Direct"; // Default

        if (referrer) {
          if (referrer.includes("google")) source = "Google";
          else if (referrer.includes("facebook")) source = "Facebook";
          else if (referrer.includes("instagram")) source = "Instagram";
          else if (referrer.includes("whatsapp")) source = "WhatsApp";
          else if (referrer.includes("twitter") || referrer.includes("x.com")) source = "Twitter";
          else source = "Referral";
        }

        await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/traffic`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            page: pathname,
            ip: "tracked",
            source, // Kahan se aaya
            referrer: referrer || "Direct",
            userAgent: navigator.userAgent,
          }),
        });
      } catch {
        // Silent fail — tracking error se website affect na ho
      }
    };

    trackVisit();
  }, [pathname]);

  return null; // Koi UI nahi — sirf background tracking
}