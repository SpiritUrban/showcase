import { ReactNode } from "react";
import ActiveLink from "@/components/molecule/ActiveLink";

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
  return <ActiveLink href={href}>{children}</ActiveLink>;
}
