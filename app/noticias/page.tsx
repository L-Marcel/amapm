import { Post } from "@/components/Post";
import style from "./index.module.scss";

export default function News() {
  const markdown = `A paragraph with *emphasis* and **strong importance**.

  - Data: 30 de maio de 2023
  - Horário: 19:30 - 21:30
  - Local: Centro Social Nossa Senhora de Fátima na Praia do Meio

  Tivemos um total de 22 membros presentes na reunião. Foi realizada a presentação do Rocas Divulgações, debatido a questão do novo Hospital Municipal de Natal, a audiência sobre o terreno abandonado da Petrobrás, a contribuição da associação para o Plano Plurianual Federal entre outras pautas importantes.
  # title
  ## subtitle
  ### topic

  > A block quote with ~strikethrough~ and a URL: https://reactjs.org.
  
  Lists
  - [ ] todo
  - [x] done
  
  A table:
  
  | Horário | Evento |
  | - | - |
  | 15:00 | Arrecadação de doações |
  | 15:00 | Arrecadação de doações |
  `
  return (
    <main className={style.container}>
      <section>
        <Post content={{ body: markdown }}/>
        <Post content={{ body: markdown }}/>
        <Post content={{ body: markdown }}/>
        <Post content={{ body: markdown }}/>
        <Post content={{ body: markdown }}/>
      </section>
    </main>
  );
};