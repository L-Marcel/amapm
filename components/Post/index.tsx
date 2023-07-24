import style from "./index.module.scss";

export type PostContent = {};

interface PostProps {
  content: PostContent;
};

export function Post({ content }: PostProps) {
  return (
    <article className={style.container}>
      <header>
        <h3>
          Ata da reunião do mês de maio
        </h3>
        <p>30/05/2023 — Por Ana Paula</p>
      </header>
      <main>
        <ul>
          <li><p>Data: 30 de maio de 2023</p></li>
          <li><p>Horário: 19:30 - 21:30</p></li>
          <li><p>Local: Centro Social Nossa Senhora de Fátima na Praia do Meio</p></li>
        </ul>
        <p>
          Tivemos um total de 22 membros presentes na reunião. Foi realizada a presentação do Rocas Divulgações, debatido a questão do novo Hospital Municipal de Natal, a audiência sobre o terreno abandonado da Petrobrás, a contribuição da associação para o Plano Plurianual Federal entre outras pautas importantes.
        </p>
      </main>
      <footer>
        <button>Abrir publicação completa</button>
      </footer>
    </article>
  );
};