"use client";

import { SiteNav } from "@/components/landing/SiteNav";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { ScrollToTop } from "@/components/landing/ScrollToTop";
import { InstitucionalNav } from "@/components/institucional/InstitucionalNav";

export default function InstitucionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteNav />
      <div className="min-h-screen pt-20 pb-16 lg:pt-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          {/* Mobile nav — horizontal pills */}
          <div className="mb-6 lg:hidden">
            <InstitucionalNav />
          </div>

          <div className="flex gap-12">
            {/* Desktop sidebar */}
            <aside className="hidden w-64 shrink-0 lg:block">
              <div className="sticky top-24 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 backdrop-blur-sm">
                <InstitucionalNav />
              </div>
            </aside>

            {/* Content */}
            <main className="min-w-0 flex-1">{children}</main>
          </div>
        </div>
      </div>
      <SiteFooter />
      <ScrollToTop />
    </>
  );
}
