"use client";
import Link from "next/link";
import { ComponentProps } from "react";
import { usePathname } from "next/navigation";

interface HeaderLinkProps extends ComponentProps<typeof Link> {}

export function HeaderLink({
  children,
  ...rest
}: HeaderLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === rest.href;
  
  return (
    <li>
      <Link 
        role={isActive? "actived":undefined}
        {...rest}
      >
        {children}
      </Link>
    </li>
  );
}