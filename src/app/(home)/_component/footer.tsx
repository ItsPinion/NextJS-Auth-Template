import Logo from "@/components/logo";
import Link from "next/link";

type LinkType = {
  href: string;
  label: string;
};

type FooterSectionProps = {
  title: string;
  links: LinkType[];
};

type SocialLinkType = {
  href: string;
  label: string;
  icon: JSX.Element;
};

function SocialLink({ href, label, children }: { href: string; label: string; children: JSX.Element }) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="text-muted-foreground hover:text-foreground"
      prefetch={false}
    >
      {children}
    </Link>
  );
}

function FooterLink({ href, children }: { href: string; children: string }) {
  return (
    <Link
      href={href}
      className="text-sm text-white hover:underline"
      prefetch={false}
    >
      {children}
    </Link>
  );
}

function FooterSection({ title, links }: FooterSectionProps) {
  return (
    <div className="grid gap-2">
      <h4 className="pb-2 text-lg font-semibold text-white">{title}</h4>
      {links.map((link, index) => (
        <FooterLink key={index} href={link.href}>
          {link.label}
        </FooterLink>
      ))}
    </div>
  );
}

function FooterIcon({ className, d }: { className?: string; d: JSX.Element }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {d}
    </svg>
  );
}

export function Footer() {
  const mainLinks: FooterSectionProps[] = [
    {
      title: "Pages",
      links: [
        { href: "#", label: "Company" },
        { href: "#", label: "Articles" },
        { href: "#", label: "Platforms" },
        { href: "#", label: "Agencies" },
        { href: "#", label: "Resources" },
        { href: "#", label: "Contact Us" },
      ],
    },
    {
      title: "Popular",
      links: [
        { href: "#", label: "Influencer Marketing Platforms" },
        { href: "#", label: "Influencer Marketing Agencies" },
        { href: "#", label: "Social Media Marketing Platforms" },
        { href: "#", label: "Social Media Agencies" },
        { href: "#", label: "Email Marketing Software" },
        { href: "#", label: "Digital Marketing Agencies" },
      ],
    },
    {
      title: "Free Tools",
      links: [
        { href: "#", label: "TikTok Engagement Calculator" },
        { href: "#", label: "Instagram Calculator" },
        { href: "#", label: "YouTube Calculator" },
        { href: "#", label: "Glossary" },
        { href: "#", label: "Image Resizer" },
      ],
    },
    {
      title: "Other Links",
      links: [
        { href: "#", label: "Cookie Policy" },
        { href: "#", label: "Privacy Policy" },
        { href: "#", label: "Terms & Conditions" },
        { href: "#", label: "Affiliate Disclaimer" },
        { href: "#", label: "Member Login" },
        { href: "#", label: "Authors and Experts" },
        { href: "#", label: "Agency Hub" },
      ],
    },
  ];

  const socialLinks: SocialLinkType[] = [
    {
      href: "#",
      label: "Facebook",
      icon: (
        <FooterIcon
          className="h-5 w-5"
          d={<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />}
        />
      ),
    },
    {
      href: "#",
      label: "Twitter",
      icon: (
        <FooterIcon
          className="h-5 w-5"
          d={
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
          }
        />
      ),
    },
    {
      href: "#",
      label: "Instagram",
      icon: (
        <FooterIcon
          className="h-5 w-5"
          d={
            <>
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </>
          }
        />
      ),
    },
    {
      href: "#",
      label: "LinkedIn",
      icon: (
        <FooterIcon
          className="h-5 w-5"
          d={
            <>
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </>
          }
        />
      ),
    },
  ];

  return (
    <footer className="w-full bg-[#02021E] py-8 md:py-12 px-20">
      <div className="flex flex-row items-start justify-between">
        <div className="flex flex-col items-start gap-4">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <Logo textColor="white" />
          </Link>
          <p className="text-sm text-muted-foreground">
            Providing high-quality products and services since 1990.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((socialLink, index) => (
              <SocialLink
                key={index}
                href={socialLink.href}
                label={socialLink.label}
              >
                {socialLink.icon}
              </SocialLink>
            ))}
          </div>
        </div>
        {mainLinks.map((section, index) => (
          <FooterSection key={index} title={section.title} links={section.links} />
        ))}
      </div>
      <div className="border-t-4 mt-5 pt-3 border-white/10">
        <p className="text-sm text-muted-foreground">
          &copy; Copyright 2024 influencermarketinghub. All rights reserved
        </p>
      </div>
    </footer>
  );
}
