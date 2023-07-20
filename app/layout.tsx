import './globals.css'
import '../styles/old_css.css'
import type { Metadata } from 'next'
import Link from 'next/link';
//import { Inter } from 'next/font/google'

//const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AMAPM - Associação Cristã de Moradores e Amigos da Praia do Meio',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header id="cabecalho">
          <figure id="logo">
            <img src="assets/logo-da-amapm.jpg"/>
          </figure>
          <h1>AMAPM - Associação Cristã de Moradores e Amigos da Praia do Meio</h1>
          <div id="artigos">
            <div id="parte_2"> 	
            <nav id="menu">
              <ul itemType="disc">
                <li><Link href="/">Página Principal</Link></li>
                <li><Link href="/noticias">Notícias</Link></li>
                <li><Link href="/diretoria">Diretoria</Link></li>
                <li><Link href="/formulario">Formulários</Link></li>
              </ul>
            </nav>
            </div>
          </div>
        </header>	
        {children}
        <footer id="rodape">
          <br></br>
          <p>Sede Provisória</p>
          <p>Centro de Ciências da Saúde – Departamento de Medicina Clínica</p> 
            <p>Avenida General Gustavo Cordeiro de Farias, s/n – Petrópolis – CEP: 59012-300</p>
            <p>Natal/RN – Brasil 🕿 (84) 3342-9706 – Celular: (84) 99193-6207</p> 
          <p><a href="https://www.instagram.com/amapraiadomeio/" target="_blank">Instagram</a> | <a href="https://m.facebook.com/AmaPmFocodeLuz/">Facebook</a></p>     
        </footer>
      </body>
    </html>
  )
}
