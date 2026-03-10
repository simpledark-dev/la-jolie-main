"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Intercepts clicks on hash links (e.g. #services, /#gallery),
 * scrolls smoothly to the target, and keeps the URL clean (no hash).
 * Also handles cross-page navigation: arriving at /?s=section from another page.
 */
export function useSmoothHashScroll() {
  const pathname = usePathname();

  // On homepage mount: if there's a hash in the URL, scroll to it and clean up
  useEffect(() => {
    if (pathname !== "/") return;

    const hash = window.location.hash.replace("#", "");
    if (!hash) return;

    // Small delay to let the page render
    const timer = setTimeout(() => {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
      // Clean the hash from URL after scrolling
      history.replaceState(null, "", "/");
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  // Intercept clicks on hash links to scroll without changing URL
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest("a");
      if (!link) return;

      const href = link.getAttribute("href");
      if (!href) return;

      // Match: #section, /#section
      const match = href.match(/^\/?#([a-zA-Z][\w-]*)$/);
      if (!match) return;

      const sectionId = match[1];
      const el = document.getElementById(sectionId);

      // Only handle if we're on the homepage and the element exists
      if (pathname === "/" && el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth" });
        // Keep URL clean
        history.replaceState(null, "", "/");
      }
      // If on another page with /#section href, let the browser navigate
      // (the hash will be cleaned up on homepage mount above)
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [pathname]);
}
