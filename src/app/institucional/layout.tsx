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
      <div className="min-h-screen pt-24 pb-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
            {/* Sidebar */}
            <aside className="w-full shrink-0 lg:w-64">
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
