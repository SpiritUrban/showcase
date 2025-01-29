"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import clsx from "clsx"; // Упрощает работу с классами

interface ActiveLinkProps {
  href: string;
  children: ReactNode;
}

export default function ActiveLink({ href, children }: ActiveLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(href + "/");

  return (
    <span className={clsx("rounded-md px-3 text-sm font-medium text-gray-500 py-2", isActive ? "bg-gray-900 text-white" : "text-gray-500")}>
      {children}
    </span>
  );
}