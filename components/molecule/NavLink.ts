import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname.startsWith(href);

  return (
    <Link 
      href={href} 
      className={`px-3 py-2 text-sm font-medium ${isActive ? "bg-gray-900 text-white" : "text-gray-500"}`} 
      aria-current={isActive ? "page" : undefined}
    >
      {children}
    </Link>
  );
}
