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
      <div>
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
      </div>
      <div>
        <div>
          <figure>
            <Image 
              alt="" 
              width={100} 
              height={100} 
              src="/assets/logo.png"
            />
          </figure>
          <h1>AMAPM - Associação Cristã de Moradores e Amigos da Praia do Meio</h1>
        </div>
        <nav>
          <ul>{children}</ul>
        </nav>
      </div>
    </header>
  );
};

export const Header = Object.assign(HeaderRoot, {
  Link: HeaderLink
});