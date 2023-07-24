import './globals.css'
import '../styles/old_css.css'
import type { Metadata } from 'next'
import Link from 'next/link';
import { Montserrat, Roboto } from 'next/font/google'
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ["400", "500", "600", "700"],
  variable: "--title"
});

const roboto = Roboto({ 
  subsets: ['latin'],
  weight: ["300", "400", "500", "700"],
  variable: "--body"
});

export const metadata: Metadata = {
  title: 'AMAPM - Associação Cristã de Moradores e Amigos da Praia do Meio',
  description: 'Somos uma associação sem fins lucrativos composta por voluntários das mais diversas áreas. Temos por objetivo praticar as lições evangélicas de Jesus Cristo sem quaisquer distinção religiosa, política ou social.',
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
        <Footer/>
      </body>
    </html>
  )
}
