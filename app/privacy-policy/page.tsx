import React from "react";
import { SiteShell } from "@/components/layout/SiteShell";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Container } from "@/components/ui/Container";
import { SITE_NAV_ITEMS } from "@/lib/siteNav";
import { HEADER_LOGO_V4 } from "@/lib/logoV4";

export default function PrivacyPolicyPage() {
  return (
    <SiteShell
      navItems={SITE_NAV_ITEMS}
      officialLogo={HEADER_LOGO_V4}
      footer={<SiteFooter />}
    >
      <div className="bg-snow min-h-[60vh] pt-32 pb-16">
        <Container>
          <div className="max-w-2xl mx-auto">
            <h1 className="font-display-m text-charcoal mb-8">Privacy Policy</h1>
            <p className="font-body-m text-charcoal">
              This policy is currently being prepared. Please check back later.
            </p>
          </div>
        </Container>
      </div>
    </SiteShell>
  );
}
