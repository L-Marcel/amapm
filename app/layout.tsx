import './globals.css'
import '../styles/old_css.css'
import type { Metadata } from 'next'
import Link from 'next/link';
import { Montserrat, Roboto } from 'next/font/google'
import { Header } from '@/components/Header';

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ["400", "500", "600", "700"],
  variable: "--title"
});

const roboto = Roboto({ 
  subsets: ['latin'],
  weight: ["400", "500", "700"],
  variable: "--body"
});

export const metadata: Metadata = {
  title: 'AMAPM - Associação Cristã de Moradores e Amigos da Praia do Meio',
  description: 'Associação Cristã de Moradores e Amigos da Praia do Meio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </head>
      <body className={`${montserrat.variable} ${roboto.variable}`}>
        <Header>
          <Header.Link href="/">Início</Header.Link>
          <Header.Link href="/noticias">Notícias</Header.Link>
          <Header.Link href="/diretoria">Diretoria</Header.Link>
          <Header.Link href="/formulario">Formulários</Header.Link>
        </Header>
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
