import Image from 'next/image'
import style from "./index.module.scss";

export default function Home() {
  return (
    <main className={style.container}>
      <section>
        <div className={style.hero_image}>
          <Image 
            src="/assets/praia-do-meio.png"
            width={400}
            height={400}
            alt="Imagem da praia do meio, com várias casas ao fundo e um grande prédio no meio."
          />
        </div>
        <div className={style.hero_content}>
          <p>Seja bem-vindo(a) ao site da Associação cristã de Moradores e Amigos da Praia do meio!</p>
          <p>Nele você saberá quem somos nós, qual o nosso objetivo, conhecerá a nossa história e saberá notícias da região de forma mais aprofundada.</p>
        </div>
      </section>
    </main>
  )
}
