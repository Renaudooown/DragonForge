"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { nav, site } from "@/data/site";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = nav
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) {
          setActive(visible.target.id);
        }
      },
      { rootMargin: "-25% 0px -55% 0px", threshold: [0, 0.1, 0.25] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-300 ${
        scrolled
          ? "border-b border-ink/10 bg-ivory"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-4 py-3 sm:px-8 lg:px-12">
        <a href="#top" className="shrink-0" aria-label={`${site.title} — back to top`}>
          <Image
            src="/brand/dragonforge-mark.png"
            alt=""
            width={170}
            height={170}
            className="h-8 w-8 object-contain sm:hidden"
            priority
          />
          <Image
            src="/brand/dragonforge-logo.png"
            alt={site.name}
            width={834}
            height={322}
            className="hidden h-8 w-auto sm:block"
            priority
          />
        </a>
        <nav aria-label="Sections" className="flex items-center gap-4 sm:gap-7">
          {nav.map((item) => {
            const isActive = active === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                aria-current={isActive ? "location" : undefined}
                onClick={() => setActive(item.id)}
                className={`text-[15px] tracking-wide transition-colors duration-200 ${
                  isActive ? "text-forge" : "text-ink/80 hover:text-forge"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
