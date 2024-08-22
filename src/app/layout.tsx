import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
import { cn } from "@/lib/utils";

import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "ItsPinion Auth | Secure Your Digital Identity",
  description: "Experience robust, secure, and seamless authentication with ItsPinion Auth. Protect your digital presence with cutting-edge technology, built with Next.js and T3 Stack.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  keywords: [
    "authentication", "Next.js", "T3 Stack", "secure login", "digital security", "user authentication",
    "ItsPinion Auth", "identity protection", "multi-factor authentication", "MFA", "passwordless login",
    "OAuth", "JWT", "JSON Web Token", "session management", "cybersecurity", "data protection",
    "encryption", "data privacy", "web security", "secure access", "user management", "SAML", "Single Sign-On",
    "SSO", "access control", "login system", "secure application", "user experience", "UX", "authentication API",
    "biometric authentication", "two-factor authentication", "2FA", "role-based access control", "RBAC",
    "token-based authentication", "session tokens", "identity provider", "IDP", "authenticator app",
    "secure sessions", "T3 Stack authentication", "security best practices", "data breach prevention",
    "Next.js authentication", "Vercel deployment", "T3 Stack deployment", "secure web apps", "frontend security",
    "backend security", "node.js", "typescript", "React.js", "tailwindcss", "authentication flow", "user sessions",
    "login credentials", "security tokens", "authorization", "auth0", "next-auth", "passport.js", "identity-as-a-service",
    "user identity", "secure user data", "private data", "authentication protocols", "secure development",
    "app security", "user privacy", "authentication integration", "session storage", "secure login methods",
    "digital identity", "auth guard", "user sessions", "authentication middleware", "social login", "authentication design",
    "security architecture", "user verification", "auth lifecycle", "authentication strategies", "privacy by design",
    "zero trust security", "developer tools", "web app security", "frontend frameworks", "secure code", "best practices for authentication",
    "cloud security", "privacy controls", "next-gen authentication", "web development", "secure APIs"
  ],
  openGraph: {
    title: "ItsPinion Auth | Secure Your Digital Identity",
    description: "Join the future of secure authentication with ItsPinion Auth. Ensuring the highest standards of security for your digital assets.",
    url: "https://itspinion-auth.vercel.app",
    siteName: "ItsPinion Auth",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "ItsPinion Auth - Secure Your Digital Identity",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ItsPinion Auth | Secure Your Digital Identity",
    description: "Your gateway to secure and seamless authentication. Protecting your digital identity with the power of Next.js and T3 Stack.",
    images: ["/images/twitter-image.png"],
    site: "@ItsPinion",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": "320",
    "max-image-preview": "large",
    "max-video-preview": "-1",
  },
  alternates: {
    canonical: "https://itspinion-auth.vercel.app",
    languages: {
      "en-US": "https://itspinion-auth.vercel.app/en-US",
    },
  },
};


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${GeistSans.variable}`}>
        <body
          className={cn(
            "min-h-screen bg-white font-sans antialiased",
            fontSans.variable,
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
