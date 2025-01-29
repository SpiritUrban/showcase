import Link from "next/link";
import { ReactNode } from "react";
import ActiveLink from "@/components/molecule/ActiveLink"; // Подключаем клиентский компонент

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link href={href} className="">
      <ActiveLink href={href}>{children}</ActiveLink>
    </Link>
  );
}
