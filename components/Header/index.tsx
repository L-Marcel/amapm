import Link from "next/link";
import style from "./index.module.scss";
import Image from "next/image";
import { HeaderLink } from './HeaderLink';
import { ReactNode } from "react";

interface HeaderRootProps {
  children: ReactNode;
}

function HeaderRoot({ children }: HeaderRootProps) {
  return (
    <header className={style.container}>
      <figure>
        <Image 
          alt="" 
          width={175} 
          height={175} 
          src="/assets/logo.png"
        />
      </figure>
      <nav>
        <h1>AMAPM - Associação Cristã de Moradores e Amigos da Praia do Meio</h1>
        <ul>{children}</ul>
      </nav>
    </header>
  );
};

export const Header = Object.assign(HeaderRoot, {
  Link: HeaderLink
});