import Image from "next/image";
import style from "./index.module.scss";
import { Panel } from "@/components/Panel";
import { Query } from "@/services/query";

export default async function Home() {
  const memberPanel = await Query.getMemberPanel();

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
      <section>
        <h2>Quem somos nós?</h2>
        <p>Somos uma associação sem fins lucrativos composta por voluntários das mais diversas áreas. Temos por objetivo praticar as lições evangélicas de Jesus Cristo sem quaisquer distinção religiosa, política ou social.</p>
      </section>
      <section>
        <h2>Diferentes? Não, diversos!</h2>
        <p>Temos como base as lições de Jesus Cristo, mas não possuímos vinculoco com nenhuma entidade religiosa. Além disso, nossos voluntários são das mais diversas religiões ou partidos políticos.</p>
        <p>Logo, não possuímos nenhum vínculo político seja ele de esquerda, de direita ou centro. No entanto, caso algum político queira participar como sócio, não será impedido.</p>
      </section>
      { memberPanel && <Panel {...memberPanel} inHome/> }
    </main>
  );
}
