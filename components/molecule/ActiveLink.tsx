"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import clsx from "clsx";

interface ActiveLinkProps {
  href: string;
  children: ReactNode;
}

export default function ActiveLink({ href, children }: ActiveLinkProps) {
  const pathname = usePathname();

  const [isActive, setIsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 640); // 640px — стандартный брейкпоинт для mobile (sm в Tailwind)
    };

    checkScreenSize(); // Проверяем при первом рендере
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  useEffect(() => {
    if (!pathname) return;

    setIsActive(pathname === href || pathname.startsWith(href + "/"));
  }, [pathname, href]);

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={clsx(
        "block rounded-md px-3 py-2 font-medium text-gray-500",
        isMobile ? "text-base" : "text-sm",
        isActive ? "bg-gray-900 text-white" : "text-gray-500"
      )}
    >
      {children}
    </Link>
  );
}
